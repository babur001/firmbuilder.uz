<?php
/**
 * Template Name: Consulting
 * GlobalTech Industries — Consulting service page
 */
get_header();
?>

<div class="sv-page">

<!-- Hero -->
<div class="sv-hero">
    <div class="sv-hero-badge">
        <div class="sv-hero-badge-dot"></div>
        <span class="sv-hero-badge-text" data-i18n="consulting.hero_badge">Consulting Services</span>
    </div>
    <h1 class="sv-hero-title" data-i18n="consulting.hero_title">Business Consulting<br>in China</h1>
    <p class="sv-hero-desc" data-i18n="consulting.hero_desc">Company registration, visa services, and document preparation for successfully doing business in China and Hong Kong.</p>
    <div class="sv-hero-btns">
        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="consulting.hero_btn1">
            Get Consultation <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#visa" class="sv-btn-secondary" data-i18n="consulting.hero_btn2">Learn Pricing</a>
    </div>
</div>

<!-- Company Registration -->
<div class="sv-section sv-alt sv-fade-in">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="consulting.reg_label">COMPANY REGISTRATION</span></div>
        <h2 class="sv-section-title" data-i18n="consulting.reg_title">Legal Entity Registration</h2>
        <p class="sv-section-desc" data-i18n="consulting.reg_desc">Full support for the company registration process in China and Hong Kong</p>
    </div>
    <div class="sv-reg-grid">
        <div class="sv-reg-card">
            <div class="sv-reg-card-header">
                <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
                <div class="sv-reg-card-title" data-i18n="consulting.reg_china_title">China (Mainland)</div>
                <div class="sv-reg-card-desc" data-i18n="consulting.reg_china_desc">Registration of WFOE, Joint Venture, and Representative Office. Full legal support.</div>
            </div>
            <div class="sv-reg-features">
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_china_f1">Business license and company seal</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_china_f2">Bank account opening</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_china_f3">Tax registration</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_china_f4">Legal address for 1 year</span></div>
            </div>
            <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-reg-card-btn" data-i18n="consulting.reg_btn">Learn More</a>
        </div>
        <div class="sv-reg-card">
            <div class="sv-reg-card-header">
                <div class="sv-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                <div class="sv-reg-card-title" data-i18n="consulting.reg_hk_title">Hong Kong</div>
                <div class="sv-reg-card-desc" data-i18n="consulting.reg_hk_desc">Limited Company registration in Hong Kong. Offshore jurisdiction with minimal taxation.</div>
            </div>
            <div class="sv-reg-features">
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_hk_f1">0% tax rate on offshore profits</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_hk_f2">Remote company management</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_hk_f3">Corporate bank account</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_hk_f4">Annual maintenance</span></div>
            </div>
            <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-reg-card-btn" data-i18n="consulting.reg_btn">Learn More</a>
        </div>
    </div>
</div>

<!-- Visa Services -->
<div class="sv-section sv-fade-in" id="visa">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="consulting.visa_label">VISA SERVICES</span></div>
        <h2 class="sv-section-title" data-i18n="consulting.visa_title">Visa Support</h2>
        <p class="sv-section-desc" data-i18n="consulting.visa_desc">Business visas to China, Hong Kong, and other Asian countries</p>
    </div>
    <div class="sv-visa-grid">
        <div class="sv-visa-card">
            <div class="sv-visa-card-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
            <div class="sv-visa-card-title" data-i18n="consulting.visa1_title">Business Visa (M)</div>
            <div class="sv-visa-card-price">$150 <span data-i18n="consulting.visa_per">/ person</span></div>
            <div class="sv-visa-card-features">
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa1_f1">Single / Multiple entry</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa1_f2">Processing time 5-7 days</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa1_f3">Invitation from Chinese company</span></div>
            </div>
        </div>
        <div class="sv-visa-card">
            <div class="sv-visa-card-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div class="sv-visa-card-title" data-i18n="consulting.visa2_title">Work Visa (Z)</div>
            <div class="sv-visa-card-price">$350 <span data-i18n="consulting.visa_per">/ person</span></div>
            <div class="sv-visa-card-features">
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa2_f1">Work permit in PRC</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa2_f2">Residency processing</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa2_f3">Complete document package</span></div>
            </div>
        </div>
        <div class="sv-visa-card">
            <div class="sv-visa-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
            <div class="sv-visa-card-title" data-i18n="consulting.visa3_title">Hong Kong Visa</div>
            <div class="sv-visa-card-price">$200 <span data-i18n="consulting.visa_per">/ person</span></div>
            <div class="sv-visa-card-features">
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa3_f1">Business trips & residency</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa3_f2">Employment Visa</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa3_f3">Investment Visa</span></div>
            </div>
        </div>
    </div>
</div>

<!-- Stats -->
<div class="sv-section sv-alt sv-fade-in" style="padding-top:0; padding-bottom:0">
    <div class="sv-stats-row" style="border-top:1px solid var(--sv-border-thin); border-bottom:1px solid var(--sv-border-thin)">
        <div class="sv-stat-item"><div class="sv-stat-number">300+</div><div class="sv-stat-label" data-i18n="consulting.stat1">Registered Companies</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">98%</div><div class="sv-stat-label" data-i18n="consulting.stat2">Successful Processing</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">5</div><div class="sv-stat-label" data-i18n="consulting.stat3">Years of Legal Practice</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">2000+</div><div class="sv-stat-label" data-i18n="consulting.stat4">Visas Processed</div></div>
    </div>
</div>

<!-- CTA -->
<div class="sv-cta-section sv-fade-in">
    <div class="sv-hero-badge"><div class="sv-hero-badge-dot"></div><span class="sv-hero-badge-text" data-i18n="consulting.cta_badge">Free Consultation</span></div>
    <h2 class="sv-cta-title" data-i18n="consulting.cta_title">Ready to open business in China?</h2>
    <p class="sv-cta-desc" data-i18n="consulting.cta_desc">Our lawyers will advise you on all matters of registration and doing business in China and Hong Kong.</p>
    <div class="sv-cta-btns">
        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="consulting.cta_btn1">Get Consultation <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="#" class="sv-btn-secondary" data-i18n="consulting.cta_btn2">Learn Pricing</a>
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
