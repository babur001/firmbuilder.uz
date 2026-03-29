<?php
/**
 * Template Name: Trading — Purchasing & Negotiation
 * Davs Global — Purchasing & negotiation detail page
 */
get_header();
?>

<div class="sv-page">

<!-- Hero -->
<div class="sv-hero" style="min-height:auto;padding-bottom:60px">
    <div class="sv-hero-badge">
        <div class="sv-hero-badge-dot"></div>
        <span class="sv-hero-badge-text" data-i18n="purchasing.hero_badge">International Trade</span>
    </div>
    <h1 class="sv-hero-title" data-i18n="purchasing.hero_title">Purchasing & <span class="blue">negotiation</span></h1>
    <p class="sv-hero-desc" data-i18n="purchasing.hero_desc">Effective negotiation in China directly impacts price, quality, and terms. Poor negotiation can lead to unnecessary costs and risks. We negotiate on your behalf to secure the best conditions.</p>
</div>

<!-- What's included -->
<div class="sv-section sv-fade-in">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="purchasing.included_label">WHAT'S INCLUDED</span></div>
        <h2 class="sv-section-title" data-i18n="purchasing.included_title">Our services</h2>
    </div>
    <div class="sv-cards-grid">
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="sv-card-title" data-i18n="purchasing.item1">Price negotiation</div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"/></svg></div>
            <div class="sv-card-title" data-i18n="purchasing.item2">Terms agreement</div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="sv-card-title" data-i18n="purchasing.item3">Order placement</div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" fill="none" stroke-width="2"/><line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" stroke-width="2"/></svg></div>
            <div class="sv-card-title" data-i18n="purchasing.item4">Payment coordination</div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" fill="none" stroke-width="2"/><polyline points="14 2 14 8 20 8" stroke="currentColor" fill="none" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/></svg></div>
            <div class="sv-card-title" data-i18n="purchasing.item5">Contract handling</div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" fill="none" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="sv-card-title" data-i18n="purchasing.item6">Process control</div>
        </div>
    </div>
</div>

<!-- How it works -->
<div class="sv-section sv-fade-in">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="purchasing.how_label">PROCESS</span></div>
        <h2 class="sv-section-title" data-i18n="purchasing.how_title">How it works</h2>
    </div>
    <div class="sv-steps">
        <div class="sv-step">
            <div class="sv-step-number">01</div>
            <div class="sv-step-content">
                <div class="sv-step-title" data-i18n="purchasing.step1">We define your requirements</div>
            </div>
        </div>
        <div class="sv-step">
            <div class="sv-step-number">02</div>
            <div class="sv-step-content">
                <div class="sv-step-title" data-i18n="purchasing.step2">We negotiate with suppliers</div>
            </div>
        </div>
        <div class="sv-step">
            <div class="sv-step-number">03</div>
            <div class="sv-step-content">
                <div class="sv-step-title" data-i18n="purchasing.step3">We finalize terms</div>
            </div>
        </div>
        <div class="sv-step">
            <div class="sv-step-number">04</div>
            <div class="sv-step-content">
                <div class="sv-step-title" data-i18n="purchasing.step4">We oversee the process</div>
            </div>
        </div>
    </div>
</div>

<!-- CTA -->
<div class="sv-cta-section sv-fade-in">
    <h2 class="sv-cta-title" data-i18n="purchasing.cta_title">Let us manage your purchasing process</h2>
    <div class="sv-cta-btns">
        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="purchasing.cta_btn">Submit Request <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="<?php echo esc_url(home_url('/trading/')); ?>" class="sv-btn-secondary" data-i18n="purchasing.back_btn">Back to Trading</a>
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
