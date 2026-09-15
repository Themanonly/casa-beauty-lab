import fs from 'node:fs';
import path from 'node:path';

const origin = 'https://casabeautylab-casablanca.netlify.app';
const routes = {
  '/': { lang: 'fr-MA', locale: 'fr_MA', title: 'Casa Beauty Lab | Salon de beauté, coiffure & spa à Casablanca', description: 'Casa Beauty Lab propose coiffure, soins capillaires, beauté, hammam et massage à Casablanca.', h1: 'Coiffure, beauté & spa à Casablanca.', intro: 'Coiffure, soins capillaires, massage, hammam et prestations beauté à Casablanca.' },
  '/tarifs': { lang: 'fr-MA', locale: 'fr_MA', title: 'Tarifs coiffure, beauté, hammam & massage | Casa Beauty Lab', description: 'Consultez les tarifs de coiffure, soins cheveux, hammam, massage et beauté de Casa Beauty Lab à Casablanca.', h1: 'Des prestations claires, sans ambiguïté.', intro: 'Tarifs de coiffure, soins capillaires, spa, hammam, massage et beauté.' },
  '/spa': { lang: 'fr-MA', locale: 'fr_MA', title: 'Spa, hammam marocain & massage à Casablanca | Casa Beauty Lab', description: 'Découvrez les prestations spa, hammam marocain et massage de Casa Beauty Lab à Casablanca.', h1: 'Hammam, massage et détente.', intro: 'Rituels hammam et massages à Casablanca, avec durées et tarifs publiés.' },
  '/gallery': { lang: 'fr-MA', locale: 'fr_MA', title: 'Le lab | Galerie Casa Beauty Lab à Casablanca', description: 'Découvrez l’univers visuel et les espaces de Casa Beauty Lab, salon de beauté et spa à Casablanca.', h1: 'Une identité visuelle sobre et audacieuse.', intro: 'Galerie de coiffure, spa, hammam et beauté Casa Beauty Lab.' },
  '/about': { lang: 'fr-MA', locale: 'fr_MA', title: 'À propos de Casa Beauty Lab | Beauté à Casablanca', description: 'Casa Beauty Lab est une adresse de coiffure, soins capillaires, spa et beauté à Casablanca.', h1: 'Un concept beauté contemporain, pensé pour Casablanca.', intro: 'Une adresse contemporaine pour la coiffure, le spa et la beauté à Casablanca.' },
  '/contact': { lang: 'fr-MA', locale: 'fr_MA', title: 'Contact & rendez-vous | Casa Beauty Lab Casablanca', description: 'Retrouvez le téléphone, WhatsApp, Instagram, l’adresse et les horaires de Casa Beauty Lab à Casablanca.', h1: 'Nous sommes à votre écoute.', intro: 'Contactez Casa Beauty Lab à Casablanca pour votre rendez-vous beauté.' },
  '/ar': { lang: 'ar-MA', locale: 'ar_MA', title: 'Casa Beauty Lab | صالون تجميل وسبا في الدار البيضاء', description: 'يقدم Casa Beauty Lab خدمات تصفيف الشعر والعناية بالجمال والحمام المغربي والتدليك في الدار البيضاء.', h1: 'تصفيف الشعر والعناية بالجمال والسبا في الدار البيضاء.', intro: 'تصفيف الشعر والعناية به والتدليك والحمام المغربي وخدمات الجمال في الدار البيضاء.' },
  '/ar/tarifs': { lang: 'ar-MA', locale: 'ar_MA', title: 'أسعار تصفيف الشعر والسبا والحمام المغربي | Casa Beauty Lab', description: 'اكتشف أسعار تصفيف الشعر والعناية به والحمام المغربي والتدليك وخدمات الجمال في الدار البيضاء.', h1: 'خدمات واضحة وبأسعار شفافة.', intro: 'أسعار تصفيف الشعر والعناية بالشعر والسبا والحمام المغربي والجمال.' },
  '/ar/spa': { lang: 'ar-MA', locale: 'ar_MA', title: 'سبا وحمام مغربي وتدليك في الدار البيضاء | Casa Beauty Lab', description: 'اكتشف خدمات السبا والحمام المغربي والتدليك لدى Casa Beauty Lab في الدار البيضاء.', h1: 'حمام مغربي وتدليك واسترخاء.', intro: 'طقوس الحمام المغربي وجلسات التدليك في الدار البيضاء.' },
  '/ar/gallery': { lang: 'ar-MA', locale: 'ar_MA', title: 'المختبر | معرض Casa Beauty Lab في الدار البيضاء', description: 'اكتشف هوية ومساحات Casa Beauty Lab، صالون التجميل والسبا في الدار البيضاء.', h1: 'هوية بصرية هادئة وجريئة.', intro: 'معرض تصفيف الشعر والسبا والحمام المغربي وخدمات الجمال.' },
  '/ar/about': { lang: 'ar-MA', locale: 'ar_MA', title: 'من نحن | Casa Beauty Lab للجمال في الدار البيضاء', description: 'Casa Beauty Lab عنوان لتصفيف الشعر والعناية به والسبا والجمال في الدار البيضاء.', h1: 'مفهوم عصري للجمال، صُمم لمدينة الدار البيضاء.', intro: 'عنوان عصري لتصفيف الشعر والسبا والعناية بالجمال في الدار البيضاء.' },
  '/ar/contact': { lang: 'ar-MA', locale: 'ar_MA', title: 'اتصل واحجز موعداً | Casa Beauty Lab الدار البيضاء', description: 'اعثر على الهاتف وWhatsApp وInstagram والعنوان وساعات عمل Casa Beauty Lab في الدار البيضاء.', h1: 'نحن هنا للاستماع إليك.', intro: 'تواصل مع Casa Beauty Lab في الدار البيضاء لحجز موعدك.' },
};

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const image = `${origin}/og-image.jpg`;
for (const [route, meta] of Object.entries(routes)) {
  const frenchRoute = route.startsWith('/ar') ? route.replace(/^\/ar/, '') || '/' : route;
  const arabicRoute = `/ar${frenchRoute === '/' ? '' : frenchRoute}`;
  const html = template
    .replace(/<html lang="[^"]+">/, `<html lang="${meta.lang}" dir="${meta.lang === 'ar-MA' ? 'rtl' : 'ltr'}">`)
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${meta.description}">`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${meta.title}">`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${meta.description}">`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}">`)
    .replace(/<meta property="og:locale"[^>]*>/, `<meta property="og:locale" content="${meta.locale}">`)
    .replace(/\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+"\s*\/?>(?=\s*\n)/g, '')
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${origin}${route}">\n    <link rel="alternate" hreflang="fr-MA" href="${origin}${frenchRoute}">\n    <link rel="alternate" hreflang="ar-MA" href="${origin}${arabicRoute}">\n    <link rel="alternate" hreflang="x-default" href="${origin}${frenchRoute}">`)
    .replace('<div id="root"></div>', `<div id="root"><main><h1>${meta.h1}</h1><p>${meta.intro}</p></main></div>`)
    .replace('</head>', `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BeautySalon', name: 'Casa Beauty Lab', url: `${origin}${route}`, telephone: '+212665704965', address: { '@type': 'PostalAddress', streetAddress: 'Quartier Abou Mouaffak, Rue Abou Fariss', postalCode: '20250', addressLocality: 'Casablanca', addressCountry: 'MA' }, openingHours: 'Mo-Su 10:00-20:00', image })}</script>\n  </head>`);
  const outputDir = path.join(dist, route === '/' ? '' : route.slice(1));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html);
}
console.log(`Prerendered ${Object.keys(routes).length} locale routes.`);
