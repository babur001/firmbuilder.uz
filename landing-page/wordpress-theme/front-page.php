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
        <div class="services-grid">
            <?php
            $services = [
                ['icon' => 'procurement', 'title_key' => 'services.procurement.title', 'desc_key' => 'services.procurement.desc', 'image' => 'assets/images/service-procurement.jpg'],
                ['icon' => 'logistics',   'title_key' => 'services.logistics.title',   'desc_key' => 'services.logistics.desc',   'image' => 'assets/images/service-logistics.jpg'],
                ['icon' => 'consulting',  'title_key' => 'services.consulting.title',  'desc_key' => 'services.consulting.desc',  'image' => 'assets/images/service-consulting.jpg'],
            ];
            $icons = [
                'procurement' => '<svg viewBox="0 0 64 64"><rect x="8" y="20" width="48" height="36" rx="2"/><path d="M8 28h48"/><circle cx="32" cy="42" r="8"/><path d="M20 8h24v12H20z"/></svg>',
                'logistics'   => '<svg viewBox="0 0 64 64"><path d="M4 44h12l8-20h16l8 20h12"/><circle cx="12" cy="48" r="4"/><circle cx="52" cy="48" r="4"/><rect x="20" y="16" width="24" height="16" rx="2"/></svg>',
                'consulting'  => '<svg viewBox="0 0 64 64"><circle cx="32" cy="20" r="12"/><path d="M16 56c0-8.8 7.2-16 16-16s16 7.2 16 16"/><path d="M44 20l12 8"/><circle cx="56" cy="28" r="4"/></svg>',
            ];
            foreach ($services as $s) : ?>
            <a href="<?php echo esc_url(home_url('/services/#' . $s['icon'])); ?>" class="service-card reveal"
                 data-service="<?php echo esc_attr($s['icon']); ?>"
                 data-service-image="<?php echo esc_url(get_template_directory_uri() . '/' . $s['image']); ?>">
                <div class="service-icon"><?php echo $icons[$s['icon']]; ?></div>
                <h3 data-i18n="<?php echo $s['title_key']; ?>">Service</h3>
                <p data-i18n="<?php echo $s['desc_key']; ?>">Description</p>
                <span class="service-link">
                    <span data-i18n="services.learn_more">Learn More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
            </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ===== SERVICE MODAL ===== -->
<div class="service-modal" id="serviceModal">
    <div class="service-modal-overlay"></div>
    <div class="service-modal-content">
        <button class="service-modal-close" id="serviceModalClose" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div class="service-modal-image">
            <img id="serviceModalImage" src="" alt="">
        </div>
        <div class="service-modal-body">
            <div class="service-modal-icon" id="serviceModalIcon"></div>
            <h2 id="serviceModalTitle"></h2>
            <p class="service-modal-desc" id="serviceModalDesc"></p>
            <ul class="service-modal-features" id="serviceModalFeatures"></ul>
            <a href="#contact" class="btn-primary service-modal-cta" id="serviceModalCta">
                <span data-i18n="hero.btn_contact">Get in Touch</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </a>
        </div>
    </div>
</div>

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

<!-- ===== GALLERY ===== -->
<section class="gallery" id="equipment">
    <div class="container">
        <div class="gallery-header">
            <div class="reveal">
                <div class="section-label" data-i18n="gallery.label">Our Portfolio</div>
                <h2 data-i18n="gallery.title">Featured Equipment</h2>
            </div>
        </div>
        <div class="gallery-grid">
            <?php
            $items = [
                ['src' => 'assets/images/gallery-heavy-machinery.jpg', 'alt' => 'Heavy Machinery',       'key' => 'item1', 'title' => 'gallery.item1.title', 'desc' => 'gallery.item1.desc'],
                ['src' => 'assets/images/gallery-construction.jpg',  'alt' => 'Construction Equipment', 'key' => 'item2', 'title' => 'gallery.item2.title', 'desc' => 'gallery.item2.desc'],
                ['src' => 'assets/images/gallery-mining.jpg',        'alt' => 'Mining Equipment',       'key' => 'item3', 'title' => 'gallery.item3.title', 'desc' => 'gallery.item3.desc'],
                ['src' => 'assets/images/gallery-logistics.jpg',     'alt' => 'Logistics Fleet',        'key' => 'item4', 'title' => 'gallery.item4.title', 'desc' => 'gallery.item4.desc'],
                ['src' => 'assets/images/gallery-manufacturing.jpg', 'alt' => 'Manufacturing',           'key' => 'item5', 'title' => 'gallery.item5.title', 'desc' => 'gallery.item5.desc'],
            ];
            foreach ($items as $i => $item) : ?>
            <div class="gallery-item reveal<?php echo $i === 0 ? ' large' : ''; ?>"
                 data-gallery="<?php echo esc_attr($item['key']); ?>"
                 data-gallery-image="<?php echo esc_url(get_template_directory_uri() . '/' . $item['src']); ?>">
                <img src="<?php echo get_template_directory_uri() . '/' . $item['src']; ?>" alt="<?php echo esc_attr($item['alt']); ?>">
                <div class="gallery-item-overlay">
                    <h4 data-i18n="<?php echo $item['title']; ?>"><?php echo $item['alt']; ?></h4>
                    <p data-i18n="<?php echo $item['desc']; ?>"></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ===== GALLERY MODAL ===== -->
<div class="gallery-modal" id="galleryModal">
    <div class="gallery-modal-overlay"></div>
    <div class="gallery-modal-content">
        <button class="gallery-modal-close" id="galleryModalClose" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div class="gallery-modal-image">
            <img id="galleryModalImage" src="" alt="">
        </div>
        <div class="gallery-modal-body">
            <h2 id="galleryModalTitle"></h2>
            <p class="gallery-modal-desc" id="galleryModalDesc"></p>
            <ul class="gallery-modal-specs" id="galleryModalSpecs"></ul>
            <a href="#contact" class="btn-primary gallery-modal-cta" id="galleryModalCta">
                <span data-i18n="cta.btn_start">Start a Project</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
        </div>
    </div>
</div>

<!-- ===== RECENT POSTS (WordPress) ===== -->
<section class="blog-section" id="blog">
    <div class="container">
        <div class="blog-header reveal">
            <div class="section-label" data-i18n="blog.label">Latest News</div>
            <h2 data-i18n="blog.title">Industry Insights</h2>
            <p data-i18n="blog.description">Stay updated with the latest trends.</p>
        </div>
        <div class="blog-grid" id="blogGrid">
            <?php
            $recent = new WP_Query(['posts_per_page' => 3, 'post_status' => 'publish']);
            if ($recent->have_posts()) :
                while ($recent->have_posts()) : $recent->the_post();
                $cat = get_the_category();
            ?>
            <a href="<?php the_permalink(); ?>" class="blog-card reveal">
                <div class="blog-card-image">
                    <?php if (has_post_thumbnail()) : the_post_thumbnail('globaltech-blog-card');
                    else : ?><div class="blog-card-image-placeholder">⚙</div><?php endif; ?>
                </div>
                <div class="blog-card-meta">
                    <?php if ($cat) : ?><span class="blog-card-category"><?php echo esc_html($cat[0]->name); ?></span><?php endif; ?>
                    <span class="blog-card-date"><?php echo get_the_date(); ?></span>
                </div>
                <div class="blog-card-body">
                    <h3><?php the_title(); ?></h3>
                    <p><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                </div>
            </a>
            <?php endwhile; wp_reset_postdata();
            else : ?>
            <!-- No WordPress posts yet — JS will render sample cards -->
            <?php endif; ?>
        </div>
        <div class="blog-footer">
            <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="btn-secondary" data-i18n="blog.view_all">View All Articles</a>
        </div>
    </div>
</section>

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
                <a href="#contact" class="btn-primary">
                    <span data-i18n="cta.btn_start">Start a Project</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#" class="btn-secondary"><span data-i18n="cta.btn_brochure">Download Brochure</span></a>
            </div>
        </div>
    </div>
</section>

<!-- ===== CONTACT ===== -->
<section class="contact-section" id="contact">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-info reveal">
                <div class="section-label" data-i18n="contact.label">Get In Touch</div>
                <h2 data-i18n="contact.title">Contact Us</h2>
                <p data-i18n="contact.description">Ready to discuss your needs? Our team is available.</p>
                <div class="contact-details">
                    <div class="contact-detail">
                        <div class="contact-detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                        <div class="contact-detail-text">
                            <strong>China Office</strong>
                            <span><?php echo esc_html(get_theme_mod('gt_china_address', 'Guangzhou, Guangdong, China')); ?></span>
                            <?php if (get_theme_mod('gt_china_phone')) : ?>
                            <br><a href="tel:<?php echo esc_attr(get_theme_mod('gt_china_phone')); ?>"><?php echo esc_html(get_theme_mod('gt_china_phone')); ?></a>
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="contact-detail">
                        <div class="contact-detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                        <div class="contact-detail-text">
                            <strong>Uzbekistan Office</strong>
                            <span><?php echo esc_html(get_theme_mod('gt_uz_address', 'Tashkent, Uzbekistan')); ?></span>
                            <?php if (get_theme_mod('gt_uz_phone')) : ?>
                            <br><a href="tel:<?php echo esc_attr(get_theme_mod('gt_uz_phone')); ?>"><?php echo esc_html(get_theme_mod('gt_uz_phone')); ?></a>
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="contact-detail">
                        <div class="contact-detail-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                        <div class="contact-detail-text">
                            <strong>Email</strong>
                            <a href="mailto:<?php echo antispambot(get_theme_mod('gt_email', 'info@globaltech.com')); ?>">
                                <?php echo antispambot(get_theme_mod('gt_email', 'info@globaltech.com')); ?>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reveal">
                <form class="contact-form" id="contactForm" novalidate>
                    <?php wp_nonce_field('gt_contact', 'gt_nonce'); ?>
                    <div class="form-row">
                        <div class="form-group">
                            <label data-i18n="contact.name">Full Name</label>
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label data-i18n="contact.email">Email</label>
                            <input type="email" name="email" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label data-i18n="contact.company">Company</label>
                            <input type="text" name="company">
                        </div>
                        <div class="form-group">
                            <label data-i18n="contact.service">Service</label>
                            <select name="service">
                                <option value="" data-i18n="contact.service_default">Select...</option>
                                <option value="procurement" data-i18n="contact.service_procurement">Equipment Procurement</option>
                                <option value="logistics" data-i18n="contact.service_logistics">Logistics</option>
                                <option value="consulting" data-i18n="contact.service_consulting">Consulting</option>
                                <option value="other" data-i18n="contact.service_other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label data-i18n="contact.message">Message</label>
                        <textarea name="message" rows="5"></textarea>
                    </div>
                    <div id="formStatus" class="form-status"></div>
                    <button type="submit" class="btn-primary" style="width:100%;justify-content:center;">
                        <span data-i18n="contact.submit">Send Message</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
