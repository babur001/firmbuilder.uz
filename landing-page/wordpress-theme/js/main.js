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
    WP_CONFIG.contactEndpoint = wpConfig.contactEndpoint || '';
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
        'services.procurement.modal_desc': 'We provide end-to-end equipment procurement services — from identifying the right suppliers and conducting factory audits to negotiating pricing and managing quality control. Our team sources industrial machinery, construction equipment, and manufacturing systems from verified manufacturers across China, Europe, and North America.',
        'services.procurement.feature_1': 'Supplier search & verification',
        'services.procurement.feature_2': 'Factory audits & quality control',
        'services.procurement.feature_3': 'Price negotiation & contracts',
        'services.procurement.feature_4': 'Equipment catalog & specs',
        'services.procurement.feature_5': 'Spare parts sourcing',
        'services.procurement.feature_6': 'Warranty management',
        'services.logistics.title': 'Logistics Services',
        'services.logistics.desc': 'End-to-end supply chain solutions including international shipping, customs clearance, and last-mile delivery.',
        'services.logistics.modal_desc': 'Our logistics division manages the entire supply chain from origin to destination. We handle international shipping via sea, air, rail, and road freight, customs clearance, cargo consolidation, and door-to-door delivery across routes connecting China, Central Asia, Russia, and the Americas.',
        'services.logistics.feature_1': 'Sea / Air / Rail / Road freight',
        'services.logistics.feature_2': 'Customs clearance & documentation',
        'services.logistics.feature_3': 'Cargo consolidation',
        'services.logistics.feature_4': 'Door-to-door delivery',
        'services.logistics.feature_5': 'Real-time shipment tracking',
        'services.logistics.feature_6': 'Warehousing & distribution',
        'services.consulting.title': 'Strategic Consulting',
        'services.consulting.desc': 'Expert guidance on market entry, supplier audits, and operational optimization for industrial enterprises.',
        'services.consulting.modal_desc': 'Our consulting team provides expert guidance on expanding into new markets, particularly across China and Central Asia. We assist with company registration, regulatory compliance, visa services, and operational optimization to help industrial enterprises establish and grow their international presence.',
        'services.consulting.feature_1': 'Company registration (China / HK)',
        'services.consulting.feature_2': 'Market entry strategy',
        'services.consulting.feature_3': 'Visa services (business / work)',
        'services.consulting.feature_4': 'Document preparation',
        'services.consulting.feature_5': 'Supplier audits',
        'services.consulting.feature_6': 'Operational optimization',
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
        'gallery.item1.modal_desc': 'We source and supply a wide range of heavy machinery for construction, mining, and industrial applications. From excavators and wheel loaders to bulldozers and graders — all from certified manufacturers with full warranty support.',
        'gallery.item1.spec_1': 'Excavators (1.5–90 ton)',
        'gallery.item1.spec_2': 'Wheel loaders & backhoes',
        'gallery.item1.spec_3': 'Bulldozers & graders',
        'gallery.item1.spec_4': 'Factory-certified warranty',
        'gallery.item2.title': 'Construction Equipment',
        'gallery.item2.desc': 'Cranes and lifting solutions',
        'gallery.item2.modal_desc': 'Our construction equipment portfolio includes tower cranes, mobile cranes, concrete pumps, and scaffolding systems. We provide equipment for projects of any scale — from urban buildings to large infrastructure.',
        'gallery.item2.spec_1': 'Tower & mobile cranes',
        'gallery.item2.spec_2': 'Concrete pumps & mixers',
        'gallery.item2.spec_3': 'Scaffolding systems',
        'gallery.item2.spec_4': 'On-site installation support',
        'gallery.item3.title': 'Mining Equipment',
        'gallery.item3.desc': 'Extraction and processing',
        'gallery.item3.modal_desc': 'Specialized mining equipment for extraction, crushing, screening, and processing operations. We supply complete solutions for open-pit and underground mining with options for customization and spare parts.',
        'gallery.item3.spec_1': 'Crushers & screeners',
        'gallery.item3.spec_2': 'Drilling rigs',
        'gallery.item3.spec_3': 'Conveyor systems',
        'gallery.item3.spec_4': 'Spare parts supply chain',
        'gallery.item4.title': 'Logistics Fleet',
        'gallery.item4.desc': 'Transportation and delivery',
        'gallery.item4.modal_desc': 'Our logistics fleet covers all modes of transportation for oversized and standard cargo. We manage delivery of heavy equipment from factory to your site, including customs clearance and route planning.',
        'gallery.item4.spec_1': 'Flatbed & lowboy trailers',
        'gallery.item4.spec_2': 'Container shipping',
        'gallery.item4.spec_3': 'Oversized cargo handling',
        'gallery.item4.spec_4': 'Door-to-site delivery',
        'gallery.item5.title': 'Manufacturing',
        'gallery.item5.desc': 'Production line equipment',
        'gallery.item5.modal_desc': 'We supply manufacturing and production line equipment including CNC machines, industrial presses, packaging systems, and automation components. Solutions are tailored to your production requirements.',
        'gallery.item5.spec_1': 'CNC machines & lathes',
        'gallery.item5.spec_2': 'Industrial presses',
        'gallery.item5.spec_3': 'Packaging & sorting lines',
        'gallery.item5.spec_4': 'Automation components',
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
        'services.procurement.modal_desc': 'Мы обеспечиваем полный цикл закупок оборудования — от поиска поставщиков и проведения заводских аудитов до согласования цен и контроля качества. Наша команда закупает промышленное оборудование, строительную технику и производственные системы у проверенных производителей Китая, Европы и Северной Америки.',
        'services.procurement.feature_1': 'Поиск и проверка поставщиков',
        'services.procurement.feature_2': 'Аудит заводов и контроль качества',
        'services.procurement.feature_3': 'Переговоры по ценам и контрактам',
        'services.procurement.feature_4': 'Каталог оборудования',
        'services.procurement.feature_5': 'Поставка запчастей',
        'services.procurement.feature_6': 'Управление гарантией',
        'services.logistics.title': 'Логистические услуги',
        'services.logistics.desc': 'Комплексные решения в цепочке поставок, включая международные перевозки, таможенное оформление и доставку до конечного потребителя.',
        'services.logistics.modal_desc': 'Наш логистический отдел управляет всей цепочкой поставок от точки отправления до пункта назначения. Мы организуем международные перевозки морским, воздушным, железнодорожным и автомобильным транспортом, таможенное оформление, консолидацию грузов и доставку «до двери» по маршрутам Китай — Центральная Азия — Россия — Америка.',
        'services.logistics.feature_1': 'Морские / Авиа / ЖД / Авто перевозки',
        'services.logistics.feature_2': 'Таможенное оформление',
        'services.logistics.feature_3': 'Консолидация грузов',
        'services.logistics.feature_4': 'Доставка до двери',
        'services.logistics.feature_5': 'Отслеживание грузов',
        'services.logistics.feature_6': 'Складирование и распределение',
        'services.consulting.title': 'Стратегический консалтинг',
        'services.consulting.desc': 'Экспертное руководство по выходу на рынок, аудиту поставщиков и оптимизации операций для промышленных предприятий.',
        'services.consulting.modal_desc': 'Наша команда консультантов предоставляет экспертную поддержку по выходу на новые рынки, особенно в Китае и Центральной Азии. Мы помогаем с регистрацией компаний, соблюдением нормативных требований, визовыми вопросами и оптимизацией операций.',
        'services.consulting.feature_1': 'Регистрация компании (Китай / Гонконг)',
        'services.consulting.feature_2': 'Стратегия выхода на рынок',
        'services.consulting.feature_3': 'Визовые услуги (бизнес / рабочая)',
        'services.consulting.feature_4': 'Подготовка документов',
        'services.consulting.feature_5': 'Аудит поставщиков',
        'services.consulting.feature_6': 'Оптимизация операций',
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
        'gallery.item1.modal_desc': 'Мы поставляем широкий спектр тяжёлой техники для строительства, горнодобычи и промышленного применения. От экскаваторов и фронтальных погрузчиков до бульдозеров и грейдеров — всё от сертифицированных производителей с полной гарантийной поддержкой.',
        'gallery.item1.spec_1': 'Экскаваторы (1,5–90 тонн)',
        'gallery.item1.spec_2': 'Фронтальные погрузчики',
        'gallery.item1.spec_3': 'Бульдозеры и грейдеры',
        'gallery.item1.spec_4': 'Заводская гарантия',
        'gallery.item2.title': 'Строительная техника',
        'gallery.item2.desc': 'Краны и подъёмные решения',
        'gallery.item2.modal_desc': 'Портфолио строительной техники включает башенные краны, автокраны, бетононасосы и системы строительных лесов. Мы обеспечиваем оборудование для проектов любого масштаба — от жилых зданий до крупной инфраструктуры.',
        'gallery.item2.spec_1': 'Башенные и автомобильные краны',
        'gallery.item2.spec_2': 'Бетононасосы и миксеры',
        'gallery.item2.spec_3': 'Системы строительных лесов',
        'gallery.item2.spec_4': 'Монтаж на объекте',
        'gallery.item3.title': 'Горнодобывающее оборудование',
        'gallery.item3.desc': 'Добыча и переработка',
        'gallery.item3.modal_desc': 'Специализированное горнодобывающее оборудование для добычи, дробления, грохочения и переработки. Полные решения для открытой и подземной добычи с возможностью кастомизации и поставки запчастей.',
        'gallery.item3.spec_1': 'Дробилки и грохоты',
        'gallery.item3.spec_2': 'Буровые установки',
        'gallery.item3.spec_3': 'Конвейерные системы',
        'gallery.item3.spec_4': 'Цепочка поставки запчастей',
        'gallery.item4.title': 'Логистический парк',
        'gallery.item4.desc': 'Транспортировка и доставка',
        'gallery.item4.modal_desc': 'Наш логистический парк охватывает все виды транспорта для негабаритных и стандартных грузов. Мы организуем доставку тяжёлого оборудования от завода до вашего объекта, включая таможенное оформление и планирование маршрута.',
        'gallery.item4.spec_1': 'Платформы и тралы',
        'gallery.item4.spec_2': 'Контейнерные перевозки',
        'gallery.item4.spec_3': 'Негабаритные грузы',
        'gallery.item4.spec_4': 'Доставка до объекта',
        'gallery.item5.title': 'Производство',
        'gallery.item5.desc': 'Оборудование производственных линий',
        'gallery.item5.modal_desc': 'Поставляем оборудование для производства и линий: станки с ЧПУ, промышленные прессы, упаковочные системы и компоненты автоматизации. Решения адаптируются под ваши производственные потребности.',
        'gallery.item5.spec_1': 'Станки с ЧПУ и токарные станки',
        'gallery.item5.spec_2': 'Промышленные прессы',
        'gallery.item5.spec_3': 'Линии упаковки и сортировки',
        'gallery.item5.spec_4': 'Компоненты автоматизации',
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
        'services.procurement.modal_desc': "Biz uskunalar xaridining to'liq tsiklini ta'minlaymiz — yetkazib beruvchilarni qidirishdan tortib, zavod auditlari o'tkazish, narxlarni kelishish va sifat nazoratigacha. Jamoamiz Xitoy, Yevropa va Shimoliy Amerikaning tasdiqlangan ishlab chiqaruvchilaridan sanoat uskunalari, qurilish texnikasi va ishlab chiqarish tizimlarini xarid qiladi.",
        'services.procurement.feature_1': "Yetkazib beruvchilarni qidirish va tekshirish",
        'services.procurement.feature_2': "Zavod auditi va sifat nazorati",
        'services.procurement.feature_3': "Narx muzokaralari va shartnomalar",
        'services.procurement.feature_4': "Uskunalar katalogi",
        'services.procurement.feature_5': "Ehtiyot qismlar yetkazib berish",
        'services.procurement.feature_6': "Kafolat boshqaruvi",
        'services.logistics.title': 'Logistika xizmatlari',
        'services.logistics.desc': "To'liq ta'minot zanjiri yechimlari: xalqaro yetkazib berish, bojxona rasmiylashtiruvi va oxirgi bosqich yetkazib berish.",
        'services.logistics.modal_desc': "Logistika bo'limimiz butun ta'minot zanjirini boshidan oxirigacha boshqaradi. Biz dengiz, havo, temir yo'l va avtomobil transporti orqali xalqaro yuk tashishni, bojxona rasmiylashtirishni, yuklarni konsolidatsiya qilishni va Xitoy — Markaziy Osiyo — Rossiya — Amerika yo'nalishlarida eshikkacha yetkazib berishni tashkil etamiz.",
        'services.logistics.feature_1': "Dengiz / Havo / Temir yo'l / Avto tashish",
        'services.logistics.feature_2': "Bojxona rasmiylashtiruvi",
        'services.logistics.feature_3': "Yuklarni konsolidatsiya qilish",
        'services.logistics.feature_4': "Eshikkacha yetkazib berish",
        'services.logistics.feature_5': "Yuklarni kuzatish",
        'services.logistics.feature_6': "Ombor xizmatlari",
        'services.consulting.title': 'Strategik konsalting',
        'services.consulting.desc': "Sanoat korxonalari uchun bozorga kirish, yetkazib beruvchilarni audit qilish va operatsiyalarni optimallashtirish.",
        'services.consulting.modal_desc': "Konsaltinglar jamoamiz yangi bozorlarga, ayniqsa Xitoy va Markaziy Osiyoga kirishda ekspert yordamini taqdim etadi. Biz kompaniyalarni ro'yxatdan o'tkazish, me'yoriy talablarga rioya qilish, viza xizmatlari va operatsiyalarni optimallashtirish bo'yicha yordam beramiz.",
        'services.consulting.feature_1': "Kompaniyani ro'yxatdan o'tkazish (Xitoy / Gonkong)",
        'services.consulting.feature_2': "Bozorga kirish strategiyasi",
        'services.consulting.feature_3': "Viza xizmatlari (biznes / ish)",
        'services.consulting.feature_4': "Hujjatlarni tayyorlash",
        'services.consulting.feature_5': "Yetkazib beruvchilar auditi",
        'services.consulting.feature_6': "Operatsiyalarni optimallashtirish",
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
        'gallery.item1.modal_desc': "Qurilish, konchilik va sanoat uchun keng turdagi og'ir texnikani yetkazib beramiz. Ekskavatorlar va yuklagichlardan tortib buldozerlar va greyderlardan — barchasi sertifikatlangan ishlab chiqaruvchilardan to'liq kafolat bilan.",
        'gallery.item1.spec_1': "Ekskavatorlar (1,5–90 tonna)",
        'gallery.item1.spec_2': "Frontal yuklagichlar",
        'gallery.item1.spec_3': "Buldozerlar va greyderlar",
        'gallery.item1.spec_4': "Zavod kafolati",
        'gallery.item2.title': 'Qurilish uskunalari',
        'gallery.item2.desc': "Kranlar va ko'tarish yechimlari",
        'gallery.item2.modal_desc': "Qurilish uskunalari portfelimizga minora kranlari, avtokranlar, beton nasoslari va iskala tizimlari kiradi. Har qanday miqyosdagi loyihalar uchun uskunalar yetkazib beramiz.",
        'gallery.item2.spec_1': "Minora va mobil kranlar",
        'gallery.item2.spec_2': "Beton nasoslari va mikserlar",
        'gallery.item2.spec_3': "Iskala tizimlari",
        'gallery.item2.spec_4': "Ob'ektda o'rnatish",
        'gallery.item3.title': "Konchilik uskunalari",
        'gallery.item3.desc': "Qazib olish va qayta ishlash",
        'gallery.item3.modal_desc': "Qazib olish, maydalash, elash va qayta ishlash uchun maxsus konchilik uskunalari. Ochiq va er osti konchiligi uchun to'liq yechimlar.",
        'gallery.item3.spec_1': "Maydalagichlar va elaklar",
        'gallery.item3.spec_2': "Burg'ulash moslamalari",
        'gallery.item3.spec_3': "Konveyer tizimlari",
        'gallery.item3.spec_4': "Ehtiyot qismlar yetkazish",
        'gallery.item4.title': 'Logistika parki',
        'gallery.item4.desc': 'Transport va yetkazib berish',
        'gallery.item4.modal_desc': "Logistika parkimiz katta o'lchamli va standart yuklar uchun barcha transport turlarini qamrab oladi. Og'ir uskunalarni zavoddan ob'ektingizgacha yetkazib beramiz.",
        'gallery.item4.spec_1': "Platformalar va trallar",
        'gallery.item4.spec_2': "Konteyner tashish",
        'gallery.item4.spec_3': "Katta o'lchamli yuklar",
        'gallery.item4.spec_4': "Ob'ektgacha yetkazish",
        'gallery.item5.title': 'Ishlab chiqarish',
        'gallery.item5.desc': 'Ishlab chiqarish liniyasi uskunalari',
        'gallery.item5.modal_desc': "Ishlab chiqarish va liniya uskunalarini yetkazib beramiz: CNC stanoklari, sanoat presslari, qadoqlash tizimlari va avtomatlashtirish komponentlari.",
        'gallery.item5.spec_1': "CNC stanoklari",
        'gallery.item5.spec_2': "Sanoat presslari",
        'gallery.item5.spec_3': "Qadoqlash va saralash liniyalari",
        'gallery.item5.spec_4': "Avtomatlashtirish komponentlari",
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
    initServiceModals();
    initGalleryModals();
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
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const url = new URL(href, window.location.origin);
            // Only smooth-scroll if the link targets the current page
            if (url.pathname !== window.location.pathname && url.pathname !== '/') return;
            if (!url.hash) return;
            const target = document.querySelector(url.hash);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
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

// ===== SERVICE MODALS =====
function initServiceModals() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;

    const overlay = modal.querySelector('.service-modal-overlay');
    const closeBtn = document.getElementById('serviceModalClose');
    const modalImage = document.getElementById('serviceModalImage');
    const modalIcon = document.getElementById('serviceModalIcon');
    const modalTitle = document.getElementById('serviceModalTitle');
    const modalDesc = document.getElementById('serviceModalDesc');
    const modalFeatures = document.getElementById('serviceModalFeatures');
    const modalCta = document.getElementById('serviceModalCta');

    function openModal(card) {
        const serviceKey = card.dataset.service;
        const imageUrl = card.dataset.serviceImage;
        const t = translations[currentLang] || translations.en;

        modalImage.src = imageUrl;
        modalImage.alt = t[`services.${serviceKey}.title`] || '';
        modalIcon.innerHTML = card.querySelector('.service-icon').innerHTML;
        modalTitle.textContent = t[`services.${serviceKey}.title`] || '';
        modalDesc.textContent = t[`services.${serviceKey}.modal_desc`] || t[`services.${serviceKey}.desc`] || '';

        // Build features list
        modalFeatures.innerHTML = '';
        for (let i = 1; i <= 6; i++) {
            const feat = t[`services.${serviceKey}.feature_${i}`];
            if (feat) {
                const li = document.createElement('li');
                li.textContent = feat;
                modalFeatures.appendChild(li);
            }
        }

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.service-card[data-service]').forEach(card => {
        // Skip cards that are links (front page links to /services/ page)
        if (card.tagName === 'A' && card.href) return;
        card.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(card);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // Close modal and scroll to contact when CTA is clicked
    modalCta.addEventListener('click', () => {
        closeModal();
    });
}

// ===== GALLERY MODALS =====
function initGalleryModals() {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;

    const overlay = modal.querySelector('.gallery-modal-overlay');
    const closeBtn = document.getElementById('galleryModalClose');
    const modalImage = document.getElementById('galleryModalImage');
    const modalTitle = document.getElementById('galleryModalTitle');
    const modalDesc = document.getElementById('galleryModalDesc');
    const modalSpecs = document.getElementById('galleryModalSpecs');
    const modalCta = document.getElementById('galleryModalCta');

    function openModal(item) {
        const key = item.dataset.gallery;
        const imageUrl = item.dataset.galleryImage;
        const t = translations[currentLang] || translations.en;

        modalImage.src = imageUrl;
        modalImage.alt = t[`gallery.${key}.title`] || '';
        modalTitle.textContent = t[`gallery.${key}.title`] || '';
        modalDesc.textContent = t[`gallery.${key}.modal_desc`] || t[`gallery.${key}.desc`] || '';

        modalSpecs.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
            const spec = t[`gallery.${key}.spec_${i}`];
            if (spec) {
                const li = document.createElement('li');
                li.textContent = spec;
                modalSpecs.appendChild(li);
            }
        }

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.gallery-item[data-gallery]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(item);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    modalCta.addEventListener('click', () => {
        closeModal();
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
        // Remove WordPress nonce fields (not needed for REST API)
        delete data.gt_nonce;
        delete data._wp_http_referer;

        try {
            // Add reCAPTCHA token if configured
            if (typeof wpConfig !== 'undefined' && wpConfig.recaptchaSiteKey && typeof grecaptcha !== 'undefined') {
                data.recaptcha_token = await grecaptcha.execute(wpConfig.recaptchaSiteKey, {action: 'contact'});
            }

            // If WordPress is configured, POST to custom endpoint
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
        } catch (err) {
            console.error('Contact form error:', err);
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
