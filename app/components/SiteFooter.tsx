"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo" aria-label="Shabda Engineering">
            <img
              src="/images/shabda-logo-white.png"
              alt="Shabda Engineering"
              className="logo-image"
            />
          </Link>

          <p>
            Traders &amp; Manufacturers of Industrial Fasteners.
            <br />
            Faridabad, Haryana, India.
          </p>
        </div>

        <div className="footer-column">
          <strong>Explore</strong>

          <Link href="/">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/#industries">Industries</Link>
          <Link href="/#quality">Quality</Link>
        </div>

        <div className="footer-column">
          <strong>Contact</strong>

          <Link href="/#contact">Get a Quote</Link>

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

      <div className="container footer-bottom">
        <span>
          © 2026 Shabda Engineering. All rights reserved.
        </span>

        <span>Powered & Secured by YNRS Business Solutions</span>
      </div>
    </footer>
  );
}