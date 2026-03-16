<?php
/**
 * Template Name: Trading
 * GlobalTech Industries — Trading service page
 */
get_header();
?>

<div class="sv-page">

<!-- Hero -->
<div class="sv-hero">
    <div class="sv-hero-badge">
        <div class="sv-hero-badge-dot"></div>
        <span class="sv-hero-badge-text" data-i18n="trading.hero_badge">Trading & Procurement</span>
    </div>
    <h1 class="sv-hero-title" data-i18n="trading.hero_title">Comprehensive Solutions<br>for Trading</h1>
    <p class="sv-hero-desc" data-i18n="trading.hero_desc">Professional sourcing, supplier verification, and procurement of industrial equipment with quality guarantees from leading global manufacturers.</p>
    <div class="sv-hero-btns">
        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="trading.hero_btn1">
            Submit Request <svg viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#services" class="sv-btn-secondary" data-i18n="trading.hero_btn2">Our Services</a>
    </div>
</div>

<!-- Services -->
<div class="sv-section sv-alt sv-fade-in" id="services">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="trading.services_label">OUR SERVICES</span></div>
        <h2 class="sv-section-title" data-i18n="trading.services_title">Trading Services</h2>
        <p class="sv-section-desc" data-i18n="trading.services_desc">Full-cycle services for sourcing, verification, and procurement of industrial equipment</p>
    </div>
    <div class="sv-cards-grid">
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
            <div class="sv-card-title" data-i18n="trading.card1_title">Product Search</div>
            <div class="sv-card-desc" data-i18n="trading.card1_desc">Professional product and equipment sourcing with full supplier verification. Quality guarantee and compliance with technical requirements.</div>
            <div class="sv-card-link" data-i18n="trading.card_more">Learn More <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>
            <div class="sv-card-title" data-i18n="trading.card2_title">Product Procurement</div>
            <div class="sv-card-desc" data-i18n="trading.card2_desc">Organizing procurement with subsequent sales. Favorable terms and full transparency at every stage of the deal.</div>
            <div class="sv-card-link" data-i18n="trading.card_more">Learn More <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
            <div class="sv-card-title" data-i18n="trading.card3_title">Equipment Sales</div>
            <div class="sv-card-desc" data-i18n="trading.card3_desc">Sales of industrial machinery and equipment. Wide range from verified Chinese manufacturers.</div>
            <div class="sv-card-link" data-i18n="trading.card_more">Learn More <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
    </div>
</div>

<!-- Stats -->
<div class="sv-section sv-fade-in" style="padding-top:0; padding-bottom:0">
    <div class="sv-stats-row" style="border-top:1px solid var(--sv-border-thin); border-bottom:1px solid var(--sv-border-thin)">
        <div class="sv-stat-item"><div class="sv-stat-number">500+</div><div class="sv-stat-label" data-i18n="trading.stat1">Verified Suppliers</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">8</div><div class="sv-stat-label" data-i18n="trading.stat2">Years on the Market</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">1200+</div><div class="sv-stat-label" data-i18n="trading.stat3">Successful Deals</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">15</div><div class="sv-stat-label" data-i18n="trading.stat4">Countries of Presence</div></div>
    </div>
</div>

<!-- CTA -->
<div class="sv-cta-section sv-fade-in">
    <div class="sv-hero-badge"><div class="sv-hero-badge-dot"></div><span class="sv-hero-badge-text" data-i18n="trading.cta_badge">Start Collaboration</span></div>
    <h2 class="sv-cta-title" data-i18n="trading.cta_title">Ready to work with us?</h2>
    <p class="sv-cta-desc" data-i18n="trading.cta_desc">Submit a request and our specialist will contact you within 24 hours to discuss your project.</p>
    <div class="sv-cta-btns">
        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="trading.cta_btn1">Submit Request <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="#" class="sv-btn-secondary" data-i18n="trading.cta_btn2">Download Catalog</a>
    </div>
</div>

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
