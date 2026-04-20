<?php
/**
 * Template Name: Logistics
 * GlobalTech Industries — Logistics service page
 */
get_header();
?>

<div class="sv-page">

<!-- Hero -->
<div class="sv-hero sv-hero--with-bg" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-logistics.jpg'); ?>');">
    <div class="sv-hero-badge">
        <div class="sv-hero-badge-dot"></div>
        <span class="sv-hero-badge-text" data-i18n="logistics.hero_badge">Logistics Services</span>
    </div>
    <h1 class="sv-hero-title" data-i18n="logistics.hero_title">International<br>Logistics from China</h1>
    <p class="sv-hero-desc" data-i18n="logistics.hero_desc">We organize cargo delivery from China to Central Asia, Russia, and other global destinations with full operational control. We manage every stage of the logistics process — from cargo pickup and consolidation to documentation, customs clearance, and final delivery.<br><br>Each shipment is carefully planned, with optimized routing, controlled timelines, and full transparency throughout the process. Reliability, speed, and a systematic approach define our standards.</p>
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
        <p class="sv-section-desc" data-i18n="logistics.routes_desc">For each route, we select the most efficient transport model and ensure full operational control.</p>
    </div>
    <div class="sv-routes-grid">
        <div class="sv-route-card">
            <div class="sv-route-number">01 — ORIGIN</div>
            <div class="sv-route-country" data-i18n="logistics.route1_country">China</div>
            <div class="sv-route-subtitle" data-i18n="logistics.route1_sub">Origin hubs</div>
            <div class="sv-route-desc" data-i18n="logistics.route1_desc">Guangzhou, Shenzhen, Yiwu, Shanghai, and other industrial regions. Cargo consolidation, warehousing, and export preparation.</div>
        </div>
        <div class="sv-route-card">
            <div class="sv-route-number">02 — DESTINATION</div>
            <div class="sv-route-country" data-i18n="logistics.route2_country">Russia</div>
            <div class="sv-route-subtitle" data-i18n="logistics.route2_sub">Road / Rail</div>
            <div class="sv-route-desc" data-i18n="logistics.route2_desc">Delivery across all regions of Russia. Stable logistics routes via truck and rail. Transit time: 20–25 days.</div>
        </div>
        <div class="sv-route-card">
            <div class="sv-route-number">03 — DESTINATION</div>
            <div class="sv-route-country" data-i18n="logistics.route3_country">Central Asia</div>
            <div class="sv-route-subtitle" data-i18n="logistics.route3_sub">Key market</div>
            <div class="sv-route-desc" data-i18n="logistics.route3_desc">Uzbekistan, Kazakhstan, Kyrgyzstan — key markets. Regular shipments via road and rail transport. Transit time: 7–15 days.</div>
        </div>
        <div class="sv-route-card">
            <div class="sv-route-number">04 — DESTINATION</div>
            <div class="sv-route-country" data-i18n="logistics.route4_country">USA</div>
            <div class="sv-route-subtitle" data-i18n="logistics.route4_sub">Sea freight</div>
            <div class="sv-route-desc" data-i18n="logistics.route4_desc">Container shipping (FCL / LCL). Port-to-port and door-to-door solutions available. Transit time: 25–40 days.</div>
        </div>
    </div>
</div>

<!-- Services -->
<div class="sv-section sv-fade-in" id="services">
    <div class="sv-section-header">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="logistics.services_label">OUR SERVICES</span></div>
        <h2 class="sv-section-title" data-i18n="logistics.services_title">Integrated logistics system</h2>
        <p class="sv-section-desc" data-i18n="logistics.services_desc">From China to the final destination — a single, fully managed logistics chain without intermediaries.</p>
    </div>
    <div class="sv-cards-grid sv-cards-grid--4col">
        <div class="sv-card" data-card="card1">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
            <div class="sv-card-title" data-i18n="logistics.card1_title">Road freight</div>
            <div class="sv-card-desc" data-i18n="logistics.card1_desc">We organize fast and flexible cargo delivery from China to Central Asia and Russia via road transport. Door-to-door service, optimized routes, and full shipment control at every stage.</div>
        </div>
        <div class="sv-card" data-card="card2">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="15" rx="2"/><line x1="4" y1="11" x2="20" y2="11"/><circle cx="8.5" cy="14.5" r="1"/><circle cx="15.5" cy="14.5" r="1"/><path d="M8 18l-2 3M16 18l2 3"/></svg></div>
            <div class="sv-card-title" data-i18n="logistics.card2_title">Rail freight</div>
            <div class="sv-card-desc" data-i18n="logistics.card2_desc">A stable and cost-efficient solution for large-volume shipments. Rail transport ensures reliable transit times, cargo safety, and optimized costs.</div>
        </div>
        <div class="sv-card" data-card="card3">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
            <div class="sv-card-title" data-i18n="logistics.card3_title">Sea freight</div>
            <div class="sv-card-desc" data-i18n="logistics.card3_desc">Container shipping (FCL / LCL) for long-distance routes. We manage the entire export process while maintaining the best balance between cost and transit time.</div>
        </div>
        <div class="sv-card" data-card="card4">
            <div class="sv-card-icon"><svg viewBox="0 0 24 24"><path d="M12 2l8 3v7c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3z"/><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="sv-card-title" data-i18n="logistics.card4_title">Customs clearance</div>
            <div class="sv-card-desc" data-i18n="logistics.card4_desc">Full support for export-import customs procedures. We handle documentation, declarations, and ensure smooth and risk-free clearance.</div>
        </div>
    </div>
</div>

<!-- Stats -->
<div class="sv-section sv-fade-in" style="padding-top:0; padding-bottom:0">
    <div class="sv-stats-row" style="border-top:1px solid var(--sv-border-thin); border-bottom:1px solid var(--sv-border-thin)">
        <div class="sv-stat-item"><div class="sv-stat-number">30+</div><div class="sv-stat-label" data-i18n="logistics.stat1">Delivery Destinations</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">99%</div><div class="sv-stat-label" data-i18n="logistics.stat2">Loss-Free Deliveries</div></div>
        <div class="sv-stat-item"><div class="sv-stat-number">700+</div><div class="sv-stat-label" data-i18n="logistics.stat3">Successful Shipments</div></div>
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

<!-- Logistics Service Modal -->
<div id="logisticsServiceModal" class="sv-lmodal" aria-hidden="true">
    <div class="sv-lmodal-overlay"></div>
    <div class="sv-lmodal-content" role="dialog" aria-modal="true">
        <button class="sv-lmodal-close" type="button" aria-label="Close">&times;</button>
        <div class="sv-lmodal-body">
            <h2 class="sv-lmodal-title" data-lmodal="title"></h2>
            <p class="sv-lmodal-hero" data-lmodal="hero"></p>

            <h3 class="sv-lmodal-heading" data-lmodal="aboutTitle"></h3>
            <p class="sv-lmodal-text" data-lmodal="about"></p>

            <h3 class="sv-lmodal-heading" data-lmodal="howTitle"></h3>
            <ol class="sv-lmodal-list sv-lmodal-list--ol" data-lmodal="steps"></ol>
            <p class="sv-lmodal-note" data-lmodal="stepsNote"></p>

            <h3 class="sv-lmodal-heading" data-lmodal="advTitle"></h3>
            <ul class="sv-lmodal-list" data-lmodal="advantages"></ul>

            <h3 class="sv-lmodal-heading" data-lmodal="suitTitle"></h3>
            <ul class="sv-lmodal-list" data-lmodal="suitable"></ul>

            <div class="sv-lmodal-cta">
                <p data-lmodal="ctaDesc"></p>
                <div class="sv-lmodal-cta-btns">
                    <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="sv-btn-primary" data-i18n="logistics.hero_btn1">Calculate Cost</a>
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
