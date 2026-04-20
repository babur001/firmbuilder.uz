/* ===== GLOBALTECH INDUSTRIES — main.js ===== */

// ===== ACTIVE NAV HIGHLIGHT =====
(function() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-links a, .mobile-menu > a').forEach(function(link) {
        const href = link.getAttribute('href');
        if (href && href !== '/' && path.indexOf(href.replace(/^https?:\/\/[^/]+/, '')) === 0) {
            link.classList.add('active');
        }
    });
})();

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
        'nav.trading': 'Trading',
        'nav.logistics': 'Logistics',
        'nav.equipment': 'Equipment',
        'nav.consulting': 'Consulting',
        'nav.news': 'News',
        'nav.contacts': 'Contacts',
        'nav.contact': 'Contact Us',
        'hero.badge': 'Global Industrial Solutions',
        'hero.title': 'We help you build and scale business with <span class="highlight">China</span>',
        'hero.description': 'From sourcing and factory verification to logistics and consulting — we manage the entire process.',
        'hero.btn_explore': 'Explore Services',
        'hero.btn_contact': 'Get in Touch',
        'hero.scroll': 'SCROLL',
        'services.label': 'What We Do',
        'services.title': 'Core Services',
        'services.description': 'Everything you need to work with China — in one system.',
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
        'services.trading.desc': 'Professional sourcing, supplier verification, and procurement of industrial equipment with quality guarantees.',
        'services.logistics_main.desc': 'Full-cycle logistics from China: air, sea, and rail freight with customs clearance and door-to-door delivery.',
        'services.consulting_main.desc': 'Company registration, visa services, and document preparation for doing business in China and Hong Kong.',
        'services.contacts.desc': 'Get in touch with our offices in China and Uzbekistan. We are always ready to discuss your project.',
        'services.learn_more': 'Learn More',
        'about.label': 'About Us',
        'about.title': 'Davs Global',
        'about.desc': 'We are a team of professionals specializing in international trade, logistics, and business consulting. With offices in China and Uzbekistan, we help businesses establish reliable supply chains and navigate the complexities of cross-border commerce.',
        'about.feature1_title': 'Verified Suppliers',
        'about.feature1_desc': '500+ checked manufacturers and suppliers from China',
        'about.feature2_title': 'Global Presence',
        'about.feature2_desc': 'Offices in Shanghai and Tashkent with delivery to 15+ countries',
        'about.feature3_title': 'Quality Guarantee',
        'about.feature3_desc': 'Full quality control at every stage of procurement and delivery',
        'about.stat_years': 'Years on the market',
        'about.stat_deals': 'Successful deals',
        'about.stat_countries': 'Countries of presence',
        'about.stat_delivery': 'Deliveries without losses',
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
        'contact.form_label': 'WRITE TO US',
        'contact.form_title': 'Submit a Request',
        'contact.name': 'Name',
        'contact.name_placeholder': 'Your name',
        'contact.email': 'Email',
        'contact.company': 'Company',
        'contact.company_placeholder': 'Company name',
        'contact.phone': 'Phone',
        'contact.message': 'Message',
        'contact.message_placeholder': 'Describe your request...',
        'contact.submit': 'Submit Request',
        'contact.success': '✓ Your message has been sent. We\'ll get back to you within 24 hours.',
        'contact.error': '✗ Something went wrong. Please try again or email us directly.',
        'contact.direct_title': 'Contact us directly',
        'contact.direct_desc': 'Our specialists will answer all questions during business hours. For urgent requests — call directly.',
        'contact.general': 'General inquiry',
        'contact.phone_tashkent': 'Phone (Tashkent)',
        // Contacts page
        'contacts.hero_badge': 'Get in touch',
        'contacts.hero_title': 'Contacts',
        'contacts.hero_desc': 'We are always available and ready to answer your questions',
        'contacts.offices_label': 'OUR OFFICES',
        'contacts.offices_title': 'Our offices',
        'contacts.office_china': 'China',
        'contacts.office_china_city': 'Shanghai, Lingang New Area',
        'contacts.china_address': 'No. 88 Haiwang Road, Lingang New Area, China (Shanghai) Pilot Free Trade Zone',
        'contacts.office_uz': 'Uzbekistan',
        'contacts.office_uz_city': 'Tashkent',
        'contacts.address': 'Address',
        'contacts.phone': 'Phone',
        'contacts.hours': 'Working hours',
        'contacts.hours_china': 'Mon-Fri: 09:00 - 18:00 (GMT+8)',
        'contacts.hours_uz': 'Mon-Fri: 09:00 - 18:00 (GMT+5)',
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
        // Trading page
        'trading.hero_badge': 'Trading & Procurement',
        'trading.hero_title': 'We simplify sourcing, verification,<br>and purchasing from China',
        'trading.hero_desc': 'We help you find suppliers, verify them, and organize the purchasing process. We ensure control at every stage and provide reliable support.',
        'trading.hero_btn1': 'Submit Request',
        'trading.hero_btn2': 'Our Services',
        'trading.services_label': 'OUR SERVICES',
        'trading.services_title': 'International Trade',
        'trading.services_desc': 'We manage international trade operations efficiently with full control',
        'trading.card1_title': 'Product sourcing',
        'trading.card1_desc': 'We identify manufacturers and suppliers in China based on your requirements. We provide selected options and initial information.',
        'trading.card2_title': 'Supplier selection & verification',
        'trading.card2_desc': 'We select and verify suppliers, including company background, production capacity, and documentation. We provide the information needed for decision-making.',
        'trading.card3_title': 'Purchasing & negotiation',
        'trading.card3_desc': 'We support the purchasing process. We assist with negotiations, terms, ordering, and payments.',
        'trading.card_more': 'Learn More',
        'trading.stat1': 'Verified Suppliers',
        'trading.stat2': 'Years on the Market',
        'trading.stat3': 'Successful Deals',
        'trading.stat4': 'Countries of Presence',
        'trading.cta_badge': 'Start Collaboration',
        'trading.cta_title': 'Ready to start working with us?',
        'trading.cta_desc': 'Submit your request and we will help you source, verify, and purchase products from China. Our specialist will contact you within 24 hours.',
        'trading.cta_btn1': 'Get a quote',
        'trading.cta_btn2': 'Download Catalog',

        // Product Sourcing page
        'sourcing.hero_badge': 'International Trade',
        'sourcing.hero_title': 'Product sourcing',
        'sourcing.hero_desc': 'Choosing the right manufacturer in China is a critical step. A wrong decision can lead to quality issues, delays, and financial losses. We conduct in-depth market research to identify the most suitable suppliers for your needs.',
        'sourcing.hero_desc2': 'We evaluate suppliers not only by price, but also by reliability, production capacity, and business conditions.',
        'sourcing.included_label': "WHAT'S INCLUDED",
        'sourcing.included_title': 'Our services',
        'sourcing.item1': 'Market and product analysis',
        'sourcing.item2': 'Supplier sourcing',
        'sourcing.item3': 'Initial supplier screening',
        'sourcing.item4': 'Quotation collection',
        'sourcing.item5': 'Price and terms comparison',
        'sourcing.item6': 'Selection of optimal options',
        'sourcing.how_label': 'PROCESS',
        'sourcing.how_title': 'How it works',
        'sourcing.step1': 'We analyze your requirements and technical specifications',
        'sourcing.step2': 'We search for suitable manufacturers in China',
        'sourcing.step3': 'We shortlist and verify suppliers',
        'sourcing.step4': 'We present the best options to you',
        'sourcing.cta_title': 'Submit your request and receive a list of suppliers',
        'sourcing.cta_btn': 'Submit Request',
        'sourcing.back_btn': 'Back to Trading',

        // Supplier Verification page
        'verification.hero_badge': 'International Trade',
        'verification.hero_title': 'Supplier verification',
        'verification.hero_desc': 'Not all suppliers in China are reliable. Working with unverified partners can result in serious risks and losses. We conduct comprehensive supplier verification to ensure safe cooperation.',
        'verification.hero_desc2': 'We thoroughly verify suppliers, evaluating their actual operations, production capabilities, and reliability.',
        'verification.included_label': "WHAT'S INCLUDED",
        'verification.included_title': 'Our services',
        'verification.item1': 'Company registration verification',
        'verification.item2': 'Factory existence confirmation',
        'verification.item3': 'Production capacity analysis',
        'verification.item4': 'Document and certification check',
        'verification.item5': 'Experience and reputation review',
        'verification.item6': 'Risk assessment',
        'verification.how_label': 'PROCESS',
        'verification.how_title': 'How it works',
        'verification.step1': 'Information collection',
        'verification.step2': 'Company verification',
        'verification.step3': 'Production assessment',
        'verification.step4': 'Report delivery',
        'verification.cta_title': 'Verify your supplier before making a deal',
        'verification.cta_btn': 'Submit Request',
        'verification.back_btn': 'Back to Trading',

        // Purchasing & Negotiation page
        'purchasing.hero_badge': 'International Trade',
        'purchasing.hero_title': 'Purchasing & negotiation',
        'purchasing.hero_desc': 'Effective negotiation in China directly impacts price, quality, and terms. Poor negotiation can lead to unnecessary costs and risks. We negotiate on your behalf to secure the best conditions.',
        'purchasing.included_label': "WHAT'S INCLUDED",
        'purchasing.included_title': 'Our services',
        'purchasing.item1': 'Price negotiation',
        'purchasing.item2': 'Terms agreement',
        'purchasing.item3': 'Order placement',
        'purchasing.item4': 'Payment coordination',
        'purchasing.item5': 'Contract handling',
        'purchasing.item6': 'Process control',
        'purchasing.how_label': 'PROCESS',
        'purchasing.how_title': 'How it works',
        'purchasing.step1': 'We define your requirements',
        'purchasing.step2': 'We negotiate with suppliers',
        'purchasing.step3': 'We finalize terms',
        'purchasing.step4': 'We oversee the process',
        'purchasing.cta_title': 'Let us manage your purchasing process',
        'purchasing.cta_btn': 'Submit Request',
        'purchasing.back_btn': 'Back to Trading',

        // Equipment page
        'equipment.hero_badge': 'Industrial Equipment & Machinery',
        'equipment.hero_title': 'Industrial Equipment & Machinery',
        'equipment.hero_desc': 'We work directly with verified manufacturers in China, providing end-to-end solutions for sourcing, procurement, and delivery of industrial equipment to Uzbekistan and Central Asia.<br><br>Our core focus includes concrete batching plants, asphalt plants, drilling equipment, and specialized machinery. Each project is structured individually based on the client\'s operational needs, production capacity, and technical requirements.<br><br>We go beyond simple sourcing. Every stage of the process — from selecting the right manufacturer and defining technical specifications to negotiating terms, quality control, logistics, and customs clearance — is fully managed by our team.<br><br>As a result, clients receive fully operational equipment with minimal risks and maximum transparency.',
        'equipment.hero_btn': 'View products',
        'equipment.products_label': 'OUR PRODUCTS',
        'equipment.products_title': 'Equipment Catalog',
        'equipment.product1_title': 'Concrete Batching Plants',
        'equipment.product1_desc': 'Stationary and mobile concrete plants of various capacities from leading Chinese manufacturers. Equipment is selected based on project requirements, with reliable configurations and practical support throughout the process.',
        'equipment.product2_title': 'Asphalt Plants',
        'equipment.product2_desc': 'Asphalt plants for road construction and infrastructure projects. Solutions are tailored individually according to required capacity and technical specifications.',
        'equipment.product3_title': 'Drilling Equipment',
        'equipment.product3_desc': 'Professional drilling equipment for construction, mining, and geological exploration. Supplied from verified manufacturers with a wide range of technical options.',
        'equipment.product4_title': 'Specialized Machinery',
        'equipment.product4_desc': 'Construction and industrial machinery tailored to your project needs. Individual configuration, equipment selection, and full delivery support.',
        'equipment.how_label': 'PROCESS',
        'equipment.how_title': 'How it works',
        'equipment.step1': 'Requirements & Project Analysis',
        'equipment.step1_desc': "We thoroughly analyze the client's needs, production capacity, and technical requirements.",
        'equipment.step2': 'Manufacturer & Configuration Selection',
        'equipment.step2_desc': 'We work directly with verified manufacturers and select the optimal equipment configuration tailored to the project.',
        'equipment.step3': 'Negotiation & Terms Agreement',
        'equipment.step3_desc': 'We conduct direct negotiations with manufacturers to secure the best pricing, quality, and delivery terms.',
        'equipment.step4': 'Delivery & Full Control',
        'equipment.step4_desc': 'We fully manage logistics, shipment, documentation, and customs clearance to ensure safe and reliable delivery.',
        'equipment.cta_title': 'Need industrial equipment from China?',
        'equipment.cta_desc': 'Submit your request and our specialist will help you find the right equipment at the best price.',
        'equipment.cta_btn': 'Get a quote',
        // Logistics page
        'logistics.hero_badge': 'Logistics Services',
        'logistics.hero_title': 'International<br>Logistics from China',
        'logistics.hero_desc': 'We organize cargo delivery from China to Central Asia, Russia, and other global destinations with full operational control. We manage every stage of the logistics process — from cargo pickup and consolidation to documentation, customs clearance, and final delivery.<br><br>Each shipment is carefully planned, with optimized routing, controlled timelines, and full transparency throughout the process. Reliability, speed, and a systematic approach define our standards.',
        'logistics.hero_btn1': 'Calculate Cost',
        'logistics.hero_btn2': 'Track Shipment',
        'logistics.routes_label': 'DESTINATIONS',
        'logistics.routes_title': 'Key Destinations',
        'logistics.routes_desc': 'For each route, we select the most efficient transport model and ensure full operational control.',
        'logistics.route1_country': 'China',
        'logistics.route1_sub': 'Origin hubs',
        'logistics.route1_desc': 'Guangzhou, Shenzhen, Yiwu, Shanghai, and other industrial regions. Cargo consolidation, warehousing, and export preparation.',
        'logistics.route2_country': 'Russia',
        'logistics.route2_sub': 'Road / Rail',
        'logistics.route2_desc': 'Delivery across all regions of Russia. Stable logistics routes via truck and rail. Transit time: 20–25 days.',
        'logistics.route3_country': 'Central Asia',
        'logistics.route3_sub': 'Key market',
        'logistics.route3_desc': 'Uzbekistan, Kazakhstan, Kyrgyzstan — key markets. Regular shipments via road and rail transport. Transit time: 7–15 days.',
        'logistics.route4_country': 'USA',
        'logistics.route4_sub': 'Sea freight',
        'logistics.route4_desc': 'Container shipping (FCL / LCL). Port-to-port and door-to-door solutions available. Transit time: 25–40 days.',
        'logistics.services_label': 'OUR SERVICES',
        'logistics.services_title': 'Integrated logistics system',
        'logistics.services_desc': 'From China to the final destination — a single, fully managed logistics chain without intermediaries.',
        'logistics.card1_title': 'Road freight',
        'logistics.card1_desc': 'We organize fast and flexible cargo delivery from China to Central Asia and Russia via road transport. Door-to-door service, optimized routes, and full shipment control at every stage.',
        'logistics.card2_title': 'Rail freight',
        'logistics.card2_desc': 'A stable and cost-efficient solution for large-volume shipments. Rail transport ensures reliable transit times, cargo safety, and optimized costs.',
        'logistics.card3_title': 'Sea freight',
        'logistics.card3_desc': 'Container shipping (FCL / LCL) for long-distance routes. We manage the entire export process while maintaining the best balance between cost and transit time.',
        'logistics.card4_title': 'Customs clearance',
        'logistics.card4_desc': 'Full support for export-import customs procedures. We handle documentation, declarations, and ensure smooth and risk-free clearance.',
        'logistics.card_more': 'Learn More',
        'logistics.stat1': 'Delivery Destinations',
        'logistics.stat2': 'Loss-Free Deliveries',
        'logistics.stat3': 'Successful Shipments',
        'logistics.stat4': 'Customer Support',
        'logistics.cta_badge': 'Calculate Delivery',
        'logistics.cta_title': 'Need to ship cargo from China?',
        'logistics.cta_desc': 'Tell us where your cargo is located, its volume, and your required delivery timeline — we will provide you with the most optimal route, accurate pricing, and delivery time within 2 hours.',
        'logistics.cta_btn1': 'Calculate Cost',
        'logistics.cta_btn2': 'Our Routes',
        // Consulting page
        'consulting.hero_badge': 'Consulting Services',
        'consulting.hero_title': 'Business consulting in<br>China &amp; Hong Kong',
        'consulting.hero_desc': 'We provide full support for company registration, bank account setup, visa assistance, and business launch — from initial setup to full operation.',
        'consulting.hero_btn1': 'Get Consultation',
        'consulting.hero_btn2': 'Learn Pricing',
        'consulting.reg_label': 'COMPANY REGISTRATION',
        'consulting.reg_title': 'Opening a company in China &amp; Hong Kong',
        'consulting.reg_desc': 'Opening a company in China or Hong Kong is more than just registration — it\'s about choosing the right structure, tax model, and building a working business system.<br><br>We take your company from zero to a fully operational system — from documents to banking, accounting, tax, and real business activity.',
        'consulting.reg_china_title': 'China (Mainland)',
        'consulting.reg_china_desc': 'Opening a company in China (WFOE, Joint Venture, or RO) requires strong control and the right structure. We don\'t just register your company — we turn it into a real, operational business.',
        'consulting.reg_china_f1': 'Selecting the right company structure',
        'consulting.reg_china_f2': 'Business license and corporate seals',
        'consulting.reg_china_f3': 'Bank account opening (RMB / USD)',
        'consulting.reg_china_f4': 'Tax and operational setup',
        'consulting.reg_china_result': 'Result: a fully controlled, legal, and operational company in China.',
        'consulting.reg_hk_title': 'Hong Kong',
        'consulting.reg_hk_desc': 'A Hong Kong company is one of the most effective platforms for international trade and financial operations. We build a fast-launch structure tailored for global operations.',
        'consulting.reg_hk_f1': 'Optimal jurisdiction for international trade',
        'consulting.reg_hk_f2': 'Tax optimization for offshore income',
        'consulting.reg_hk_f3': 'Remotely managed company',
        'consulting.reg_hk_f4': 'International banking integration',
        'consulting.reg_hk_result': 'Result: a flexible and efficient company built for global operations.',
        'consulting.reg_btn': 'Learn More',
        'consulting.visa_label': 'VISA SERVICES',
        'consulting.visa_title': 'Business-based visa support',
        'consulting.visa_desc': 'Legal entry to China and Hong Kong through work and business',
        'consulting.visa_per': '/ person',
        'consulting.visa2_title': 'Work Visa (Z) via company',
        'consulting.visa2_f1': 'Employment through a Chinese company',
        'consulting.visa2_f2': 'Work Permit and Residence Permit processing',
        'consulting.visa2_f3': 'Full document preparation and submission',
        'consulting.visa2_f4': 'Legal stay and employment in China',
        'consulting.visa2_note': 'A complete solution for working in China',
        'consulting.visa3_title': 'Hong Kong visa via company',
        'consulting.visa3_f1': 'Visa processing through a Hong Kong company',
        'consulting.visa3_f2': 'Business and investment visa options',
        'consulting.visa3_f3': 'Suitable for international travel',
        'consulting.visa3_f4': 'Remote company management model',
        'consulting.visa3_note': 'A flexible solution for global business',
        'consulting.stat1': 'Registered Companies',
        'consulting.stat2': 'Successful Processing',
        'consulting.stat3': 'Years of Legal Practice',
        'consulting.stat4': 'Visas Processed',
        'consulting.cta_badge': 'Free Consultation',
        'consulting.cta_title': 'Ready to start a business in China?',
        'consulting.cta_desc': 'We help you register a company in China and Hong Kong, set up bank accounts, and launch a fully operational business structure.<br><br>All processes are handled based on real experience, with full control and no unnecessary risks.',
        'consulting.cta_btn1': 'Get consultation',
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
        'footer.copyright': '© 2026 Davs Global. All rights reserved.'
    },
    ru: {
        'nav.trading': 'Торговля',
        'nav.logistics': 'Логистика',
        'nav.equipment': 'Оборудование',
        'nav.consulting': 'Консалтинг',
        'nav.news': 'Новости',
        'nav.contacts': 'Контакты',
        'nav.contact': 'Связаться',
        'hero.badge': 'Глобальные промышленные решения',
        'hero.title': 'Полный запуск бизнеса с <span class="highlight">Китаем</span>',
        'hero.description': 'Подбор поставщиков, проверка, логистика и консалтинг — мы берём весь процесс на себя.',
        'hero.btn_explore': 'Наши услуги',
        'hero.btn_contact': 'Связаться с нами',
        'hero.scroll': 'ВНИЗ',
        'services.label': 'Что мы делаем',
        'services.title': 'Основные услуги',
        'services.description': 'Все услуги для работы с Китаем — в одной системе.',
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
        'services.trading.desc': 'Профессиональный поиск, проверка поставщиков и закупка промышленного оборудования с гарантией качества.',
        'services.logistics_main.desc': 'Полный цикл логистики из Китая: авиа, морские и ЖД перевозки с таможенным оформлением и доставкой до двери.',
        'services.consulting_main.desc': 'Регистрация компаний, визовый сервис и подготовка документов для ведения бизнеса в Китае и Гонконге.',
        'services.contacts.desc': 'Свяжитесь с нашими офисами в Китае и Узбекистане. Мы всегда готовы обсудить ваш проект.',
        'services.learn_more': 'Подробнее',
        'about.label': 'О компании',
        'about.title': 'Davs Global',
        'about.desc': 'Мы — команда профессионалов, специализирующаяся на международной торговле, логистике и бизнес-консалтинге. С офисами в Китае и Узбекистане мы помогаем бизнесу выстраивать надёжные цепочки поставок и решать задачи международной коммерции.',
        'about.feature1_title': 'Проверенные поставщики',
        'about.feature1_desc': '500+ проверенных производителей и поставщиков из Китая',
        'about.feature2_title': 'Глобальное присутствие',
        'about.feature2_desc': 'Офисы в Шанхае и Ташкенте с доставкой в 15+ стран',
        'about.feature3_title': 'Гарантия качества',
        'about.feature3_desc': 'Полный контроль качества на каждом этапе закупки и доставки',
        'about.stat_years': 'Лет на рынке',
        'about.stat_deals': 'Успешных сделок',
        'about.stat_countries': 'Стран присутствия',
        'about.stat_delivery': 'Доставок без потерь',
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
        'contact.form_label': 'НАПИШИТЕ НАМ',
        'contact.form_title': 'Оставьте заявку',
        'contact.name': 'Имя',
        'contact.name_placeholder': 'Ваше имя',
        'contact.email': 'Email',
        'contact.company': 'Компания',
        'contact.company_placeholder': 'Название компании',
        'contact.phone': 'Телефон',
        'contact.message': 'Сообщение',
        'contact.message_placeholder': 'Опишите ваш запрос...',
        'contact.submit': 'Отправить заявку',
        'contact.success': '✓ Ваше сообщение отправлено. Мы ответим в течение 24 часов.',
        'contact.error': '✗ Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.',
        'contact.direct_title': 'Свяжитесь с нами напрямую',
        'contact.direct_desc': 'Наши специалисты ответят на все вопросы в рабочее время. Для срочных запросов — звоните напрямую.',
        'contact.general': 'Общие вопросы',
        'contact.phone_tashkent': 'Телефон (Ташкент)',
        // Contacts page
        'contacts.hero_badge': 'Свяжитесь с нами',
        'contacts.hero_title': 'Контакты',
        'contacts.hero_desc': 'Мы всегда на связи и готовы ответить на ваши вопросы',
        'contacts.offices_label': 'НАШИ ОФИСЫ',
        'contacts.offices_title': 'Наши офисы',
        'contacts.office_china': 'Китай',
        'contacts.office_china_city': 'Шанхай, новый район Линган',
        'contacts.china_address': 'Китай (Шанхай), зона свободной торговли, новый район Линган, ул. Хайван, 88',
        'contacts.office_uz': 'Узбекистан',
        'contacts.office_uz_city': 'Ташкент',
        'contacts.address': 'Адрес',
        'contacts.phone': 'Телефон',
        'contacts.hours': 'Часы работы',
        'contacts.hours_china': 'Пн-Пт: 09:00 - 18:00 (GMT+8)',
        'contacts.hours_uz': 'Пн-Пт: 09:00 - 18:00 (GMT+5)',
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
        // Trading page
        'trading.hero_badge': 'Торговля и закупки',
        'trading.hero_title': 'Упрощаем поиск, проверку<br>и закупку товаров из Китая',
        'trading.hero_desc': 'Помогаем найти поставщиков, проверить их и организовать процесс закупки. Обеспечиваем контроль на каждом этапе и надежное сопровождение.',
        'trading.hero_btn1': 'Оставить заявку',
        'trading.hero_btn2': 'Наши услуги',
        'trading.services_label': 'НАШИ УСЛУГИ',
        'trading.services_title': 'Международная торговля',
        'trading.services_desc': 'Эффективно управляем международными торговыми операциями с полным контролем',
        'trading.card1_title': 'Поиск товаров',
        'trading.card1_desc': 'Подбираем производителей и поставщиков в Китае под ваши требования. Предоставляем отобранные варианты и первичную информацию.',
        'trading.card2_title': 'Выбор и проверка поставщиков',
        'trading.card2_desc': 'Отбираем и проверяем надежность партнеров: деятельность компании, производство и документы. Предоставляем информацию для принятия решения.',
        'trading.card3_title': 'Закупка и переговоры',
        'trading.card3_desc': 'Сопровождаем процесс закупки. Помогаем с переговорами, условиями, заказом и оплатой.',
        'trading.card_more': 'Подробнее',
        'trading.stat1': 'Проверенных поставщиков',
        'trading.stat2': 'Лет на рынке',
        'trading.stat3': 'Успешных сделок',
        'trading.stat4': 'Стран присутствия',
        'trading.cta_badge': 'Начать сотрудничество',
        'trading.cta_title': 'Готовы начать сотрудничество?',
        'trading.cta_desc': 'Оставьте заявку, и мы поможем вам найти, проверить и закупить товары из Китая. Наш специалист свяжется с вами в течение 24 часов.',
        'trading.cta_btn1': 'Оставить заявку',
        'trading.cta_btn2': 'Скачать каталог',

        // Поиск товаров
        'sourcing.hero_badge': 'Международная торговля',
        'sourcing.hero_title': 'Поиск товаров',
        'sourcing.hero_desc': 'Правильный выбор производителя в Китае — ключевой этап. Ошибки на этом этапе могут привести к проблемам с качеством, сроками и финансовыми потерями. Мы проводим глубокий анализ рынка и подбираем оптимальных поставщиков под ваши задачи.',
        'sourcing.hero_desc2': 'Мы оцениваем не только цену, но и надежность, производственные возможности и условия сотрудничества.',
        'sourcing.included_label': 'ЧТО ВХОДИТ',
        'sourcing.included_title': 'Наши услуги',
        'sourcing.item1': 'Анализ рынка и продукта',
        'sourcing.item2': 'Поиск производителей',
        'sourcing.item3': 'Первичный отбор поставщиков',
        'sourcing.item4': 'Сбор коммерческих предложений',
        'sourcing.item5': 'Сравнение цен и условий',
        'sourcing.item6': 'Подбор оптимальных вариантов',
        'sourcing.how_label': 'ПРОЦЕСС',
        'sourcing.how_title': 'Как мы работаем',
        'sourcing.step1': 'Анализируем ваши требования',
        'sourcing.step2': 'Ищем производителей',
        'sourcing.step3': 'Проводим первичный отбор',
        'sourcing.step4': 'Предоставляем готовые варианты',
        'sourcing.cta_title': 'Оставьте заявку и получите список поставщиков',
        'sourcing.cta_btn': 'Оставить заявку',
        'sourcing.back_btn': 'Назад к торговле',

        // Проверка поставщиков
        'verification.hero_badge': 'Международная торговля',
        'verification.hero_title': 'Проверка поставщиков',
        'verification.hero_desc': 'Не все поставщики в Китае надежны. Непроверенные партнеры могут привести к потерям и рискам. Мы проводим комплексную проверку, чтобы вы могли работать безопасно.',
        'verification.hero_desc2': 'Мы оцениваем не только цену, но и надежность, производственные возможности и условия сотрудничества.',
        'verification.included_label': 'ЧТО ВХОДИТ',
        'verification.included_title': 'Наши услуги',
        'verification.item1': 'Проверка регистрации компании',
        'verification.item2': 'Подтверждение наличия производства',
        'verification.item3': 'Анализ производственных возможностей',
        'verification.item4': 'Проверка документов и сертификатов',
        'verification.item5': 'Оценка опыта и репутации',
        'verification.item6': 'Анализ рисков',
        'verification.how_label': 'ПРОЦЕСС',
        'verification.how_title': 'Как мы работаем',
        'verification.step1': 'Сбор информации',
        'verification.step2': 'Проверка компании',
        'verification.step3': 'Оценка производства',
        'verification.step4': 'Предоставление отчета',
        'verification.cta_title': 'Проверьте поставщика перед началом работы',
        'verification.cta_btn': 'Оставить заявку',
        'verification.back_btn': 'Назад к торговле',

        // Закупка и переговоры
        'purchasing.hero_badge': 'Международная торговля',
        'purchasing.hero_title': 'Закупка и переговоры',
        'purchasing.hero_desc': 'Грамотные переговоры в Китае напрямую влияют на цену и условия сделки. Мы ведем переговоры от вашего имени и добиваемся оптимальных условий.',
        'purchasing.included_label': 'ЧТО ВХОДИТ',
        'purchasing.included_title': 'Наши услуги',
        'purchasing.item1': 'Переговоры по цене',
        'purchasing.item2': 'Согласование условий',
        'purchasing.item3': 'Оформление заказа',
        'purchasing.item4': 'Организация оплаты',
        'purchasing.item5': 'Работа с контрактами',
        'purchasing.item6': 'Контроль процесса',
        'purchasing.how_label': 'ПРОЦЕСС',
        'purchasing.how_title': 'Как мы работаем',
        'purchasing.step1': 'Определяем условия',
        'purchasing.step2': 'Ведем переговоры',
        'purchasing.step3': 'Согласовываем условия',
        'purchasing.step4': 'Контролируем процесс',
        'purchasing.cta_title': 'Доверьте нам процесс закупки',
        'purchasing.cta_btn': 'Оставить заявку',
        'purchasing.back_btn': 'Назад к торговле',

        // Оборудование
        'equipment.hero_badge': 'Промышленное оборудование и техника',
        'equipment.hero_title': 'Промышленное оборудование и техника',
        'equipment.hero_desc': 'Мы работаем напрямую с проверенными производителями в Китае, обеспечивая подбор, закупку и поставку промышленного оборудования для Узбекистана и стран Центральной Азии.<br><br>Наши ключевые направления — бетонные заводы, асфальтные заводы, буровое оборудование и специализированная техника. Каждый проект формируется индивидуально с учётом реальных задач клиента, объёма производства и технических требований.<br><br>Мы не ограничиваемся простым поиском оборудования. На каждом этапе проекта — от выбора производителя и технической конфигурации до согласования условий, контроля качества, логистики и таможенного оформления — мы полностью управляем процессом.<br><br>В результате клиент получает готовое к работе оборудование без лишних рисков и неопределённостей.',
        'equipment.hero_btn': 'Смотреть продукцию',
        'equipment.products_label': 'НАША ПРОДУКЦИЯ',
        'equipment.products_title': 'Каталог оборудования',
        'equipment.product1_title': 'Бетонные заводы',
        'equipment.product1_desc': 'Стационарные и мобильные бетонные заводы различной мощности от ведущих китайских производителей. Подбор оборудования с учётом задач проекта, надёжная комплектация и практическая поддержка при выборе.',
        'equipment.product2_title': 'Асфальтные заводы',
        'equipment.product2_desc': 'Асфальтные заводы для дорожного строительства и инфраструктурных проектов. Решения подбираются индивидуально в зависимости от требуемой производительности и технических параметров.',
        'equipment.product3_title': 'Буровое оборудование',
        'equipment.product3_desc': 'Профессиональное буровое оборудование для строительства, горнодобывающей отрасли и геологоразведки. Поставляется от проверенных производителей с различными техническими характеристиками.',
        'equipment.product4_title': 'Специальная техника',
        'equipment.product4_desc': 'Строительная и промышленная техника, подобранная под конкретные задачи проекта. Индивидуальная конфигурация, подбор и полное сопровождение поставки.',
        'equipment.how_label': 'ПРОЦЕСС',
        'equipment.how_title': 'Как мы работаем',
        'equipment.step1': 'Анализ требований и проекта',
        'equipment.step1_desc': 'Мы детально изучаем задачи клиента, объём производства и технические требования проекта.',
        'equipment.step2': 'Подбор производителя и конфигурации',
        'equipment.step2_desc': 'Работаем напрямую с проверенными производителями и подбираем оптимальную конфигурацию оборудования под задачи проекта.',
        'equipment.step3': 'Переговоры и согласование условий',
        'equipment.step3_desc': 'Ведём прямые переговоры с производителем, согласовывая цену, качество и условия поставки.',
        'equipment.step4': 'Доставка и контроль',
        'equipment.step4_desc': 'Полностью контролируем логистику, отгрузку, документы и таможенное оформление, обеспечивая безопасную поставку оборудования.',
        'equipment.cta_title': 'Нужно промышленное оборудование из Китая?',
        'equipment.cta_desc': 'Оставьте заявку, и наш специалист поможет подобрать подходящее оборудование по лучшей цене.',
        'equipment.cta_btn': 'Получить предложение',
        // Logistics page
        'logistics.hero_badge': 'Логистические услуги',
        'logistics.hero_title': 'Международная<br>логистика из Китая',
        'logistics.hero_desc': 'Организуем доставку грузов из Китая в Центральную Азию, USA, Россию и другие направления под полным операционным контролем. Мы управляем всеми этапами логистики — от приема и консолидации груза до оформления документов, таможни и финальной доставки.<br><br>Каждая отправка тщательно планируется: подбирается оптимальный маршрут, контролируются сроки и обеспечивается прозрачность на всех этапах. Надежность, скорость и системный подход — основа нашей работы.',
        'logistics.hero_btn1': 'Рассчитать стоимость',
        'logistics.hero_btn2': 'Отследить груз',
        'logistics.routes_label': 'НАПРАВЛЕНИЯ',
        'logistics.routes_title': 'Основные направления',
        'logistics.routes_desc': 'Для каждого направления подбираем оптимальную транспортную модель и обеспечиваем полный контроль доставки.',
        'logistics.route1_country': 'Китай',
        'logistics.route1_sub': 'Точки отправки',
        'logistics.route1_desc': 'Гуанчжоу, Шэньчжэнь, Иу, Шанхай и другие промышленные регионы. Консолидация, складирование и подготовка к экспорту.',
        'logistics.route2_country': 'Россия',
        'logistics.route2_sub': 'Авто / ж/д',
        'logistics.route2_desc': 'Доставка по всей территории России. Стабильные маршруты через автотранспорт и железную дорогу. Срок: 20–25 дней.',
        'logistics.route3_country': 'Центральная Азия',
        'logistics.route3_sub': 'Ключевое направление',
        'logistics.route3_desc': 'Узбекистан, Казахстан, Кыргызстан — ключевые направления. Регулярные отправки авто и ж/д транспортом. Срок: 7–15 дней.',
        'logistics.route4_country': 'США',
        'logistics.route4_sub': 'Морские перевозки',
        'logistics.route4_desc': 'Контейнерные перевозки (FCL / LCL). Решения порт-порт и door-to-door. Срок: 25–40 дней.',
        'logistics.services_label': 'НАШИ УСЛУГИ',
        'logistics.services_title': 'Единая логистическая система',
        'logistics.services_desc': 'Доставка из Китая до конечного пункта — единая система управления без посредников.',
        'logistics.card1_title': 'Автоперевозки',
        'logistics.card1_desc': 'Организуем доставку грузов из Китая в Центральную Азию и Россию автотранспортом. Door-to-door доставка, оптимальные маршруты и постоянный контроль движения груза.',
        'logistics.card2_title': 'Железнодорожные перевозки',
        'logistics.card2_desc': 'Стабильное и экономичное решение для перевозки крупных объемов. Ж/д доставка обеспечивает баланс сроков, стоимости и безопасности.',
        'logistics.card3_title': 'Морские перевозки',
        'logistics.card3_desc': 'Контейнерные перевозки (FCL / LCL) для дальних направлений. Обеспечиваем оптимальный баланс стоимости и сроков с полным контролем процесса.',
        'logistics.card4_title': 'Таможенное оформление',
        'logistics.card4_desc': 'Полное сопровождение экспортно-импортных операций. Подготовка документов, декларация и минимизация рисков при прохождении таможни.',
        'logistics.card_more': 'Подробнее',
        'logistics.stat1': 'Направлений доставки',
        'logistics.stat2': 'Доставок без потерь',
        'logistics.stat3': 'Успешных отгрузок',
        'logistics.stat4': 'Поддержка клиентов',
        'logistics.cta_badge': 'Рассчитать доставку',
        'logistics.cta_title': 'Нужно доставить груз из Китая?',
        'logistics.cta_desc': 'Сообщите, откуда отправляется груз, его объём и требуемые сроки доставки — мы предоставим вам оптимальный маршрут, точную стоимость и сроки доставки в течение 2 часов.',
        'logistics.cta_btn1': 'Рассчитать стоимость',
        'logistics.cta_btn2': 'Наши маршруты',
        // Consulting page
        'consulting.hero_badge': 'Консалтинговые услуги',
        'consulting.hero_title': 'Бизнес-консалтинг в<br>Китае и Гонконге',
        'consulting.hero_desc': 'Мы полностью сопровождаем регистрацию компании, открытие банковского счёта, визовую поддержку и запуск бизнеса — от идеи до полноценной работы.',
        'consulting.hero_btn1': 'Получить консультацию',
        'consulting.hero_btn2': 'Узнать стоимость',
        'consulting.reg_label': 'РЕГИСТРАЦИЯ КОМПАНИЙ',
        'consulting.reg_title': 'Открытие компании в Китае и Гонконге',
        'consulting.reg_desc': 'Создание компании в Китае или Гонконге — это не просто регистрация. Это выбор правильной структуры, налоговой модели и построение рабочей бизнес-системы.<br><br>Мы доводим компанию до полного запуска — от документов до реальной деятельности.',
        'consulting.reg_china_title': 'Китай (материковый)',
        'consulting.reg_china_desc': 'Регистрация WFOE, Joint Venture или RO с правильной бизнес-структурой и полной поддержкой. Мы не просто открываем компанию — мы превращаем её в реально работающий бизнес.',
        'consulting.reg_china_f1': 'Подбор структуры компании',
        'consulting.reg_china_f2': 'Лицензия и корпоративные печати',
        'consulting.reg_china_f3': 'Открытие банковских счетов',
        'consulting.reg_china_f4': 'Налоговая и операционная настройка',
        'consulting.reg_china_result': 'Результат: полностью контролируемая и работающая компания в Китае.',
        'consulting.reg_hk_title': 'Гонконг',
        'consulting.reg_hk_desc': 'Гонконг — оптимальная юрисдикция для международного бизнеса и финансовых операций. Мы выстраиваем быстро запускаемую структуру, подходящую для глобальной работы.',
        'consulting.reg_hk_f1': 'Оптимизация налогов',
        'consulting.reg_hk_f2': 'Удалённое управление',
        'consulting.reg_hk_f3': 'Международные банковские решения',
        'consulting.reg_hk_f4': 'Быстрый запуск',
        'consulting.reg_hk_result': 'Результат: гибкая и эффективная структура для глобального бизнеса.',
        'consulting.reg_btn': 'Узнать подробнее',
        'consulting.visa_label': 'ВИЗОВЫЙ СЕРВИС',
        'consulting.visa_title': 'Визовая поддержка через бизнес',
        'consulting.visa_desc': 'Легальный вход в Китай и Гонконг через работу и бизнес',
        'consulting.visa_per': '/ чел.',
        'consulting.visa2_title': 'Рабочая виза (Z) через компанию',
        'consulting.visa2_f1': 'Трудоустройство через китайскую компанию',
        'consulting.visa2_f2': 'Оформление Work Permit и Residence Permit',
        'consulting.visa2_f3': 'Подготовка и подача полного пакета документов',
        'consulting.visa2_f4': 'Легальное проживание и работа в Китае',
        'consulting.visa2_note': 'Полное решение для работы в Китае',
        'consulting.visa3_title': 'Виза в Гонконг через компанию',
        'consulting.visa3_f1': 'Оформление визы через гонконгскую компанию',
        'consulting.visa3_f2': 'Бизнес и инвестиционные визы',
        'consulting.visa3_f3': 'Удобно для международных поездок',
        'consulting.visa3_f4': 'Возможность удалённого управления',
        'consulting.visa3_note': 'Гибкое решение для международного бизнеса',
        'consulting.stat1': 'Зарегистрированных компаний',
        'consulting.stat2': 'Успешных оформлений',
        'consulting.stat3': 'Лет юридической практики',
        'consulting.stat4': 'Виз оформлено',
        'consulting.cta_badge': 'Бесплатная консультация',
        'consulting.cta_title': 'Готовы начать бизнес в Китае?',
        'consulting.cta_desc': 'Мы помогаем открыть компанию в Китае и Гонконге, запустить банковские счета и выстроить полноценную бизнес-систему.<br><br>Все процессы выполняются на основе практического опыта, без ошибок и под полным контролем.',
        'consulting.cta_btn1': 'Получить консультацию',
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
        'footer.copyright': '© 2026 Davs Global. Все права защищены.'
    },
    uz: {
        'nav.trading': 'Xalqaro savdo',
        'nav.logistics': 'Logistika',
        'nav.equipment': 'Sanoat texnikasi',
        'nav.consulting': 'Konsalting',
        'nav.news': 'Yangiliklar',
        'nav.contacts': 'Kontaktlar',
        'nav.contact': "Bog'lanish",
        'hero.badge': "Global sanoat yechimlari",
        'hero.title': '<span class="highlight">Xitoy</span> bilan biznesingizni to\'liq yo\'lga qo\'yamiz',
        'hero.description': "Uskuna topish, zavod tekshirish, logistika va biznes konsalting — barcha jarayonni biz boshqaramiz.",
        'hero.btn_explore': 'Xizmatlarni ko\'rish',
        'hero.btn_contact': "Biz bilan bog'laning",
        'hero.scroll': 'PASTGA',
        'services.label': 'Bizning xizmatlar',
        'services.title': 'Asosiy xizmatlar',
        'services.description': "Xitoy bilan ishlash uchun kerak bo'lgan barcha xizmatlar — bitta tizimda.",
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
        'services.trading.desc': "Professional qidiruv, yetkazib beruvchilarni tekshirish va sanoat uskunalarini sifat kafolati bilan xarid qilish.",
        'services.logistics_main.desc': "Xitoydan to'liq logistika tsikli: havo, dengiz va temir yo'l tashuvlari, bojxona rasmiylashtiruvi va eshikkacha yetkazib berish.",
        'services.consulting_main.desc': "Kompaniyani ro'yxatdan o'tkazish, viza xizmatlari va Xitoy va Gonkongda biznes yuritish uchun hujjatlarni tayyorlash.",
        'services.contacts.desc': "Xitoy va O'zbekistondagi ofislarimiz bilan bog'laning. Biz har doim loyihangizni muhokama qilishga tayyormiz.",
        'services.learn_more': "Batafsil",
        'about.label': "Biz haqimizda",
        'about.title': 'Davs Global',
        'about.desc': "Biz xalqaro savdo, logistika va biznes konsaltingga ixtisoslashgan professionallar jamoasimiz. Xitoy va O'zbekistondagi ofislarimiz bilan biz biznesga ishonchli ta'minot zanjirlarini qurishda yordam beramiz.",
        'about.feature1_title': "Tasdiqlangan yetkazib beruvchilar",
        'about.feature1_desc': "Xitoydan 500+ tasdiqlangan ishlab chiqaruvchi va yetkazib beruvchilar",
        'about.feature2_title': "Global mavjudlik",
        'about.feature2_desc': "Shanxay va Toshkentda ofislar, 15+ mamlakatga yetkazib berish",
        'about.feature3_title': "Sifat kafolati",
        'about.feature3_desc': "Xarid va yetkazib berishning har bir bosqichida to'liq sifat nazorati",
        'about.stat_years': "Bozorda yillar",
        'about.stat_deals': "Muvaffaqiyatli bitimlar",
        'about.stat_countries': "Mavjudlik mamlakatlari",
        'about.stat_delivery': "Yo'qotishsiz yetkazib berishlar",
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
        'contact.form_label': 'BIZGA YOZING',
        'contact.form_title': 'So\'rov qoldiring',
        'contact.name': 'Ism',
        'contact.name_placeholder': 'Ismingiz',
        'contact.email': 'Email',
        'contact.company': 'Kompaniya',
        'contact.company_placeholder': 'Kompaniya nomi',
        'contact.phone': 'Telefon',
        'contact.message': 'Xabar',
        'contact.message_placeholder': 'So\'rovingizni tavsiflang...',
        'contact.submit': 'So\'rov yuborish',
        'contact.success': '✓ Xabaringiz yuborildi. 24 soat ichida javob beramiz.',
        'contact.error': '✗ Xato yuz berdi. Qayta urinib ko\'ring.',
        'contact.direct_title': 'Bevosita bog\'laning',
        'contact.direct_desc': 'Mutaxassislarimiz ish vaqtida barcha savollarga javob berishadi. Shoshilinch so\'rovlar uchun — to\'g\'ridan-to\'g\'ri qo\'ng\'iroq qiling.',
        'contact.general': 'Umumiy so\'rovlar',
        'contact.phone_tashkent': 'Telefon (Toshkent)',
        // Contacts page
        'contacts.hero_badge': 'Biz bilan bog\'laning',
        'contacts.hero_title': 'Kontaktlar',
        'contacts.hero_desc': 'Biz har doim aloqadamiz va savollaringizga javob berishga tayyormiz',
        'contacts.offices_label': 'BIZNING OFISLAR',
        'contacts.offices_title': 'Bizning ofislar',
        'contacts.office_china': 'Xitoy',
        'contacts.office_china_city': 'Shanxay, Lingang yangi hududi',
        'contacts.china_address': "Xitoy (Shanxay) erkin savdo sinov zonasi, Lingang yangi hududi, Haiwang yo'li 88-uy",
        'contacts.office_uz': 'O\'zbekiston',
        'contacts.office_uz_city': 'Toshkent',
        'contacts.address': 'Manzil',
        'contacts.phone': 'Telefon',
        'contacts.hours': 'Ish vaqti',
        'contacts.hours_china': 'Du-Ju: 09:00 - 18:00 (GMT+8)',
        'contacts.hours_uz': 'Du-Ju: 09:00 - 18:00 (GMT+5)',
        // Trading page
        'trading.hero_badge': 'Xalqaro savdo va xaridlar',
        'trading.hero_title': 'Xitoydan tovar topish, tekshirish<br>va xarid qilishni soddalashtiramiz',
        'trading.hero_desc': 'Xitoydan tovar va uskunalarni topish, yetkazib beruvchilarni tekshirish hamda xarid jarayonini tashkil qilishda amaliy yordam beramiz. Har bir bosqichda jarayonni nazorat qilib, sizga ishonchli hamkorlikni ta\'minlaymiz.',
        'trading.hero_btn1': 'So\'rov qoldirish',
        'trading.hero_btn2': 'Bizning xizmatlar',
        'trading.services_label': 'BIZNING XIZMATLAR',
        'trading.services_title': 'Xalqaro savdo',
        'trading.services_desc': 'Xalqaro savdo operatsiyalarini samarali va nazorat ostida yuritamiz',
        'trading.card1_title': 'Tovar qidirish',
        'trading.card1_desc': 'Sizning talablaringiz asosida Xitoydagi ishlab chiqaruvchilar va yetkazib beruvchilarni aniqlaymiz. Mos variantlarni saralab, dastlabki ma\'lumotlarni taqdim etamiz.',
        'trading.card2_title': 'Ishonchli yetkazib beruvchini tanlash va tekshirish',
        'trading.card2_desc': 'Hamkorlarni saralab, ularning ishonchliligini tekshiramiz: kompaniya faoliyati, ishlab chiqarish imkoniyati va hujjatlari. Qaror qabul qilish uchun zarur ma\'lumotlarni taqdim etamiz.',
        'trading.card3_title': 'Xarid va muzokara',
        'trading.card3_desc': 'Xarid jarayonini muvofiqlashtiramiz. Narx va shartlarni kelishish, buyurtma va to\'lov jarayonlarini tartibga solishda amaliy yordam beramiz.',
        'trading.card_more': 'Batafsil',
        'trading.stat1': 'Tasdiqlangan yetkazib beruvchilar',
        'trading.stat2': 'Bozorda yillar',
        'trading.stat3': 'Muvaffaqiyatli bitimlar',
        'trading.stat4': 'Mavjudlik mamlakatlari',
        'trading.cta_badge': 'Hamkorlikni boshlash',
        'trading.cta_title': 'Biz bilan ishlashga tayyormisiz?',
        'trading.cta_desc': 'So\'rov qoldiring — biz sizga mos ishlab chiqaruvchilarni topish, tekshirish va xarid jarayonini tashkil qilishda yordam beramiz. Mutaxassisimiz 24 soat ichida siz bilan bog\'lanadi.',
        'trading.cta_btn1': 'So\'rov qoldirish',
        'trading.cta_btn2': 'Katalogni yuklab olish',

        // Tovar qidirish
        'sourcing.hero_badge': 'Xalqaro savdo',
        'sourcing.hero_title': 'Tovar qidirish',
        'sourcing.hero_desc': "Xitoy bozorida to'g'ri ishlab chiqaruvchini topish eng muhim bosqich hisoblanadi. Noto'g'ri tanlov sifat muammolari, kechikishlar va moliyaviy yo'qotishlarga olib kelishi mumkin. Biz sizning talablaringiz asosida bozorda chuqur tahlil olib borib, eng mos va ishonchli ishlab chiqaruvchilarni aniqlaymiz.",
        'sourcing.hero_desc2': "Biz nafaqat oddiy qidiruv bilan cheklanmaymiz — har bir variantni texnik, tijoriy va operatsion jihatdan baholaymiz.",
        'sourcing.included_label': "XIZMAT NIMALARNI O'Z ICHIGA OLADI",
        'sourcing.included_title': 'Bizning xizmatlar',
        'sourcing.item1': 'Mahsulot va bozorni tahlil qilish',
        'sourcing.item2': 'Mos ishlab chiqaruvchilarni aniqlash',
        'sourcing.item3': "Yetkazib beruvchilarni dastlabki saralash",
        'sourcing.item4': 'Tijorat takliflarini (quotation) yig\'ish',
        'sourcing.item5': 'Narx va shartlarni taqqoslash',
        'sourcing.item6': "Siz uchun optimal variantlarni tanlab berish",
        'sourcing.how_label': 'JARAYON',
        'sourcing.how_title': 'Qanday ishlaymiz',
        'sourcing.step1': "Sizning talablaringiz va texnik spetsifikatsiyangizni o'rganamiz",
        'sourcing.step2': 'Xitoy bozorida mos ishlab chiqaruvchilarni aniqlaymiz',
        'sourcing.step3': 'Yetkazib beruvchilarni saralaymiz va tekshiramiz',
        'sourcing.step4': 'Eng yaxshi variantlarni sizga taqdim etamiz',
        'sourcing.cta_title': "So'rov qoldiring va sizga mos ishlab chiqaruvchilar ro'yxatini oling",
        'sourcing.cta_btn': "So'rov qoldirish",
        'sourcing.back_btn': 'Savdoga qaytish',

        // Yetkazib beruvchini tekshirish
        'verification.hero_badge': 'Xalqaro savdo',
        'verification.hero_title': 'Ishonchli yetkazib beruvchini tanlash va tekshirish',
        'verification.hero_desc': "Xitoyda barcha ishlab chiqaruvchilar bir xil darajada ishonchli emas. Ko'plab kompaniyalar vositachi yoki soxta bo'lishi mumkin. Shu sababli hamkorni tekshirish xavflarni kamaytirishda hal qiluvchi ahamiyatga ega.",
        'verification.hero_desc2': "Biz yetkazib beruvchilarni chuqur tekshirib, ularning haqiqiy faoliyati, ishlab chiqarish imkoniyati va ishonchliligini baholaymiz.",
        'verification.included_label': "XIZMAT NIMALARNI O'Z ICHIGA OLADI",
        'verification.included_title': 'Bizning xizmatlar',
        'verification.item1': 'Kompaniya registratsiyasini tekshirish',
        'verification.item2': 'Zavod mavjudligini aniqlash',
        'verification.item3': 'Ishlab chiqarish quvvatini baholash',
        'verification.item4': 'Sertifikat va hujjatlarni tekshirish',
        'verification.item5': 'Oldingi mijozlar va tajribani tahlil qilish',
        'verification.item6': 'Risklarni baholash',
        'verification.how_label': 'JARAYON',
        'verification.how_title': 'Qanday ishlaymiz',
        'verification.step1': "Yetkazib beruvchi haqida ma'lumot yig'amiz",
        'verification.step2': 'Kompaniya va hujjatlarni tekshiramiz',
        'verification.step3': 'Ishlab chiqarish imkoniyatini baholaymiz',
        'verification.step4': "Sizga to'liq hisobot taqdim etamiz",
        'verification.cta_title': 'Yetkazib beruvchini tekshirtiring va xavflarni kamaytiring',
        'verification.cta_btn': "So'rov qoldirish",
        'verification.back_btn': 'Savdoga qaytish',

        // Xarid va muzokara
        'purchasing.hero_badge': 'Xalqaro savdo',
        'purchasing.hero_title': 'Xarid va muzokara',
        'purchasing.hero_desc': "Xitoyda to'g'ri muzokara qilish narx, sifat va shartlarga bevosita ta'sir qiladi. Noto'g'ri kelishuv ortiqcha xarajatlar yoki muammolarga olib kelishi mumkin. Biz siz nomingizdan muzokaralar olib borib, eng maqbul narx va shartlarni kelishishga yordam beramiz.",
        'purchasing.included_label': "XIZMAT NIMALARNI O'Z ICHIGA OLADI",
        'purchasing.included_title': 'Bizning xizmatlar',
        'purchasing.item1': "Narx bo'yicha muzokara",
        'purchasing.item2': 'Shartlarni kelishish',
        'purchasing.item3': 'Buyurtmani rasmiylashtirish',
        'purchasing.item4': "To'lov jarayonini tashkil qilish",
        'purchasing.item5': 'Shartnoma va hujjatlar bilan ishlash',
        'purchasing.item6': 'Jarayonni nazorat qilish',
        'purchasing.how_label': 'JARAYON',
        'purchasing.how_title': 'Qanday ishlaymiz',
        'purchasing.step1': 'Siz bilan shartlarni aniqlaymiz',
        'purchasing.step2': 'Yetkazib beruvchi bilan muzokara olib boramiz',
        'purchasing.step3': 'Eng yaxshi shartlarni kelishamiz',
        'purchasing.step4': 'Xarid jarayonini nazorat qilamiz',
        'purchasing.cta_title': 'Xarid jarayonini bizga topshiring',
        'purchasing.cta_btn': "So'rov qoldirish",
        'purchasing.back_btn': 'Savdoga qaytish',

        // Sanoat texnikasi
        'equipment.hero_badge': 'Sanoat texnikasi va uskunalar',
        'equipment.hero_title': 'Sanoat texnikasi va uskunalar',
        'equipment.hero_desc': "Biz Xitoydagi tekshirilgan ishlab chiqaruvchilar bilan to'g'ridan-to'g'ri hamkorlik qilib, O'zbekiston va Markaziy Osiyo bozori uchun sanoat uskunalarini tanlash, xarid qilish va yetkazib berish xizmatlarini amalga oshiramiz.<br><br>Asosiy yo'nalishlarimiz — beton zavodlar, asfalt zavodlar, burg'ulash uskunalari va turli maxsus texnikalar bo'lib, har bir loyiha mijozning real ehtiyojlari, ishlab chiqarish hajmi va texnik talablariga asoslanib individual tarzda shakllantiriladi.<br><br>Biz faqat uskunani topib berish bilan cheklanmaymiz. Jarayonning har bir bosqichi — ishlab chiqaruvchini tanlash, texnik konfiguratsiya, narx va shartlarni kelishish, sifat nazorati, logistika va bojxona rasmiylashtiruvi — to'liq nazorat ostida olib boriladi.<br><br>Natijada mijoz tayyor va ishlashga tayyor uskunani hech qanday ortiqcha risklarsiz qabul qiladi.",
        'equipment.hero_btn': "Mahsulotlarni ko'rish",
        'equipment.products_label': 'BIZNING MAHSULOTLAR',
        'equipment.products_title': 'Uskunalar katalogi',
        'equipment.product1_title': 'Beton zavodlar',
        'equipment.product1_desc': "Yetakchi Xitoy ishlab chiqaruvchilaridan turli quvvatdagi statsionar va mobil beton zavodlar. Qurilish loyihalari uchun mos konfiguratsiya, ishonchli komplektatsiya va amaliy tanlov yordami.",
        'equipment.product2_title': 'Asfalt zavodlar',
        'equipment.product2_desc': "Yo'l qurilishi va infratuzilma loyihalari uchun statsionar va mobil asfalt zavodlari. Ishlab chiqarish quvvati, konfiguratsiya va loyiha talablariga mos yechimlar asosida tanlanadi.",
        'equipment.product3_title': "Burg'ulash uskunalari",
        'equipment.product3_desc': "Qurilish, konchilik va geologik qidiruv ishlari uchun professional burg'ulash uskunalari. Tekshirilgan ishlab chiqaruvchilardan turli model va texnik variantlar.",
        'equipment.product4_title': 'Maxsus texnika',
        'equipment.product4_desc': "Loyihangiz talablariga moslashtirilgan qurilish va sanoat texnikalari. Individual tanlov, texnik moslashtirish va yetkazib berish bo'yicha to'liq hamrohlik.",
        'equipment.how_label': 'JARAYON',
        'equipment.how_title': 'Qanday ishlaymiz',
        'equipment.step1': "Talab va loyiha tahlili",
        'equipment.step1_desc': "Mijozning real ehtiyojlari, ishlab chiqarish hajmi va texnik talablarini chuqur o'rganamiz.",
        'equipment.step2': "Ishlab chiqaruvchi va konfiguratsiya tanlash",
        'equipment.step2_desc': "Tekshirilgan zavodlar orasidan optimal variantni tanlaymiz, texnik konfiguratsiyani loyihaga moslashtiramiz.",
        'equipment.step3': "Muzokara va shartlarni kelishish",
        'equipment.step3_desc': "Narx, sifat va yetkazib berish shartlari bo'yicha ishlab chiqaruvchi bilan to'g'ridan-to'g'ri muzokara olib boramiz.",
        'equipment.step4': "Yetkazib berish va nazorat",
        'equipment.step4_desc': "Logistika, yuklash, hujjatlar va bojxona jarayonlarini to'liq nazorat qilib, uskunani xavfsiz yetkazib beramiz.",
        'equipment.cta_title': "Xitoydan sanoat uskunalari kerakmi?",
        'equipment.cta_desc': "So'rov qoldiring va mutaxassisimiz sizga eng yaxshi narxda mos uskunani topishda yordam beradi.",
        'equipment.cta_btn': "Taklif olish",
        // Logistics page
        'logistics.hero_badge': 'Logistika xizmatlari',
        'logistics.hero_title': 'Xitoydan xalqaro<br>logistika',
        'logistics.hero_desc': 'Xitoydan Markaziy Osiyo, Rossiya, AQSH va boshqa xalqaro yo\'nalishlarga yuk yetkazib berishni to\'liq nazorat ostida tashkil qilamiz. Biz logistika jarayonining barcha bosqichlarini boshqaramiz — yukni qabul qilish, konsolidatsiya, hujjatlashtirish, bojxona rasmiylashtiruvi va yakuniy yetkazib berishgacha.<br><br>Har bir jo\'natma aniq rejalashtiriladi, optimal marshrut tanlanadi va jarayon davomida to\'liq shaffoflik ta\'minlanadi. Ishonchlilik, tezlik va tizimli yondashuv — bizning asosiy standartlarimiz.',
        'logistics.hero_btn1': 'Narxni hisoblash',
        'logistics.hero_btn2': 'Yukni kuzatish',
        'logistics.routes_label': 'YO\'NALISHLAR',
        'logistics.routes_title': 'Asosiy yo\'nalishlar',
        'logistics.routes_desc': 'Har bir yo\'nalish uchun optimal transport modeli tanlanadi va yetkazib berish jarayoni to\'liq nazorat ostida amalga oshiriladi.',
        'logistics.route1_country': 'Xitoy',
        'logistics.route1_sub': 'Jo\'natish markazlari',
        'logistics.route1_desc': 'Guanchjou, Shenzhen, Yiwu, Shanxay va boshqa sanoat hududlarida yuklarni qabul qilamiz. Konsolidatsiya, omborlash va eksportga tayyorlash xizmatlari mavjud.',
        'logistics.route2_country': 'Rossiya',
        'logistics.route2_sub': 'Quruqlik / Temir yo\'l',
        'logistics.route2_desc': 'Rossiyaning barcha hududlariga barqaror logistika yo\'nalishlari orqali yetkazib berish. Avtotransport va temir yo\'l orqali door-to-door. Transit: 20–25 kun.',
        'logistics.route3_country': 'Markaziy Osiyo',
        'logistics.route3_sub': 'Asosiy yo\'nalish',
        'logistics.route3_desc': 'O\'zbekiston, Qozog\'iston va Qirg\'izistonga tezkor va optimal logistika yechimlari. Quruqlik transporti va temir yo\'l orqali muntazam jo\'natmalar. Transit: 7–15 kun.',
        'logistics.route4_country': 'AQSh',
        'logistics.route4_sub': 'Dengiz logistikasi',
        'logistics.route4_desc': 'AQShga konteyner yuklari (FCL / LCL) orqali dengiz transporti. Portdan portgacha yoki door-to-door yechimlar mavjud. Transit: 25–40 kun.',
        'logistics.services_label': 'BIZNING XIZMATLAR',
        'logistics.services_title': 'Yagona logistika tizimi',
        'logistics.services_desc': 'Xitoydan yakuniy manzilgacha — yagona boshqaruv ostida, vositachilarsiz logistika zanjiri.',
        'logistics.card1_title': 'Quruqlik orqali yetkazish',
        'logistics.card1_desc': 'Xitoydan Markaziy Osiyo va Rossiyaga quruqlik transporti orqali tezkor va moslashuvchan yetkazib berishni tashkil qilamiz. Door-to-door format, optimal marshrut tanlash va yuk harakati ustidan doimiy nazorat ta\'minlanadi.',
        'logistics.card2_title': 'Temir yo\'l orqali yetkazish',
        'logistics.card2_desc': 'Katta hajmdagi yuklar uchun barqaror va iqtisodiy logistika yechimi. Temir yo\'l orqali tashish muddatlarning barqarorligi, yuk xavfsizligi va optimal xarajat bilan ajralib turadi.',
        'logistics.card3_title': 'Dengiz orqali yetkazish',
        'logistics.card3_desc': 'Uzoq masofali yo\'nalishlar uchun konteyner tashish (FCL / LCL) xizmatlari. Narx va muddatlar o\'rtasida optimal balansni ta\'minlab, eksport jarayonini to\'liq boshqaramiz.',
        'logistics.card4_title': 'Bojxona rasmiylashtiruvi',
        'logistics.card4_desc': 'Yuklarni eksport-import jarayonida to\'liq bojxona rasmiylashtiruvi. Hujjatlar tayyorlash, deklaratsiya va jarayonni tezlashtirish orqali xavflarni minimallashtiramiz.',
        'logistics.card_more': 'Batafsil',
        'logistics.stat1': 'Yetkazish yo\'nalishlari',
        'logistics.stat2': 'Yo\'qotishsiz yetkazishlar',
        'logistics.stat3': 'Muvaffaqiyatli jo\'natmalar',
        'logistics.stat4': 'Mijozlarni qo\'llab-quvvatlash',
        'logistics.cta_badge': 'Yetkazishni hisoblash',
        'logistics.cta_title': 'Xitoydan yuk yetkazish kerakmi?',
        'logistics.cta_desc': 'Yukingiz qayerdan, qanday hajmda va qaysi muddatda yetkazilishi kerakligini ayting — biz sizga eng optimal marshrut, aniq narx va yetkazish muddatini 2 soat ichida taqdim qilamiz.',
        'logistics.cta_btn1': 'Narxni hisoblash',
        'logistics.cta_btn2': 'Bizning marshrutlar',
        // Consulting page
        'consulting.hero_badge': 'Konsalting xizmatlari',
        'consulting.hero_title': 'Xitoy va Gonkongda<br>biznes konsalting',
        'consulting.hero_desc': 'Kompaniya ro\'yxatdan o\'tkazish, bank hisobi ochish, viza qo\'llab-quvvatlash va biznesni yo\'lga qo\'yish uchun zarur bo\'lgan barcha huquqiy va amaliy jarayonlarni to\'liq boshqaramiz.',
        'consulting.hero_btn1': 'Konsultatsiya olish',
        'consulting.hero_btn2': 'Narxlarni bilish',
        'consulting.reg_label': 'KOMPANIYA OCHISH',
        'consulting.reg_title': 'Xitoy va Gonkongda kompaniya ochish',
        'consulting.reg_desc': 'Xitoy yoki Gonkongda kompaniya ochish — bu faqat registratsiya emas. Bu biznes model, soliq strategiyasi va operatsion tuzilmani to\'g\'ri qurish jarayonidir.<br><br>Biz kompaniyangizni noldan to\'liq ishga tayyor tizimga olib chiqamiz — hujjatlardan tortib bank, buxgalteriya, soliq va real faoliyatgacha.',
        'consulting.reg_china_title': 'Xitoy (materik)',
        'consulting.reg_china_desc': 'Xitoyda kompaniya ochish (WFOE, Joint Venture yoki RO) yuqori darajada nazorat va to\'g\'ri strukturani talab qiladi. Biz sizga nafaqat kompaniya ochib beramiz — balki uni real ishlaydigan biznesga aylantiramiz.',
        'consulting.reg_china_f1': 'Kompaniya strukturasini to\'g\'ri tanlash',
        'consulting.reg_china_f2': 'Biznes litsenziya va muhrlar',
        'consulting.reg_china_f3': 'Bank hisoblarini ochish (RMB / USD)',
        'consulting.reg_china_f4': 'Soliq va operatsion tizimni sozlash',
        'consulting.reg_china_result': 'Natija: siz Xitoyda to\'liq nazoratga ega, qonuniy va ishlaydigan kompaniyaga ega bo\'lasiz.',
        'consulting.reg_hk_title': 'Gonkong',
        'consulting.reg_hk_desc': 'Gonkong kompaniyasi — xalqaro savdo va moliyaviy operatsiyalar uchun eng samarali platformalardan biri. Biz sizga tez ishga tushadigan va global ishlashga mos struktura qurib beramiz.',
        'consulting.reg_hk_f1': 'Xalqaro savdo uchun optimal yurisdiktsiya',
        'consulting.reg_hk_f2': 'Offshor daromad uchun soliq optimizatsiyasi',
        'consulting.reg_hk_f3': 'Masofadan boshqariladigan kompaniya',
        'consulting.reg_hk_f4': 'Xalqaro bank tizimiga ulanish',
        'consulting.reg_hk_result': 'Natija: siz global darajada ishlash uchun moslashuvchan va samarali kompaniyaga ega bo\'lasiz.',
        'consulting.reg_btn': 'Batafsil bilish',
        'consulting.visa_label': 'VIZA XIZMATLARI',
        'consulting.visa_title': 'Biznes orqali viza qo\'llab-quvvatlash',
        'consulting.visa_desc': 'Xitoy va Gonkong orqali qonuniy ishlash va biznes yuritish imkoniyati',
        'consulting.visa_per': '/ kishi',
        'consulting.visa2_title': 'Ish vizasi (Z) — kompaniya orqali',
        'consulting.visa2_f1': 'Xitoyda kompaniya orqali ishga joylashish',
        'consulting.visa2_f2': 'Work Permit va Residence Permit rasmiylashtirish',
        'consulting.visa2_f3': 'To\'liq hujjatlar tayyorlash va topshirish',
        'consulting.visa2_f4': 'Xitoyda qonuniy ishlash va yashash imkoniyati',
        'consulting.visa2_note': 'Xitoyda faoliyat yuritish uchun to\'liq yechim',
        'consulting.visa3_title': 'Gonkong vizasi — kompaniya orqali',
        'consulting.visa3_f1': 'Gonkong kompaniyasi asosida viza jarayoni',
        'consulting.visa3_f2': 'Biznes va investitsiya vizalari',
        'consulting.visa3_f3': 'Xalqaro safarlar uchun qulay yechim',
        'consulting.visa3_f4': 'Masofadan boshqariladigan kompaniya modeli',
        'consulting.visa3_note': 'Global biznes uchun moslashuvchan yechim',
        'consulting.stat1': 'Ro\'yxatdan o\'tgan kompaniyalar',
        'consulting.stat2': 'Muvaffaqiyatli rasmiylashtirish',
        'consulting.stat3': 'Yillik yuridik amaliyot',
        'consulting.stat4': 'Rasmiylashtirilgan vizalar',
        'consulting.cta_badge': 'Bepul konsultatsiya',
        'consulting.cta_title': 'Xitoyda biznes boshlashga tayyormisiz?',
        'consulting.cta_desc': 'Biz sizga Xitoy va Gonkongda kompaniya ochish, bank hisobini ishga tushirish va biznesni to\'liq yo\'lga qo\'yishda amaliy yordam beramiz.<br><br>Har bir jarayon real tajriba asosida, xatolarsiz va to\'liq nazorat ostida amalga oshiriladi.',
        'consulting.cta_btn1': 'Konsultatsiya olish',
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
        'footer.copyright': "© 2026 Davs Global. Barcha huquqlar himoyalangan."
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
    initLogisticsServiceModal();
    initConsultingDetailModal();
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

    // Also handle sv-fade-in elements (used by shared contact form & service pages)
    const fadeElements = document.querySelectorAll('.sv-fade-in');
    if (fadeElements.length) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeElements.forEach(el => fadeObserver.observe(el));
    }
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

// ===== LOGISTICS SERVICE MODAL =====
const logisticsDetails = {
    card2: {
        en: {
            hero: 'Rail transport is the most efficient and cost-effective solution for delivering large-volume cargo from China to Central Asia and Russia. We ensure stable transit times and full control over the logistics process.',
            aboutTitle: 'About the service',
            about: 'Rail freight is ideal for heavy and bulk shipments. It offers reliable schedules, strong cargo protection, and optimized costs.',
            howTitle: 'How it works',
            steps: ['Cargo pickup from supplier', 'Container loading (FCL / LCL)', 'Rail transportation', 'Customs clearance', 'Final delivery'],
            stepsNote: '',
            advTitle: 'Advantages',
            advantages: ['Stable transit times (12–20 days)', 'Ideal for large shipments', 'Faster than sea, cheaper than road', 'High safety', 'Container protection'],
            suitTitle: 'Suitable for',
            suitable: ['Industrial equipment', 'Plant components', 'Heavy machinery', 'Bulk goods'],
            ctaDesc: 'Request a quote and get the most efficient logistics solution.'
        },
        ru: {
            hero: 'Железнодорожные перевозки — оптимальное решение для доставки крупных грузов из Китая в Центральную Азию и Россию. Мы обеспечиваем стабильные сроки и выгодные условия с полным контролем процесса.',
            aboutTitle: 'О сервисе',
            about: 'Ж/д транспорт подходит для тяжелых и объёмных грузов. Он обеспечивает стабильность, безопасность и оптимальную стоимость перевозки.',
            howTitle: 'Как это работает',
            steps: ['Забор груза от поставщика', 'Погрузка в контейнер (FCL / LCL)', 'Перевозка по железной дороге', 'Таможенные процедуры', 'Доставка до конечного получателя'],
            stepsNote: '',
            advTitle: 'Преимущества',
            advantages: ['Стабильные сроки (12–20 дней)', 'Подходит для крупных грузов', 'Быстрее моря, дешевле авто', 'Высокая безопасность', 'Контейнерная защита'],
            suitTitle: 'Для каких грузов',
            suitable: ['Промышленное оборудование', 'Части заводов', 'Тяжёлая техника', 'Крупные партии товаров'],
            ctaDesc: 'Получите расчёт стоимости и оптимальный маршрут доставки.'
        },
        uz: {
            hero: 'Xitoydan Markaziy Osiyo va Rossiyaga katta hajmdagi yuklarni yetkazish uchun eng barqaror va iqtisodiy yechim — temir yo\'l transportidir. Biz yuklaringizni optimal muddat va xarajat bilan yetkazib berib, butun logistika jarayonini to\'liq nazorat qilamiz.',
            aboutTitle: 'Xizmat haqida',
            about: 'Temir yo\'l orqali yetkazish katta hajmli va og\'ir yuklar uchun eng samarali logistika usullaridan biri hisoblanadi. Bu transport turi barqaror jadval, nisbatan past xarajat va yuqori xavfsizlik bilan ajralib turadi. Biz yukni Xitoydagi ishlab chiqaruvchidan olib, yakuniy manzilgacha yetkazib beramiz — barcha jarayon yagona boshqaruv ostida amalga oshiriladi.',
            howTitle: 'Qanday ishlaydi',
            steps: ['Yukni ishlab chiqaruvchidan qabul qilish', 'Konteynerga yuklash (FCL / LCL)', 'Temir yo\'l orqali jo\'natish', 'Chegara va bojxona jarayonlari', 'Yakuniy manzilgacha yetkazib berish'],
            stepsNote: 'Har bir bosqichda yuk holati haqida muntazam ma\'lumot berib boriladi.',
            advTitle: 'Afzalliklar',
            advantages: ['Barqaror yetkazib berish muddatlari (12–20 kun)', 'Katta hajmdagi yuklar uchun ideal', 'Dengizga nisbatan tezroq, avtoga nisbatan arzonroq', 'Yuqori xavfsizlik va kam risk', 'Konteyner orqali himoyalangan tashish'],
            suitTitle: 'Qaysi yuklar uchun mos',
            suitable: ['Sanoat uskunalari', 'Beton zavod, asfalt zavod qismlari', 'Og\'ir va hajmli texnika', 'Katta partiyadagi tovarlar'],
            ctaDesc: 'Katta hajmdagi yuklaringiz uchun optimal logistika yechimini oling. Biz sizga eng samarali variantni taklif qilamiz.'
        }
    },
    card3: {
        en: {
            hero: 'Sea freight is the most cost-effective solution for transporting large volumes of cargo from China to global destinations. We provide full-service container shipping (FCL / LCL) with complete control over the logistics process.',
            aboutTitle: 'About the service',
            about: 'Ocean shipping is ideal for long-distance and bulk cargo. It offers the lowest transportation cost, large capacity, and worldwide coverage.',
            howTitle: 'How it works',
            steps: ['Cargo pickup from supplier', 'Consolidation (for LCL shipments)', 'Container loading (FCL / LCL)', 'Shipping via port', 'Customs clearance at destination port', 'Final delivery'],
            stepsNote: '',
            advTitle: 'Advantages',
            advantages: ['Lowest transportation cost', 'Ideal for large shipments', 'Global coverage', 'FCL & LCL options', 'High cargo safety'],
            suitTitle: 'Suitable for',
            suitable: ['Bulk cargo', 'Industrial equipment', 'Construction materials', 'Import/export shipments'],
            ctaDesc: 'Get the most efficient sea freight solution for your cargo.'
        },
        ru: {
            hero: 'Морские перевозки — оптимальное решение для доставки крупных грузов из Китая по всему миру. Мы полностью управляем контейнерными перевозками (FCL / LCL), обеспечивая безопасность и экономичность.',
            aboutTitle: 'О сервисе',
            about: 'Морской транспорт идеально подходит для дальних направлений и больших объёмов. Он отличается низкой стоимостью, высокой вместимостью и глобальным покрытием.',
            howTitle: 'Как это работает',
            steps: ['Забор груза от поставщика', 'Консолидация (для LCL)', 'Погрузка в контейнер (FCL / LCL)', 'Отправка через порт', 'Таможенное оформление в порту назначения', 'Доставка до конечного получателя'],
            stepsNote: '',
            advTitle: 'Преимущества',
            advantages: ['Минимальная стоимость доставки', 'Идеально для больших объёмов', 'Глобальные направления', 'FCL и LCL варианты', 'Защита груза в контейнере'],
            suitTitle: 'Для каких грузов',
            suitable: ['Крупные партии товаров', 'Промышленное оборудование', 'Строительные материалы', 'Экспортные поставки'],
            ctaDesc: 'Получите оптимальное решение для морской доставки вашего груза.'
        },
        uz: {
            hero: 'Xitoydan dunyoning istalgan nuqtasiga katta hajmdagi yuklarni yetkazib berish uchun eng optimal yechim — dengiz transportidir. Biz konteyner tashish (FCL / LCL) xizmatlarini to\'liq boshqarib, yuklaringizni xavfsiz va iqtisodiy yetkazib beramiz.',
            aboutTitle: 'Xizmat haqida',
            about: 'Dengiz orqali yetkazish uzoq masofali va katta hajmli yuklar uchun eng samarali logistika usuli hisoblanadi. Bu transport turi past xarajat, katta sig\'im va global yo\'nalishlar imkoniyati bilan ajralib turadi. Biz yukni ishlab chiqaruvchidan qabul qilib, portga yetkazamiz, yuklaymiz va yakuniy manzilgacha logistika jarayonini to\'liq nazorat qilamiz.',
            howTitle: 'Qanday ishlaydi',
            steps: ['Yukni ishlab chiqaruvchidan qabul qilish', 'Omborda konsolidatsiya (LCL uchun)', 'Konteynerga yuklash (FCL / LCL)', 'Port orqali jo\'natish', 'Manzil portida bojxona rasmiylashtiruvi', 'Yakuniy manzilgacha yetkazib berish'],
            stepsNote: 'Har bir bosqichda yuk holati monitoring qilinadi va sizga ma\'lumot berib boriladi.',
            advTitle: 'Afzalliklar',
            advantages: ['Eng past logistika xarajati', 'Katta hajmdagi yuklar uchun ideal', 'Global yo\'nalishlar (AQSh, Yevropa, Osiyo)', 'FCL va LCL variantlari', 'Yuk xavfsizligi va konteyner himoyasi'],
            suitTitle: 'Qaysi yuklar uchun mos',
            suitable: ['Katta hajmdagi tovarlar', 'Sanoat uskunalari', 'Qurilish materiallari', 'Eksport-import partiyalari'],
            ctaDesc: 'Yukingiz uchun eng optimal dengiz logistika yechimini oling. Biz sizga xarajat va muddat bo\'yicha eng yaxshi variantni taklif qilamiz.'
        }
    },
    card4: {
        en: {
            hero: 'Customs clearance is one of the most critical and complex stages in international logistics. We manage the entire export-import process, ensuring fast, compliant, and hassle-free clearance.',
            aboutTitle: 'About the service',
            about: 'Customs clearance involves preparing documentation, submitting declarations, and complying with regulations set by customs authorities. Errors at this stage can lead to delays, penalties, or shipment holds. We minimize risks and ensure smooth processing at every step.',
            howTitle: 'How it works',
            steps: ['Document preparation', 'Declaration submission', 'Cargo inspection', 'Duties & taxes processing', 'Cargo release'],
            stepsNote: '',
            advTitle: 'Advantages',
            advantages: ['Accurate documentation', 'Risk reduction', 'Faster clearance', 'Full process control', 'Experience with complex shipments'],
            suitTitle: 'Suitable for',
            suitable: ['Imports from China', 'Export operations', 'Machinery & equipment', 'Bulk shipments'],
            ctaDesc: 'Let us handle your customs process — fast, compliant, and stress-free.'
        },
        ru: {
            hero: 'Таможенное оформление — один из самых сложных и критически важных этапов международной логистики. Мы полностью управляем экспортно-импортными процессами, обеспечивая быстрое и корректное прохождение таможни.',
            aboutTitle: 'О сервисе',
            about: 'Таможенное оформление включает подготовку документов, подачу декларации и контроль со стороны таможенных органов. Ошибки на этом этапе могут привести к задержкам, штрафам или блокировке груза. Мы минимизируем риски и обеспечиваем полный контроль процесса.',
            howTitle: 'Как это работает',
            steps: ['Подготовка документов', 'Подача декларации', 'Проверка груза', 'Оплата пошлин', 'Выпуск груза'],
            stepsNote: '',
            advTitle: 'Преимущества',
            advantages: ['Точность документов', 'Минимизация рисков', 'Быстрое прохождение', 'Полный контроль', 'Опыт работы с различными категориями грузов'],
            suitTitle: 'Для каких случаев',
            suitable: ['Импорт из Китая', 'Экспортные операции', 'Оборудование и техника', 'Крупные поставки'],
            ctaDesc: 'Доверьте нам таможенное оформление — мы обеспечим надёжный результат.'
        },
        uz: {
            hero: 'Xalqaro savdoda bojxona rasmiylashtiruvi — yuk harakatining eng muhim va mas\'uliyatli bosqichidir. Biz eksport va import jarayonlarini to\'liq boshqarib, yuklaringizni bojxonadan tez, to\'g\'ri va muammosiz o\'tkazishni ta\'minlaymiz.',
            aboutTitle: 'Xizmat haqida',
            about: 'Bojxona rasmiylashtiruvi — bu yukni mamlakatdan chiqarish yoki olib kirish uchun zarur bo\'lgan barcha hujjatlar, deklaratsiya va nazorat jarayonlarini o\'z ichiga oladi. Ko\'p hollarda aynan bojxona bosqichida xatoliklar yuz beradi: hujjatlar noto\'g\'ri tayyorlanadi, kodlar noto\'g\'ri beriladi, talablar to\'liq bajarilmaydi. Natijada yuklar ushlanib qoladi yoki qo\'shimcha xarajatlar yuzaga keladi. Biz bu risklarni oldindan bartaraf etib, jarayonni to\'liq nazorat qilamiz.',
            howTitle: 'Qanday ishlaydi',
            steps: ['Yuk hujjatlarini tayyorlash (invoice, packing list, kontrakt va boshqalar)', 'Bojxona deklaratsiyasini topshirish', 'Yukni tekshirish (zarur bo\'lsa)', 'Boj va soliqlarni hisoblash va to\'lash', 'Yukni bojxonadan chiqarish'],
            stepsNote: 'Barcha jarayon siz ishtirokisiz, biz tomonidan boshqariladi.',
            advTitle: 'Afzalliklar',
            advantages: ['Hujjatlar 100% to\'g\'ri tayyorlanadi', 'Yuk kechikishining oldi olinadi', 'Jarima va ortiqcha xarajatlar kamayadi', 'Bojxona jarayoni tezlashtiriladi', 'Har bir bosqich nazorat ostida'],
            suitTitle: 'Qaysi holatlarda kerak',
            suitable: ['Xitoydan import qilganda', 'Eksport operatsiyalarida', 'Texnika va uskunalar olib kirishda', 'Katta hajmdagi yuklarda'],
            ctaDesc: 'Bojxona jarayonidagi barcha murakkabliklarni bizga topshiring. Siz esa faqat natijani oling.'
        }
    }
};

function initLogisticsServiceModal() {
    const modal = document.getElementById('logisticsServiceModal');
    if (!modal) return;

    let currentCardKey = null;

    function renderModal(cardKey) {
        const data = logisticsDetails[cardKey];
        if (!data) return;
        const t = translations[currentLang] || translations.en;
        const d = data[currentLang] || data.en;
        const titleKey = 'logistics.' + cardKey + '_title';

        modal.querySelector('[data-lmodal="title"]').textContent = t[titleKey] || '';
        modal.querySelector('[data-lmodal="hero"]').textContent = d.hero || '';
        modal.querySelector('[data-lmodal="aboutTitle"]').textContent = d.aboutTitle || '';
        modal.querySelector('[data-lmodal="about"]').textContent = d.about || '';
        modal.querySelector('[data-lmodal="howTitle"]').textContent = d.howTitle || '';
        modal.querySelector('[data-lmodal="steps"]').innerHTML = (d.steps || []).map(s => '<li>' + s + '</li>').join('');
        const noteEl = modal.querySelector('[data-lmodal="stepsNote"]');
        noteEl.textContent = d.stepsNote || '';
        noteEl.style.display = d.stepsNote ? '' : 'none';
        modal.querySelector('[data-lmodal="advTitle"]').textContent = d.advTitle || '';
        modal.querySelector('[data-lmodal="advantages"]').innerHTML = (d.advantages || []).map(s => '<li>' + s + '</li>').join('');
        modal.querySelector('[data-lmodal="suitTitle"]').textContent = d.suitTitle || '';
        modal.querySelector('[data-lmodal="suitable"]').innerHTML = (d.suitable || []).map(s => '<li>' + s + '</li>').join('');
        modal.querySelector('[data-lmodal="ctaDesc"]').textContent = d.ctaDesc || '';
    }

    function openModal(cardKey) {
        if (!logisticsDetails[cardKey]) return;
        currentCardKey = cardKey;
        renderModal(cardKey);
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        currentCardKey = null;
    }

    document.querySelectorAll('.sv-card[data-card]').forEach(card => {
        if (!logisticsDetails[card.dataset.card]) return;
        card.classList.add('sv-card--clickable');
        card.addEventListener('click', () => openModal(card.dataset.card));
    });

    modal.querySelector('.sv-lmodal-close').addEventListener('click', closeModal);
    modal.querySelector('.sv-lmodal-overlay').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // Re-render modal body on language change while modal is open
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentCardKey) setTimeout(() => renderModal(currentCardKey), 0);
        });
    });
}

// ===== CONSULTING DETAIL MODAL =====
const consultingDetails = {
    reg_china: {
        uz: {
            title: "Xitoyda kompaniya ochish: amaliy va to'liq jarayon",
            hero: "Xitoyda kompaniya ochish — bu faqat ro'yxatdan o'tish emas, balki biznesni qonuniy, moliyaviy va operatsion jihatdan to'liq ishga tushirish jarayonidir.",
            content: `
                <p>Ko'plab xorijiy tadbirkorlar aynan shu bosqichda qiyinchilikka duch keladi, chunki Xitoy tizimi bir vaqtning o'zida bir nechta mustaqil strukturalar bilan ishlashni talab qiladi: davlat ro'yxati, bank tizimi, soliq tizimi va agar kerak bo'lsa bojxona tizimi.</p>
                <p>Shuning uchun bu jarayonni to'g'ri tashkil qilish — keyingi biznes faoliyatining asosini belgilaydi.</p>

                <h3>Kompaniya ochish qanday boshlanadi</h3>
                <p>Jarayon kompaniya modeli va biznes faoliyatini aniqlashdan boshlanadi.</p>
                <p>Amaliyotda eng keng qo'llaniladigan model — <strong>WFOE</strong> (Wholly Foreign-Owned Enterprise) bo'lib, u xorijiy investor uchun to'liq nazorat va mustaqil faoliyat imkonini beradi.</p>
                <p>To'g'ri tanlangan biznes scope (faoliyat yo'nalishi) keyinchalik:</p>
                <ul>
                    <li>bank bilan ishlash</li>
                    <li>soliq tizimi</li>
                    <li>import/export operatsiyalar</li>
                </ul>
                <p>uchun hal qiluvchi rol o'ynaydi.</p>

                <h3>Registratsiya jarayonining asosiy bosqichlari</h3>

                <h4>1. Hujjatlarni tayyorlash</h4>
                <p>Kompaniya ochish investor hujjatlarini tayyorlashdan boshlanadi.</p>
                <p>Agar investor Xitoydan tashqarida bo'lsa:</p>
                <ul>
                    <li>hujjatlar apostil qilinadi</li>
                    <li>xitoy tiliga tarjima qilinadi</li>
                </ul>
                <p>Agar investor Xitoyda bo'lsa, jarayon tezlashadi.</p>
                <p class="sv-lmodal-meta">Bu bosqich odatda bir necha kun ichida bajariladi (3–10 kun).</p>

                <h4>2. Kompaniyani ro'yxatdan o'tkazish</h4>
                <p>Keyingi bosqichda:</p>
                <ul>
                    <li>kompaniya nomi tasdiqlanadi</li>
                    <li>ustav va huquqiy hujjatlar tayyorlanadi</li>
                    <li>davlat organlariga topshiriladi</li>
                </ul>
                <p>Natijada kompaniya rasmiy ravishda <strong>business license</strong> oladi.</p>
                <p class="sv-lmodal-meta">Odatda ~5–10 ish kuni.</p>

                <h4>3. Bank hisobini ochish</h4>
                <p>Kompaniya faoliyatini boshlash uchun bank hisob ochish majburiy bosqich hisoblanadi.</p>
                <p>Bu jarayonda:</p>
                <ul>
                    <li>direktor shaxsan bankka boradi</li>
                    <li>bank kompaniya faoliyatini tekshiradi</li>
                    <li>RMB va xorijiy valyuta hisoblari ochiladi</li>
                </ul>
                <p class="sv-lmodal-meta">Ko'pincha 1 kun ichida ochiladi, lekin tayyorgarlik muhim.</p>

                <h4>4. Soliq tizimiga ulanish</h4>
                <p>Kompaniya bank hisobidan so'ng soliq tizimiga ulanadi.</p>
                <p>Bu bosqichda:</p>
                <ul>
                    <li>kompaniya soliq to'lovchi sifatida ro'yxatdan o'tadi</li>
                    <li>accounting tizimi belgilanadi</li>
                    <li>soliq reporting jarayoni ishga tushadi</li>
                </ul>
                <p class="sv-lmodal-meta">Odatda ~1 ish kuni.</p>

                <h4>5. Import / eksport tizimi (agar kerak bo'lsa)</h4>
                <p>Agar kompaniya savdo bilan shug'ullansa, qo'shimcha ravishda eksport-import huquqi olinadi.</p>
                <p>Bu orqali:</p>
                <ul>
                    <li>mahsulotlarni eksport qilish</li>
                    <li>bojxona orqali ishlash</li>
                    <li>VAT refund olish</li>
                </ul>
                <p>imkoniyati yaratiladi.</p>
                <p class="sv-lmodal-meta">Odatda 3–5 kun.</p>

                <h3>Umumiy muddat</h3>
                <p>Amaliyotda kompaniya to'liq ishga tayyor bo'lishi:</p>
                <p class="sv-lmodal-highlight">taxminan 3–4 hafta davom etadi</p>
                <p>Bu muddat:</p>
                <ul>
                    <li>hujjatlar sifati</li>
                    <li>bank tekshiruvlari</li>
                    <li>faoliyat turi</li>
                </ul>
                <p>ga qarab o'zgaradi.</p>

                <h3>Muhim amaliy jihatlar</h3>
                <p>Xitoyda kompaniya ochishda quyidagi narsalar hal qiluvchi ahamiyatga ega:</p>
                <ul>
                    <li>biznes faoliyatini to'g'ri belgilash</li>
                    <li>bank account ochishga tayyorgarlik</li>
                    <li>soliq tizimini boshidan to'g'ri sozlash</li>
                    <li>hujjatlarni to'liq va aniq tayyorlash</li>
                </ul>
                <p>Bu omillar keyinchalik kompaniyaning ishlashi yoki ishlamasligini belgilaydi.</p>

                <h3>Natija</h3>
                <p>To'g'ri tashkil qilingan kompaniya sizga quyidagilarni beradi:</p>
                <ul>
                    <li>Xitoyda qonuniy biznes yuritish imkoniyati</li>
                    <li>bank tizimi orqali erkin operatsiyalar</li>
                    <li>import va eksport qilish huquqi</li>
                    <li>soliq tizimi bilan to'liq integratsiya</li>
                </ul>
                <p class="sv-lmodal-highlight">ya'ni: real ishlaydigan biznes tizim</p>
            `,
            ctaDesc: "Xitoyda kompaniya ochish bo'yicha to'liq konsultatsiya oling — biz sizga eng mos strukturani taklif qilamiz."
        },
        ru: {
            title: "Открытие компании в Китае: полный и практический процесс",
            hero: "Открытие компании в Китае — это не просто регистрация, а комплексный процесс запуска полноценного бизнеса с юридической, банковской и налоговой точки зрения.",
            content: `
                <p>Иностранные предприниматели часто сталкиваются с трудностями, так как система в Китае требует взаимодействия сразу с несколькими структурами: государственные органы, банки, налоговая система и, при необходимости, таможенные органы.</p>
                <p>Поэтому ключевой вопрос — не «как зарегистрировать компанию», а <strong>«как построить работающий бизнес в Китае»</strong>.</p>

                <h3>С чего начинается процесс</h3>
                <p>Процесс начинается с выбора структуры компании и определения вида деятельности.</p>
                <p>Наиболее распространённый формат — <strong>WFOE</strong> (компания со 100% иностранным капиталом), которая позволяет полностью контролировать бизнес и самостоятельно вести деятельность.</p>
                <p>Правильный выбор деятельности (business scope) напрямую влияет на:</p>
                <ul>
                    <li>открытие банковского счёта</li>
                    <li>налоговую систему</li>
                    <li>импорт и экспорт</li>
                </ul>

                <h3>Основные этапы регистрации</h3>

                <h4>1. Подготовка документов</h4>
                <p>Подготавливаются документы инвестора.</p>
                <p>Если инвестор находится за пределами Китая — требуется апостиль и перевод.</p>

                <h4>2. Регистрация компании</h4>
                <p>Утверждается название, подготавливаются учредительные документы и подаются в государственные органы.</p>
                <p>После этого компания получает <strong>бизнес-лицензию</strong>.</p>

                <h4>3. Открытие банковского счёта</h4>
                <p>Директор лично посещает банк.</p>
                <p>Открываются счета в RMB и иностранной валюте.</p>

                <h4>4. Налоговая регистрация</h4>
                <p>Компания регистрируется в налоговой системе и настраивается бухгалтерия.</p>

                <h4>5. Импорт / экспорт (при необходимости)</h4>
                <p>Оформляется право на внешнеэкономическую деятельность и возврат НДС.</p>

                <h3>Сроки</h3>
                <p>В среднем компания полностью готова к работе за:</p>
                <p class="sv-lmodal-highlight">3–4 недели</p>

                <h3>Результат</h3>
                <p>Вы получаете:</p>
                <ul>
                    <li>легальную компанию в Китае</li>
                    <li>банковскую инфраструктуру</li>
                    <li>возможность вести импорт и экспорт</li>
                    <li>полностью функционирующий бизнес</li>
                </ul>
            `,
            ctaDesc: "Получите полную консультацию по открытию компании в Китае — мы подберём оптимальную структуру для вашего бизнеса."
        },
        en: {
            title: "Company registration in China: a complete practical guide",
            hero: "Registering a company in China is not just a formal procedure — it is a full process of building a legally compliant, operational business structure.",
            content: `
                <p>Foreign entrepreneurs often face challenges because the system involves multiple layers: government authorities, banking system, tax registration, and customs (if applicable).</p>
                <p>The key question is not <strong>"how to register a company"</strong> but <strong>"how to build a functioning business in China"</strong>.</p>

                <h3>How the process starts</h3>
                <p>The process begins with defining the company structure and business scope.</p>
                <p>The most common model is <strong>WFOE</strong> (Wholly Foreign-Owned Enterprise), which allows full ownership and operational control.</p>
                <p>Choosing the correct business scope directly affects:</p>
                <ul>
                    <li>bank account opening</li>
                    <li>tax structure</li>
                    <li>import/export operations</li>
                </ul>

                <h3>Main steps</h3>

                <h4>1. Document preparation</h4>
                <p>Investor documents are prepared.</p>
                <p>If outside China — notarization/apostille and translation are required.</p>

                <h4>2. Company registration</h4>
                <p>Company name approval, legal documentation, and submission to authorities.</p>
                <p>A <strong>business license</strong> is issued.</p>

                <h4>3. Bank account opening</h4>
                <p>The director must be physically present.</p>
                <p>RMB and foreign currency accounts are opened.</p>

                <h4>4. Tax registration</h4>
                <p>The company is registered with the tax system and accounting is set up.</p>

                <h4>5. Import / export (if required)</h4>
                <p>Customs registration and VAT refund eligibility are obtained.</p>

                <h3>Timeline</h3>
                <p>On average, the company becomes fully operational within:</p>
                <p class="sv-lmodal-highlight">4–6 weeks</p>

                <h3>Result</h3>
                <p>You get:</p>
                <ul>
                    <li>a legally registered company in China</li>
                    <li>full banking functionality</li>
                    <li>import/export capability</li>
                    <li>a fully operational business structure</li>
                </ul>
            `,
            ctaDesc: "Get a full consultation on opening a company in China — we'll design the optimal structure for your business."
        }
    },
    reg_hk: {
        uz: {
            title: "Gonkong kompaniyasi: xalqaro biznes uchun platforma",
            hero: "Gonkong kompaniyasi global savdo va moliyaviy operatsiyalar uchun eng ko'p ishlatiladigan yurisdiktsiyalardan biridir.",
            content: `
                <p>U ayniqsa:</p>
                <ul>
                    <li>trading</li>
                    <li>eksport-import</li>
                    <li>xalqaro to'lovlar</li>
                </ul>
                <p>uchun keng qo'llaniladi.</p>

                <h3>Kompaniya ochish asoslari</h3>
                <p>Gonkongda kompaniya ochish jarayoni soddalashtirilgan bo'lib, quyidagilar talab qilinadi:</p>
                <ul>
                    <li>kamida 1 direktor</li>
                    <li>kamida 1 shareholder</li>
                    <li>kompaniya manzili</li>
                </ul>
                <p class="sv-lmodal-meta">Kompaniya odatda 2–5 ish kuni ichida ro'yxatdan o'tkaziladi.</p>

                <h3>Jarayon qanday kechadi</h3>

                <h4>1. Hujjatlarni tayyorlash</h4>
                <p>Investor ma'lumotlari va kompaniya struktura hujjatlari tayyorlanadi.</p>

                <h4>2. Kompaniyani ro'yxatdan o'tkazish</h4>
                <p>Kompaniya rasmiy ravishda registratsiyadan o'tadi va huquqiy maqom oladi.</p>

                <h4>3. Bank yoki fintech account ochish</h4>
                <p>Kompaniya uchun hisob ochiladi (bank yoki fintech platformalarda).</p>

                <h4>4. Operatsiyani boshlash</h4>
                <p>Kompaniya xalqaro savdo va to'lov operatsiyalarini boshlashi mumkin.</p>

                <h3>Soliq tizimi</h3>
                <p>Gonkongning asosiy ustunligi — <strong>territorial soliq tizimi</strong>.</p>
                <p>Bu degani:</p>
                <p class="sv-lmodal-highlight">daromad Gonkong hududidan tashqarida olingan bo'lsa, soliq qo'llanmasligi mumkin</p>
                <p>Bu uni trading kompaniyalar uchun juda qulay qiladi.</p>

                <h3>Xitoy bilan ishlash modeli</h3>
                <p>Ko'plab bizneslar quyidagi strukturadan foydalanadi:</p>
                <p class="sv-lmodal-highlight">Gonkong kompaniya → Xitoydagi kompaniya bilan ishlaydi</p>
                <p>Bu orqali:</p>
                <ul>
                    <li>to'lovlar Gonkongda qabul qilinadi</li>
                    <li>operatsiyalar Xitoyda amalga oshiriladi</li>
                </ul>

                <h3>Muhim jihatlar</h3>
                <p>Gonkong kompaniyasida eng muhim bosqich:</p>
                <ul>
                    <li>bank account ochish</li>
                    <li>kompaniya faoliyatini to'g'ri tushuntirish</li>
                    <li>accounting va reportingni yuritish</li>
                </ul>

                <h3>Natija</h3>
                <p>To'g'ri tashkil qilingan Gonkong kompaniyasi sizga:</p>
                <ul>
                    <li>xalqaro savdo imkoniyati</li>
                    <li>global bank tizimiga kirish</li>
                    <li>moslashuvchan biznes modeli</li>
                    <li>Xitoy bilan ishlash uchun qulay platforma</li>
                </ul>
                <p>beradi.</p>
            `,
            ctaDesc: "Gonkong kompaniyasi orqali xalqaro biznesni boshlash uchun to'liq konsultatsiya oling."
        },
        ru: {
            title: "Регистрация компании в Гонконге: платформа для международного бизнеса",
            hero: "Компания в Гонконге — это эффективный инструмент для международной торговли и финансовых операций.",
            content: `
                <p>Юрисдикция отличается простотой регистрации, гибкостью и доступом к глобальной банковской системе.</p>

                <h3>Основы регистрации</h3>
                <p>Для открытия компании требуется:</p>
                <ul>
                    <li>минимум 1 директор</li>
                    <li>минимум 1 акционер</li>
                    <li>юридический адрес</li>
                </ul>
                <p class="sv-lmodal-meta">Процесс регистрации обычно занимает несколько рабочих дней.</p>

                <h3>Как проходит процесс</h3>

                <h4>1. Подготовка документов</h4>
                <p>Собираются и подготавливаются документы инвестора.</p>

                <h4>2. Регистрация компании</h4>
                <p>Компания проходит официальную регистрацию и получает юридический статус.</p>

                <h4>3. Открытие банковского или fintech счёта</h4>
                <p>Для компании открывается счёт в банке или на fintech-платформе.</p>

                <h4>4. Запуск операционной деятельности</h4>
                <p>Компания начинает международные торговые и платёжные операции.</p>

                <h3>Налоговая система</h3>
                <p>Гонконг использует <strong>территориальный принцип налогообложения</strong>.</p>
                <p class="sv-lmodal-highlight">Доход, полученный за пределами Гонконга, может не облагаться налогом</p>

                <h3>Работа с Китаем</h3>
                <p>Распространённая структура:</p>
                <p class="sv-lmodal-highlight">компания в Гонконге → работа с Китаем</p>
                <p>Это позволяет:</p>
                <ul>
                    <li>принимать международные платежи</li>
                    <li>вести операции в Китае</li>
                </ul>

                <h3>Результат</h3>
                <p>Вы получаете:</p>
                <ul>
                    <li>международную компанию</li>
                    <li>доступ к глобальной банковской системе</li>
                    <li>гибкую бизнес-структуру</li>
                </ul>
            `,
            ctaDesc: "Получите полную консультацию по открытию компании в Гонконге для международного бизнеса."
        },
        en: {
            title: "Hong Kong company formation: a gateway to global business",
            hero: "A Hong Kong company is widely used for international trade and financial operations.",
            content: `
                <p>It offers a simple setup process, flexible structure, and access to global banking.</p>

                <h3>Basic requirements</h3>
                <p>To register a company:</p>
                <ul>
                    <li>at least 1 director</li>
                    <li>at least 1 shareholder</li>
                    <li>a registered address</li>
                </ul>
                <p class="sv-lmodal-meta">The process usually takes a few working days.</p>

                <h3>Process overview</h3>

                <h4>1. Document preparation</h4>
                <p>Investor and company documents are collected and prepared.</p>

                <h4>2. Company registration</h4>
                <p>The company is formally registered and obtains legal status.</p>

                <h4>3. Bank or fintech account opening</h4>
                <p>A corporate account is opened with a bank or fintech platform.</p>

                <h4>4. Start of operations</h4>
                <p>The company begins international trade and payment operations.</p>

                <h3>Tax system</h3>
                <p>Hong Kong follows a <strong>territorial tax system</strong>.</p>
                <p class="sv-lmodal-highlight">Income generated outside Hong Kong may not be taxed</p>

                <h3>China structure</h3>
                <p>Common model:</p>
                <p class="sv-lmodal-highlight">Hong Kong company → works with China</p>
                <p>This allows:</p>
                <ul>
                    <li>receiving international payments</li>
                    <li>operating in China</li>
                </ul>

                <h3>Result</h3>
                <p>You get:</p>
                <ul>
                    <li>an international company</li>
                    <li>access to global banking</li>
                    <li>a flexible business structure</li>
                </ul>
            `,
            ctaDesc: "Get a full consultation on Hong Kong company formation for international business."
        }
    }
};

function initConsultingDetailModal() {
    const modal = document.getElementById('consultingDetailModal');
    if (!modal) return;

    let currentKey = null;

    function resolveData(key) {
        const entry = consultingDetails[key];
        if (!entry) return null;
        return entry[currentLang] || entry.uz || entry.en || null;
    }

    function renderModal(key) {
        const d = resolveData(key);
        if (!d) return;
        modal.querySelector('[data-cdm="title"]').textContent = d.title || '';
        modal.querySelector('[data-cdm="hero"]').textContent = d.hero || '';
        modal.querySelector('[data-cdm="content"]').innerHTML = d.content || '';
        modal.querySelector('[data-cdm="ctaDesc"]').textContent = d.ctaDesc || '';
    }

    function openModal(key) {
        if (!resolveData(key)) return;
        currentKey = key;
        renderModal(key);
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        modal.querySelector('.sv-lmodal-content').scrollTop = 0;
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        currentKey = null;
    }

    document.querySelectorAll('[data-detail]').forEach(el => {
        const key = el.dataset.detail;
        if (!resolveData(key)) return;
        el.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(key);
        });
    });

    modal.querySelector('.sv-lmodal-close').addEventListener('click', closeModal);
    modal.querySelector('.sv-lmodal-overlay').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentKey) setTimeout(() => renderModal(currentKey), 0);
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
