import { useState } from 'react';

const eventUrl = 'https://insideoutrevolution.eventbrite.com';

const workAreas = [
  {
    number: '01',
    title: 'Educational engagement',
    description: 'Learning, education and development opportunities for young people.',
  },
  {
    number: '02',
    title: 'Personal development',
    description: 'Knowledge, consciousness and a deeper understanding of our shared humanity.',
  },
  {
    number: '03',
    title: 'Community outreach',
    description: 'Practical engagement that encourages personal and social transformation.',
  },
];

const principles = [
  { title: 'Knowledge', description: 'Learning and understanding.' },
  { title: 'Consciousness', description: 'Awareness and personal development.' },
  { title: 'Compassion', description: 'Empathy, dignity and care.' },
  { title: 'Connection', description: 'Recognition of our shared humanity.' },
];

const objectives = [
  'Promote human understanding, consciousness and personal development.',
  'Encourage education, learning and opportunities for young people.',
  'Advance compassion, connection and awareness of our shared humanity.',
  'Support educational engagement and community outreach.',
  'Encourage personal and social transformation through practical initiatives.',
  'Build partnerships for sustainable human and community development.',
];

const initiatives = [
  { year: '2024', title: 'Catch Them Young' },
  { year: '2025', title: 'Awakening of Conscience and Consciousness' },
];

const sdgs = [
  { number: 'SDG 03', title: 'Good Health and Well-being', description: 'Holistic well-being for individuals and communities.' },
  { number: 'SDG 04', title: 'Quality Education', description: 'Educational access, learning and personal development.' },
  { number: 'SDG 11', title: 'Sustainable Cities and Communities', description: 'Inclusive, compassionate and resilient communities.' },
  { number: 'SDG 17', title: 'Partnerships for the Goals', description: 'Partnerships for human and community development.' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topline">
        <div className="wrap topline-inner">
          <span>Bayonle Rasheed Akinbile Foundation</span>
          <span>Ibadan, Oyo State · RC No. 8666024</span>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap nav">
          <a className="brand" href="#home" aria-label="BRAF home" onClick={closeMenu}>
            <span className="brand-logo"><img src="/assets/braf-logo.jpeg" alt="" /></span>
            <span className="brand-name">Bayonle Rasheed Akinbile Foundation</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <nav id="main-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <a href="#foundation" onClick={closeMenu}>Foundation</a>
            <a href="#principles" onClick={closeMenu}>Principles</a>
            <a href="#aims" onClick={closeMenu}>Aims</a>
            <a href="#community" onClick={closeMenu}>Community</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-register" href={eventUrl} target="_blank" rel="noreferrer">Register · Free admission</a>
          </nav>
        </div>
      </header>
    </>
  );
}

function EventFeature() {
  return (
    <section className="event-hero" id="home" aria-labelledby="event-title">
      <div className="wrap event-grid">
        <div className="event-copy">
          <div className="event-kicker">BRAF presents · Ibadan, Nigeria</div>
          <h1 id="event-title">Higher <span>Consciousness</span></h1>
          <div className="event-theme"><b>THEME</b><span>The Inside-Out Revolution</span></div>
          <p className="event-subtitle">Awakening individual consciousness as the catalyst for a greater Nigeria.</p>
          <div className="event-facts">
            <div className="event-fact"><small>Date</small><strong>Saturday<br />7 November 2026</strong></div>
            <div className="event-fact"><small>Time</small><strong>10:00 a.m.</strong></div>
            <div className="event-fact"><small>Venue</small><strong>Mini Hall, U.I. Hotels<br />Otunba Subomi Balogun Conference Centre, University of Ibadan</strong></div>
            <div className="event-fact"><small>Admission</small><strong>Free · Registration compulsory</strong></div>
          </div>
          <div className="event-actions">
            <a className="button button-gold" href={eventUrl} target="_blank" rel="noreferrer">Register on Eventbrite <span aria-hidden="true">↗</span></a>
            <span className="event-type">National Conference on Higher Consciousness</span>
          </div>
        </div>
        <figure className="flyer-frame">
          <img
            src="/assets/braf-higher-consciousness-2026.jpeg"
            alt="BRAF National Conference on Higher Consciousness flyer. Theme: The Inside-Out Revolution. Saturday 7 November 2026 at 10 a.m. at Mini Hall, U.I. Hotels, University of Ibadan. Free admission; registration required."
          />
          <figcaption>National Conference on Higher Consciousness · 07.11.2026</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Foundation() {
  return (
    <section className="section" id="foundation">
      <div className="wrap about-grid">
        <div className="about-heading">
          <div className="eyebrow">The foundation</div>
          <h2 className="section-title">Who we are</h2>
          <p className="lead">A Nigerian not-for-profit founded on 11 November 2024.</p>
        </div>
        <div className="about-copy">
          <p>The <strong>Bayonle Rasheed Akinbile Foundation (BRAF)</strong> was established to advance human understanding, consciousness, personal development and a deeper sense of interconnectedness among individuals and communities.</p>
          <p>The foundation's work is rooted in knowledge, enlightenment, education, compassion and awareness of our shared humanity. BRAF puts these ideals into practice through educational engagement, community outreach and initiatives that encourage personal and social transformation.</p>
          <p>BRAF is distinct from Lucis Leadership Academy.</p>
          <span className="identity-note">Registered office: Ibadan, Oyo State, Nigeria · RC No. 8666024</span>
        </div>
      </div>
    </section>
  );
}

function AreasOfWork() {
  return (
    <section className="work-section section">
      <div className="wrap">
        <div className="work-heading">
          <div><div className="eyebrow">Our work</div><h2 className="section-title">Education. Human development. Community.</h2></div>
          <p>BRAF focuses on educational engagement, personal development and initiatives that support positive social development.</p>
        </div>
        <div className="work-grid">
          {workAreas.map((area) => (
            <article className="work-item" key={area.number}>
              <span className="work-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="section" id="principles">
      <div className="wrap">
        <div className="section-heading"><div className="eyebrow">Guiding principles</div><h2 className="section-title">Four principles shape BRAF's work.</h2></div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.title}>
              <h3>{principle.title}</h3><p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Aims() {
  return (
    <section className="aims-section section" id="aims">
      <div className="wrap">
        <div className="eyebrow">Aims and objectives</div>
        <h2 className="section-title">What BRAF works to advance.</h2>
        <p className="lead">The foundation's objectives centre on human development, education and community.</p>
        <ol className="aim-grid">
          {objectives.map((objective) => <li key={objective}>{objective}</li>)}
        </ol>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="section" id="community">
      <div className="wrap community-grid">
        <div><div className="eyebrow">Community engagement</div><h2 className="section-title">Previous initiatives</h2><p className="lead">BRAF's community engagement includes:</p></div>
        <div className="initiative-list">
          {initiatives.map((initiative) => (
            <article className="initiative" key={initiative.year}>
              <time dateTime={initiative.year}>{initiative.year}</time><h3>{initiative.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SDGs() {
  return (
    <section className="sdgs-section section">
      <div className="wrap">
        <div className="eyebrow">United Nations Sustainable Development Goals</div>
        <h2 className="section-title">BRAF's SDG alignment</h2>
        <p className="lead">The foundation aligns its programmes with four goals.</p>
        <div className="sdg-grid">
          {sdgs.map((sdg) => (
            <article className="sdg" key={sdg.number}>
              <span className="sdg-number">{sdg.number}</span><h3>{sdg.title}</h3><p>{sdg.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrusteesAndPartnerships() {
  return (
    <>
      <section className="trustees-section">
        <div className="wrap trustee-row"><h2>Board of Trustees</h2><p>Trustee names and profiles can be added when the official list is confirmed.</p></div>
      </section>
      <section className="section">
        <div className="wrap partnership-grid">
          <div><div className="eyebrow">Partnerships</div><h2 className="section-title">Partnership enquiries</h2></div>
          <div className="partnership-copy"><p>BRAF welcomes partnerships with individuals, institutions, government and organisations working toward sustainable human and community development.</p><p>Contact the foundation to discuss a partnership.</p></div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="wrap">
        <div className="eyebrow">Contact</div>
        <h2 className="section-title">Bayonle Rasheed Akinbile Foundation</h2>
        <p className="lead">Ibadan, Oyo State, Nigeria · RC No. 8666024</p>
        <div className="contact-grid">
          <div className="contact-details">
            <div className="contact-item"><small>Email</small><a href="mailto:lightloveable@yahoo.com">lightloveable@yahoo.com</a></div>
            <div className="contact-item"><small>Telephone</small><a href="tel:+2348034310181">+234 803 431 0181</a></div>
            <div className="contact-item contact-address"><small>Registered office</small><span>Plot 13B, Kunle Osagie Street, Sufi Way, Behind Scout Camp, Challenge Area, Ibadan, Oyo State, Nigeria.</span></div>
          </div>
          <div className="contact-meta"><strong>Established 11 November 2024</strong><span>For conference registration, use the Eventbrite link above.</span></div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <EventFeature />
        <Foundation />
        <AreasOfWork />
        <Principles />
        <Aims />
        <Community />
        <SDGs />
        <TrusteesAndPartnerships />
        <Contact />
      </main>
      <footer className="site-footer"><div className="wrap"><span>© {new Date().getFullYear()} Bayonle Rasheed Akinbile Foundation</span><a href="#home">Back to top ↑</a></div></footer>
    </>
  );
}
