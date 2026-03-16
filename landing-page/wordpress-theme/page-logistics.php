<?php
/**
 * Template Name: Logistics
 * GlobalTech Industries — Logistics service page
 */
get_header();
?>

<div class="sv-page">

<!-- Hero -->
<div class="sv-hero">
    <div class="sv-hero-badge">
        <div class="sv-hero-badge-dot"></div>
        <span class="sv-hero-badge-text" data-i18n="logistics.hero_badge">Logistics Services</span>
    </div>
    <h1 class="sv-hero-title" data-i18n="logistics.hero_title">International<br>Logistics from China</h1>
    <p class="sv-hero-desc" data-i18n="logistics.hero_desc">Full-cycle logistics services: cargo delivery from China to CIS countries and beyond. Reliability, speed, and transparency at every stage.</p>
    <div class="sv-hero-btns">
        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="logistics.hero_btn1">
            Calculate Cost <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#services" class="sv-btn-secondary" data-i18n="logistics.hero_btn2">Track Shipment</a>
    </div>
</div>

<!-- Routes -->
<div class="sv-section sv-alt sv-fade-in">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="logistics.routes_label">DESTINATIONS</span></div>
        <h2 class="sv-section-title" data-i18n="logistics.routes_title">Key Destinations</h2>
        <p class="sv-section-desc" data-i18n="logistics.routes_desc">From China to anywhere in the world — we will deliver your cargo</p>
    </div>
    <div class="sv-routes-grid">
        <div class="sv-route-card">
            <div class="sv-route-number">01 — ORIGIN</div>
            <div class="sv-route-country" data-i18n="logistics.route1_country">China</div>
            <div class="sv-route-subtitle" data-i18n="logistics.route1_sub">Point of Origin</div>
            <div class="sv-route-desc" data-i18n="logistics.route1_desc">Guangzhou, Shenzhen, Yiwu, Shanghai and other cities</div>
        </div>
        <div class="sv-route-card">
            <div class="sv-route-number">02 — DESTINATION</div>
            <div class="sv-route-country" data-i18n="logistics.route2_country">Russia</div>
            <div class="sv-route-subtitle" data-i18n="logistics.route2_sub">Door-to-Door Delivery</div>
            <div class="sv-route-desc" data-i18n="logistics.route2_desc">Moscow, St. Petersburg and regions. From 15 days</div>
        </div>
        <div class="sv-route-card">
            <div class="sv-route-number">03 — DESTINATION</div>
            <div class="sv-route-country" data-i18n="logistics.route3_country">Central Asia</div>
            <div class="sv-route-subtitle" data-i18n="logistics.route3_sub">Kazakhstan, Uzbekistan</div>
            <div class="sv-route-desc" data-i18n="logistics.route3_desc">Central Asia. From 7 days</div>
        </div>
        <div class="sv-route-card">
            <div class="sv-route-number">04 — DESTINATION</div>
            <div class="sv-route-country" data-i18n="logistics.route4_country">USA</div>
            <div class="sv-route-subtitle" data-i18n="logistics.route4_sub">Sea Freight</div>
            <div class="sv-route-desc" data-i18n="logistics.route4_desc">All US states. From 25 days</div>
        </div>
    </div>
</div>

<!-- Services -->
<div class="sv-section sv-fade-in" id="services">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="logistics.services_label">OUR SERVICES</span></div>
        <h2 class="sv-section-title" data-i18n="logistics.services_title">Full-Cycle Logistics</h2>
        <p class="sv-section-desc" data-i18n="logistics.services_desc">From supplier warehouse to your office — a unified chain without intermediaries</p>
    </div>
    <div class="sv-cards-grid">
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
            <div class="sv-card-title" data-i18n="logistics.card1_title">Air Freight</div>
            <div class="sv-card-desc" data-i18n="logistics.card1_desc">Express cargo delivery by air transport. Minimal timelines, maximum reliability.</div>
            <div class="sv-card-link" data-i18n="logistics.card_more">Learn More <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
            <div class="sv-card-title" data-i18n="logistics.card2_title">Sea Freight</div>
            <div class="sv-card-desc" data-i18n="logistics.card2_desc">FCL and LCL container shipping. Optimal balance of cost and timelines.</div>
            <div class="sv-card-link" data-i18n="logistics.card_more">Learn More <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
        <div class="sv-card">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
            <div class="sv-card-title" data-i18n="logistics.card3_title">Customs Clearance</div>
            <div class="sv-card-desc" data-i18n="logistics.card3_desc">Complete customs processing of cargo. Risk minimization and accelerated border crossing.</div>
            <div class="sv-card-link" data-i18n="logistics.card_more">Learn More <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
    </div>
</div>

<!-- Stats -->
<div class="sv-section sv-fade-in" style="padding-top:0; padding-bottom:0">
    <div class="sv-stats-row" style="border-top:1px solid var(--sv-border-thin); border-bottom:1px solid var(--sv-border-thin)">
        <div class="sv-stat-item"><div class="sv-stat-number">50+</div><div class="sv-stat-label" data-i18n="logistics.stat1">Delivery Destinations</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">99%</div><div class="sv-stat-label" data-i18n="logistics.stat2">Loss-Free Deliveries</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">3000+</div><div class="sv-stat-label" data-i18n="logistics.stat3">Successful Shipments</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">24/7</div><div class="sv-stat-label" data-i18n="logistics.stat4">Customer Support</div></div>
    </div>
</div>

<!-- CTA -->
<div class="sv-cta-section sv-fade-in">
    <div class="sv-hero-badge"><div class="sv-hero-badge-dot"></div><span class="sv-hero-badge-text" data-i18n="logistics.cta_badge">Calculate Delivery</span></div>
    <h2 class="sv-cta-title" data-i18n="logistics.cta_title">Need delivery from China?</h2>
    <p class="sv-cta-desc" data-i18n="logistics.cta_desc">Get an accurate cost and timeline calculation for your cargo delivery within 2 hours.</p>
    <div class="sv-cta-btns">
        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="logistics.cta_btn1">Calculate Cost <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="#" class="sv-btn-secondary" data-i18n="logistics.cta_btn2">Our Routes</a>
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
