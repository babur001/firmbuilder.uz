/* ===== GLOBALTECH INDUSTRIES — main.js ===== */

// ===== CONFIGURATION =====
// To connect WordPress: set WP_API_URL to your WordPress site URL + /wp-json/wp/v2
// Example: 'https://your-site.com/wp-json/wp/v2'
const WP_CONFIG = {
    apiUrl: '', // ← Paste your WordPress REST API URL here
    postsPerPage: 3,
    enabled: false // ← Set to true after configuring apiUrl
};

// Auto-detect: if running inside WordPress theme, use current origin
if (typeof wpConfig !== 'undefined' && wpConfig.apiUrl) {
    WP_CONFIG.apiUrl = wpConfig.apiUrl;
    WP_CONFIG.enabled = true;
}

// ===== TRANSLATIONS =====
const translations = {
    en: {
        'nav.services': 'Services',
        'nav.global': 'Global Reach',
        'nav.equipment': 'Equipment',
        'nav.about': 'About',
        'nav.contact': 'Contact Us',
        'hero.badge': 'Global Industrial Solutions',
        'hero.title': 'Powering <span class="highlight">Global</span><br>Industrial Growth',
        'hero.description': 'Premier procurement, logistics, and consulting services for industrial enterprises. Delivering excellence across continents with precision engineering expertise.',
        'hero.btn_explore': 'Explore Services',
        'hero.btn_contact': 'Get in Touch',
        'hero.scroll': 'SCROLL',
        'services.label': 'What We Do',
        'services.title': 'Core Services',
        'services.description': 'Comprehensive industrial solutions tailored for global enterprises seeking excellence in procurement, logistics, and strategic consulting.',
        'services.procurement.title': 'Equipment Procurement',
        'services.procurement.desc': 'Strategic sourcing of industrial machinery and equipment from verified global manufacturers with quality assurance.',
        'services.logistics.title': 'Logistics Services',
        'services.logistics.desc': 'End-to-end supply chain solutions including international shipping, customs clearance, and last-mile delivery.',
        'services.consulting.title': 'Strategic Consulting',
        'services.consulting.desc': 'Expert guidance on market entry, supplier audits, and operational optimization for industrial enterprises.',
        'services.learn_more': 'Learn More',
        'global.label': 'Worldwide Network',
        'global.title': 'Global Reach,<br>Local Expertise',
        'global.description': 'Operating across four continents with established partnerships and logistics infrastructure. Our network ensures seamless operations from source to destination.',
        'global.eurasia': 'Eurasia',
        'global.central_asia': 'Central Asia',
        'global.north_america': 'North America',
        'global.south_america': 'South America',
        'trust.years': 'Years Experience',
        'trust.projects': 'Projects Completed',
        'trust.partners': 'Global Partners',
        'trust.continents': 'Continents',
        'gallery.label': 'Our Portfolio',
        'gallery.title': 'Featured Equipment',
        'gallery.item1.title': 'Heavy Machinery',
        'gallery.item1.desc': 'Industrial excavators and loaders',
        'gallery.item2.title': 'Construction Equipment',
        'gallery.item2.desc': 'Cranes and lifting solutions',
        'gallery.item3.title': 'Mining Equipment',
        'gallery.item3.desc': 'Extraction and processing',
        'gallery.item4.title': 'Logistics Fleet',
        'gallery.item4.desc': 'Transportation and delivery',
        'gallery.item5.title': 'Manufacturing',
        'gallery.item5.desc': 'Production line equipment',
        'cta.label': 'Ready to Start?',
        'cta.title': "Let's Build Something<br>Extraordinary Together",
        'cta.description': 'Partner with industry leaders in procurement, logistics, and strategic consulting to achieve your global success.',
        'cta.btn_start': 'Start a Project',
        'cta.btn_brochure': 'Download Brochure',
        'contact.label': 'Get In Touch',
        'contact.title': 'Contact Us',
        'contact.description': 'Ready to discuss your industrial procurement and logistics needs? Our team is available to assist you.',
        'contact.name': 'Full Name',
        'contact.email': 'Email Address',
        'contact.company': 'Company Name',
        'contact.service': 'Service of Interest',
        'contact.service_default': 'Select a service...',
        'contact.service_procurement': 'Equipment Procurement',
        'contact.service_logistics': 'Logistics Services',
        'contact.service_consulting': 'Strategic Consulting',
        'contact.service_other': 'Other',
        'contact.message': 'Message',
        'contact.submit': 'Send Message',
        'contact.success': '✓ Your message has been sent. We\'ll get back to you within 24 hours.',
        'contact.error': '✗ Something went wrong. Please try again or email us directly.',
        'blog.label': 'Latest News',
        'blog.title': 'Industry Insights',
        'blog.description': 'Stay updated with the latest trends in industrial procurement and global logistics.',
        'blog.read_more': 'Read More',
        'blog.view_all': 'View All Articles',
        'blog.loading': 'Loading articles...',
        'blog.no_posts': 'No articles found. Check back soon.',
        'blog.sample_title_1': 'Global Supply Chain Trends in 2026',
        'blog.sample_title_2': 'Equipment Procurement Best Practices',
        'blog.sample_title_3': 'Logistics Innovation in Central Asia',
        'blog.sample_excerpt': 'Explore the latest developments in industrial procurement and how they affect global operations and efficiency.',
        'footer.brand_desc': 'Premium industrial procurement and logistics solutions for global enterprises. Delivering excellence across all continents.',
        'footer.services': 'Services',
        'footer.equipment_procurement': 'Equipment Procurement',
        'footer.logistics_services': 'Logistics Services',
        'footer.supplier_audit': 'Supplier Audit',
        'footer.consulting': 'Consulting',
        'footer.company': 'Company',
        'footer.about_us': 'About Us',
        'footer.our_team': 'Our Team',
        'footer.careers': 'Careers',
        'footer.news': 'News',
        'footer.contact': 'Contact',
        'footer.china_office': 'China Office',
        'footer.uzbekistan_office': 'Uzbekistan Office',
        'footer.copyright': '© 2026 GlobalTech Industries. All rights reserved.'
    },
    ru: {
        'nav.services': 'Услуги',
        'nav.global': 'География',
        'nav.equipment': 'Оборудование',
        'nav.about': 'О нас',
        'nav.contact': 'Связаться',
        'hero.badge': 'Глобальные промышленные решения',
        'hero.title': 'Обеспечиваем рост <span class="highlight">глобальной</span><br>промышленности',
        'hero.description': 'Премиальные услуги по закупкам, логистике и консалтингу для промышленных предприятий. Обеспечиваем превосходство на всех континентах.',
        'hero.btn_explore': 'Наши услуги',
        'hero.btn_contact': 'Связаться с нами',
        'hero.scroll': 'ВНИЗ',
        'services.label': 'Что мы делаем',
        'services.title': 'Основные услуги',
        'services.description': 'Комплексные промышленные решения для глобальных предприятий, стремящихся к совершенству в закупках, логистике и стратегическом консалтинге.',
        'services.procurement.title': 'Закупка оборудования',
        'services.procurement.desc': 'Стратегическое приобретение промышленных машин и оборудования у проверенных мировых производителей с гарантией качества.',
        'services.logistics.title': 'Логистические услуги',
        'services.logistics.desc': 'Комплексные решения в цепочке поставок, включая международные перевозки, таможенное оформление и доставку до конечного потребителя.',
        'services.consulting.title': 'Стратегический консалтинг',
        'services.consulting.desc': 'Экспертное руководство по выходу на рынок, аудиту поставщиков и оптимизации операций для промышленных предприятий.',
        'services.learn_more': 'Подробнее',
        'global.label': 'Мировая сеть',
        'global.title': 'Глобальный охват,<br>локальная экспертиза',
        'global.description': 'Работаем на четырёх континентах с налаженными партнёрскими связями и логистической инфраструктурой. Наша сеть обеспечивает бесперебойную работу от источника до места назначения.',
        'global.eurasia': 'Евразия',
        'global.central_asia': 'Центральная Азия',
        'global.north_america': 'Северная Америка',
        'global.south_america': 'Южная Америка',
        'trust.years': 'Лет опыта',
        'trust.projects': 'Завершённых проектов',
        'trust.partners': 'Глобальных партнёров',
        'trust.continents': 'Континента',
        'gallery.label': 'Наше портфолио',
        'gallery.title': 'Избранное оборудование',
        'gallery.item1.title': 'Тяжёлая техника',
        'gallery.item1.desc': 'Промышленные экскаваторы и погрузчики',
        'gallery.item2.title': 'Строительная техника',
        'gallery.item2.desc': 'Краны и подъёмные решения',
        'gallery.item3.title': 'Горнодобывающее оборудование',
        'gallery.item3.desc': 'Добыча и переработка',
        'gallery.item4.title': 'Логистический парк',
        'gallery.item4.desc': 'Транспортировка и доставка',
        'gallery.item5.title': 'Производство',
        'gallery.item5.desc': 'Оборудование производственных линий',
        'cta.label': 'Готовы начать?',
        'cta.title': 'Давайте вместе<br>создадим нечто выдающееся',
        'cta.description': 'Сотрудничайте с лидерами отрасли в области закупок, логистики и стратегического консалтинга для достижения глобального успеха.',
        'cta.btn_start': 'Начать проект',
        'cta.btn_brochure': 'Скачать брошюру',
        'contact.label': 'Свяжитесь с нами',
        'contact.title': 'Контакты',
        'contact.description': 'Готовы обсудить ваши потребности в промышленных закупках и логистике? Наша команда готова помочь.',
        'contact.name': 'Полное имя',
        'contact.email': 'Электронная почта',
        'contact.company': 'Название компании',
        'contact.service': 'Интересующая услуга',
        'contact.service_default': 'Выберите услугу...',
        'contact.service_procurement': 'Закупка оборудования',
        'contact.service_logistics': 'Логистические услуги',
        'contact.service_consulting': 'Стратегический консалтинг',
        'contact.service_other': 'Другое',
        'contact.message': 'Сообщение',
        'contact.submit': 'Отправить сообщение',
        'contact.success': '✓ Ваше сообщение отправлено. Мы ответим в течение 24 часов.',
        'contact.error': '✗ Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.',
        'blog.label': 'Последние новости',
        'blog.title': 'Отраслевые инсайты',
        'blog.description': 'Будьте в курсе последних тенденций в промышленных закупках и глобальной логистике.',
        'blog.read_more': 'Читать далее',
        'blog.view_all': 'Все статьи',
        'blog.loading': 'Загрузка статей...',
        'blog.no_posts': 'Статьи не найдены. Заходите позже.',
        'blog.sample_title_1': 'Тренды глобальных цепочек поставок в 2026 году',
        'blog.sample_title_2': 'Лучшие практики закупок оборудования',
        'blog.sample_title_3': 'Логистические инновации в Центральной Азии',
        'blog.sample_excerpt': 'Изучите последние тенденции в промышленных закупках и их влияние на глобальные операции.',
        'footer.brand_desc': 'Премиальные решения по промышленным закупкам и логистике для глобальных предприятий. Обеспечиваем превосходство на всех континентах.',
        'footer.services': 'Услуги',
        'footer.equipment_procurement': 'Закупка оборудования',
        'footer.logistics_services': 'Логистические услуги',
        'footer.supplier_audit': 'Аудит поставщиков',
        'footer.consulting': 'Консалтинг',
        'footer.company': 'Компания',
        'footer.about_us': 'О нас',
        'footer.our_team': 'Наша команда',
        'footer.careers': 'Карьера',
        'footer.news': 'Новости',
        'footer.contact': 'Контакты',
        'footer.china_office': 'Офис в Китае',
        'footer.uzbekistan_office': 'Офис в Узбекистане',
        'footer.copyright': '© 2026 GlobalTech Industries. Все права защищены.'
    },
    uz: {
        'nav.services': 'Xizmatlar',
        'nav.global': 'Geografiya',
        'nav.equipment': 'Uskunalar',
        'nav.about': 'Biz haqimizda',
        'nav.contact': "Bog'lanish",
        'hero.badge': "Global sanoat yechimlari",
        'hero.title': '<span class="highlight">Global</span><br>sanoat rivojlanishini qo\'llab-quvvatlaymiz',
        'hero.description': "Sanoat korxonalari uchun yuqori sifatli xarid, logistika va konsalting xizmatlari.",
        'hero.btn_explore': 'Xizmatlarni ko\'rish',
        'hero.btn_contact': "Biz bilan bog'laning",
        'hero.scroll': 'PASTGA',
        'services.label': 'Bizning xizmatlar',
        'services.title': 'Asosiy xizmatlar',
        'services.description': "Xarid, logistika va strategik konsaltingda mukammallikka intilayotgan global korxonalar uchun kompleks sanoat yechimlari.",
        'services.procurement.title': 'Uskunalar xaridi',
        'services.procurement.desc': "Sifat kafolati bilan tasdiqlangan global ishlab chiqaruvchilardan sanoat mashinalari va uskunalarini strategik xarid qilish.",
        'services.logistics.title': 'Logistika xizmatlari',
        'services.logistics.desc': "To'liq ta'minot zanjiri yechimlari: xalqaro yetkazib berish, bojxona rasmiylashtiruvi va oxirgi bosqich yetkazib berish.",
        'services.consulting.title': 'Strategik konsalting',
        'services.consulting.desc': "Sanoat korxonalari uchun bozorga kirish, yetkazib beruvchilarni audit qilish va operatsiyalarni optimallashtirish.",
        'services.learn_more': "Batafsil",
        'global.label': "Jahon tarmog'i",
        'global.title': "Global qamrov,<br>mahalliy ekspertiza",
        'global.description': "To'rt qit'ada o'rnatilgan hamkorliklar bilan ishlayapmiz.",
        'global.eurasia': 'Yevrosiyo',
        'global.central_asia': "Markaziy Osiyo",
        'global.north_america': 'Shimoliy Amerika',
        'global.south_america': 'Janubiy Amerika',
        'trust.years': 'Yillik tajriba',
        'trust.projects': 'Bajarilgan loyihalar',
        'trust.partners': 'Global hamkorlar',
        'trust.continents': "Qit'a",
        'gallery.label': 'Bizning portfolio',
        'gallery.title': 'Tanlangan uskunalar',
        'gallery.item1.title': "Og'ir texnika",
        'gallery.item1.desc': 'Sanoat ekskavatorlari va yuklagichlar',
        'gallery.item2.title': 'Qurilish uskunalari',
        'gallery.item2.desc': "Kranlar va ko'tarish yechimlari",
        'gallery.item3.title': "Konchilik uskunalari",
        'gallery.item3.desc': "Qazib olish va qayta ishlash",
        'gallery.item4.title': 'Logistika parki',
        'gallery.item4.desc': 'Transport va yetkazib berish',
        'gallery.item5.title': 'Ishlab chiqarish',
        'gallery.item5.desc': 'Ishlab chiqarish liniyasi uskunalari',
        'cta.label': 'Boshlashga tayyormisiz?',
        'cta.title': "Keling, birgalikda<br>ajoyib narsa yarataylik",
        'cta.description': "Global muvaffaqiyatga erishish uchun soha yetakchilari bilan hamkor bo'ling.",
        'cta.btn_start': 'Loyihani boshlash',
        'cta.btn_brochure': 'Broshyurani yuklab olish',
        'contact.label': 'Biz bilan bog\'laning',
        'contact.title': 'Kontaktlar',
        'contact.description': "Sanoat xaridlari va logistika ehtiyojlaringizni muhokama qilishga tayyormisiz?",
        'contact.name': 'To\'liq ism',
        'contact.email': 'Email manzil',
        'contact.company': 'Kompaniya nomi',
        'contact.service': 'Qiziqarli xizmat',
        'contact.service_default': 'Xizmatni tanlang...',
        'contact.service_procurement': 'Uskunalar xaridi',
        'contact.service_logistics': 'Logistika xizmatlari',
        'contact.service_consulting': 'Strategik konsalting',
        'contact.service_other': 'Boshqa',
        'contact.message': 'Xabar',
        'contact.submit': 'Xabar yuborish',
        'contact.success': '✓ Xabaringiz yuborildi. 24 soat ichida javob beramiz.',
        'contact.error': '✗ Xato yuz berdi. Qayta urinib ko\'ring.',
        'blog.label': 'So\'nggi yangiliklar',
        'blog.title': 'Soha yangiliklari',
        'blog.description': 'Sanoat xaridlari va global logistikadagi so\'nggi tendensiyalardan xabardor bo\'ling.',
        'blog.read_more': 'Batafsil o\'qish',
        'blog.view_all': 'Barcha maqolalar',
        'blog.loading': 'Maqolalar yuklanmoqda...',
        'blog.no_posts': 'Maqolalar topilmadi. Keyinroq qaytib keling.',
        'blog.sample_title_1': '2026 yilda global ta\'minot zanjiri tendensiyalari',
        'blog.sample_title_2': 'Uskunalar xaridining eng yaxshi amaliyotlari',
        'blog.sample_title_3': "Markaziy Osiyodagi logistika innovatsiyalari",
        'blog.sample_excerpt': 'Sanoat xaridlaridagi so\'nggi tendensiyalar va ularning global operatsiyalarga ta\'sirini o\'rganing.',
        'footer.brand_desc': "Global korxonalar uchun premium sanoat xarid va logistika yechimlari.",
        'footer.services': 'Xizmatlar',
        'footer.equipment_procurement': 'Uskunalar xaridi',
        'footer.logistics_services': 'Logistika xizmatlari',
        'footer.supplier_audit': "Yetkazib beruvchilar auditi",
        'footer.consulting': 'Konsalting',
        'footer.company': 'Kompaniya',
        'footer.about_us': 'Biz haqimizda',
        'footer.our_team': 'Bizning jamoa',
        'footer.careers': 'Karyera',
        'footer.news': 'Yangiliklar',
        'footer.contact': 'Kontaktlar',
        'footer.china_office': 'Xitoydagi ofis',
        'footer.uzbekistan_office': "O'zbekistondagi ofis",
        'footer.copyright': "© 2026 GlobalTech Industries. Barcha huquqlar himoyalangan."
    }
};

// ===== LANGUAGE SWITCHER =====
let currentLang = localStorage.getItem('lang') || 'ru';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    // Reload blog posts in new language sample
    if (!WP_CONFIG.enabled) renderSamplePosts(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initCounters();
    initMapHover();
    initContactForm();
    initBlog();
});

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ===== COUNTERS =====
function initCounters() {
    const counters = document.querySelectorAll('.trust-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.innerText.replace(/[0-9]/g, '');
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                let current = 0;
                const increment = target / 60;
                const update = () => {
                    if (current < target) {
                        current += increment;
                        counter.innerText = Math.ceil(current) + suffix;
                        requestAnimationFrame(update);
                    } else {
                        counter.innerText = target + suffix;
                    }
                };
                update();
                observer.disconnect();
            }
        });
        observer.observe(counter);
    });
}

// ===== MAP HOVER =====
function initMapHover() {
    document.querySelectorAll('.map-point').forEach(point => {
        point.addEventListener('mouseenter', () => {
            point.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        point.addEventListener('mouseleave', () => {
            point.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('[type="submit"]');
        const statusEl = document.getElementById('formStatus');
        const lang = currentLang;

        btn.disabled = true;
        btn.innerHTML = '...';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // If WordPress is configured, POST to Contact Form 7 or custom endpoint
            if (WP_CONFIG.enabled && WP_CONFIG.contactEndpoint) {
                const response = await fetch(WP_CONFIG.contactEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (!response.ok) throw new Error('Network error');
            } else {
                // Simulate success for demo (replace with your endpoint)
                await new Promise(r => setTimeout(r, 1200));
            }

            statusEl.className = 'form-status success';
            statusEl.textContent = translations[lang]['contact.success'];
            form.reset();
        } catch {
            statusEl.className = 'form-status error';
            statusEl.textContent = translations[lang]['contact.error'];
        } finally {
            btn.disabled = false;
            btn.setAttribute('data-i18n', 'contact.submit');
            btn.textContent = translations[lang]['contact.submit'];
        }
    });
}

// ===== BLOG — WordPress REST API =====
function initBlog() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    // Skip client-side rendering if server-rendered posts already exist
    if (blogGrid.children.length > 0) return;

    if (WP_CONFIG.enabled && WP_CONFIG.apiUrl) {
        loadWPPosts();
    } else {
        showWPConfigNotice();
        renderSamplePosts(currentLang);
    }
}

async function loadWPPosts() {
    const blogGrid = document.getElementById('blogGrid');
    const loadingEl = document.getElementById('blogLoading');

    if (loadingEl) loadingEl.classList.add('active');
    blogGrid.innerHTML = '';

    try {
        const res = await fetch(
            `${WP_CONFIG.apiUrl}/posts?per_page=${WP_CONFIG.postsPerPage}&_embed`
        );
        if (!res.ok) throw new Error('WP API error');
        const posts = await res.json();

        if (loadingEl) loadingEl.classList.remove('active');

        if (!posts.length) {
            document.getElementById('blogNoPosts')?.classList.add('active');
            return;
        }

        posts.forEach(post => {
            const imgUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
            const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'News';
            const date = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 120) + '...';

            blogGrid.innerHTML += `
                <a href="${post.link}" class="blog-card reveal" target="_blank" rel="noopener">
                    <div class="blog-card-image">
                        ${imgUrl
                            ? `<img src="${imgUrl}" alt="${post.title.rendered}" loading="lazy">`
                            : '<div class="blog-card-image-placeholder">⚙</div>'
                        }
                    </div>
                    <div class="blog-card-meta">
                        <span class="blog-card-category">${category}</span>
                        <span class="blog-card-date">${date}</span>
                    </div>
                    <div class="blog-card-body">
                        <h3>${post.title.rendered}</h3>
                        <p>${excerpt}</p>
                    </div>
                </a>`;
        });

        // Re-trigger scroll reveal for new elements
        document.querySelectorAll('.reveal:not(.active)').forEach(el => {
            new IntersectionObserver((entries) => {
                entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
            }, { threshold: 0.1 }).observe(el);
        });

    } catch (err) {
        if (loadingEl) loadingEl.classList.remove('active');
        console.error('WordPress API error:', err);
        renderSamplePosts(currentLang);
    }
}

function renderSamplePosts(lang) {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    const t = translations[lang] || translations.en;
    const samplePosts = [
        { title: t['blog.sample_title_1'], cat: lang === 'ru' ? 'Аналитика' : lang === 'uz' ? 'Tahlil' : 'Analytics' },
        { title: t['blog.sample_title_2'], cat: lang === 'ru' ? 'Закупки' : lang === 'uz' ? 'Xarid' : 'Procurement' },
        { title: t['blog.sample_title_3'], cat: lang === 'ru' ? 'Логистика' : lang === 'uz' ? 'Logistika' : 'Logistics' }
    ];
    blogGrid.innerHTML = samplePosts.map((p, i) => `
        <a href="#" class="blog-card reveal" onclick="return false">
            <div class="blog-card-image">
                <div class="blog-card-image-placeholder">⚙</div>
            </div>
            <div class="blog-card-meta">
                <span class="blog-card-category">${p.cat}</span>
                <span class="blog-card-date">Feb ${10 + i * 5}, 2026</span>
            </div>
            <div class="blog-card-body">
                <h3>${p.title}</h3>
                <p>${t['blog.sample_excerpt']}</p>
            </div>
        </a>`).join('');

    document.querySelectorAll('.blog-card.reveal').forEach(el => {
        setTimeout(() => el.classList.add('active'), 100);
    });
}

function showWPConfigNotice() {
    const notice = document.getElementById('wpConfigNotice');
    if (notice) notice.classList.add('show');
}
