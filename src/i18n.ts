export type Locale = 'fr' | 'ar';

export type SiteCopy = {
  locale: string;
  direction: 'ltr' | 'rtl';
  languageName: string;
  alternateLanguageName: string;
  nav: { home: string; prices: string; spa: string; lab: string; about: string; contact: string };
  actions: { book: string; prices: string; directions: string; message: string; closeMenu: string; openMenu: string; switchLanguage: string };
  footer: { tagline: string; visit: string; contact: string; hours: string };
  days: string[];
  home: {
    eyebrow: string; title: string; lead: string; tags: string[]; introEyebrow: string; introTitle: string; introText: string;
    signatureEyebrow: string; signatureTitle: string; expertiseEyebrow: string; expertiseTitle: string; expertiseText: string;
    checks: string[]; experienceEyebrow: string; experienceTitle: string; experience: { title: string; text: string }[];
    ctaEyebrow: string; ctaTitle: string;
  };
  pages: {
    prices: { eyebrow: string; title: string; categories: string[]; note: string };
    spa: { eyebrow: string; title: string; text: string };
    about: { eyebrow: string; title: string; paragraphs: string[] };
    gallery: { eyebrow: string; title: string; placeEyebrow: string; placeTitle: string; interiorAlt: string };
    contact: { eyebrow: string; title: string; phone: string; whatsapp: string; instagram: string; address: string };
  };
  common: { onRequest: string; quote: string; pricesLink: string; sceneLabel: string; atmosphere: string; servicesLabel: string };
  services: Record<string, { title: string; category: string; shortDescription: string; description: string; tariffNames: string[] }>;
  gallery: { title: string; alt: string }[];
};

const french: SiteCopy = {
  locale: 'fr-MA', direction: 'ltr', languageName: 'Français', alternateLanguageName: 'العربية',
  nav: { home: 'Accueil', prices: 'Tarifs', spa: 'Spa', lab: 'Le lab', about: 'À propos', contact: 'Contact' },
  actions: { book: 'Prendre rendez-vous', prices: 'Voir les tarifs', directions: 'Itinéraire', message: 'Envoyer un message', closeMenu: 'Fermer le menu', openMenu: 'Ouvrir le menu', switchLanguage: 'Choisir la langue' },
  footer: { tagline: 'Coiffure, spa et beauté à Casablanca.', visit: 'Visiter', contact: 'Contact', hours: 'Horaires' },
  days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  home: {
    eyebrow: 'Casablanca • Coiffure • spa • beauté', title: 'Coiffure, beauté & spa à Casablanca.', lead: 'Des soins capillaires, le massage et le hammam pour une routine beauté claire et confortable.', tags: ['Coiffure', 'Massage', 'Beauté'], introEyebrow: 'Casa Beauty Lab', introTitle: 'Le soin, la précision et l’écoute au centre de chaque visite.', introText: 'Une adresse à Casablanca pour la coiffure, les soins capillaires, le massage, le hammam et les prestations beauté, avec une approche attentive et contemporaine.', signatureEyebrow: 'Signature', signatureTitle: 'Les prestations signature.', expertiseEyebrow: 'Expertise beauté', expertiseTitle: 'Des soins pensés pour un résultat naturel et durable.', expertiseText: 'Chaque visite est construite autour de l’écoute, de la technique et du confort. Le but reste simple : un résultat propre, net et élégant, sans artifice ni surcharge.', checks: ['Consultation et conseil personnalisés', 'Produits et protocoles adaptés', 'Ambiance calme et professionnelle'], experienceEyebrow: 'Expérience', experienceTitle: 'L’expérience Casa Beauty Lab.', experience: [{ title: 'Accueil attentif', text: 'Un accueil chaleureux régulièrement mentionné dans les avis publics.' }, { title: 'Prestations maîtrisées', text: 'La technique et le professionnalisme ressortent des retours clients publics.' }, { title: 'Espace soigné', text: 'Un environnement propre et soigné fait partie des thèmes récurrents.' }], ctaEyebrow: 'Prêt à réserver ?', ctaTitle: 'Votre rendez-vous beauté commence ici.'
  },
  pages: {
    prices: { eyebrow: 'Tarifs', title: 'Des prestations claires, sans ambiguïté.', categories: ['Coiffure', 'Soins', 'Spa & Hammam', 'Beauté & événement'], note: 'Tarifs consultés sur le site public officiel. Pour les prestations non affichées, nous vous invitons à demander le tarif directement par WhatsApp.' },
    spa: { eyebrow: 'Spa', title: 'Hammam, massage et détente.', text: 'Les prestations spa et hammam publiées par Casa Beauty Lab réunissent massage et rituels hammam, avec des durées et tarifs clairement indiqués.' },
    about: { eyebrow: 'À propos', title: 'Un concept beauté contemporain, pensé pour Casablanca.', paragraphs: ['Casa Beauty Lab est une adresse à Casablanca pour la coiffure, les soins capillaires, le massage, le hammam et les prestations beauté.', 'Les avis publics mentionnent régulièrement l’accueil, la propreté du cadre et le professionnalisme des prestations.'] },
    gallery: { eyebrow: 'Le lab', title: 'Une identité visuelle sobre et audacieuse.', placeEyebrow: 'Le lieu', placeTitle: 'Un espace pensé pour prendre son temps.', interiorAlt: 'Espace coiffure et manucure à l’intérieur de Casa Beauty Lab' },
    contact: { eyebrow: 'Contact', title: 'Nous sommes à votre écoute.', phone: 'Téléphone', whatsapp: 'WhatsApp', instagram: 'Instagram', address: 'Adresse' }
  },
  common: { onRequest: 'Tarif sur demande', quote: 'Sur devis', pricesLink: 'Voir les tarifs', sceneLabel: 'Sélection éditoriale Casa Beauty Lab', atmosphere: 'Choisir une ambiance', servicesLabel: 'Prestations Casa Beauty Lab' },
  services: {
    coiffure: { title: 'Coiffure', category: 'Coiffure', shortDescription: 'Brushing, coupe, coloration et balayage.', description: 'Des prestations coiffure pensées pour la coupe, le brushing, la coloration et le balayage avec un résultat net, équilibré et durable.', tariffNames: ['Brushing', 'Coupe', 'Coloration', 'Mèches / Balayage'] },
    'soins-cheveux': { title: 'Soins cheveux', category: 'Soins', shortDescription: 'Masque, Botox, lissage et réparation ciblée.', description: 'Des soins capillaires adaptés à chaque fibre, avec un accompagnement précis pour hydrater, lisser et renforcer la santé du cheveu.', tariffNames: ['Masque / Soin', 'Botox', 'Lissage / Protéine'] },
    massage: { title: 'Massage', category: 'Spa', shortDescription: 'Relaxing, tonique, deep / sport et head massage.', description: 'Massages publiés sur le tarif officiel, avec une durée et un prix indiqués lorsqu’ils sont disponibles.', tariffNames: ['Relaxing', 'Tonique', 'Deep / Sport', 'Head massage'] },
    hammam: { title: 'Hammam', category: 'Spa', shortDescription: 'Oriental, Royal, Signature et Enfant.', description: 'Les formules hammam publiées par Casa Beauty Lab avec leurs durées et tarifs officiels.', tariffNames: ['Oriental', 'Royal', 'Signature', 'Enfant'] },
    onglerie: { title: 'Onglerie', category: 'Beauté', shortDescription: 'Manucure, vernis permanent et finitions élégantes.', description: 'Des soins des mains et des ongles précis, propres et durables, pensés pour un rendu net et élégant au quotidien ou en occasion.', tariffNames: ['Manucure', 'Vernis permanent', 'Gel / Extensions'] },
    esthetique: { title: 'Esthétique', category: 'Beauté', shortDescription: 'Sourcils, épilation et soins visage.', description: 'Des interventions beauté discrètes et raffinées pour un résultat naturel, lumineux et harmonieux.', tariffNames: ['Sourcils', 'Duvet', 'Pack complet'] },
    mariage: { title: 'Mariage', category: 'Événement', shortDescription: 'Coiffure et maquillage de soirée.', description: 'Des prestations sur mesure pour les grandes occasions, avec un souci du détail et un résultat durable.', tariffNames: ['Coiffure de soirée', 'Maquillage', 'Pack mariée'] }
  },
  gallery: [{ title: 'Coiffure signature', alt: 'Résultat balayage visible dans un espace du salon' }, { title: 'Massage & détente', alt: 'Rituel de soin aux bougies dans un espace bien-être' }, { title: 'Rituel hammam', alt: 'Soin réalisé dans un espace hammam Casa Beauty Lab' }, { title: 'Lissage & soin', alt: 'Soin réalisé dans une atmosphère calme' }, { title: 'Beauté visuelle', alt: 'Détail beauté réalisé à Casa Beauty Lab' }, { title: 'Le lab', alt: 'Espace shampoing et soin capillaire de Casa Beauty Lab' }]
};

const arabic: SiteCopy = {
  ...french, locale: 'ar-MA', direction: 'rtl', languageName: 'العربية', alternateLanguageName: 'Français',
  nav: { home: 'الرئيسية', prices: 'الأسعار', spa: 'السبا', lab: 'المختبر', about: 'من نحن', contact: 'اتصل بنا' },
  actions: { book: 'احجز موعداً', prices: '查看 الأسعار', directions: 'الاتجاهات', message: 'إرسال رسالة', closeMenu: 'إغلاق القائمة', openMenu: 'فتح القائمة', switchLanguage: 'اختيار اللغة' },
  footer: { tagline: 'تصفيف الشعر والسبا والعناية بالجمال في الدار البيضاء.', visit: 'استكشف', contact: 'اتصل بنا', hours: 'ساعات العمل' },
  days: ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'],
  home: { eyebrow: 'الدار البيضاء • تصفيف الشعر • سبا • جمال', title: 'تصفيف الشعر والعناية بالجمال والسبا في الدار البيضاء.', lead: 'علاجات للشعر والتدليك والحمام المغربي ضمن تجربة جمال هادئة وواضحة.', tags: ['تصفيف الشعر', 'تدليك', 'عناية بالجمال'], introEyebrow: 'Casa Beauty Lab', introTitle: 'العناية والدقة والإنصات في صميم كل زيارة.', introText: 'عنوان في الدار البيضاء لتصفيف الشعر والعناية به والتدليك والحمام المغربي وخدمات الجمال، برؤية عصرية واهتمام دقيق.', signatureEyebrow: 'خدمات مميزة', signatureTitle: 'خدمات Casa Beauty Lab المميزة.', expertiseEyebrow: 'خبرة في الجمال', expertiseTitle: 'علاجات مصممة لنتيجة طبيعية تدوم.', expertiseText: 'تقوم كل زيارة على الإنصات والخبرة والراحة. هدفنا بسيط: نتيجة أنيقة ونظيفة ومتوازنة.', checks: ['استشارة ونصيحة مخصصة', 'منتجات وبروتوكولات مناسبة', 'أجواء هادئة واحترافية'], experienceEyebrow: 'التجربة', experienceTitle: 'تجربة Casa Beauty Lab.', experience: [{ title: 'استقبال دافئ', text: 'يُذكر الترحيب الدافئ بانتظام في التقييمات العامة.' }, { title: 'خدمات متقنة', text: 'تظهر الخبرة والاحترافية في آراء الزبائن المنشورة.' }, { title: 'مساحة أنيقة', text: 'النظافة والعناية بالمكان من المواضيع المتكررة.' }], ctaEyebrow: 'هل أنت مستعد للحجز؟', ctaTitle: 'تبدأ عنايتك بالجمال من هنا.' },
  pages: { prices: { eyebrow: 'الأسعار', title: 'خدمات واضحة وبأسعار شفافة.', categories: ['تصفيف الشعر', 'العناية بالشعر', 'السبا والحمام المغربي', 'الجمال والمناسبات'], note: 'الأسعار المعروضة مأخوذة من الموقع الرسمي. للخدمات غير المدرجة، يرجى طلب السعر مباشرة عبر WhatsApp.' }, spa: { eyebrow: 'السبا', title: 'حمام مغربي وتدليك واسترخاء.', text: 'تجمع خدمات السبا والحمام المغربي لدى Casa Beauty Lab بين التدليك وطقوس الحمام، مع توضيح المدة والأسعار عند توفرها.' }, about: { eyebrow: 'من نحن', title: 'مفهوم عصري للجمال، صُمم لمدينة الدار البيضاء.', paragraphs: ['Casa Beauty Lab هو عنوان في الدار البيضاء لتصفيف الشعر والعناية به والتدليك والحمام المغربي وخدمات الجمال.', 'تشير التقييمات العامة بانتظام إلى حسن الاستقبال ونظافة المكان واحترافية الخدمات.'] }, gallery: { eyebrow: 'المختبر', title: 'هوية بصرية هادئة وجريئة.', placeEyebrow: 'المكان', placeTitle: 'مساحة صُممت لتمنحك وقتاً لنفسك.', interiorAlt: 'مساحة لتصفيف الشعر والعناية بالأظافر داخل Casa Beauty Lab' }, contact: { eyebrow: 'اتصل بنا', title: 'نحن هنا للاستماع إليك.', phone: 'الهاتف', whatsapp: 'WhatsApp', instagram: 'Instagram', address: 'العنوان' } },
  common: { onRequest: 'السعر عند الطلب', quote: 'حسب التسعيرة', pricesLink: 'عرض الأسعار', sceneLabel: 'اختيارات Casa Beauty Lab البصرية', atmosphere: 'اختيار الأجواء', servicesLabel: 'خدمات Casa Beauty Lab' },
  services: { coiffure: { title: 'تصفيف الشعر', category: 'تصفيف الشعر', shortDescription: 'تسريح، قص، صبغة وبالياج.', description: 'خدمات لتصفيف الشعر والقص والتسريح والصبغة والبالياج بنتيجة متوازنة وأنيقة.', tariffNames: ['تسريح', 'قص', 'صبغة', 'خصل / بالياج'] }, 'soins-cheveux': { title: 'العناية بالشعر', category: 'العناية', shortDescription: 'قناع وبوتوكس وتنعيم وعناية مركزة.', description: 'علاجات مناسبة لكل نوع من الشعر لترطيبه وتنعيمه وتقوية صحته.', tariffNames: ['قناع / عناية', 'بوتوكس', 'تنعيم / بروتين'] }, massage: { title: 'التدليك', category: 'السبا', shortDescription: 'تدليك للاسترخاء وتنشيط الجسم والرأس.', description: 'جلسات تدليك منشورة ضمن قائمة الأسعار الرسمية، مع توضيح المدة والسعر عند توفرهما.', tariffNames: ['استرخائي', 'منشط', 'عميق / رياضي', 'تدليك الرأس'] }, hammam: { title: 'الحمام المغربي', category: 'السبا', shortDescription: 'حمام شرقي ورويال وسيغنتشر وللأطفال.', description: 'باقات الحمام المغربي المنشورة من Casa Beauty Lab مع مددها وأسعارها الرسمية.', tariffNames: ['شرقي', 'رويال', 'سيغنتشر', 'للأطفال'] }, onglerie: { title: 'العناية بالأظافر', category: 'الجمال', shortDescription: 'مانيكير وطلاء دائم ولمسات أنيقة.', description: 'عناية دقيقة ونظيفة باليدين والأظافر لنتيجة أنيقة.', tariffNames: ['مانيكير', 'طلاء دائم', 'جل / تمديد'] }, esthetique: { title: 'التجميل', category: 'الجمال', shortDescription: 'حواجب وإزالة شعر وعناية بالوجه.', description: 'خدمات جمال ناعمة لنتيجة طبيعية ومتناغمة.', tariffNames: ['حواجب', 'زغب الوجه', 'باقة كاملة'] }, mariage: { title: 'المناسبات', category: 'المناسبات', shortDescription: 'تصفيف شعر ومكياج للمناسبات.', description: 'خدمات مخصصة للمناسبات الخاصة مع عناية بالتفاصيل ونتيجة تدوم.', tariffNames: ['تصفيف سهرة', 'مكياج', 'باقة العروس'] } },
  gallery: [{ title: 'تصفيف مميز', alt: 'نتيجة بالياج داخل صالون Casa Beauty Lab' }, { title: 'تدليك واسترخاء', alt: 'طقس عناية بالشموع في مساحة السبا' }, { title: 'طقس الحمام المغربي', alt: 'عناية داخل مساحة الحمام المغربي في Casa Beauty Lab' }, { title: 'تنعيم وعناية', alt: 'جلسة عناية في أجواء هادئة' }, { title: 'جمال متكامل', alt: 'تفصيل من خدمات الجمال في Casa Beauty Lab' }, { title: 'المختبر', alt: 'مساحة غسل الشعر والعناية به في Casa Beauty Lab' }]
};

export const translations: Record<Locale, SiteCopy> = { fr: french, ar: arabic };
export const getLocale = (pathname: string): Locale => pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'fr';
export const localePath = (locale: Locale, path: string) => locale === 'ar' ? `/ar${path === '/' ? '' : path}` : path;
export const getPriceLabel = (locale: Locale, serviceId: string, fallback: string | null) => locale === 'ar' ? ({
  coiffure: 'تسريح 70 درهماً · قص 200 درهم · صبغة 350 درهماً · بالياج ابتداءً من 800 درهم',
  'soins-cheveux': 'قناع / عناية ابتداءً من 250 درهم · بوتوكس ابتداءً من 380 درهم · تنعيم / بروتين ابتداءً من 800 درهم',
  massage: 'تدليك استرخائي 45 دقيقة 300 درهم · منشط ساعة 400 درهم · العميق / الرياضي: السعر عند الطلب · تدليك الرأس: السعر عند الطلب',
  hammam: 'شرقي 45 دقيقة 150 درهم · رويال ساعة 190 درهم · سيغنتشر ساعة 250 درهم · للأطفال 30 دقيقة 90 درهماً'
}[serviceId] ?? 'السعر عند الطلب') : fallback;
