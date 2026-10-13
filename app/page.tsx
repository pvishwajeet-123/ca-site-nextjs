import Image from "next/image";
import MobileNavigation from "./mobile-navigation";

const services = [
  {
    icon: "audit",
    title: "Audit & Assurance",
    text: "Independent insight. Greater confidence.",
    items: [
      "Statutory Audit",
      "Internal Audit",
      "Stock Audit",
      "Tax Audit",
      "Concurrent Audit",
    ],
  },
  {
    icon: "tax",
    title: "Taxation Services",
    text: "Clarity through every tax obligation.",
    items: [
      "Income Tax (Individual & Business)",
      "GST Compliance",
      "TDS",
      "Advance Tax",
      "Tax Planning & Advisory",
    ],
  },
  {
    icon: "book",
    title: "Accounting & Bookkeeping",
    text: "A clear picture of your finances.",
    items: [
      "Bookkeeping",
      "Finalization of Accounts",
      "MIS Reports",
      "Financial Statements",
    ],
  },
  {
    icon: "gst",
    title: "GST Services",
    text: "Support at every step of GST compliance.",
    items: [
      "GST Registration",
      "Return Filing",
      "GST Advisory",
      "LUT/BOND",
      "Refunds",
    ],
  },
  {
    icon: "chart",
    title: "Business Advisory",
    text: "Thoughtful guidance for your next chapter.",
    items: [
      "Business Setup",
      "Registration",
      "Financial Planning",
      "Budgeting",
      "Project Reports",
    ],
  },
  {
    icon: "shield",
    title: "Compliance Services",
    text: "Stay aligned with your obligations.",
    items: [
      "ROC Compliance",
      "IEC Registration",
      "Contract Drafting",
      "Certifications",
      "Licenses & Approvals",
    ],
  },
  {
    icon: "handshake",
    title: "Other Services",
    text: "Practical support for the details that matter.",
    items: [
      "ITR Filing",
      "TDS/TCS Compliance",
      "DSC",
      "Digital Signature",
      "PAN",
      "PF/ESI",
      "Professional Consultations",
    ],
  },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    audit: (
      <>
        <path d="M14 3H5v18h14V8l-5-5Z" />
        <path d="M14 3v5h5M8 12h5M8 16h3" />
        <circle cx="17" cy="17" r="4" />
        <path d="m20 20 2 2" />
      </>
    ),
    tax: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M8 6h8M8 10h1m3 0h1m3 0h1M8 14h1m3 0h1m3 0h1M8 18h1m3 0h1m3 0h1" />
      </>
    ),
    book: (
      <>
        <path d="M3 4h7a3 3 0 0 1 3 3v14a4 4 0 0 0-4-2H3V4Zm18 0h-5a3 3 0 0 0-3 3v14a4 4 0 0 1 4-2h4V4ZM6 8h3M6 12h3m7-4h2m-2 4h2" />
      </>
    ),
    gst: (
      <>
        <rect x="5" y="4" width="14" height="18" rx="1" />
        <path d="M9 2h6v4H9zM9 11h6M9 15h6M9 19h4" />
      </>
    ),
    chart: (
      <>
        <path d="M3 21h19M5 17v-5h4v5m3 0V8h4v9m3 0V3h3v14M3 8l6-4 4 1 8-4" />
      </>
    ),
    shield: (
      <>
        <path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    handshake: (
      <>
        <path d="m2 8 4-4 5 2 4-2 7 5-4 7-5 4-7-4-4-8Z" />
        <path d="m11 6-4 5 3 2 4-4 7 5M6 16l2-3m1 5 2-3m1 4 2-3" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 22v-3a8 8 0 0 1 16 0v3" />
      </>
    ),
    building: (
      <>
        <path d="M5 22V3h14v19M2 22h20M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M10 22v-3h4v3" />
      </>
    ),
    store: (
      <>
        <path d="M4 10v12h16V10M3 3h18l1 7H2l1-7ZM8 22v-7h8v7M7 3l-1 7m6-7v7m5-7 1 7" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M2 21v-3a7 7 0 0 1 14 0v3M16 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 4 6" />
      </>
    ),
    phone: (
      <path d="m6 3 4 5-3 3a15 15 0 0 0 6 6l3-3 5 4c-1 5-5 5-9 3A24 24 0 0 1 3 12C1 8 1 4 6 3Z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 5 10 8L22 5" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="12" rx="2" />
        <path d="M8 10V6a4 4 0 0 1 8 0v4M12 15v3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    rupee: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 7h8M8 10h8M10 7c7 0 6 7-2 7l7 5" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="m8 13-3 9 7-3 7 3-3-9m-6-5 2 2 3-3" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h16m-6-6 6 6-6 6" />
      </>
    ),
    download: (
      <>
        <path d="M12 2v13m-5-5 5 5 5-5M4 16v6h16v-6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.shield}
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="VP & Associates home"
    >
      <span className="brand-monogram">
        VP<span>.</span>
      </span>
      <span className="brand-name">
        VP & ASSOCIATES<small>CHARTERED ACCOUNTANTS</small>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="topbar">
        <div className="container">
          <span>Professionalism you expect. Service you deserve.</span>
          <a href="tel:+917053571516">
            <Icon name="phone" /> +91 70535 71516
          </a>
        </div>
      </div>
      <header className="header">
        <div className="container nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About us</a>
            <a href="#services">Our services</a>
            <a href="#clients">Who we serve</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="button button-small nav-cta">
            Let’s talk <Icon name="arrow" />
          </a>
          <MobileNavigation />
        </div>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span /> YOUR PARTNER IN FINANCIAL CLARITY
              </div>
              <h1>
                Professional solutions.
                <br />
                <em>Lasting value.</em>
              </h1>
              <p>
                Reliable, compliant and personalized financial services for you.
                So you can focus on what matters most.
              </p>
              <div className="hero-actions">
                <a href="#services" className="button">
                  Explore our services <Icon name="arrow" />
                </a>
                <a href="#contact" className="text-link">
                  Get in touch <span>↗</span>
                </a>
              </div>
              <div className="hero-credential">
                <span className="credential-icon">
                  <Icon name="shield" />
                </span>
                <div>
                  <strong>CA Vishwajeet Prajapati</strong>
                  <span>B.Com | ACA · Chartered Accountant</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="photo-frame">
                <Image
                  src="/images/financial-workspace.jpg"
                  alt="Financial reports and a laptop on a professional workspace"
                  fill
                  preload
                  sizes="(max-width: 800px) 100vw, 48vw"
                />
                <div className="photo-shade" />
                <div className="photo-caption">
                  <span>CLARITY. COMPLIANCE. CONFIDENCE.</span>
                  <p>
                    A thoughtful approach
                    <br />
                    to your financial future.
                  </p>
                </div>
              </div>
              <div className="hero-note">
                <span className="note-icon">
                  <Icon name="chart" />
                </span>
                <div>
                  <strong>Your business. Our commitment.</strong>
                  <span>Expertise that puts you first.</span>
                </div>
              </div>
              <span className="visual-label">
                BUILT ON TRUST. FOCUSED ON YOU.
              </span>
            </div>
          </div>
        </section>
        <section className="values-bar" aria-label="Our values">
          <div className="container values-grid">
            {[
              ["shield", "Trust & Integrity"],
              ["people", "Professional Advice"],
              ["clock", "Timely Solutions"],
              ["award", "Quality Service"],
            ].map(([icon, title]) => (
              <div key={title}>
                <Icon name={icon} />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="section about" id="about">
          <div className="container about-grid">
            <div>
              <div className="eyebrow">ABOUT VP & ASSOCIATES</div>
              <h2>
                Expertise you can rely on.
                <br />
                <em>Attention you deserve.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                At VP & Associates, we bring a personal approach to professional
                financial services. Led by{" "}
                <strong>CA Vishwajeet Prajapati, B.Com | ACA</strong>, our
                practice supports individuals and businesses with their
                accounting, taxation, audit and compliance needs.
              </p>
              <p>
                From everyday financial decisions to important business
                milestones, our focus is simple: clear advice, dependable
                service and lasting value.
              </p>
              <a href="#contact" className="text-link">
                Connect with your accountant <span>↗</span>
              </a>
            </div>
          </div>
        </section>
        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">OUR SERVICES</div>
                <h2>
                  Every detail matters.
                  <br />
                  <em>We help you handle it.</em>
                </h2>
              </div>
              <p>
                Comprehensive financial services,
                <br />
                shaped around your needs.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <article
                  className={`service-card ${index === 6 ? "service-wide" : ""}`}
                  key={service.title}
                >
                  <div className="service-top">
                    <span className="service-icon">
                      <Icon name={service.icon} />
                    </span>
                    <span className="service-number">0{index + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        <Icon name="check" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:cavishwajeet09@zohomail.in?subject=${encodeURIComponent(`Enquiry: ${service.title}`)}`}
                    className="service-link"
                  >
                    Enquire about this service <Icon name="arrow" />
                  </a>
                </article>
              ))}
              <div className="services-invitation">
                <span className="large-asterisk">✳</span>
                <h3>
                  A question about
                  <br />
                  your finances?
                </h3>
                <p>Let’s find the right support for you.</p>
                <a href="#contact" className="text-link">
                  Start a conversation <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section clients" id="clients">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">WHO WE SERVE</div>
                <h2>
                  Different journeys.
                  <br />
                  <em>The same dedication.</em>
                </h2>
              </div>
              <p>
                Personal attention for individuals.
                <br />
                Practical guidance for businesses.
              </p>
            </div>
            <div className="clients-grid">
              {[
                ["person", "Individuals &", "Salaried Employees"],
                ["chart", "Startups &", "Entrepreneurs"],
                ["store", "Small & Medium", "Businesses"],
                ["building", "Companies &", "Partnership Firms"],
                ["people", "Trusts, NGOs &", "Societies"],
              ].map(([icon, first, second]) => (
                <div className="client-item" key={first}>
                  <Icon name={icon} />
                  <h3>
                    {first}
                    <br />
                    {second}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="commitment section">
          <div className="container">
            <div className="commitment-heading">
              <div className="eyebrow">OUR COMMITMENT</div>
              <h2>
                Good advice starts
                <br />
                with <em>strong principles.</em>
              </h2>
              <p>
                Professionalism you expect.
                <br />
                Service you deserve.
              </p>
            </div>
            <div className="commitment-grid">
              {[
                ["shield", "Integrity", "Honest guidance at every step."],
                ["lock", "Confidentiality", "Respect for your information."],
                [
                  "clock",
                  "Timely Delivery",
                  "Attention to what’s due, and when.",
                ],
                [
                  "person",
                  "Personalized Attention",
                  "Service built around your needs.",
                ],
                [
                  "rupee",
                  "Affordable Solutions",
                  "A practical approach to your finances.",
                ],
              ].map(([icon, title, text]) => (
                <div key={title}>
                  <Icon name={icon} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow">GET IN TOUCH</div>
              <h2>
                Focus on your business.
                <br />
                <em>We’ll handle the numbers.</em>
              </h2>
              <p>
                Have a question or need professional guidance?
                <br />
                We’re here to help you take the next step.
              </p>
              <div className="contact-links">
                <a href="tel:+917053571516">
                  <Icon name="phone" />
                  <div>
                    <small>CALL US</small>
                    <span>+91 70535 71516</span>
                  </div>
                  <span className="contact-arrow">↗</span>
                </a>
                <a href="mailto:cavishwajeet09@zohomail.in">
                  <Icon name="mail" />
                  <div>
                    <small>EMAIL US</small>
                    <span>cavishwajeet09@zohomail.in</span>
                  </div>
                  <span className="contact-arrow">↗</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sector+18+Noida+Uttar+Pradesh+201301"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="pin" />
                  <div>
                    <small>FIND US</small>
                    <span>
                      Sector 18, Noida,
                      <br />
                      Uttar Pradesh – 201301
                    </span>
                  </div>
                  <span className="contact-arrow">↗</span>
                </a>
              </div>
            </div>
            <aside className="contact-card">
              <span className="card-eyebrow">YOUR FINANCIAL PARTNER</span>
              <div className="accountant-monogram">
                VP<span>.</span>
              </div>
              <h3>CA Vishwajeet Prajapati</h3>
              <p>B.Com | ACA</p>
              <span className="card-role">CHARTERED ACCOUNTANT</span>
              <div className="contact-card-rule" />
              <a className="button" href="/vishwajeet-prajapati.vcf" download>
                Save our contact <Icon name="download" />
              </a>
              <div className="scan-row">
                <a
                  href="/images/vp-associates-brochure.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="qr-window"
                  aria-label="Open brochure to scan the original contact QR code"
                >
                  <Image
                    src="/images/vp-associates-brochure.jpeg"
                    alt="Original brochure contact QR code"
                    width={1102}
                    height={1600}
                    unoptimized
                  />
                </a>
                <span>
                  Scan to save contact
                  <br />
                  <a
                    href="/images/vp-associates-brochure.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View our brochure ↗
                  </a>
                </span>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-top">
            <Brand light />
            <span>Professional solutions. Lasting value.</span>
            <a href="#home" className="back-top">
              Back to top ↑
            </a>
          </div>
          <div className="disclaimer">
            <span>AS PER ICAI GUIDELINES</span>
            <p>
              We do not guarantee any specific results. Professional services
              are rendered as per applicable laws and standards. This
              communication is for general information and does not constitute
              professional advice.
            </p>
            <p>
              This is not a solicitation. Professional services are rendered as
              per applicable laws and ICAI Code of Ethics.
            </p>
          </div>
          <div className="footer-bottom">
            <span>© 2026 VP & Associates. All rights reserved.</span>
            <span>Chartered Accountants · Noida, India</span>
          </div>
        </div>
      </footer>
    </>
  );
}
