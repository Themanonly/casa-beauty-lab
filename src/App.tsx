import { Link, Route, Routes } from 'react-router-dom';
import { business } from './content/business';

const featuredServices = business.services.filter((service) => service.featured);

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <Link className="brand" to="/" aria-label="Casa Beauty Lab accueil">
            <span className="brand-mark">CASA</span>
            <span className="brand-mark">BEAUTY</span>
            <span className="brand-mark brand-mark--script">lab</span>
          </Link>

          <nav className="main-nav" aria-label="Navigation principale">
            <Link to="/">Accueil</Link>
            <Link to="/tarifs">Tarifs</Link>
            <Link to="/spa">Spa</Link>
            <Link to="/gallery">Le lab</Link>
            <Link to="/about">À propos</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
            Réserver
          </a>
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
          <Route path="*" element={<HomePage />} />
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
            <p>Coiffure, spa et beauté à Casablanca.</p>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href={business.phoneHref}>{business.phoneDisplay}</a></li>
              <li><a href={business.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h3>Horaires</h3>
            <ul>
              {business.openingHours.map((slot) => (
                <li key={slot.day}><span>{slot.day}</span> <strong>{slot.hours}</strong></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero section-spacing">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Casablanca • Coiffure • spa • beauté</p>
            <h1>Coiffure, beauté &amp; spa à Casablanca.</h1>
            <p className="lead">
              Des soins capillaires, le massage et le hammam pour une routine beauté claire et confortable.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">Prendre rendez-vous</a>
              <Link className="button button--secondary" to="/tarifs">Voir les tarifs</Link>
            </div>
            <div className="hero-tags" aria-label="Prestations Casa Beauty Lab">
              <span>Coiffure</span>
              <span>Massage</span>
              <span>Beauty</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Maison de beauté Casa Beauty Lab">
            <div className="hero-visual__glow hero-visual__glow--one" />
            <div className="hero-visual__glow hero-visual__glow--two" />
            <div className="hero-visual__frame">
              <span className="visual-kicker">Casa Beauty Lab</span>
              <strong>Coiffure • Spa • Beauty</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container split-block">
          <div>
            <p className="eyebrow">Casa Beauty Lab</p>
            <h2>Le soin, la précision et l’écoute au centre de chaque visite.</h2>
          </div>
          <p>
            Une adresse à Casablanca pour la coiffure, les soins capillaires, le massage, le hammam et les prestations beauté, avec une approche attentive et contemporaine.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Signature</p>
            <h2>Les prestations signature.</h2>
          </div>
          <div className="service-grid">
            {featuredServices.map((service) => (
              <article className="service-card" key={service.id}>
                <div className="service-card__image" style={{ background: service.image }} aria-hidden="true" />
                <div className="service-body">
                  <span className="pill">{service.category}</span>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <div className="service-meta">
                    <span>{service.priceLabel ?? 'Demander le tarif'}</span>
                    <span>{service.duration ?? 'Sur devis'}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing editorial-band">
        <div className="container editorial-layout">
          <div className="editorial-image" aria-hidden="true" />
          <div className="editorial-copy">
            <p className="eyebrow">Expertise beauté</p>
            <h2>Des soins pensés pour un résultat naturel et durable.</h2>
            <p>
              Chaque visite est construite autour de l’écoute, de la technique et du confort. Le but reste simple : un résultat propre, net et élégant, sans artifice ni surcharge.
            </p>
            <ul className="check-list">
              <li>Consultation et conseil personnalisés</li>
              <li>Produits et protocoles adaptés</li>
              <li>Ambiance calme et professionnelle</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Expérience</p>
            <h2>Un cadre soigné, accueillant et pensé pour le confort.</h2>
          </div>
          <div className="review-row">
            <div className="stat-box">
              <span className="stat-box__value">C</span>
              <span className="stat-box__label">coiffure</span>
            </div>
            <div className="stat-box">
              <span className="stat-box__value">S</span>
              <span className="stat-box__label">spa</span>
            </div>
            <div className="stat-box">
              <span className="stat-box__value">B</span>
              <span className="stat-box__label">beauty</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing cta-band">
        <div className="container cta-wrap">
          <div>
            <p className="eyebrow">Prêt à réserver ?</p>
            <h2>Votre rendez-vous beauté commence ici.</h2>
          </div>
          <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">Demander un rendez-vous</a>
        </div>
      </section>
    </>
  );
}

function TarifLine({ service }: { service: (typeof business.services)[number] }) {
  return (
    <li className="tarif-item">
      <div>
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
      </div>
      <div className="tarif-item__meta">
        <span>{service.priceLabel ?? 'Demander le tarif'}</span>
        <small>{service.duration ?? 'Sur devis'}</small>
      </div>
    </li>
  );
}

function TarifsPage() {
  return (
    <section className="section-spacing page-section">
      <div className="container">
        <div className="section-heading section-heading--left">
          <p className="eyebrow">Tarifs</p>
          <h1>Des prestations claires, sans ambiguïté.</h1>
        </div>

        <div className="tarif-wrapper">
          <div className="tarif-panel">
            <h2>Coiffure</h2>
            <ul>
              {business.services.filter((service) => service.category === 'Coiffure').map((service) => (
                <TarifLine key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="tarif-panel">
            <h2>Soins</h2>
            <ul>
              {business.services.filter((service) => service.category === 'Soins').map((service) => (
                <TarifLine key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="tarif-panel">
            <h2>Spa & Hammam</h2>
            <ul>
              {business.services.filter((service) => service.category === 'Spa').map((service) => (
                <TarifLine key={service.id} service={service} />
              ))}
            </ul>
          </div>

          <div className="tarif-panel">
            <h2>Beauté & événement</h2>
            <ul>
              {business.services.filter((service) => service.category === 'Beauté' || service.category === 'Événement').map((service) => (
                <TarifLine key={service.id} service={service} />
              ))}
            </ul>
          </div>
        </div>

        <div className="booking-banner">
          <p>Tarifs consultés sur le site public officiel. Pour les prestations non affichées, nous vous invitons à demander le tarif directement par WhatsApp.</p>
          <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">Demander un tarif</a>
        </div>
      </div>
    </section>
  );
}

function SpaPage() {
  return (
    <section className="section-spacing page-section">
      <div className="container">
        <div className="section-heading section-heading--left">
          <p className="eyebrow">Spa</p>
          <h1>Hammam, massage et détente.</h1>
        </div>

        <div className="feature-layout">
          <div className="feature-layout__text">
            <p>
              Le spa Casa Beauty Lab met en avant la relaxation, le confort et la régénération. Les rituals sont pensés pour accompagner le corps et le visage dans une même logique de détente et de finition élégante.
            </p>
            <ul className="check-list">
              <li>Hammam oriental</li>
              <li>Massage relaxant</li>
              <li>Rituel signature</li>
            </ul>
          </div>
          <div className="feature-layout__visual" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="section-spacing page-section">
      <div className="container split-block about-block">
        <div>
          <p className="eyebrow">À propos</p>
          <h1>Un concept beauté contemporain, pensé pour Casablanca.</h1>
        </div>
        <div>
          <p>
            Casa Beauty Lab est une adresse beauté qui met l’accent sur la précision, l’accueil et les soins personnalisés. La promesse est simple : une qualité de service attentive, dans un cadre soigné et discret.
          </p>
          <p>
            Le concept vise un cadre moderne, précis et apaisant, pensé pour offrir un accueil chaleureux et des soins adaptés à chaque cliente.
          </p>
        </div>
      </div>
    </section>
  );
}

function GalleryPage() {
  return (
    <section className="section-spacing page-section">
      <div className="container">
        <div className="section-heading section-heading--left">
          <p className="eyebrow">Le lab</p>
          <h1>Une identité visuelle sobre et audacieuse.</h1>
        </div>
        <div className="gallery-grid">
          {business.gallery.map((item) => (
            <figure className="gallery-item" key={item.title}>
              <div className="gallery-item__image" style={{ background: item.image }} aria-label={item.alt} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="section-spacing page-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Nous sommes à votre écoute.</h1>
          <ul className="contact-list">
            <li><strong>Téléphone</strong><a href={business.phoneHref}>{business.phoneDisplay}</a></li>
            <li><strong>WhatsApp</strong><a href={business.whatsappHref} target="_blank" rel="noreferrer">Envoyer un message</a></li>
            <li><strong>Instagram</strong><a href={business.instagramUrl} target="_blank" rel="noreferrer">{business.instagramHandle}</a></li>
            <li><strong>Adresse</strong><a href={business.mapUrl} target="_blank" rel="noreferrer">{business.address}</a></li>
          </ul>
        </div>

        <div className="hours-card">
          <h2>Horaires</h2>
          <ul>
            {business.openingHours.map((slot) => (
              <li key={slot.day}><span>{slot.day}</span><strong>{slot.hours}</strong></li>
            ))}
          </ul>
          <a className="button button--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">Planifier</a>
        </div>
      </div>
    </section>
  );
}

export default App;
