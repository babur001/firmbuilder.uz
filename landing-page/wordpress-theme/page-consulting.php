<?php
/**
 * Template Name: Consulting
 * GlobalTech Industries — Consulting service page
 */
get_header();
?>

<div class="sv-page">

<!-- Hero -->
<div class="sv-hero sv-hero--with-bg" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-consulting.jpg'); ?>');">
    <div class="sv-hero-badge">
        <div class="sv-hero-badge-dot"></div>
        <span class="sv-hero-badge-text" data-i18n="consulting.hero_badge">Consulting Services</span>
    </div>
    <h1 class="sv-hero-title" data-i18n="consulting.hero_title">Business consulting in<br>China &amp; Hong Kong</h1>
    <p class="sv-hero-desc" data-i18n="consulting.hero_desc">We provide full support for company registration, bank account setup, visa assistance, and business launch — from initial setup to full operation.</p>
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
        <h2 class="sv-section-title" data-i18n="consulting.reg_title">Opening a company in China &amp; Hong Kong</h2>
        <p class="sv-section-desc" data-i18n="consulting.reg_desc">Opening a company in China or Hong Kong is more than just registration — it's about choosing the right structure, tax model, and building a working business system.<br><br>We take your company from zero to a fully operational system — from documents to banking, accounting, tax, and real business activity.</p>
    </div>
    <div class="sv-reg-grid">
        <div class="sv-reg-card">
            <div class="sv-reg-card-header">
                <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
                <div class="sv-reg-card-title" data-i18n="consulting.reg_china_title">China (Mainland)</div>
                <div class="sv-reg-card-desc" data-i18n="consulting.reg_china_desc">Opening a company in China (WFOE, Joint Venture, or RO) requires strong control and the right structure. We don't just register your company — we turn it into a real, operational business.</div>
            </div>
            <div class="sv-reg-features">
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_china_f1">Selecting the right company structure</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_china_f2">Business license and corporate seals</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_china_f3">Bank account opening (RMB / USD)</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_china_f4">Tax and operational setup</span></div>
            </div>
            <div class="sv-reg-card-result" data-i18n="consulting.reg_china_result">Result: a fully controlled, legal, and operational company in China.</div>
            <button type="button" class="sv-reg-card-btn" data-detail="reg_china" data-i18n="consulting.reg_btn">Learn More</button>
        </div>
        <div class="sv-reg-card">
            <div class="sv-reg-card-header">
                <div class="sv-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                <div class="sv-reg-card-title" data-i18n="consulting.reg_hk_title">Hong Kong</div>
                <div class="sv-reg-card-desc" data-i18n="consulting.reg_hk_desc">A Hong Kong company is one of the most effective platforms for international trade and financial operations. We build a fast-launch structure tailored for global operations.</div>
            </div>
            <div class="sv-reg-features">
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_hk_f1">Optimal jurisdiction for international trade</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_hk_f2">Tax optimization for offshore income</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_hk_f3">Remotely managed company</span></div>
                <div class="sv-reg-feature"><div class="sv-reg-feature-dot"></div><span data-i18n="consulting.reg_hk_f4">International banking integration</span></div>
            </div>
            <div class="sv-reg-card-result" data-i18n="consulting.reg_hk_result">Result: a flexible and efficient company built for global operations.</div>
            <button type="button" class="sv-reg-card-btn" data-detail="reg_hk" data-i18n="consulting.reg_btn">Learn More</button>
        </div>
    </div>
</div>

<!-- Visa Services -->
<div class="sv-section sv-fade-in" id="visa">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="consulting.visa_label">VISA SERVICES</span></div>
        <h2 class="sv-section-title" data-i18n="consulting.visa_title">Business-based visa support</h2>
        <p class="sv-section-desc" data-i18n="consulting.visa_desc">Legal entry to China and Hong Kong through work and business</p>
    </div>
    <div class="sv-visa-grid sv-visa-grid--2col">
        <div class="sv-visa-card">
            <div class="sv-visa-card-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div class="sv-visa-card-title" data-i18n="consulting.visa2_title">Work Visa (Z) via company</div>
            <div class="sv-visa-card-price">$350 <span data-i18n="consulting.visa_per">/ person</span></div>
            <div class="sv-visa-card-features">
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa2_f1">Employment through a Chinese company</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa2_f2">Work Permit and Residence Permit processing</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa2_f3">Full document preparation and submission</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa2_f4">Legal stay and employment in China</span></div>
            </div>
            <div class="sv-visa-card-note" data-i18n="consulting.visa2_note">A complete solution for working in China</div>
        </div>
        <div class="sv-visa-card">
            <div class="sv-visa-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
            <div class="sv-visa-card-title" data-i18n="consulting.visa3_title">Hong Kong visa via company</div>
            <div class="sv-visa-card-price">$200 <span data-i18n="consulting.visa_per">/ person</span></div>
            <div class="sv-visa-card-features">
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa3_f1">Visa processing through a Hong Kong company</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa3_f2">Business and investment visa options</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa3_f3">Suitable for international travel</span></div>
                <div class="sv-visa-card-feature"><div class="sv-visa-card-feature-check"></div><span data-i18n="consulting.visa3_f4">Remote company management model</span></div>
            </div>
            <div class="sv-visa-card-note" data-i18n="consulting.visa3_note">A flexible solution for global business</div>
        </div>
    </div>
</div>

<!-- Stats -->
<div class="sv-section sv-alt sv-fade-in" style="padding-top:0; padding-bottom:0">
    <div class="sv-stats-row" style="border-top:1px solid var(--sv-border-thin); border-bottom:1px solid var(--sv-border-thin)">
        <div class="sv-stat-item"><div class="sv-stat-number">100</div><div class="sv-stat-label" data-i18n="consulting.stat1">Registered Companies</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">100%</div><div class="sv-stat-label" data-i18n="consulting.stat2">Successful Processing</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">2</div><div class="sv-stat-label" data-i18n="consulting.stat3">Years of Legal Practice</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">50+</div><div class="sv-stat-label" data-i18n="consulting.stat4">Visas Processed</div></div>
    </div>
</div>

<!-- CTA -->
<div class="sv-cta-section sv-fade-in">
    <div class="sv-hero-badge"><div class="sv-hero-badge-dot"></div><span class="sv-hero-badge-text" data-i18n="consulting.cta_badge">Free Consultation</span></div>
    <h2 class="sv-cta-title" data-i18n="consulting.cta_title">Ready to start a business in China?</h2>
    <p class="sv-cta-desc" data-i18n="consulting.cta_desc">We help you register a company in China and Hong Kong, set up bank accounts, and launch a fully operational business structure.<br><br>All processes are handled based on real experience, with full control and no unnecessary risks.</p>
    <div class="sv-cta-btns">
        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="consulting.cta_btn1">Get consultation <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
</div>

</div><!-- .sv-page -->

<!-- Consulting Detail Modal -->
<div id="consultingDetailModal" class="sv-lmodal" aria-hidden="true">
    <div class="sv-lmodal-overlay"></div>
    <div class="sv-lmodal-content" role="dialog" aria-modal="true">
        <button class="sv-lmodal-close" type="button" aria-label="Close">&times;</button>
        <div class="sv-lmodal-body">
            <h2 class="sv-lmodal-title" data-cdm="title"></h2>
            <p class="sv-lmodal-hero" data-cdm="hero"></p>
            <div class="sv-lmodal-rich" data-cdm="content"></div>
            <div class="sv-lmodal-cta">
                <p data-cdm="ctaDesc"></p>
                <div class="sv-lmodal-cta-btns">
                    <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="consulting.hero_btn1">Get Consultation</a>
                    <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-secondary" data-i18n="nav.contact">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</div>

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
