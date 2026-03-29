<?php
/**
 * Shared contact form section — "Оставьте заявку"
 * Used on front-page.php and page-contacts.php
 */
?>
<div class="sv-section sv-fade-in" id="contact">
    <div class="sv-section-header" style="margin-bottom:48px">
        <div class="sv-section-label"><div class="sv-section-label-line"></div><span class="sv-section-label-text" data-i18n="contact.form_label">WRITE TO US</span></div>
        <h2 class="sv-section-title" data-i18n="contact.form_title">Submit a Request</h2>
    </div>
    <div class="sv-contact-form-section">
        <form class="sv-contact-form" id="contactForm" novalidate>
            <?php wp_nonce_field('gt_contact', 'gt_nonce'); ?>
            <div class="sv-form-row">
                <div class="sv-form-group">
                    <label class="sv-form-label" data-i18n="contact.name">Name</label>
                    <input class="sv-form-input" type="text" name="name" placeholder="<?php esc_attr_e('Your name', 'globaltech'); ?>" data-i18n-placeholder="contact.name_placeholder" required>
                </div>
                <div class="sv-form-group">
                    <label class="sv-form-label" data-i18n="contact.company">Company</label>
                    <input class="sv-form-input" type="text" name="company" placeholder="<?php esc_attr_e('Company name', 'globaltech'); ?>" data-i18n-placeholder="contact.company_placeholder">
                </div>
            </div>
            <div class="sv-form-row">
                <div class="sv-form-group">
                    <label class="sv-form-label" data-i18n="contact.email">Email</label>
                    <input class="sv-form-input" type="email" name="email" placeholder="email@company.com" required>
                </div>
                <div class="sv-form-group">
                    <label class="sv-form-label" data-i18n="contact.phone">Phone</label>
                    <input class="sv-form-input" type="tel" name="phone" placeholder="+998 90 000 00 00">
                </div>
            </div>
            <div class="sv-form-group">
                <label class="sv-form-label" data-i18n="contact.message">Message</label>
                <textarea class="sv-form-input" name="message" placeholder="<?php esc_attr_e('Describe your request...', 'globaltech'); ?>" data-i18n-placeholder="contact.message_placeholder" required></textarea>
            </div>
            <div id="formStatus" class="form-status"></div>
            <button type="submit" class="sv-btn-primary" style="width:fit-content">
                <span data-i18n="contact.submit">Submit Request</span>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
        </form>
        <div class="sv-contact-info">
            <div class="sv-contact-info-heading" data-i18n="contact.direct_title">Contact us directly</div>
            <div class="sv-contact-info-sub" data-i18n="contact.direct_desc">Our specialists will answer all questions during business hours. For urgent requests — call directly.</div>
            <div class="sv-contact-info-item">
                <div class="sv-contact-info-label" data-i18n="contact.general">General inquiry</div>
                <div class="sv-contact-info-value"><a href="mailto:<?php echo antispambot(get_theme_mod('gt_email', 'contact@firmbuilder.asia')); ?>"><?php echo antispambot(get_theme_mod('gt_email', 'contact@firmbuilder.asia')); ?></a></div>
            </div>
            <div class="sv-contact-info-item">
                <div class="sv-contact-info-label" data-i18n="nav.trading">Trading</div>
                <div class="sv-contact-info-value"><a href="mailto:sales@firmbuilder.asia">sales@firmbuilder.asia</a></div>
            </div>
            <div class="sv-contact-info-item">
                <div class="sv-contact-info-label" data-i18n="contact.phone_china">Phone (China)</div>
                <div class="sv-contact-info-value"><a href="tel:<?php echo esc_attr(get_theme_mod('gt_china_phone', '+8613116572036')); ?>"><?php echo esc_html(get_theme_mod('gt_china_phone', '+8613116572036')); ?></a></div>
            </div>
            <div class="sv-contact-info-item">
                <div class="sv-contact-info-label" data-i18n="contact.phone_tashkent">Phone (Tashkent)</div>
                <div class="sv-contact-info-value"><a href="tel:<?php echo esc_attr(get_theme_mod('gt_uz_phone', '+998930777700')); ?>"><?php echo esc_html(get_theme_mod('gt_uz_phone', '+998930777700')); ?></a></div>
            </div>
        </div>
    </div>
</div>
