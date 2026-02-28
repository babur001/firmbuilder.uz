<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="navbar" id="navbar">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
        <div class="logo-icon">
            <?php if (has_custom_logo()) :
                the_custom_logo();
            else : ?>
            <svg viewBox="0 0 100 100" fill="none">
                <path d="M20 15 L50 50 L20 85 L60 85 L90 50 L60 15 Z" fill="#0F3D5E"/>
                <path d="M30 15 L60 50 L30 85" stroke="#2196F3" stroke-width="4" fill="none"/>
            </svg>
            <?php endif; ?>
        </div>
        <div class="logo-text">Global<span>Tech</span></div>
    </a>

    <ul class="nav-links">
        <li><a href="#services" data-i18n="nav.services"><?php esc_html_e('Services', 'globaltech'); ?></a></li>
        <li><a href="#global"   data-i18n="nav.global"><?php esc_html_e('Global Reach', 'globaltech'); ?></a></li>
        <li><a href="#equipment" data-i18n="nav.equipment"><?php esc_html_e('Equipment', 'globaltech'); ?></a></li>
        <li><a href="#blog"     data-i18n="nav.about"><?php esc_html_e('About', 'globaltech'); ?></a></li>
    </ul>

    <div class="nav-right">
        <div class="lang-switcher">
            <?php
            // WPML language switcher integration
            if (function_exists('icl_get_languages')) :
                $languages = icl_get_languages('skip_missing=0&orderby=code');
                foreach ($languages as $lang) :
                    $active = $lang['active'] ? ' active' : '';
            ?>
            <a href="<?php echo esc_url($lang['url']); ?>" class="lang-btn<?php echo $active; ?>">
                <?php echo esc_html(strtoupper($lang['language_code'])); ?>
            </a>
            <?php endforeach;
            else : // Fallback: JS-driven lang switcher ?>
            <button class="lang-btn" data-lang="en">EN</button>
            <button class="lang-btn active" data-lang="ru">RU</button>
            <button class="lang-btn" data-lang="uz">UZ</button>
            <?php endif; ?>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
        <button class="nav-cta" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})"
                data-i18n="nav.contact"><?php esc_html_e('Contact Us', 'globaltech'); ?></button>
    </div>
</nav>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobileMenu">
    <a href="#services" data-i18n="nav.services"><?php esc_html_e('Services', 'globaltech'); ?></a>
    <a href="#global"   data-i18n="nav.global"><?php esc_html_e('Global Reach', 'globaltech'); ?></a>
    <a href="#equipment" data-i18n="nav.equipment"><?php esc_html_e('Equipment', 'globaltech'); ?></a>
    <a href="#blog"     data-i18n="nav.about"><?php esc_html_e('About', 'globaltech'); ?></a>
    <a href="#contact"  data-i18n="nav.contact"><?php esc_html_e('Contact Us', 'globaltech'); ?></a>
    <div class="mobile-lang">
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn active" data-lang="ru">RU</button>
        <button class="lang-btn" data-lang="uz">UZ</button>
    </div>
</div>
