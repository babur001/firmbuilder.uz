<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="logo" style="margin-bottom:1.5rem;display:inline-flex;">
                    <div class="logo-icon">
                        <svg viewBox="0 0 100 100" fill="none">
                            <path d="M20 15 L50 50 L20 85 L60 85 L90 50 L60 15 Z" fill="#0F3D5E"/>
                            <path d="M30 15 L60 50 L30 85" stroke="#2196F3" stroke-width="4" fill="none"/>
                        </svg>
                    </div>
                    <div class="logo-text">Global<span>Tech</span></div>
                </a>
                <p data-i18n="footer.brand_desc"><?php bloginfo('description'); ?></p>
            </div>
            <div class="footer-column">
                <h4 data-i18n="footer.services">Services</h4>
                <ul>
                    <li><a href="#services" data-i18n="footer.equipment_procurement">Equipment Procurement</a></li>
                    <li><a href="#services" data-i18n="footer.logistics_services">Logistics Services</a></li>
                    <li><a href="#services" data-i18n="footer.supplier_audit">Supplier Audit</a></li>
                    <li><a href="#services" data-i18n="footer.consulting">Consulting</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4 data-i18n="footer.company">Company</h4>
                <ul>
                    <li><a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>" data-i18n="footer.news">News</a></li>
                    <li><a href="#contact" data-i18n="nav.contact">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4 data-i18n="footer.contact">Contact</h4>
                <ul>
                    <li><a href="#contact" data-i18n="footer.china_office">China Office</a></li>
                    <?php if (get_theme_mod('gt_china_phone')) : ?>
                    <li><a href="tel:<?php echo esc_attr(get_theme_mod('gt_china_phone')); ?>"><?php echo esc_html(get_theme_mod('gt_china_phone')); ?></a></li>
                    <?php endif; ?>
                    <li><a href="#contact" data-i18n="footer.uzbekistan_office">Uzbekistan Office</a></li>
                    <?php if (get_theme_mod('gt_uz_phone')) : ?>
                    <li><a href="tel:<?php echo esc_attr(get_theme_mod('gt_uz_phone')); ?>"><?php echo esc_html(get_theme_mod('gt_uz_phone')); ?></a></li>
                    <?php endif; ?>
                    <li><a href="mailto:<?php echo antispambot(get_theme_mod('gt_email','info@globaltech.com')); ?>">
                        <?php echo antispambot(get_theme_mod('gt_email','info@globaltech.com')); ?>
                    </a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p data-i18n="footer.copyright">© <?php echo date('Y'); ?> GlobalTech Industries. All rights reserved.</p>
            <div class="footer-socials">
                <?php if (get_theme_mod('gt_linkedin')) : ?>
                <a href="<?php echo esc_url(get_theme_mod('gt_linkedin')); ?>" class="social-link" aria-label="LinkedIn" target="_blank">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
