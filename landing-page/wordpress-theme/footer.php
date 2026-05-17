<?php
$gt_telegram  = get_theme_mod('gt_telegram', 'https://t.me/Shanghaicompany');
$gt_instagram = get_theme_mod('gt_instagram', 'https://www.instagram.com/davs_china/');
$gt_wechat_qr = get_theme_mod('gt_wechat_qr');
if ($gt_wechat_qr === '' || $gt_wechat_qr === null) {
    $gt_wechat_qr = get_template_directory_uri() . '/assets/wechat-qr.png';
}
$gt_phone = get_theme_mod('gt_phone_primary', '+998930777700');
?>
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
                <a href="<?php echo esc_url(get_theme_mod('gt_linkedin')); ?>" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <?php endif; ?>
                <?php if ($gt_wechat_qr) : ?>
                <button type="button" class="social-link social-link--btn" data-gt-wechat-open data-gt-wechat-always-modal aria-label="WeChat" aria-controls="gt-wechat-dialog" aria-haspopup="dialog">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-5.507 2.57-7.043 1.524-.983 3.425-1.457 5.335-1.457C21.109 5.188 17.218 2.188 12.418 2.188h-3.727zm-.872 5.563c-.698 0-1.263-.565-1.263-1.263s.565-1.263 1.263-1.263 1.263.565 1.263 1.263-.565 1.263-1.263 1.263zm5.813 0c-.698 0-1.263-.565-1.263-1.263s.565-1.263 1.263-1.263 1.263.565 1.263 1.263-.565 1.263-1.263 1.263zm5.34 2.867c-3.254 0-5.905 2.214-5.905 4.94 0 1.748 1.135 3.285 2.863 4.162a.59.59 0 0 1 .213.665l-.39 1.48a.285.285 0 0 0 .048.213c.08.14.238.178.377.098l1.903-1.114a.864.864 0 0 1 .717-.098 9.84 9.84 0 0 0 3.077.486c3.254 0 5.905-2.214 5.905-4.94 0-2.726-2.651-4.952-5.905-4.952z"/></svg>
                </button>
                <?php endif; ?>
            </div>
        </div>
    </div>
</footer>

<?php
if ($gt_telegram || $gt_instagram || $gt_wechat_qr || $gt_phone) :
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

    <?php if ($gt_wechat_qr) : ?>
    <div class="gt-float-wechat-wrap">
        <button type="button" class="gt-float-btn gt-float-btn--wechat" data-gt-wechat-open aria-label="WeChat" aria-haspopup="dialog" aria-controls="gt-wechat-dialog">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-5.507 2.57-7.043 1.524-.983 3.425-1.457 5.335-1.457C21.109 5.188 17.218 2.188 12.418 2.188h-3.727zm-.872 5.563c-.698 0-1.263-.565-1.263-1.263s.565-1.263 1.263-1.263 1.263.565 1.263 1.263-.565 1.263-1.263 1.263zm5.813 0c-.698 0-1.263-.565-1.263-1.263s.565-1.263 1.263-1.263 1.263.565 1.263 1.263-.565 1.263-1.263 1.263zm5.34 2.867c-3.254 0-5.905 2.214-5.905 4.94 0 1.748 1.135 3.285 2.863 4.162a.59.59 0 0 1 .213.665l-.39 1.48a.285.285 0 0 0 .048.213c.08.14.238.178.377.098l1.903-1.114a.864.864 0 0 1 .717-.098 9.84 9.84 0 0 0 3.077.486c3.254 0 5.905-2.214 5.905-4.94 0-2.726-2.651-4.952-5.905-4.952z"/></svg>
        </button>
        <div class="gt-wechat-qr-hover" aria-hidden="true">
            <img src="<?php echo esc_url($gt_wechat_qr); ?>" width="220" height="220" alt="" loading="lazy" decoding="async">
            <p class="gt-wechat-qr-hover__hint"><?php echo esc_html(__('Scan to add WeChat', 'globaltech')); ?></p>
        </div>
    </div>
    <?php endif; ?>

    <?php if ($gt_phone) : ?>
    <a class="gt-float-btn" href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', $gt_phone)); ?>" data-label="<?php echo esc_attr($gt_phone); ?>" aria-label="Call <?php echo esc_attr($gt_phone); ?>">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <?php endif; ?>
</aside>
<?php endif; ?>
<?php if ($gt_wechat_qr) : ?>
<dialog class="gt-wechat-dialog" id="gt-wechat-dialog" aria-labelledby="gt-wechat-dialog-title">
    <div class="gt-wechat-dialog__inner">
        <button type="button" class="gt-wechat-dialog__close" aria-label="<?php echo esc_attr(__('Close', 'globaltech')); ?>">&times;</button>
        <h2 id="gt-wechat-dialog-title" class="gt-wechat-dialog__title"><?php echo esc_html(__('WeChat', 'globaltech')); ?></h2>
        <img class="gt-wechat-dialog__qr" src="<?php echo esc_url($gt_wechat_qr); ?>" width="260" height="260" alt="<?php echo esc_attr(__('WeChat QR code', 'globaltech')); ?>" loading="lazy" decoding="async">
        <p class="gt-wechat-dialog__hint"><?php echo esc_html(__('Scan the QR code to add us on WeChat.', 'globaltech')); ?></p>
    </div>
</dialog>
<?php endif; ?>

<?php wp_footer(); ?>
</body>
</html>
