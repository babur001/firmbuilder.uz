<?php
/**
 * Template Name: Services
 * GlobalTech Industries — Dedicated services page
 */
get_header();

$theme_uri = get_template_directory_uri();

$services = [
    [
        'id'         => 'procurement',
        'icon'       => '<svg viewBox="0 0 64 64"><rect x="8" y="20" width="48" height="36" rx="2"/><path d="M8 28h48"/><circle cx="32" cy="42" r="8"/><path d="M20 8h24v12H20z"/></svg>',
        'title_key'  => 'services.procurement.title',
        'desc_key'   => 'services.procurement.modal_desc',
        'image'      => 'assets/images/service-procurement-detail.jpg',
        'features'   => [
            'services.procurement.feature_1',
            'services.procurement.feature_2',
            'services.procurement.feature_3',
            'services.procurement.feature_4',
            'services.procurement.feature_5',
            'services.procurement.feature_6',
        ],
    ],
    [
        'id'         => 'logistics',
        'icon'       => '<svg viewBox="0 0 64 64"><path d="M4 44h12l8-20h16l8 20h12"/><circle cx="12" cy="48" r="4"/><circle cx="52" cy="48" r="4"/><rect x="20" y="16" width="24" height="16" rx="2"/></svg>',
        'title_key'  => 'services.logistics.title',
        'desc_key'   => 'services.logistics.modal_desc',
        'image'      => 'assets/images/service-logistics-detail.jpg',
        'features'   => [
            'services.logistics.feature_1',
            'services.logistics.feature_2',
            'services.logistics.feature_3',
            'services.logistics.feature_4',
            'services.logistics.feature_5',
            'services.logistics.feature_6',
        ],
    ],
    [
        'id'         => 'consulting',
        'icon'       => '<svg viewBox="0 0 64 64"><circle cx="32" cy="20" r="12"/><path d="M16 56c0-8.8 7.2-16 16-16s16 7.2 16 16"/><path d="M44 20l12 8"/><circle cx="56" cy="28" r="4"/></svg>',
        'title_key'  => 'services.consulting.title',
        'desc_key'   => 'services.consulting.modal_desc',
        'image'      => 'assets/images/service-consulting-detail.jpg',
        'features'   => [
            'services.consulting.feature_1',
            'services.consulting.feature_2',
            'services.consulting.feature_3',
            'services.consulting.feature_4',
            'services.consulting.feature_5',
            'services.consulting.feature_6',
        ],
    ],
];
?>

<!-- ===== SERVICES PAGE HERO ===== -->
<section class="sp-hero">
    <div class="sp-hero-bg">
        <img src="<?php echo esc_url($theme_uri . '/assets/images/services-hero.jpg'); ?>" alt="Industrial services">
    </div>
    <div class="sp-hero-overlay"></div>
    <div class="container sp-hero-content">
        <div class="hero-badge"><span data-i18n="services.label">What We Do</span></div>
        <h1 data-i18n="services.title">Core Services</h1>
        <p class="sp-hero-desc" data-i18n="services.description">Comprehensive industrial solutions for global enterprises.</p>
    </div>
</section>

<!-- ===== SERVICE DETAIL SECTIONS ===== -->
<?php foreach ($services as $i => $svc) : ?>
<section class="sp-detail <?php echo $i % 2 ? 'sp-detail--reversed' : ''; ?>" id="<?php echo esc_attr($svc['id']); ?>">
    <div class="container">
        <div class="sp-detail-grid">
            <div class="sp-detail-image reveal">
                <img src="<?php echo esc_url($theme_uri . '/' . $svc['image']); ?>"
                     alt="<?php echo esc_attr($svc['id']); ?>">
            </div>
            <div class="sp-detail-content reveal">
                <div class="sp-detail-icon"><?php echo $svc['icon']; ?></div>
                <h2 data-i18n="<?php echo esc_attr($svc['title_key']); ?>">Service</h2>
                <p class="sp-detail-desc" data-i18n="<?php echo esc_attr($svc['desc_key']); ?>">Description</p>
                <ul class="sp-detail-features">
                    <?php foreach ($svc['features'] as $fkey) : ?>
                    <li>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                        <span data-i18n="<?php echo esc_attr($fkey); ?>">Feature</span>
                    </li>
                    <?php endforeach; ?>
                </ul>
                <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="btn-primary">
                    <span data-i18n="hero.btn_contact">Get in Touch</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </a>
            </div>
        </div>
    </div>
</section>
<?php endforeach; ?>

<!-- ===== CTA ===== -->
<section class="cta">
    <div class="cta-bg">
        <div class="cta-circle cta-circle-1"></div>
        <div class="cta-circle cta-circle-2"></div>
        <div class="cta-circle cta-circle-3"></div>
    </div>
    <div class="container">
        <div class="cta-content reveal">
            <div class="section-label" style="justify-content:center;"><span data-i18n="cta.label">Ready to Start?</span></div>
            <h2 data-i18n="cta.title">Let's Build Something<br>Extraordinary Together</h2>
            <p data-i18n="cta.description">Partner with industry leaders for procurement, logistics, and strategic consulting.</p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="btn-primary">
                    <span data-i18n="cta.btn_start">Start a Project</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
