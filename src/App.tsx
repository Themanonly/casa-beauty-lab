import { useEffect, useRef, useState, type Dispatch, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { business } from './content/business';
import { getDurationLabel, getLocale, getPriceLabel, getStartingPriceLabel, localePath, translations, type Locale } from './i18n';

const featuredServices = business.services.filter((service) => service.featured);

const heroScenes = [
  {
    id: 'coiffure',
    label: 'Coiffure',
    type: 'video' as const,
    src: '/media/hero/coiffure/balayage-result.mp4',
    alt: 'Résultat balayage réalisé au salon Casa Beauty Lab',
    position: 'center 58%',
    startAt: 7.2,
  },
  {
    id: 'spa',
    label: 'Spa & Hammam',
    type: 'video' as const,
    src: '/media/hero/spa/massage-candlelight.mp4',
    alt: 'Massage dans l espace spa de Casa Beauty Lab',
    position: 'center center',
    startAt: 10,
  },
  {
    id: 'beaute',
    label: 'Beauté',
    type: 'image' as const,
    src: '/media/hero/beaute/lashes.jpg',
    alt: 'Détail de cils et sourcil travaillé',
    position: 'center 46%',
  },
];
type LocaleSelect = Dispatch<Locale>;

function useSiteCopy() {
  return translations[getLocale(useLocation().pathname)];
}

function LanguageSelector({ locale, copy, onSelect }: { locale: Locale; copy: typeof translations.fr; onSelect: LocaleSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!ref.current?.contains(event.target as Node)) setOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); triggerRef.current?.focus(); } };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', closeOnEscape);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', closeOnEscape); };
  }, []);
  useEffect(() => {
    if (open) optionRefs.current[locale === 'fr' ? 0 : 1]?.focus();
  }, [locale, open]);
  const handleMenuKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const currentIndex = optionRefs.current.findIndex((option) => option === document.activeElement);
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const nextIndex = event.key === 'ArrowDown' ? (currentIndex + 1) % 2 : (currentIndex + 1) % 2;
      optionRefs.current[nextIndex]?.focus();
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      optionRefs.current[event.key === 'Home' ? 0 : 1]?.focus();
    }
  };
  return (
    <div className="language-selector" ref={ref}>
      <button ref={triggerRef} className="language-trigger" type="button" aria-haspopup="menu" aria-expanded={open} aria-label={copy.actions.switchLanguage} onClick={() => setOpen((value) => !value)}>
        {locale === 'fr' ? 'FR' : 'AR'} <span aria-hidden="true" className="language-chevron" />
      </button>
      {open && <div className="language-menu" ref={menuRef} role="menu" onKeyDown={handleMenuKeyDown}>
        <button ref={(element) => { optionRefs.current[0] = element; }} className={locale === 'fr' ? 'language-option language-option--active' : 'language-option'} type="button" role="menuitem" aria-current={locale === 'fr' ? 'true' : undefined} onClick={() => { onSelect('fr'); setOpen(false); }}><span className="language-option__code">FR</span><span>Français</span>{locale === 'fr' && <span className="language-option__mark" aria-hidden="true">—</span>}</button>
        <button ref={(element) => { optionRefs.current[1] = element; }} className={locale === 'ar' ? 'language-option language-option--active' : 'language-option'} type="button" role="menuitem" aria-current={locale === 'ar' ? 'true' : undefined} onClick={() => { onSelect('ar'); setOpen(false); }}><span className="language-option__code">AR</span><span>العربية</span>{locale === 'ar' && <span className="language-option__mark" aria-hidden="true">—</span>}</button>
      </div>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const locale = getLocale(location.pathname);
  const copy = translations[locale];

  useEffect(() => {
    document.documentElement.lang = copy.locale;
    document.documentElement.dir = copy.direction;
    document.body.classList.toggle('menu-open', menuOpen);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [copy.direction, copy.locale, menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const switchLocale = (nextLocale: Locale) => {
    const frenchPath = locale === 'ar' ? location.pathname.replace(/^\/ar(?=\/|$)/, '') || '/' : location.pathname;
    navigate(localePath(nextLocale, frenchPath));
    closeMenu();
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <Link className="brand" to={localePath(locale, '/')} aria-label={`Casa Beauty Lab ${copy.nav.home}`}>
            <span className="brand-mark">CASA</span>
            <span className="brand-mark">BEAUTY</span>
            <span className="brand-mark brand-mark--script">lab</span>
          </Link>

          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label={copy.nav.home} id="main-navigation">
            <NavLink to={localePath(locale, '/')} end onClick={closeMenu}>{copy.nav.home}</NavLink>
            <NavLink to={localePath(locale, '/tarifs')} onClick={closeMenu}>{copy.nav.prices}</NavLink>
            <NavLink to={localePath(locale, '/spa')} onClick={closeMenu}>{copy.nav.spa}</NavLink>
            <NavLink to={localePath(locale, '/gallery')} onClick={closeMenu}>{copy.nav.lab}</NavLink>
            <NavLink to={localePath(locale, '/about')} onClick={closeMenu}>{copy.nav.about}</NavLink>
            <NavLink to={localePath(locale, '/contact')} onClick={closeMenu}>{copy.nav.contact}</NavLink>
          </nav>

          <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
            {copy.actions.book}
          </a>
          <LanguageSelector locale={locale} copy={copy} onSelect={switchLocale} />
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? copy.actions.closeMenu : copy.actions.openMenu} onClick={() => setMenuOpen((open) => !open)}>
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tarifs" element={<TarifsPage />} />
          <Route path="/spa" element={<SpaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ar" element={<HomePage />} />
          <Route path="/ar/tarifs" element={<TarifsPage />} />
          <Route path="/ar/spa" element={<SpaPage />} />
          <Route path="/ar/gallery" element={<GalleryPage />} />
          <Route path="/ar/about" element={<AboutPage />} />
          <Route path="/ar/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand brand--footer">
              <span className="brand-mark">CASA</span>
              <span className="brand-mark">BEAUTY</span>
              <span className="brand-mark brand-mark--script">lab</span>
            </div>
            <p>{copy.footer.tagline}</p>
          </div>

          <div>
            <h3>{copy.footer.visit}</h3>
            <ul>
              <li><Link to={localePath(locale, '/tarifs')}>{copy.nav.prices}</Link></li>
              <li><Link to={localePath(locale, '/spa')}>{copy.nav.spa}</Link></li>
              <li><Link to={localePath(locale, '/contact')}>{copy.nav.contact}</Link></li>
              <li><a href={business.mapUrl} target="_blank" rel="noreferrer">{copy.actions.directions}</a></li>
            </ul>
          </div>

          <div>
            <h3>{copy.footer.contact}</h3>
            <ul>
              <li><a href={business.phoneHref}>{business.phoneDisplay}</a></li>
              <li><a href={business.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={business.mapUrl} target="_blank" rel="noreferrer">{business.address}</a></li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  const copy = useSiteCopy();
  const locale = getLocale(useLocation().pathname);
  return (
    <>
      <section className="hero section-spacing">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{copy.home.eyebrow}</p>
            <h1>{copy.home.title}</h1>
            <p className="lead">{copy.home.lead}</p>
            <div className="hero-actions">
              <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">{copy.actions.book}</a>
              <Link className="button button--secondary" to={localePath(locale, '/tarifs')}>{copy.actions.prices}</Link>
            </div>
            <div className="hero-tags" aria-label={copy.common.servicesLabel}>
              {copy.home.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>

          <HeroMedia />
        </div>
      </section>

      <section className="section-spacing">
        <div className="container split-block">
          <div>
            <p className="eyebrow">{copy.home.introEyebrow}</p>
            <h2>{copy.home.introTitle}</h2>
          </div>
          <p>
            {copy.home.introText}
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{copy.home.signatureEyebrow}</p>
            <h2>{copy.home.signatureTitle}</h2>
          </div>
          <div className="service-grid">
            {featuredServices.map((service) => (
              <article className="service-card" key={service.id}>
                <div className="service-body">
                  <span className="pill">{copy.services[service.id].category}</span>
                  <ul className="service-list" aria-label={copy.services[service.id].category}>
                    {copy.services[service.id].tariffNames.map((name) => <li key={name}>{name}</li>)}
                  </ul>
                  <p>{copy.services[service.id].shortDescription}</p>
                  <div className="service-meta">
                    <span className="service-price-full">{getPriceLabel(locale, service.id, service.priceLabel) ?? copy.common.onRequest}</span>
                    <span className="service-price-start">{getStartingPriceLabel(locale, service.id) ?? copy.common.pricesLink}</span>
                    <span className="service-duration">{getDurationLabel(locale, service.id, service.duration) ?? copy.common.quote}</span>
                    <Link to={localePath(locale, '/tarifs')}>{copy.common.pricesLink}</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing editorial-band">
        <div className="container editorial-layout">
          <div className="editorial-copy">
            <p className="eyebrow">{copy.home.expertiseEyebrow}</p>
            <h2>{copy.home.expertiseTitle}</h2>
            <p>{copy.home.expertiseText}</p>
            <ul className="check-list">
              {copy.home.checks.map((check) => <li key={check}>{check}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{copy.home.experienceEyebrow}</p>
            <h2>{copy.home.experienceTitle}</h2>
          </div>
          <div className="review-row experience-grid">
            {copy.home.experience.map((item, index) => <div className="stat-box" key={item.title}>
              <span className="stat-box__index">0{index + 1}</span>
              <strong className="stat-box__title">{item.title}</strong>
              <span className="stat-box__label">{item.text}</span>
            </div>)}
          </div>
        </div>
      </section>

      <section className="section-spacing cta-band">
        <div className="container cta-wrap">
          <div>
            <p className="eyebrow">{copy.home.ctaEyebrow}</p>
            <h2>{copy.home.ctaTitle}</h2>
          </div>
          <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">{copy.actions.book}</a>
        </div>
      </section>
    </>
  );
}

function HeroMedia() {
  const copy = useSiteCopy();
  const locale = getLocale(useLocation().pathname);
  const localizedAlts = locale === 'ar' ? ['نتيجة بالياج في صالون Casa Beauty Lab', 'جلسة تدليك في مساحة السبا في Casa Beauty Lab', 'تفاصيل الرموش والحواجب'] : heroScenes.map((scene) => scene.alt);
  const localizedSceneLabels = locale === 'ar' ? ['تصفيف الشعر', 'السبا والحمام المغربي', 'الجمال'] : heroScenes.map((scene) => scene.label);
  const [activeScene, setActiveScene] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener('change', updateMotion);
    return () => motionQuery.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveScene((scene) => (scene + 1) % heroScenes.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeScene && !reducedMotion && !isPaused) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [activeScene, isPaused, reducedMotion]);

  useEffect(() => {
    const handleVisibility = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const selectScene = (index: number) => {
    setActiveScene(index);
    setIsPaused(false);
  };

  return (
    <div
      className={`hero-visual${reducedMotion ? ' hero-visual--reduced' : ''}`}
      aria-label={copy.common.sceneLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
      }}
    >
      <div className="hero-scenes" aria-live="polite">
        {heroScenes.map((scene, index) => (
          <div className={`hero-scene${index === activeScene ? ' hero-scene--active' : ''}`} key={scene.id}>
            {scene.type === 'video' ? (
              <video
                ref={(video) => { videoRefs.current[index] = video; }}
                src={scene.src}
                muted
                playsInline
                preload={index === activeScene ? 'auto' : 'none'}
                aria-label={localizedAlts[index]}
                onLoadedMetadata={(event) => { event.currentTarget.currentTime = scene.startAt; }}
                onEnded={(event) => { event.currentTarget.currentTime = scene.startAt; void event.currentTarget.play().catch(() => undefined); }}
              />
            ) : (
                <img src={scene.src} alt={localizedAlts[index]} style={{ objectPosition: scene.position }} />
            )}
          </div>
        ))}
      </div>
      <div className="hero-visual__shade" />
      <div className="hero-scene-selector" role="tablist" aria-label={copy.common.atmosphere}>
        {heroScenes.map((scene, index) => (
          <button
            className={`hero-scene-tab${index === activeScene ? ' hero-scene-tab--active' : ''}`}
            type="button"
            role="tab"
            aria-selected={index === activeScene}
            aria-label={`${copy.common.atmosphere}: ${localizedSceneLabels[index]}`}
            onClick={() => selectScene(index)}
            key={scene.id}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{localizedSceneLabels[index]}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}

function TarifLine({ service }: { service: (typeof business.services)[number] }) {
  const copy = useSiteCopy();
  const locale = getLocale(useLocation().pathname);
  const localized = copy.services[service.id];
  return (
    <li className="tarif-item">
      <div>
        <h3>{localized.title}</h3>
        <p>{localized.shortDescription}</p>
      </div>
      {service.tariffLines ? (
        <ul className="tarif-detail-list">
          {service.tariffLines.map((line) => (
            <li key={line.name}>
              <span>{localized.tariffNames[service.tariffLines?.indexOf(line) ?? 0] ?? line.name}</span>
              <small dir="ltr">{line.duration ?? ''}</small>
              <strong>{line.price}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <div className="tarif-item__meta">
          <span>{service.priceLabel ?? copy.common.onRequest}</span>
          <small>{getDurationLabel(locale, service.id, service.duration) ?? copy.common.quote}</small>
        </div>
      )}
    </li>
  );
}

function TarifsPage() {
  const copy = useSiteCopy();
  return (
    <section className="section-spacing page-section">
      <div className="container">
        <div className="section-heading section-heading--left">
          <p className="eyebrow">{copy.pages.prices.eyebrow}</p>
          <h1>{copy.pages.prices.title}</h1>
        </div>

        <div className="tarif-wrapper">
          <div className="tarif-panel">
            <h2>{copy.pages.prices.categories[0]}</h2>
            <ul>
              {business.services.filter((service) => service.category === 'Coiffure').map((service) => (
                <TarifLine key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="tarif-panel">
            <h2>{copy.pages.prices.categories[1]}</h2>
            <ul>
              {business.services.filter((service) => service.category === 'Soins').map((service) => (
                <TarifLine key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="tarif-panel">
            <h2>{copy.pages.prices.categories[2]}</h2>
            <ul>
              {business.services.filter((service) => service.category === 'Spa').map((service) => (
                <TarifLine key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="tarif-panel">
            <h2>{copy.pages.prices.categories[3]}</h2>
            <ul>
              {business.services.filter((service) => service.category === 'Beauté' || service.category === 'Événement').map((service) => (
                <TarifLine key={service.id} service={service} />
              ))}
            </ul>
          </div>
        </div>

        <div className="booking-banner">
          <p>{copy.pages.prices.note}</p>
          <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">{copy.actions.book}</a>
        </div>
      </div>
    </section>
  );
}

function SpaPage() {
  const copy = useSiteCopy();
  const locale = getLocale(useLocation().pathname);
  return (
    <section className="section-spacing page-section">
      <div className="container">
        <div className="section-heading section-heading--left">
          <p className="eyebrow">{copy.pages.spa.eyebrow}</p>
          <h1>{copy.pages.spa.title}</h1>
        </div>

        <div className="feature-layout">
          <div className="feature-layout__text">
            <p>{copy.pages.spa.text}</p>
            <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">{copy.actions.book}</a>
          </div>
          <div className="spa-services">
            {business.services.filter((service) => service.category === 'Spa').map((service) => (
              <article className="spa-service" key={service.id}>
                <div><h2>{copy.services[service.id].title}</h2><p>{copy.services[service.id].shortDescription}</p></div>
                <div className="spa-service__meta"><span>{getPriceLabel(locale, service.id, service.priceLabel) ?? copy.common.onRequest}</span><small>{getDurationLabel(locale, service.id, service.duration) ?? copy.common.quote}</small></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  const copy = useSiteCopy();
  return (
    <section className="section-spacing page-section">
      <div className="container split-block about-block">
        <div>
          <p className="eyebrow">{copy.pages.about.eyebrow}</p>
          <h1>{copy.pages.about.title}</h1>
        </div>
        <div>
          <p>
            {copy.pages.about.paragraphs[0]}
          </p>
          <p>
            {copy.pages.about.paragraphs[1]}
          </p>
          <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">{copy.actions.book}</a>
        </div>
      </div>
    </section>
  );
}

function GalleryPage() {
  const copy = useSiteCopy();
  return (
    <section className="section-spacing page-section">
      <div className="container">
        <div className="section-heading section-heading--left">
          <p className="eyebrow">{copy.pages.gallery.eyebrow}</p>
          <h1>{copy.pages.gallery.title}</h1>
        </div>
        <div className="gallery-grid">
          {business.gallery.map((item) => (
            <figure className="gallery-item" key={item.title}>
              <img
                src={item.image}
                alt={copy.gallery[business.gallery.indexOf(item)].alt}
                loading="lazy"
                width={item.width}
                height={item.height}
                style={{ objectPosition: item.position }}
              />
              <figcaption>
                <span className="gallery-item__index">{String(business.gallery.indexOf(item) + 1).padStart(2, '0')}</span>
                <strong>{copy.gallery[business.gallery.indexOf(item)].title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="gallery-support">
          <img src="/media/lab/interior/le-lab-interior.jpg" alt={copy.pages.gallery.interiorAlt} loading="lazy" width="1200" height="800" />
          <div>
            <p className="eyebrow">{copy.pages.gallery.placeEyebrow}</p>
            <h2>{copy.pages.gallery.placeTitle}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const copy = useSiteCopy();
  return (
    <section className="section-spacing page-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">{copy.pages.contact.eyebrow}</p>
          <h1>{copy.pages.contact.title}</h1>
          <ul className="contact-list">
            <li><strong>{copy.pages.contact.phone}</strong><a href={business.phoneHref} dir="ltr">{business.phoneDisplay}</a></li>
            <li><strong>{copy.pages.contact.whatsapp}</strong><a href={business.whatsappHref} target="_blank" rel="noreferrer">{copy.actions.message}</a></li>
            <li><strong>{copy.pages.contact.instagram}</strong><a href={business.instagramUrl} target="_blank" rel="noreferrer">{business.instagramHandle}</a></li>
            <li><strong>{copy.pages.contact.address}</strong><a href={business.mapUrl} target="_blank" rel="noreferrer">{business.address}</a></li>
          </ul>
        </div>

        <div className="hours-card">
          <h2>{copy.footer.hours}</h2>
          <ul>
            {business.openingHours.map((slot, index) => (
              <li key={slot.day}><span>{copy.days[index]}</span><strong dir="ltr">{slot.hours}</strong></li>
            ))}
          </ul>
          <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">{copy.actions.book}</a>
        </div>
      </div>
    </section>
  );
}

function NotFoundPage() {
  const copy = useSiteCopy();
  const locale = getLocale(useLocation().pathname);
  return <section className="section-spacing page-section"><div className="container"><p className="eyebrow">404</p><h1>{locale === 'ar' ? 'هذه الصفحة غير موجودة.' : 'Cette page est introuvable.'}</h1><Link className="button button--primary" to={localePath(locale, '/')}>{copy.nav.home}</Link></div></section>;
}

export default App;
