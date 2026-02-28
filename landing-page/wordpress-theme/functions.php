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
        'apiUrl'           => esc_url_raw(rest_url('wp/v2')),
        'siteUrl'          => esc_url(home_url()),
        'nonce'            => wp_create_nonce('wp_rest'),
        'postsPerPage'     => 3,
        'contactEndpoint'  => esc_url_raw(rest_url('globaltech/v1/contact')),
        'lang'             => defined('ICL_LANGUAGE_CODE') ? ICL_LANGUAGE_CODE : get_locale(),
        'recaptchaSiteKey' => get_theme_mod('gt_recaptcha_site_key', ''),
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
    // reCAPTCHA verification
    $secret_key = get_theme_mod('gt_recaptcha_secret_key', '');
    if ($secret_key) {
        $token = $request->get_param('recaptcha_token');
        if (!$token) {
            return new WP_Error('recaptcha_missing', 'reCAPTCHA verification required', ['status' => 403]);
        }
        $verify = wp_remote_post('https://www.google.com/recaptcha/api/siteverify', [
            'body' => ['secret' => $secret_key, 'response' => $token],
        ]);
        if (!is_wp_error($verify)) {
            $result = json_decode(wp_remote_retrieve_body($verify), true);
            if (!$result['success'] || ($result['score'] ?? 0) < 0.5) {
                return new WP_Error('recaptcha_failed', 'Spam detected', ['status' => 403]);
            }
        }
    }

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

    // Always save as a custom post for CRM tracking
    wp_insert_post([
        'post_type'   => 'gt_inquiry',
        'post_title'  => "$name — $company",
        'post_status' => 'publish',
        'meta_input'  => [
            '_gt_email'   => $email,
            '_gt_service' => $service,
            '_gt_message' => $message,
        ],
    ]);

    // Attempt email notification (best-effort)
    wp_mail($admin_email, $subject, $body, $headers);

    return rest_ensure_response(['success' => true, 'message' => 'Message sent']);
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
    // ── Contact Information ──
    $wp_customize->add_section('globaltech_contact', [
        'title'    => __('Contact Information', 'globaltech'),
        'priority' => 30,
    ]);

    $wp_customize->add_setting('gt_email', ['default' => 'info@globaltech.com', 'sanitize_callback' => 'sanitize_email']);
    $wp_customize->add_control('gt_email', [
        'label'   => __('Email Address', 'globaltech'),
        'section' => 'globaltech_contact',
        'type'    => 'email',
    ]);

    $wp_customize->add_setting('gt_china_address', ['default' => 'Guangzhou, Guangdong, China', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_china_address', [
        'label'   => __('China Office Address', 'globaltech'),
        'section' => 'globaltech_contact',
        'type'    => 'text',
    ]);

    $wp_customize->add_setting('gt_china_phone', ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_china_phone', [
        'label'   => __('China Office Phone', 'globaltech'),
        'section' => 'globaltech_contact',
        'type'    => 'tel',
    ]);

    $wp_customize->add_setting('gt_uz_address', ['default' => 'Tashkent, Uzbekistan', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_uz_address', [
        'label'   => __('Uzbekistan Office Address', 'globaltech'),
        'section' => 'globaltech_contact',
        'type'    => 'text',
    ]);

    $wp_customize->add_setting('gt_uz_phone', ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_uz_phone', [
        'label'   => __('Uzbekistan Office Phone', 'globaltech'),
        'section' => 'globaltech_contact',
        'type'    => 'tel',
    ]);

    // ── Social Links ──
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

    // ── SEO ──
    $wp_customize->add_section('globaltech_seo', [
        'title'    => __('SEO Settings', 'globaltech'),
        'priority' => 40,
    ]);

    $wp_customize->add_setting('gt_meta_description', ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_meta_description', [
        'label'       => __('Meta Description (homepage)', 'globaltech'),
        'description' => __('Recommended 150-160 characters.', 'globaltech'),
        'section'     => 'globaltech_seo',
        'type'        => 'textarea',
    ]);

    $wp_customize->add_setting('gt_meta_keywords', ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_meta_keywords', [
        'label'   => __('Meta Keywords (comma-separated)', 'globaltech'),
        'section' => 'globaltech_seo',
        'type'    => 'text',
    ]);

    // ── Google Analytics ──
    $wp_customize->add_section('globaltech_analytics', [
        'title'    => __('Google Analytics', 'globaltech'),
        'priority' => 45,
    ]);

    $wp_customize->add_setting('gt_ga_id', ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_ga_id', [
        'label'       => __('Google Analytics Measurement ID', 'globaltech'),
        'description' => __('e.g. G-XXXXXXXXXX', 'globaltech'),
        'section'     => 'globaltech_analytics',
        'type'        => 'text',
    ]);

    // ── reCAPTCHA ──
    $wp_customize->add_section('globaltech_recaptcha', [
        'title'    => __('reCAPTCHA (Spam Protection)', 'globaltech'),
        'priority' => 50,
    ]);

    $wp_customize->add_setting('gt_recaptcha_site_key', ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_recaptcha_site_key', [
        'label'   => __('reCAPTCHA v3 Site Key', 'globaltech'),
        'section' => 'globaltech_recaptcha',
        'type'    => 'text',
    ]);

    $wp_customize->add_setting('gt_recaptcha_secret_key', ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gt_recaptcha_secret_key', [
        'label'   => __('reCAPTCHA v3 Secret Key', 'globaltech'),
        'section' => 'globaltech_recaptcha',
        'type'    => 'text',
    ]);
}
add_action('customize_register', 'globaltech_customize_register');

// ─── SEO Meta Tags ────────────────────────────────────────────────────────────
function globaltech_seo_meta() {
    // Meta description
    if (is_front_page()) {
        $desc = get_theme_mod('gt_meta_description', '');
        if (!$desc) {
            $desc = get_bloginfo('description');
        }
    } elseif (is_singular()) {
        $desc = wp_trim_words(get_the_excerpt(), 30, '');
    } else {
        $desc = get_bloginfo('description');
    }
    if ($desc) {
        echo '<meta name="description" content="' . esc_attr($desc) . '">' . "\n";
    }

    // Meta keywords (homepage only)
    $keywords = get_theme_mod('gt_meta_keywords', '');
    if ($keywords && is_front_page()) {
        echo '<meta name="keywords" content="' . esc_attr($keywords) . '">' . "\n";
    }

    // Open Graph
    echo '<meta property="og:title" content="' . esc_attr(wp_get_document_title()) . '">' . "\n";
    if ($desc) {
        echo '<meta property="og:description" content="' . esc_attr($desc) . '">' . "\n";
    }
    echo '<meta property="og:type" content="' . (is_singular('post') ? 'article' : 'website') . '">' . "\n";
    echo '<meta property="og:url" content="' . esc_url(is_front_page() ? home_url('/') : get_permalink()) . '">' . "\n";
    if (is_singular() && has_post_thumbnail()) {
        $img = wp_get_attachment_image_src(get_post_thumbnail_id(), 'globaltech-blog-full');
        if ($img) {
            echo '<meta property="og:image" content="' . esc_url($img[0]) . '">' . "\n";
        }
    }
}
add_action('wp_head', 'globaltech_seo_meta', 1);

// ─── Google Analytics ─────────────────────────────────────────────────────────
function globaltech_google_analytics() {
    $ga_id = get_theme_mod('gt_ga_id', '');
    if (!$ga_id) return;
    ?>
    <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo esc_attr($ga_id); ?>"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '<?php echo esc_js($ga_id); ?>');
    </script>
    <?php
}
add_action('wp_head', 'globaltech_google_analytics', 2);

// ─── reCAPTCHA v3 ─────────────────────────────────────────────────────────────
function globaltech_recaptcha_enqueue() {
    $site_key = get_theme_mod('gt_recaptcha_site_key', '');
    if (!$site_key) return;
    wp_enqueue_script('google-recaptcha', 'https://www.google.com/recaptcha/api.js?render=' . esc_attr($site_key), [], null, true);
}
add_action('wp_enqueue_scripts', 'globaltech_recaptcha_enqueue');

// ─── Robots.txt customization ─────────────────────────────────────────────────
function globaltech_robots_txt($output, $public) {
    // WordPress 5.5+ already adds the sitemap line — no need to duplicate
    return $output;
}
add_filter('robots_txt', 'globaltech_robots_txt', 10, 2);

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

// ─── Inquiry admin list columns ───────────────────────────────────────────────
function globaltech_inquiry_columns($columns) {
    return [
        'cb'         => $columns['cb'],
        'title'      => __('Name / Company', 'globaltech'),
        'gt_email'   => __('Email', 'globaltech'),
        'gt_service' => __('Service', 'globaltech'),
        'gt_message' => __('Message', 'globaltech'),
        'date'       => $columns['date'],
    ];
}
add_filter('manage_gt_inquiry_posts_columns', 'globaltech_inquiry_columns');

function globaltech_inquiry_column_data($column, $post_id) {
    switch ($column) {
        case 'gt_email':
            $email = get_post_meta($post_id, '_gt_email', true);
            echo '<a href="mailto:' . esc_attr($email) . '">' . esc_html($email) . '</a>';
            break;
        case 'gt_service':
            echo esc_html(get_post_meta($post_id, '_gt_service', true));
            break;
        case 'gt_message':
            echo esc_html(wp_trim_words(get_post_meta($post_id, '_gt_message', true), 12));
            break;
    }
}
add_action('manage_gt_inquiry_posts_custom_column', 'globaltech_inquiry_column_data', 10, 2);
