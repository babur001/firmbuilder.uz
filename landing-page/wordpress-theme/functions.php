<?php
/**
 * GlobalTech Industries — WordPress Theme
 * functions.php
 */

// ─── Theme Setup ──────────────────────────────────────────────────────────────
function globaltech_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
    add_theme_support('custom-logo');

    // Post thumbnail sizes
    add_image_size('globaltech-blog-card', 600, 400, true);
    add_image_size('globaltech-blog-full', 1200, 600, true);

    // Nav menus
    register_nav_menus([
        'primary' => __('Primary Menu', 'globaltech'),
        'footer'  => __('Footer Menu',  'globaltech'),
    ]);

    // WPML / Polylang compatibility
    load_theme_textdomain('globaltech', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'globaltech_setup');

// ─── Enqueue Scripts & Styles ─────────────────────────────────────────────────
function globaltech_assets() {
    $version = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'globaltech-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
        [], null
    );

    wp_enqueue_style(
        'globaltech-main',
        get_template_directory_uri() . '/css/main.css',
        ['globaltech-fonts'], $version
    );

    wp_enqueue_script(
        'globaltech-main',
        get_template_directory_uri() . '/js/main.js',
        [], $version, true // load in footer
    );

    // Pass WordPress REST API URL and settings to JS
    wp_localize_script('globaltech-main', 'wpConfig', [
        'apiUrl'          => esc_url_raw(rest_url('wp/v2')),
        'siteUrl'         => esc_url(home_url()),
        'nonce'           => wp_create_nonce('wp_rest'),
        'postsPerPage'    => 3,
        'contactEndpoint' => esc_url_raw(rest_url('globaltech/v1/contact')),
        'lang'            => defined('ICL_LANGUAGE_CODE') ? ICL_LANGUAGE_CODE : get_locale(),
    ]);
}
add_action('wp_enqueue_scripts', 'globaltech_assets');

// ─── REST API: Contact Form Endpoint ─────────────────────────────────────────
function globaltech_register_rest_routes() {
    register_rest_route('globaltech/v1', '/contact', [
        'methods'             => 'POST',
        'callback'            => 'globaltech_handle_contact',
        'permission_callback' => '__return_true',
        'args' => [
            'name'    => ['required' => true,  'sanitize_callback' => 'sanitize_text_field'],
            'email'   => ['required' => true,  'sanitize_callback' => 'sanitize_email',     'validate_callback' => 'is_email'],
            'company' => ['required' => false, 'sanitize_callback' => 'sanitize_text_field'],
            'service' => ['required' => false, 'sanitize_callback' => 'sanitize_text_field'],
            'message' => ['required' => true,  'sanitize_callback' => 'sanitize_textarea_field'],
        ],
    ]);
}
add_action('rest_api_init', 'globaltech_register_rest_routes');

function globaltech_handle_contact(WP_REST_Request $request) {
    $name    = $request->get_param('name');
    $email   = $request->get_param('email');
    $company = $request->get_param('company') ?: '—';
    $service = $request->get_param('service') ?: '—';
    $message = $request->get_param('message');

    $admin_email = get_option('admin_email');
    $subject     = sprintf('[GlobalTech] New inquiry from %s (%s)', $name, $company);

    $body  = "New contact form submission:\n\n";
    $body .= "Name:    $name\n";
    $body .= "Email:   $email\n";
    $body .= "Company: $company\n";
    $body .= "Service: $service\n\n";
    $body .= "Message:\n$message\n";

    $headers = [
        'Content-Type: text/plain; charset=UTF-8',
        "Reply-To: $name <$email>",
    ];

    $sent = wp_mail($admin_email, $subject, $body, $headers);

    // Optional: save as a custom post for CRM-like tracking
    if ($sent) {
        wp_insert_post([
            'post_type'   => 'gt_inquiry',
            'post_title'  => "$name — $company",
            'post_status' => 'private',
            'meta_input'  => [
                '_gt_email'   => $email,
                '_gt_service' => $service,
                '_gt_message' => $message,
            ],
        ]);
    }

    if ($sent) {
        return rest_ensure_response(['success' => true, 'message' => 'Message sent']);
    }

    return new WP_Error('mail_failed', 'Failed to send email', ['status' => 500]);
}

// ─── Custom Post Type: Inquiries (CRM) ───────────────────────────────────────
function globaltech_register_cpt() {
    register_post_type('gt_inquiry', [
        'label'              => 'Inquiries',
        'labels'             => ['name' => 'Inquiries', 'singular_name' => 'Inquiry'],
        'public'             => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'menu_icon'          => 'dashicons-email-alt',
        'supports'           => ['title'],
        'capability_type'    => 'post',
        'map_meta_cap'       => true,
        'show_in_rest'       => false,
    ]);
}
add_action('init', 'globaltech_register_cpt');

// ─── Expose Featured Image URL in REST API ───────────────────────────────────
function globaltech_add_thumbnail_to_rest() {
    add_filter('rest_prepare_post', function($response, $post) {
        if (has_post_thumbnail($post->ID)) {
            $img = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'globaltech-blog-card');
            $response->data['featured_image_url'] = $img ? $img[0] : null;
        }
        return $response;
    }, 10, 2);
}
add_action('init', 'globaltech_add_thumbnail_to_rest');

// ─── Remove WordPress default front-end styles (optional cleanup) ─────────────
function globaltech_remove_wp_styles() {
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('classic-theme-styles');
    wp_dequeue_style('global-styles');
}
add_action('wp_enqueue_scripts', 'globaltech_remove_wp_styles', 100);

// ─── Add REST CORS headers (for headless usage) ──────────────────────────────
function globaltech_cors_headers() {
    if (defined('DOING_AJAX') && DOING_AJAX) return;
    $origin = get_http_origin();
    if ($origin) {
        header("Access-Control-Allow-Origin: $origin");
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
    }
}
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', 'globaltech_cors_headers');
}, 15);

// ─── Theme Customizer ─────────────────────────────────────────────────────────
function globaltech_customize_register($wp_customize) {
    $wp_customize->add_section('globaltech_contact', [
        'title'    => __('Contact Information', 'globaltech'),
        'priority' => 30,
    ]);

    // Email
    $wp_customize->add_setting('gt_email', ['default' => 'info@globaltech.com', 'sanitize_callback' => 'sanitize_email']);
    $wp_customize->add_control('gt_email', [
        'label'   => __('Email Address', 'globaltech'),
        'section' => 'globaltech_contact',
        'type'    => 'email',
    ]);

    // Phone
    $wp_customize->add_setting('gt_phone', ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_phone', [
        'label'   => __('Phone Number', 'globaltech'),
        'section' => 'globaltech_contact',
        'type'    => 'text',
    ]);

    // China Address
    $wp_customize->add_setting('gt_china_address', ['default' => 'Guangzhou, Guangdong, China', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_china_address', [
        'label'   => __('China Office Address', 'globaltech'),
        'section' => 'globaltech_contact',
        'type'    => 'text',
    ]);

    // Uzbekistan Address
    $wp_customize->add_setting('gt_uz_address', ['default' => 'Tashkent, Uzbekistan', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_uz_address', [
        'label'   => __('Uzbekistan Office Address', 'globaltech'),
        'section' => 'globaltech_contact',
        'type'    => 'text',
    ]);

    // Social Links
    $wp_customize->add_section('globaltech_social', [
        'title'    => __('Social Links', 'globaltech'),
        'priority' => 35,
    ]);

    $wp_customize->add_setting('gt_linkedin', ['default' => '', 'sanitize_callback' => 'esc_url_raw']);
    $wp_customize->add_control('gt_linkedin', [
        'label'   => __('LinkedIn URL', 'globaltech'),
        'section' => 'globaltech_social',
        'type'    => 'url',
    ]);

    $wp_customize->add_setting('gt_facebook', ['default' => '', 'sanitize_callback' => 'esc_url_raw']);
    $wp_customize->add_control('gt_facebook', [
        'label'   => __('Facebook URL', 'globaltech'),
        'section' => 'globaltech_social',
        'type'    => 'url',
    ]);

    $wp_customize->add_setting('gt_twitter', ['default' => '', 'sanitize_callback' => 'esc_url_raw']);
    $wp_customize->add_control('gt_twitter', [
        'label'   => __('Twitter / X URL', 'globaltech'),
        'section' => 'globaltech_social',
        'type'    => 'url',
    ]);
}
add_action('customize_register', 'globaltech_customize_register');

// ─── Custom meta fields for inquiries in admin ───────────────────────────────
function globaltech_inquiry_meta_box() {
    add_meta_box('gt_inquiry_details', 'Inquiry Details', function($post) {
        $email   = get_post_meta($post->ID, '_gt_email',   true);
        $service = get_post_meta($post->ID, '_gt_service', true);
        $message = get_post_meta($post->ID, '_gt_message', true);
        echo "<p><strong>Email:</strong> " . esc_html($email) . "</p>";
        echo "<p><strong>Service:</strong> " . esc_html($service) . "</p>";
        echo "<p><strong>Message:</strong><br>" . nl2br(esc_html($message)) . "</p>";
    }, 'gt_inquiry', 'normal', 'high');
}
add_action('add_meta_boxes', 'globaltech_inquiry_meta_box');
