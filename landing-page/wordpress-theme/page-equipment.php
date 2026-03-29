<?php
/**
 * Template Name: Equipment
 * Davs Global — Industrial Equipment page
 */
get_header();
?>

<div class="sv-page">

<!-- Hero -->
<div class="sv-hero" style="min-height:auto;padding-bottom:60px">
    <div class="sv-hero-badge">
        <div class="sv-hero-badge-dot"></div>
        <span class="sv-hero-badge-text" data-i18n="equipment.hero_badge">Industrial Equipment</span>
    </div>
    <h1 class="sv-hero-title" data-i18n="equipment.hero_title">Industrial <span class="blue">Equipment</span></h1>
    <p class="sv-hero-desc" data-i18n="equipment.hero_desc">We provide industrial equipment from reliable manufacturers in China. We assist with selection, purchasing, and delivery of concrete plants, drilling rigs, and other machinery.</p>
    <div class="sv-hero-btns" style="margin-top:2rem">
        <a href="#products" class="sv-btn-primary" data-i18n="equipment.hero_btn">View products <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
</div>

<!-- Products -->
<div class="sv-section sv-fade-in" id="products">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="equipment.products_label">OUR PRODUCTS</span></div>
        <h2 class="sv-section-title" data-i18n="equipment.products_title">Equipment catalog</h2>
    </div>
    <div class="sv-cards-grid">
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="sv-card-title" data-i18n="equipment.product1_title">Concrete plants</div>
            <div class="sv-card-desc" data-i18n="equipment.product1_desc">Stationary and mobile concrete batching plants of various capacities from leading Chinese manufacturers.</div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="sv-card-title" data-i18n="equipment.product2_title">Drilling rigs</div>
            <div class="sv-card-desc" data-i18n="equipment.product2_desc">Drilling equipment for construction, mining, and geological exploration from certified producers.</div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" stroke="currentColor" fill="none" stroke-width="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" stroke="currentColor" fill="none" stroke-width="2"/><circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" fill="none" stroke-width="2"/><circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" fill="none" stroke-width="2"/></svg></div>
            <div class="sv-card-title" data-i18n="equipment.product3_title">Special machinery</div>
            <div class="sv-card-desc" data-i18n="equipment.product3_desc">Specialized construction and industrial machinery tailored to your project requirements.</div>
        </div>
    </div>
</div>

<!-- How we work -->
<div class="sv-section sv-fade-in">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="equipment.how_label">PROCESS</span></div>
        <h2 class="sv-section-title" data-i18n="equipment.how_title">How it works</h2>
    </div>
    <div class="sv-steps">
        <div class="sv-step">
            <div class="sv-step-number">01</div>
            <div class="sv-step-content">
                <div class="sv-step-title" data-i18n="equipment.step1">We analyze your equipment requirements</div>
            </div>
        </div>
        <div class="sv-step">
            <div class="sv-step-number">02</div>
            <div class="sv-step-content">
                <div class="sv-step-title" data-i18n="equipment.step2">We select equipment from verified manufacturers</div>
            </div>
        </div>
        <div class="sv-step">
            <div class="sv-step-number">03</div>
            <div class="sv-step-content">
                <div class="sv-step-title" data-i18n="equipment.step3">We negotiate the best price and terms</div>
            </div>
        </div>
        <div class="sv-step">
            <div class="sv-step-number">04</div>
            <div class="sv-step-content">
                <div class="sv-step-title" data-i18n="equipment.step4">We organize delivery and logistics</div>
            </div>
        </div>
    </div>
</div>

<!-- CTA -->
<div class="sv-cta-section sv-fade-in">
    <h2 class="sv-cta-title" data-i18n="equipment.cta_title">Need industrial equipment from China?</h2>
    <p class="sv-cta-desc" data-i18n="equipment.cta_desc">Submit your request and our specialist will help you find the right equipment at the best price.</p>
    <div class="sv-cta-btns">
        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="equipment.cta_btn">Get a quote <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
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
