"use client";

import { FormEvent, useEffect, useState } from "react";
import SiteFooter from "./components/SiteFooter";

const heroSlides = [
  {
    image: "/images/shabda-hero-01.jpg",
    kicker: "Industrial Fastening Solutions",
    title: (
      <>
        Engineered
        <br />
        for <em>Strength.</em>
        <br />
        Built for Industry.
      </>
    ),
    description:
      "Shabda Engineering is a trusted trading and manufacturing partner for industrial fasteners, serving engineering, manufacturing and industrial applications.",
  },
  {
    image: "/images/shabda-hero-02.jpg",
    kicker: "Precision Fastening Solutions",
    title: (
      <>
        Precision
        <br />
        That <em>Holds.</em>
        <br />
        Performance That Lasts.
      </>
    ),
    description:
      "Reliable fastening components for businesses that demand consistent quality, dependable supply and practical industrial solutions.",
  },
  {
    image: "/images/shabda-hero-03.jpg",
    kicker: "Trading & Manufacturing",
    title: (
      <>
        Built for
        <br />
        <em>Industry.</em>
        <br />
        Ready for Scale.
      </>
    ),
    description:
      "From standard industrial fasteners to requirement-driven solutions, Shabda Engineering supports businesses with reliable supply and service.",
  },
];

const products = [
  {
    title: "Bolts",
    image: "/images/product-bolts.jpg",
    text: "Industrial bolts for reliable and high-strength fastening applications.",
    category: "bolts",
  },
  {
    title: "Nuts",
    image: "/images/product-nuts.jpg",
    text: "Precision nuts designed for secure and dependable assemblies.",
    category: "nuts",
  },
  {
    title: "Screws",
    image: "/images/product-screws.jpg",
    text: "Versatile screws for engineering, fabrication and industrial applications.",
    category: "screws",
  },
  {
    title: "Washers",
    image: "/images/product-washers.jpg",
    text: "Reliable washers for load distribution and secure fastening.",
    category: "washers",
  },
  {
    title: "Studs & Threaded Rods",
    image: "/images/product-threaded-rods.jpg",
    text: "Threaded solutions for structural, mechanical and fabrication requirements.",
    category: "studs",
  },
  {
    title: "Custom Fasteners",
    image: "/images/product-custom-fasteners.jpg",
    text: "Requirement-specific fastening solutions for specialised applications.",
    category: "custom",
  },
];

const industries = [
  "Automotive",
  "Construction",
  "Heavy Engineering",
  "Manufacturing",
  "Infrastructure",
  "Fabrication",
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 10h13" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m10.5 4.5 5.5 5.5-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Shabda Engineering">
      <img
        src="/images/shabda-logo-white.png"
        alt="Shabda Engineering"
        className="logo-image"
      />
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="contact-icon-svg"
      aria-hidden="true"
    >
      <path
        d="M7.5 3.5h3l1.5 4-2 1.5c.9 1.9 2.1 3.1 4 4l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.6 17.5 6.5 13.4 6.5 8.5c0-1.1.9-2 2-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="contact-icon-svg"
      aria-hidden="true"
    >
      <path
        d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.5c.3-.4.7-.4 1-.1l1 1c.2.2.2.5 0 .8l-.5.7c.7 1.1 1.5 1.9 2.6 2.6l.7-.5c.3-.2.6-.2.8 0l1 1c.3.3.3.7-.1 1-.5.5-1.2.7-1.8.5-2.9-.8-5.1-3-5.9-5.9-.2-.6 0-1.3.5-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="contact-icon-svg"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m5 7 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="contact-icon-svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FastenerIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="trust-svg"
      aria-hidden="true"
    >
      <path
        d="M13 12l8 4-13 27-8-4L13 12Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M8 19l8 4M5 26l8 4M2 33l8 4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M39 19h14l7 7-7 7H39l-7-7 7-7Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle
        cx="46"
        cy="26"
        r="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function BulkIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="trust-svg"
      aria-hidden="true"
    >
      <path
        d="m9 37 13-7 13 7-13 7-13-7Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 37v14l13 7V44M35 37v14l-13 7"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="m27 24 13-7 13 7-13 7-13-7Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M27 24v13M53 24v13"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path
        d="m35 44 13-7 13 7-13 7-13-7Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M35 44v12l13 7 13-7V44"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CustomIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="trust-svg"
      aria-hidden="true"
    >
      <path
        d="M27 7h10l2 7a20 20 0 0 1 5 3l7-2 5 9-5 5a20 20 0 0 1 0 6l5 5-5 9-7-2a20 20 0 0 1-5 3l-2 7H27l-2-7a20 20 0 0 1-5-3l-7 2-5-9 5-5a20 20 0 0 1 0-6l-5-5 5-9 7 2a20 20 0 0 1 5-3l2-7Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <circle
        cx="32"
        cy="32"
        r="9"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <circle cx="32" cy="32" r="4" fill="#f47716" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className="trust-svg"
      aria-hidden="true"
    >
      <path
        d="m8 24 8-8 15 15-8 8L8 24Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="m56 24-8-8-15 15 8 8 15-15Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M23 39c3 3 5 6 9 6 2 0 4-1 6-3l8-8c2-2 2-5 0-7-2-2-5-2-7 0l-5 5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 34l5 5c2 2 5 2 7 0l6-6"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (current) => (current + 1) % heroSlides.length,
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide(
      (current) =>
        (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const goToNext = () => {
    setCurrentSlide(
      (current) => (current + 1) % heroSlides.length,
    );
  };

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      name,
      company,
      phone,
      email,
      requirement,
    } = formData;

    if (
      !name.trim() ||
      !company.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !requirement.trim()
    ) {
      alert(
        "Please fill in all the fields before sending your enquiry.",
      );
      return;
    }

    const message = `*New Enquiry – Shabda Engineering*

*Name:* ${name.trim()}
*Company:* ${company.trim()}
*Phone:* ${phone.trim()}
*Email:* ${email.trim()}

*Requirement:*

${requirement.trim()}

Thank you.`;

    const whatsappNumber = "919717755079";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const slide = heroSlides[currentSlide];

  return (
    <main>
      {/* HEADER */}

      <header className="header">
        <div className="container header-inner">
          <Logo />

          <nav
            className={`navigation ${
              menuOpen ? "navigation-open" : ""
            }`}
          >
            <a
              href="#home"
              className="active"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>

            <a
              href="/products"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </a>

            <a
              href="#industries"
              onClick={() => setMenuOpen(false)}
            >
              Industries
            </a>

            <a
              href="#quality"
              onClick={() => setMenuOpen(false)}
            >
              Quality
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          <a href="#contact" className="header-button">
            Request a Quote
            <Arrow />
          </a>

          <button
            type="button"
            className={`mobile-menu ${
              menuOpen ? "mobile-menu-open" : ""
            }`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* HERO */}

      <section id="home" className="hero">
        <div
          className="hero-image"
          key={currentSlide}
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
        />

        <div className="hero-overlay" />

        <div className="hero-content container">
          <div
            className="hero-copy"
            key={`copy-${currentSlide}`}
          >
            <div className="hero-kicker">
              <span />
              {slide.kicker}
            </div>

            <h1>{slide.title}</h1>

            <p>{slide.description}</p>

            <div className="hero-buttons">
              <a
                href="/products"
                className="primary-button"
              >
                Explore Products
                <Arrow />
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hero-arrow hero-arrow-left"
          aria-label="Previous slide"
          onClick={goToPrevious}
        >
          <span>←</span>
        </button>

        <button
          type="button"
          className="hero-arrow hero-arrow-right"
          aria-label="Next slide"
          onClick={goToNext}
        >
          <span>→</span>
        </button>

        <div className="hero-slider">
          {heroSlides.map((_, index) => (
            <button
              type="button"
              key={index}
              className={
                index === currentSlide ? "selected" : ""
              }
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="hero-meta">
          <div>
            <span>01</span>
            <strong>TRADING &amp; MANUFACTURING</strong>
          </div>

          <div>
            <span>02</span>
            <strong>INDUSTRIAL FASTENERS</strong>
          </div>

          <div>
            <span>03</span>
            <strong>FARIDABAD, HARYANA</strong>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}

      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item">
            <div className="trust-icon">
              <FastenerIcon />
            </div>
            <div>
              <strong>Wide Product Range</strong>
              <span>
                Bolts, nuts, screws, washers &amp; more
              </span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <BulkIcon />
            </div>
            <div>
              <strong>Bulk Supply</strong>
              <span>
                Reliable supply for volume requirements
              </span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <CustomIcon />
            </div>
            <div>
              <strong>Custom Solutions</strong>
              <span>
                Solutions around your specifications
              </span>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <SupportIcon />
            </div>
            <div>
              <strong>Reliable Support</strong>
              <span>
                Focused on long-term business relationships
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="about section">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src="/images/shabda-about.jpg"
              alt="Shabda Engineering"
            />
          </div>

          <div className="about-content">
            <div className="section-kicker">
              <span />
              WHO WE ARE
            </div>

            <h2>
              A dependable partner for
              <em> industrial fastening.</em>
            </h2>

            <p className="large-text">
              Shabda Engineering is a Faridabad-based trading
              and manufacturing company focused on industrial
              fastening solutions.
            </p>

            <p>
              We work with businesses that require dependable
              products, consistent supply and practical
              solutions for their engineering, manufacturing
              and industrial requirements.
            </p>

            <p>
              Our approach is simple — understand the
              requirement, provide the right product and build
              long-term relationships through reliable service.
            </p>

            <a href="#contact" className="text-button">
              Know More About Us
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      <section id="products" className="products section">
        <div className="container">
          <div className="section-heading centered">
            <div className="section-kicker">
              <span />
              OUR PRODUCTS
              <span />
            </div>

            <h2>
              Industrial Fasteners
              <br />
              <em>for Every Application.</em>
            </h2>

            <p>
              A comprehensive range of fastening products for
              diverse engineering and industrial requirements.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <article
                className="product-card"
                key={product.title}
                role="link"
                tabIndex={0}
                onClick={() => {
                  window.location.href = `/products?category=${product.category}`;
                }}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    window.location.href = `/products?category=${product.category}`;
                  }
                }}
              >
                <div className="product-number">
                  0{index + 1}
                </div>

                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                <h3>{product.title}</h3>

                <p>{product.text}</p>

                <a
                  href={`/products?category=${product.category}&enquire=1&product=${encodeURIComponent(
                    product.title,
                  )}`}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                >
                  Enquire Now
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section
        id="industries"
        className="industries section"
      >
        <div className="container industries-grid">
          <div className="industries-intro">
            <div className="section-kicker">
              <span />
              INDUSTRIES WE SERVE
            </div>

            <h2>
              Fasteners for the
              <em> industries that build.</em>
            </h2>

            <p>
              Our fastening solutions support businesses across
              multiple industrial sectors where reliability and
              consistent supply matter.
            </p>

            <a
              href="#contact"
              className="primary-button dark-button"
            >
              Discuss Your Requirement
              <Arrow />
            </a>
          </div>

          <div className="industry-list">
            {industries.map((industry, index) => (
              <a
                href="#contact"
                className="industry-row"
                key={industry}
              >
                <span>0{index + 1}</span>
                <strong>{industry}</strong>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}

      <section id="quality" className="quality section">
        <div className="container">
          <div className="quality-box">
            <div className="quality-copy">
              <div className="section-kicker light-kicker">
                <span />
                WHY SHABDA
              </div>

              <h2>
                Built around
                <br />
                <em>reliability.</em>
              </h2>

              <p>
                Industrial supply is about more than delivering
                a product. It is about consistency,
                communication and trust.
              </p>
            </div>

            <div className="quality-points">
              <div>
                <span>01</span>
                <h3>Consistent Quality</h3>
                <p>
                  Focused on dependable products and consistent
                  performance.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Reliable Supply</h3>
                <p>
                  Supporting regular and bulk industrial
                  requirements.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Competitive Pricing</h3>
                <p>
                  Practical commercial solutions for business
                  requirements.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Customer Focused</h3>
                <p>
                  Understanding requirements and building
                  lasting relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="contact section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="section-kicker">
              <span />
              GET IN TOUCH
            </div>

            <h2>
              Have a fastening
              <br />
              <em>requirement?</em>
            </h2>

            <p>
              Tell us what you need and our team will help you
              find the right fastening solution.
            </p>

            <div className="contact-info">
              <a
                href="tel:+919717755079"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <PhoneIcon />
                </div>

                <div>
                  <span>Call Us</span>
                  <strong>+91 971 775 5079</strong>
                </div>
              </a>

              <a
                href="https://wa.me/919717755079"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon whatsapp">
                  <WhatsAppIcon />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>Chat with us on WhatsApp</strong>
                </div>
              </a>

              <a
                href="mailto:info@shabdaengineering.in"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <MailIcon />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    info@shabdaengineering.in
                  </strong>
                </div>
              </a>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <ClockIcon />
                </div>

                <div>
                  <span>Business Hours</span>
                  <strong>10:00 AM – 6:30 PM</strong>
                </div>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>

              <label>
                Company
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  autoComplete="organization"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  autoComplete="tel"
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
            </div>

            <label>
              Requirement
              <textarea
                name="requirement"
                rows={5}
                value={formData.requirement}
                onChange={handleInputChange}
                placeholder="Tell us about your product, quantity or requirement..."
              />
            </label>

            <button
              type="submit"
              className="primary-button form-submit"
            >
              Send Enquiry
              <Arrow />
            </button>

            <div className="contact-form-note">
              Your enquiry will be sent directly to our
              WhatsApp.
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />

            <p>
              Traders &amp; Manufacturers of Industrial
              Fasteners.
              <br />
              Faridabad, Haryana, India.
            </p>

            <div className="footer-contact-links">
              <a href="tel:+919717755079">
                +91 971 775 5079
              </a>

              <a href="mailto:info@shabdaengineering.in">
                info@shabdaengineering.in
              </a>

              <a
                href="https://wa.me/919717755079"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-column">
            <strong>Explore</strong>

            <a href="#about">About Us</a>
            <a href="/products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#quality">Quality</a>
          </div>

          <div className="footer-column">
            <strong>Contact</strong>

            <a href="#contact">Get a Quote</a>
            <a href="tel:+919717755079">Call Us</a>

            <a
              href="https://wa.me/919717755079"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a href="mailto:info@shabdaengineering.in">
              Email Us
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 Shabda Engineering. All rights reserved.
          </span>

          <span>Powered & Secured by YNRS Business Solutions</span>
        </div>
      </footer>
    </main>
  );
}