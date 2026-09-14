export type BusinessInfo = {
  name: string;
  tagline: string;
  city: string;
  country: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  whatsappMessage: string;
  instagramUrl: string;
  instagramHandle: string;
  address: string;
  mapUrl: string;
  openingHours: { day: string; hours: string; status?: string }[];
  bookingUrl: string;
  services: Service[];
  gallery: GalleryItem[];
  reviews: Review[];
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  priceLabel: string | null;
  duration?: string;
  image: string;
  featured?: boolean;
};

export type GalleryItem = {
  title: string;
  image: string;
  alt: string;
};

export type Review = {
  author: string;
  text: string;
  source: string;
};

export const business: BusinessInfo = {
  name: 'Casa Beauty Lab',
  tagline: 'Coiffure • spa • beauté à Casablanca',
  city: 'Casablanca',
  country: 'Maroc',
  phoneDisplay: '06 65 70 49 65',
  phoneHref: 'tel:+212665704965',
  whatsappHref: 'https://wa.me/212665704965?text=Bonjour%20Casa%20Beauty%20Lab%2C%20je%20souhaiterais%20prendre%20rendez-vous%20pour%E2%80%A6',
  whatsappMessage: 'Bonjour Casa Beauty Lab, je souhaiterais prendre rendez-vous pour…',
  instagramUrl: 'https://www.instagram.com/casabeauty.lab/',
  instagramHandle: '@casabeauty.lab',
  address: 'Quartier Abou Mouaffak, Rue Abou Fariss, Casablanca 20250',
  mapUrl: 'https://www.google.com/maps/place/Casa+beauty+lab/@33.5712928,-7.6223117,17z/data=!3m1!4b1!4m6!3m5!1s0xda7d38cf7c71379:0x49e2c0ca5302af6e!8m2!3d33.5712928!4d-7.6197368!16s%2Fg%2F11ys_zpn9s?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D',
  openingHours: [
    { day: 'Lundi', hours: '10:00 – 20:00' },
    { day: 'Mardi', hours: '10:00 – 20:00' },
    { day: 'Mercredi', hours: '10:00 – 20:00' },
    { day: 'Jeudi', hours: '10:00 – 20:00' },
    { day: 'Vendredi', hours: '10:00 – 20:00' },
    { day: 'Samedi', hours: '10:00 – 20:00' },
    { day: 'Dimanche', hours: '10:00 – 20:00' },
  ],
  bookingUrl: 'https://wa.me/212665704965?text=Bonjour%20Casa%20Beauty%20Lab%2C%20je%20souhaiterais%20prendre%20rendez-vous%20pour%E2%80%A6',
  services: [
    {
      id: 'coiffure',
      title: 'Coiffure',
      slug: 'coiffure',
      category: 'Coiffure',
      shortDescription: 'Brushing, coupe, coloration et balayage.',
      description: 'Des prestations coiffure pensées pour la coupe, le brushing, la coloration et le balayage avec un résultat net, équilibré et durable.',
      priceLabel: 'Brushing 70 DH · Coupe 200 DH · Coloration 350 DH · Balayage dès 800 DH',
      duration: 'Selon longueur',
      image: 'linear-gradient(135deg, #121212 0%, #2d2d2d 42%, #8b8b8b 100%)',
      featured: true,
    },
    {
      id: 'soins-cheveux',
      title: 'Soins cheveux',
      slug: 'soins-cheveux',
      category: 'Soins',
      shortDescription: 'Masque, Botox, lissage et réparation ciblée.',
      description: 'Des soins capillaires adaptés à chaque fibre, avec un accompagnement précis pour hydrater, lisser et renforcer la santé du cheveu.',
      priceLabel: 'Masque / soin dès 250 DH · Botox dès 380 DH · Lissage / protéine dès 800 DH',
      duration: '45–90 min',
      image: 'linear-gradient(135deg, #1d1d1d 0%, #444 46%, #c8c8c8 100%)',
      featured: true,
    },
    {
      id: 'massage-hammam',
      title: 'Massage & Hammam',
      slug: 'massage-hammam',
      category: 'Spa',
      shortDescription: 'Relaxation, hammam et ritual profond.',
      description: 'Un moment de détente pensé pour relâcher les tensions, régénérer le corps et offrir une sensation de bien-être durable.',
      priceLabel: 'Oriental 45 min 150 DH · Royal 1h 190 DH · Signature 1h 250 DH · Enfant 30 min 90 DH',
      duration: '30–90 min',
      image: 'linear-gradient(135deg, #090909 0%, #3a3a3a 48%, #f1f1f1 100%)',
      featured: true,
    },
    {
      id: 'onglerie',
      title: 'Onglerie',
      slug: 'onglerie',
      category: 'Beauté',
      shortDescription: 'Manucure, vernis permanent et finitions élégantes.',
      description: 'Des soins des mains et des ongles précis, propres et durables, pensés pour un rendu net et élégant au quotidien ou en occasion.',
      priceLabel: null,
      duration: '30–60 min',
      image: 'linear-gradient(135deg, #101010 0%, #5f5f5f 55%, #efefef 100%)',
      featured: false,
    },
    {
      id: 'esthetique',
      title: 'Esthétique',
      slug: 'esthetique',
      category: 'Beauté',
      shortDescription: 'Sourcils, épilation et soins visage.',
      description: 'Des interventions beauté discrètes et raffinées pour un résultat naturel, lumineux et harmonieux.',
      priceLabel: null,
      duration: '20–45 min',
      image: 'linear-gradient(135deg, #070707 0%, #2a2a2a 54%, #d7d7d7 100%)',
      featured: false,
    },
    {
      id: 'mariage',
      title: 'Mariage',
      slug: 'mariage',
      category: 'Événement',
      shortDescription: 'Coiffure et maquillage de soirée.',
      description: 'Des prestations sur mesure pour les grandes occasions, avec un souci du détail et un résultat durable.',
      priceLabel: null,
      duration: 'Sur devis',
      image: 'linear-gradient(135deg, #171717 0%, #404040 52%, #eaeaea 100%)',
      featured: false,
    },
  ],
  gallery: [
    { title: 'Coiffure signature', image: 'linear-gradient(135deg, #111 0%, #505050 35%, #dedede 100%)', alt: 'Palette visuelle noir et blanc inspirée du salon' },
    { title: 'Massage & détente', image: 'linear-gradient(135deg, #020202 0%, #3b3b3b 40%, #f3f3f3 100%)', alt: 'Palette visuelle spa noir et blanc' },
    { title: 'Hammam ritual', image: 'linear-gradient(135deg, #161616 0%, #6f6f6f 42%, #f0f0f0 100%)', alt: 'Palette visuelle du hammam' },
    { title: 'Lissage & soin', image: 'linear-gradient(135deg, #090909 0%, #4d4d4d 48%, #d7d7d7 100%)', alt: 'Palette visuelle des soins capillaires' },
    { title: 'Beauté visuelle', image: 'linear-gradient(135deg, #0a0a0a 0%, #575757 36%, #ede9e9 100%)', alt: 'Palette beauté et esthétique' },
    { title: 'Le lab', image: 'linear-gradient(135deg, #050505 0%, #2c2c2c 52%, #dbdbdb 100%)', alt: 'Palette de la signature Casa Beauty Lab' },
  ],
  reviews: [],
};
