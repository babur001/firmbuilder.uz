<?php
/**
 * GlobalTech Industries — WordPress Theme
 * front-page.php — Landing page template
 * WordPress uses this file when a static front page is set.
 */
get_header();
?>

<!-- The full landing page is here. Content matches index.html but now uses WP functions. -->

<!-- ===== HERO ===== -->
<section class="hero">
    <div class="hero-background">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero-bg.jpg" alt="Industrial background">
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-geometric">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path d="M0 15 L30 50 L0 85 L40 85 L70 50 L40 15 Z" fill="white"/>
        </svg>
    </div>
    <div class="container hero-content">
        <div class="hero-badge"><span data-i18n="hero.badge">Global Industrial Solutions</span></div>
        <h1 data-i18n="hero.title">Powering <span class="highlight">Global</span><br>Industrial Growth</h1>
        <p class="hero-description" data-i18n="hero.description">Premier procurement, logistics, and consulting services for industrial enterprises.</p>
        <div class="hero-buttons">
            <a href="#services" class="btn-primary">
                <span data-i18n="hero.btn_explore">Explore Services</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" class="btn-secondary">
                <span data-i18n="hero.btn_contact">Get in Touch</span>
            </a>
        </div>
    </div>
    <div class="hero-scroll">
        <span data-i18n="hero.scroll">SCROLL</span>
        <div class="scroll-line"></div>
    </div>
</section>

<!-- ===== SERVICES ===== -->
<section class="services" id="services">
    <div class="container">
        <div class="services-header reveal">
            <div class="section-label" data-i18n="services.label">What We Do</div>
            <h2 data-i18n="services.title">Core Services</h2>
            <p data-i18n="services.description">Comprehensive industrial solutions for global enterprises.</p>
        </div>
        <div class="services-grid services-grid--4">
            <a href="<?php echo esc_url(home_url('/trading/')); ?>" class="service-card reveal">
                <div class="service-icon">
                    <svg viewBox="0 0 64 64"><circle cx="28" cy="28" r="20"/><path d="M52 52l-11-11"/><path d="M20 20h16v16H20z"/></svg>
                </div>
                <h3 data-i18n="nav.trading">Trading</h3>
                <p data-i18n="services.trading.desc">Professional sourcing, supplier verification, and procurement of industrial equipment with quality guarantees.</p>
                <span class="service-link">
                    <span data-i18n="services.learn_more">Learn More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
            </a>
            <a href="<?php echo esc_url(home_url('/logistics/')); ?>" class="service-card reveal">
                <div class="service-icon">
                    <svg viewBox="0 0 64 64"><rect x="4" y="16" width="36" height="28"/><polygon points="40 24 52 24 58 32 58 44 40 44 40 24"/><circle cx="14" cy="48" r="6"/><circle cx="48" cy="48" r="6"/></svg>
                </div>
                <h3 data-i18n="nav.logistics">Logistics</h3>
                <p data-i18n="services.logistics_main.desc">Full-cycle logistics from China: air, sea, and rail freight with customs clearance and door-to-door delivery.</p>
                <span class="service-link">
                    <span data-i18n="services.learn_more">Learn More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
            </a>
            <a href="<?php echo esc_url(home_url('/consulting/')); ?>" class="service-card reveal">
                <div class="service-icon">
                    <svg viewBox="0 0 64 64"><circle cx="32" cy="20" r="12"/><path d="M16 56c0-8.8 7.2-16 16-16s16 7.2 16 16"/><path d="M44 20l12 8"/><circle cx="56" cy="28" r="4"/></svg>
                </div>
                <h3 data-i18n="nav.consulting">Consulting</h3>
                <p data-i18n="services.consulting_main.desc">Company registration, visa services, and document preparation for doing business in China and Hong Kong.</p>
                <span class="service-link">
                    <span data-i18n="services.learn_more">Learn More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
            </a>
            <a href="#contact" class="service-card reveal">
                <div class="service-icon">
                    <svg viewBox="0 0 64 64"><rect x="8" y="12" width="48" height="36" rx="4"/><path d="M8 20l24 16 24-16"/></svg>
                </div>
                <h3 data-i18n="nav.contacts">Contacts</h3>
                <p data-i18n="services.contacts.desc">Get in touch with our offices in China and Uzbekistan. We are always ready to discuss your project.</p>
                <span class="service-link">
                    <span data-i18n="services.learn_more">Learn More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
            </a>
        </div>
    </div>
</section>

<!-- ===== GLOBAL REACH ===== -->
<section class="global-reach" id="global">
    <div class="container">
        <div class="global-reach-grid">
            <div class="global-reach-content reveal">
                <div class="section-label" data-i18n="global.label">Worldwide Network</div>
                <h2 data-i18n="global.title">Global Reach,<br>Local Expertise</h2>
                <p data-i18n="global.description">Operating across four continents with established partnerships.</p>
                <div class="regions-list">
                    <div class="region-item"><div class="region-dot"></div><span data-i18n="global.eurasia">Eurasia</span></div>
                    <div class="region-item"><div class="region-dot"></div><span data-i18n="global.central_asia">Central Asia</span></div>
                    <div class="region-item"><div class="region-dot"></div><span data-i18n="global.north_america">North America</span></div>
                    <div class="region-item"><div class="region-dot"></div><span data-i18n="global.south_america">South America</span></div>
                </div>
            </div>
            <div class="map-container reveal">
                <img class="world-map" src="<?php echo get_template_directory_uri(); ?>/images/world-map.svg" alt="World map" loading="lazy">
                <!-- Trade route overlay (coordinates match 1010×666 viewBox) -->
                <svg class="map-routes" viewBox="0 0 1010 666" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M786,354 Q720,300 666,336" stroke="#2196F3" stroke-width="1.2" stroke-dasharray="6 4" opacity="0.6"/>
                    <path d="M666,336 Q580,270 505,340 Q360,270 231,330" stroke="#2196F3" stroke-width="1.2" stroke-dasharray="6 4" opacity="0.6"/>
                    <path d="M231,330 Q275,420 321,479" stroke="#2196F3" stroke-width="1.2" stroke-dasharray="6 4" opacity="0.6"/>
                </svg>
                <div class="map-point china"></div>
                <div class="map-point uzbekistan"></div>
                <div class="map-point usa"></div>
                <div class="map-point brazil"></div>
            </div>
        </div>
    </div>
</section>

<!-- ===== TRUST ===== -->
<section class="trust">
    <div class="container">
        <div class="trust-grid">
            <div class="trust-item reveal"><div class="trust-number" data-target="15">15+</div><div class="trust-label" data-i18n="trust.years">Years Experience</div></div>
            <div class="trust-item reveal"><div class="trust-number" data-target="500">500+</div><div class="trust-label" data-i18n="trust.projects">Projects Completed</div></div>
            <div class="trust-item reveal"><div class="trust-number" data-target="50">50+</div><div class="trust-label" data-i18n="trust.partners">Global Partners</div></div>
            <div class="trust-item reveal"><div class="trust-number" data-target="4">4</div><div class="trust-label" data-i18n="trust.continents">Continents</div></div>
        </div>
    </div>
</section>

<!-- ===== ABOUT US ===== -->
<section class="about-section" id="about">
    <div class="container">
        <div class="about-grid">
            <div class="about-content reveal">
                <div class="section-label" data-i18n="about.label">About Us</div>
                <h2 data-i18n="about.title">GlobalTech Industries</h2>
                <p class="about-desc" data-i18n="about.desc">We are a team of professionals specializing in international trade, logistics, and business consulting. With offices in China and Uzbekistan, we help businesses establish reliable supply chains and navigate the complexities of cross-border commerce.</p>
                <div class="about-features">
                    <div class="about-feature">
                        <div class="about-feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                        <div>
                            <strong data-i18n="about.feature1_title">Verified Suppliers</strong>
                            <p data-i18n="about.feature1_desc">500+ checked manufacturers and suppliers from China</p>
                        </div>
                    </div>
                    <div class="about-feature">
                        <div class="about-feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </div>
                        <div>
                            <strong data-i18n="about.feature2_title">Global Presence</strong>
                            <p data-i18n="about.feature2_desc">Offices in Guangzhou and Tashkent with delivery to 15+ countries</p>
                        </div>
                    </div>
                    <div class="about-feature">
                        <div class="about-feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <div>
                            <strong data-i18n="about.feature3_title">Quality Guarantee</strong>
                            <p data-i18n="about.feature3_desc">Full quality control at every stage of procurement and delivery</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-stats reveal">
                <div class="about-stat-card">
                    <div class="about-stat-number">8+</div>
                    <div class="about-stat-label" data-i18n="about.stat_years">Years on the market</div>
                </div>
                <div class="about-stat-card">
                    <div class="about-stat-number">1200+</div>
                    <div class="about-stat-label" data-i18n="about.stat_deals">Successful deals</div>
                </div>
                <div class="about-stat-card">
                    <div class="about-stat-number">15</div>
                    <div class="about-stat-label" data-i18n="about.stat_countries">Countries of presence</div>
                </div>
                <div class="about-stat-card">
                    <div class="about-stat-number">99%</div>
                    <div class="about-stat-label" data-i18n="about.stat_delivery">Deliveries without losses</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== CONTACT FORM (shared) ===== -->
<div class="sv-page">
<?php get_template_part('template-parts/contact-form'); ?>
</div>

<?php get_footer(); ?>
