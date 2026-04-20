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
                    <div class="logo-text">Davs<span>Global</span></div>
                </a>
                <p data-i18n="footer.brand_desc"><?php bloginfo('description'); ?></p>
            </div>
            <div class="footer-column">
                <h4 data-i18n="footer.services">Services</h4>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/trading/')); ?>" data-i18n="nav.trading">Trading</a></li>
                    <li><a href="<?php echo esc_url(home_url('/logistics/')); ?>" data-i18n="nav.logistics">Logistics</a></li>
                    <li><a href="<?php echo esc_url(home_url('/equipment/')); ?>" data-i18n="nav.equipment">Equipment</a></li>
                    <li><a href="<?php echo esc_url(home_url('/consulting/')); ?>" data-i18n="nav.consulting">Consulting</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4 data-i18n="footer.company">Company</h4>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/#about')); ?>" data-i18n="about.label">About Us</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contacts/')); ?>" data-i18n="nav.contacts">Contacts</a></li>
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
                    <li><a href="mailto:<?php echo antispambot(get_theme_mod('gt_email','contact@firmbuilder.asia')); ?>">
                        <?php echo antispambot(get_theme_mod('gt_email','contact@firmbuilder.asia')); ?>
                    </a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p data-i18n="footer.copyright">© <?php echo date('Y'); ?> Davs Global. All rights reserved.</p>
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

<?php
$gt_telegram  = get_theme_mod('gt_telegram', 'https://t.me/davsglobal');
$gt_instagram = get_theme_mod('gt_instagram', 'https://instagram.com/davsglobal');
$gt_whatsapp  = get_theme_mod('gt_whatsapp', '998900000000');
$gt_phone     = get_theme_mod('gt_phone_primary', '+998 90 000 00 00');
if ($gt_telegram || $gt_instagram || $gt_whatsapp || $gt_phone) :
?>
<aside class="gt-float-panel" aria-label="Quick contact">
    <?php if ($gt_telegram) : ?>
    <a class="gt-float-btn" href="<?php echo esc_url($gt_telegram); ?>" target="_blank" rel="noopener" data-label="Telegram" aria-label="Telegram">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
    </a>
    <?php endif; ?>

    <?php if ($gt_instagram) : ?>
    <a class="gt-float-btn" href="<?php echo esc_url($gt_instagram); ?>" target="_blank" rel="noopener" data-label="Instagram" aria-label="Instagram">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-linecap="round"/></svg>
    </a>
    <?php endif; ?>

    <?php if ($gt_whatsapp) :
        $wa_num = preg_replace('/\D+/', '', $gt_whatsapp);
    ?>
    <a class="gt-float-btn" href="https://wa.me/<?php echo esc_attr($wa_num); ?>" target="_blank" rel="noopener" data-label="WhatsApp" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.7"/></svg>
    </a>
    <?php endif; ?>

    <?php if ($gt_phone) : ?>
    <a class="gt-float-btn" href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', $gt_phone)); ?>" data-label="<?php echo esc_attr($gt_phone); ?>" aria-label="Call <?php echo esc_attr($gt_phone); ?>">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <?php endif; ?>
</aside>
<?php endif; ?>

<?php wp_footer(); ?>
</body>
</html>
