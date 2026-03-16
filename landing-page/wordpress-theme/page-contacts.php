<?php
/**
 * Template Name: Contacts
 * GlobalTech Industries — Contacts page
 */
get_header();
?>

<div class="sv-page">

<!-- Hero -->
<div class="sv-hero" style="min-height:480px">
    <div class="sv-hero-badge">
        <div class="sv-hero-badge-dot"></div>
        <span class="sv-hero-badge-text" data-i18n="contacts.hero_badge">Get in touch</span>
    </div>
    <h1 class="sv-hero-title" style="font-size:56px" data-i18n="contacts.hero_title">Contacts</h1>
    <p class="sv-hero-desc" style="font-size:18px" data-i18n="contacts.hero_desc">We are always available and ready to answer your questions</p>
</div>

<!-- Offices -->
<div class="sv-section sv-alt sv-fade-in">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="contacts.offices_label">OUR OFFICES</span></div>
        <h2 class="sv-section-title" data-i18n="contacts.offices_title">Global Presence</h2>
    </div>
    <div class="sv-offices-grid">
        <div class="sv-office-card">
            <div class="sv-office-header">
                <div class="sv-office-country" data-i18n="contacts.office_china">China</div>
                <div class="sv-office-city" data-i18n="contacts.office_china_city">Guangzhou, Guangdong Province</div>
            </div>
            <div class="sv-office-details">
                <div class="sv-office-detail">
                    <div class="sv-office-detail-label" data-i18n="contacts.address">Address</div>
                    <div class="sv-office-detail-value"><?php echo esc_html(get_theme_mod('gt_china_address', 'Room 1205, Building A, Tianhe District, Guangzhou, Guangdong 510620, China')); ?></div>
                </div>
                <div class="sv-office-detail">
                    <div class="sv-office-detail-label" data-i18n="contacts.phone">Phone</div>
                    <div class="sv-office-detail-value"><a href="tel:<?php echo esc_attr(get_theme_mod('gt_china_phone', '+86 20 1234 5678')); ?>"><?php echo esc_html(get_theme_mod('gt_china_phone', '+86 20 1234 5678')); ?></a></div>
                </div>
                <div class="sv-office-detail">
                    <div class="sv-office-detail-label">Email</div>
                    <div class="sv-office-detail-value"><a href="mailto:china@globaltech.com">china@globaltech.com</a></div>
                </div>
                <div class="sv-office-detail">
                    <div class="sv-office-detail-label" data-i18n="contacts.hours">Working hours</div>
                    <div class="sv-office-detail-value" data-i18n="contacts.hours_china">Mon-Fri: 09:00 - 18:00 (GMT+8)</div>
                </div>
            </div>
        </div>
        <div class="sv-office-card">
            <div class="sv-office-header">
                <div class="sv-office-country" data-i18n="contacts.office_uz">Uzbekistan</div>
                <div class="sv-office-city" data-i18n="contacts.office_uz_city">Tashkent</div>
            </div>
            <div class="sv-office-details">
                <div class="sv-office-detail">
                    <div class="sv-office-detail-label" data-i18n="contacts.address">Address</div>
                    <div class="sv-office-detail-value"><?php echo esc_html(get_theme_mod('gt_uz_address', 'Amir Temur str., 107A, Tashkent, 100084, Uzbekistan')); ?></div>
                </div>
                <div class="sv-office-detail">
                    <div class="sv-office-detail-label" data-i18n="contacts.phone">Phone</div>
                    <div class="sv-office-detail-value"><a href="tel:<?php echo esc_attr(get_theme_mod('gt_uz_phone', '+998 90 123 45 67')); ?>"><?php echo esc_html(get_theme_mod('gt_uz_phone', '+998 90 123 45 67')); ?></a></div>
                </div>
                <div class="sv-office-detail">
                    <div class="sv-office-detail-label">Email</div>
                    <div class="sv-office-detail-value"><a href="mailto:uzbekistan@globaltech.com">uzbekistan@globaltech.com</a></div>
                </div>
                <div class="sv-office-detail">
                    <div class="sv-office-detail-label" data-i18n="contacts.hours">Working hours</div>
                    <div class="sv-office-detail-value" data-i18n="contacts.hours_uz">Mon-Fri: 09:00 - 18:00 (GMT+5)</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Contact Form (shared template part) -->
<?php get_template_part('template-parts/contact-form'); ?>

</div><!-- .sv-page -->

<script>
(function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('visible'), i * 80);
            }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.sv-fade-in').forEach(el => observer.observe(el));
})();
</script>

<?php get_footer(); ?>
