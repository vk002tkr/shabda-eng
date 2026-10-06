"use client";

import { useMemo, useState, useEffect } from "react";
import SiteFooter from "../components/SiteFooter";
import { useSearchParams } from "next/navigation";

type Product = {
  name: string;
  description: string;
  standards: string[];
  applications: string[];
};

type Category = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "bolts",
    number: "01",
    title: "Bolts",
    subtitle: "Industrial Bolting Solutions",
    description:
      "A wide range of industrial bolts for engineering, fabrication, machinery, structural and general fastening applications.",
    image: "/images/product-bolts.jpg",
    products: [
      {
        name: "Hexagon Head Bolts",
        description:
          "General-purpose hexagonal head bolts designed for reliable mechanical and industrial fastening.",
        standards: ["DIN 931", "DIN 933", "ISO 4014", "ISO 4017"],
        applications: [
          "Engineering",
          "Machinery",
          "Fabrication",
          "Industrial Assembly",
        ],
      },
      {
        name: "Full Thread Hex Bolts",
        description:
          "Fully threaded hexagonal bolts suitable for applications requiring thread engagement along the fastening length.",
        standards: ["DIN 933", "ISO 4017"],
        applications: [
          "General Engineering",
          "Fabrication",
          "Equipment Assembly",
        ],
      },
      {
        name: "Half Thread Hex Bolts",
        description:
          "Partially threaded hex bolts for applications requiring an unthreaded shank through the joint.",
        standards: ["DIN 931", "ISO 4014"],
        applications: [
          "Machinery",
          "Structural Assembly",
          "Engineering",
        ],
      },
      {
        name: "Heavy Hex Bolts",
        description:
          "Heavy-pattern hex bolts for demanding industrial and structural fastening requirements.",
        standards: [
          "ASTM specifications",
          "Project-specific specifications",
        ],
        applications: [
          "Heavy Engineering",
          "Structural Work",
          "Infrastructure",
        ],
      },
      {
        name: "Flange Bolts",
        description:
          "Flanged head bolts providing an integrated bearing surface for fastening assemblies.",
        standards: ["DIN 6921"],
        applications: [
          "Automotive",
          "Machinery",
          "Industrial Assembly",
        ],
      },
      {
        name: "Carriage Bolts",
        description:
          "Rounded-head bolts with square necks for secure fastening in suitable assembly applications.",
        standards: ["DIN 603"],
        applications: [
          "Fabrication",
          "Structures",
          "General Assembly",
        ],
      },
      {
        name: "T-Bolts",
        description:
          "Special-purpose T-slot fastening bolts used where sliding or channel-mounted fastening is required.",
        standards: ["DIN 787", "DIN 186"],
        applications: [
          "Machine Structures",
          "Profiles",
          "Industrial Fixtures",
        ],
      },
      {
        name: "Anchor & Foundation Bolts",
        description:
          "Bolting solutions for anchoring equipment and structural components to foundations and supporting structures.",
        standards: [
          "Project-specific specifications",
          "Application-specific standards",
        ],
        applications: [
          "Construction",
          "Infrastructure",
          "Machine Foundations",
        ],
      },
      {
        name: "U-Bolts",
        description:
          "U-shaped fastening components used for clamping and securing pipes, tubes and other profiles.",
        standards: ["Application-specific"],
        applications: [
          "Piping",
          "Pipe Supports",
          "Fabrication",
          "Infrastructure",
        ],
      },
      {
        name: "Eye & Special Bolts",
        description:
          "Special-purpose bolting solutions designed around specific mounting, attachment or engineering requirements.",
        standards: ["Application-specific"],
        applications: [
          "Engineering",
          "Fabrication",
          "Special Assemblies",
        ],
      },
    ],
  },

  {
    id: "nuts",
    number: "02",
    title: "Nuts",
    subtitle: "Precision Nutting Solutions",
    description:
      "Industrial nuts for secure, dependable and application-specific fastening assemblies.",
    image: "/images/product-nuts.jpg",
    products: [
      {
        name: "Hex Nuts",
        description:
          "Standard hexagonal nuts for general industrial and engineering fastening assemblies.",
        standards: ["DIN 934", "ISO 4032"],
        applications: [
          "Engineering",
          "Machinery",
          "Fabrication",
          "General Assembly",
        ],
      },
      {
        name: "Heavy Hex Nuts",
        description:
          "Heavy-pattern nuts intended for demanding structural and industrial fastening applications.",
        standards: ["ASTM / project specifications"],
        applications: [
          "Structural",
          "Heavy Engineering",
          "Infrastructure",
        ],
      },
      {
        name: "Lock Nuts",
        description:
          "Nuts designed to resist loosening under vibration and operating conditions.",
        standards: [
          "DIN 980",
          "DIN 982",
          "DIN 985",
          "ISO 10511",
        ],
        applications: [
          "Machinery",
          "Automotive",
          "Vibration-Prone Assemblies",
        ],
      },
      {
        name: "Nyloc Nuts",
        description:
          "Prevailing-torque nuts incorporating a nylon locking element for secure assemblies.",
        standards: ["DIN 985"],
        applications: [
          "Automotive",
          "Machinery",
          "General Engineering",
        ],
      },
      {
        name: "Flange Nuts",
        description:
          "Flanged nuts offering an integrated bearing surface for suitable fastening applications.",
        standards: ["DIN 6923", "Application-specific"],
        applications: [
          "Automotive",
          "Machinery",
          "Industrial Assembly",
        ],
      },
      {
        name: "Dome / Cap Nuts",
        description:
          "Domed nuts providing a finished appearance and covering the exposed thread end.",
        standards: ["Application-specific"],
        applications: [
          "Fabrication",
          "Equipment",
          "Finished Assemblies",
        ],
      },
      {
        name: "Coupling Nuts",
        description:
          "Long-form nuts used to join threaded rods or extend threaded connections.",
        standards: ["Application-specific"],
        applications: [
          "Threaded Rod Assemblies",
          "Construction",
          "Installation",
        ],
      },
      {
        name: "Special & Custom Nuts",
        description:
          "Requirement-specific nut designs for non-standard industrial and engineering applications.",
        standards: ["Drawing / application-specific"],
        applications: [
          "OEM",
          "Special Machinery",
          "Custom Engineering",
        ],
      },
    ],
  },

  {
    id: "screws",
    number: "03",
    title: "Screws",
    subtitle: "Engineering Screw Solutions",
    description:
      "Versatile industrial screws for engineering, fabrication, machinery and specialized fastening applications.",
    image: "/images/product-screws.jpg",
    products: [
      {
        name: "Socket Head Cap Screws",
        description:
          "Compact high-strength screw design with an internal hex drive for engineering assemblies.",
        standards: ["DIN 912", "ISO 4762"],
        applications: [
          "Machinery",
          "Engineering",
          "Precision Assemblies",
        ],
      },
      {
        name: "Set Screws / Grub Screws",
        description:
          "Headless screws designed to secure components through direct threaded contact.",
        standards: [
          "DIN 913",
          "DIN 914",
          "DIN 915",
          "DIN 916",
        ],
        applications: [
          "Shaft Assemblies",
          "Machinery",
          "Mechanical Components",
        ],
      },
      {
        name: "Machine Screws",
        description:
          "Machine screws for threaded-hole fastening in equipment and mechanical assemblies.",
        standards: ["Application-specific"],
        applications: [
          "Equipment",
          "Electrical",
          "Engineering",
        ],
      },
      {
        name: "Self-Tapping Screws",
        description:
          "Screws designed to form or cut their mating thread during installation.",
        standards: ["Application-specific"],
        applications: [
          "Sheet Metal",
          "Fabrication",
          "General Assembly",
        ],
      },
      {
        name: "Self-Drilling Screws",
        description:
          "Drilling-point screws suitable for fastening applications where pre-drilling may not be required.",
        standards: ["Application-specific"],
        applications: [
          "Sheet Metal",
          "Fabrication",
          "Construction",
        ],
      },
      {
        name: "Countersunk Screws",
        description:
          "Flush-head screws designed for applications where the head needs to sit level with the surface.",
        standards: ["Application-specific"],
        applications: [
          "Fabrication",
          "Equipment",
          "Finished Assemblies",
        ],
      },
      {
        name: "Button Head Screws",
        description:
          "Low-profile rounded-head screws for applications requiring a compact finished appearance.",
        standards: ["Application-specific"],
        applications: [
          "Machinery",
          "Equipment",
          "Engineering",
        ],
      },
    ],
  },

  {
    id: "washers",
    number: "04",
    title: "Washers",
    subtitle: "Load Distribution & Locking",
    description:
      "Washers for load distribution, surface protection and locking requirements across industrial fastening assemblies.",
    image: "/images/product-washers.jpg",
    products: [
      {
        name: "Plain Washers",
        description:
          "General-purpose flat washers used to distribute load beneath fastening components.",
        standards: ["DIN 125", "ISO 7089"],
        applications: [
          "General Engineering",
          "Machinery",
          "Fabrication",
        ],
      },
      {
        name: "Flat Washers",
        description:
          "Flat bearing washers for improving load distribution and protecting mating surfaces.",
        standards: ["Application-specific"],
        applications: [
          "Assembly",
          "Construction",
          "Industrial Maintenance",
        ],
      },
      {
        name: "Spring Washers",
        description:
          "Spring-type washers used in suitable assemblies where resistance to loosening is required.",
        standards: ["DIN 127", "Application-specific"],
        applications: [
          "Machinery",
          "Engineering",
          "General Assembly",
        ],
      },
      {
        name: "Lock Washers",
        description:
          "Washer solutions designed to improve fastening security in appropriate applications.",
        standards: ["Application-specific"],
        applications: [
          "Machinery",
          "Equipment",
          "Industrial Assembly",
        ],
      },
      {
        name: "Fender Washers",
        description:
          "Large-diameter washers designed to provide a wider load-bearing surface.",
        standards: ["Application-specific"],
        applications: [
          "Sheet Materials",
          "Fabrication",
          "General Engineering",
        ],
      },
      {
        name: "Serrated & Tooth Washers",
        description:
          "Locking washer designs with serrated or toothed surfaces for suitable fastening applications.",
        standards: ["Application-specific"],
        applications: [
          "Electrical",
          "Machinery",
          "Equipment",
        ],
      },
      {
        name: "Special Washers",
        description:
          "Application-specific washer designs manufactured or supplied according to particular requirements.",
        standards: ["Drawing / application-specific"],
        applications: [
          "OEM",
          "Special Machinery",
          "Custom Assemblies",
        ],
      },
    ],
  },

  {
    id: "studs",
    number: "05",
    title: "Studs & Threaded Rods",
    subtitle: "Threaded Connection Systems",
    description:
      "Threaded rods, stud bolts and related threaded fastening components for structural, mechanical and fabrication requirements.",
    image: "/images/product-threaded-rods.jpg",
    products: [
      {
        name: "Fully Threaded Rods",
        description:
          "Continuous-thread rods for fastening, suspension, support and assembly requirements.",
        standards: ["Application-specific"],
        applications: [
          "Construction",
          "HVAC",
          "Electrical Supports",
          "Fabrication",
        ],
      },
      {
        name: "Stud Bolts",
        description:
          "Stud-type threaded fasteners used with nuts for demanding mechanical and industrial connections.",
        standards: [
          "ASME B16.5 / B18.2.2",
          "ASTM A193 / A194",
          "BS 4882",
        ],
        applications: [
          "Industrial Piping",
          "Flanges",
          "Heavy Engineering",
        ],
      },
      {
        name: "Double-End Studs",
        description:
          "Studs with threaded ends and an intermediate unthreaded section for specific assembly requirements.",
        standards: ["Application-specific"],
        applications: [
          "Machinery",
          "Equipment",
          "Mechanical Assemblies",
        ],
      },
      {
        name: "Fully Threaded Studs",
        description:
          "Threaded stud components designed for applications requiring threaded engagement along the required length.",
        standards: ["Application-specific"],
        applications: [
          "Engineering",
          "Fabrication",
          "Industrial Assembly",
        ],
      },
      {
        name: "High Tensile Studs",
        description:
          "High-strength stud solutions for demanding industrial fastening requirements.",
        standards: [
          "Project-specific",
          "Application-specific",
        ],
        applications: [
          "Heavy Engineering",
          "Industrial Equipment",
          "Structural Applications",
        ],
      },
      {
        name: "Special Studs",
        description:
          "Requirement-specific stud designs for specialized machinery and engineering applications.",
        standards: ["Drawing / application-specific"],
        applications: [
          "OEM",
          "Special Machinery",
          "Custom Engineering",
        ],
      },
    ],
  },

  {
    id: "custom",
    number: "06",
    title: "Custom Fasteners",
    subtitle: "Requirement-Specific Solutions",
    description:
      "Custom fastening components developed around drawings, dimensions, materials and application requirements.",
    image: "/images/product-custom-fasteners.jpg",
    products: [
      {
        name: "Custom Bolts",
        description:
          "Special bolt configurations developed around specific dimensions, threads or application requirements.",
        standards: ["Drawing / application-specific"],
        applications: [
          "OEM",
          "Machinery",
          "Special Engineering",
        ],
      },
      {
        name: "Custom Nuts",
        description:
          "Non-standard nut designs supplied according to drawings or defined application requirements.",
        standards: ["Drawing / application-specific"],
        applications: [
          "OEM",
          "Industrial Machinery",
          "Special Assemblies",
        ],
      },
      {
        name: "Custom Screws",
        description:
          "Special screw geometries and configurations for application-specific fastening requirements.",
        standards: ["Drawing / application-specific"],
        applications: [
          "OEM",
          "Equipment",
          "Precision Engineering",
        ],
      },
      {
        name: "Custom Washers",
        description:
          "Special washer dimensions and profiles for specific load distribution or assembly requirements.",
        standards: ["Drawing / application-specific"],
        applications: [
          "Machinery",
          "Fabrication",
          "OEM",
        ],
      },
      {
        name: "Special Studs",
        description:
          "Special-purpose stud components produced or sourced around defined technical requirements.",
        standards: ["Drawing / application-specific"],
        applications: [
          "Heavy Engineering",
          "Machinery",
          "Industrial Equipment",
        ],
      },
      {
        name: "Drawing-Based Fasteners",
        description:
          "Fasteners based on customer drawings, specifications, dimensions and application requirements.",
        standards: ["Customer drawing / specification"],
        applications: [
          "OEM",
          "Industrial Manufacturing",
          "Special Projects",
        ],
      },
    ],
  },
];

function Arrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="products-page-arrow"
    >
      <path
        d="M3 10h13"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m10.5 4.5 5.5 5.5-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const requestedCategory = searchParams.get("category");

  const validInitialCategory = categories.some(
    (item) => item.id === requestedCategory,
  )
    ? requestedCategory!
    : "bolts";

  const [activeCategory, setActiveCategory] =
    useState(validInitialCategory);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    if (
      categoryFromUrl &&
      categories.some(
        (item) => item.id === categoryFromUrl,
      )
    ) {
      setActiveCategory(categoryFromUrl);
      setSearch("");
    }
  }, [searchParams]);

  const category =
    categories.find(
      (item) => item.id === activeCategory,
    ) ?? categories[0];

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return category.products;
    }

    return category.products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.standards.some((item) =>
          item.toLowerCase().includes(query),
        ) ||
        product.applications.some((item) =>
          item.toLowerCase().includes(query),
        )
      );
    });
  }, [category, search]);

  const selectCategory = (id: string) => {
    setActiveCategory(id);
    setSearch("");

    window.history.replaceState(
      null,
      "",
      `/products?category=${id}`,
    );

    window.setTimeout(() => {
      document
        .getElementById("catalogue-products")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <main className="products-page">
      <header className="products-page-header">
        <div className="products-page-container products-page-header-inner">
          <a
            href="/"
            className="products-page-logo"
            aria-label="Shabda Engineering"
          >
            <img
              src="/images/shabda-logo-white.png"
              alt="Shabda Engineering"
            />
          </a>

          <nav className="products-page-nav">
            <a href="/">Home</a>
            <a href="/#about">About Us</a>

            <a
              href="/products"
              className="products-page-nav-active"
            >
              Products
            </a>

            <a href="/#industries">Industries</a>
            <a href="/#quality">Quality</a>
            <a href="/#contact">Contact</a>
          </nav>

          <a
            href="/#contact"
            className="products-page-header-button"
          >
            Request a Quote
            <Arrow />
          </a>
        </div>
      </header>

      <section className="products-page-hero">
        <div className="products-page-hero-overlay" />

        <div className="products-page-container products-page-hero-content">
          <div className="products-page-kicker">
            <span />
            Industrial Product Catalogue
          </div>

          <h1>
            Industrial Fasteners
            <br />
            <em>Built for Industry.</em>
          </h1>

          <p>
            Explore Shabda Engineering&apos;s range of industrial
            fastening solutions for engineering, manufacturing,
            fabrication, construction and other demanding
            applications.
          </p>

          <div className="products-page-hero-actions">
            <a
              href="#catalogue"
              className="products-page-primary"
            >
              Explore Catalogue
              <Arrow />
            </a>

            <a
              href="/#contact"
              className="products-page-secondary"
            >
              Discuss Your Requirement
              <Arrow />
            </a>
          </div>
        </div>

        <div className="products-page-hero-meta">
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

      <section
        id="catalogue"
        className="products-page-catalogue"
      >
        <div className="products-page-container">
          <div className="products-page-heading">
            <div className="products-page-kicker dark">
              <span />
              Product Categories
            </div>

            <h2>
              Find the right
              <br />
              <em>fastening solution.</em>
            </h2>

            <p>
              Browse our product categories and explore the
              fastening solutions available for industrial and
              engineering requirements.
            </p>
          </div>

          <div className="products-page-category-layout">
            <aside className="products-page-sidebar">
              <div className="products-page-sidebar-label">
                CATEGORIES
              </div>

              {categories.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={
                    item.id === activeCategory
                      ? "products-page-category active"
                      : "products-page-category"
                  }
                  onClick={() => selectCategory(item.id)}
                >
                  <span>{item.number}</span>

                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </div>

                  <Arrow />
                </button>
              ))}
            </aside>

            <div className="products-page-feature">
              <div className="products-page-feature-image">
                <img
                  src={category.image}
                  alt={category.title}
                />

                <div className="products-page-feature-number">
                  {category.number}
                </div>
              </div>

              <div className="products-page-feature-content">
                <div className="products-page-feature-kicker">
                  {category.subtitle}
                </div>

                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <div className="products-page-feature-footer">
                  <span>
                    {category.products.length} product
                    {category.products.length !== 1
                      ? "s"
                      : ""}{" "}
                    listed
                  </span>

                  <a href="/#contact">
                    Enquire About This Category
                    <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="catalogue-products"
        className="products-page-products"
      >
        <div className="products-page-container">
          <div className="products-page-products-top">
            <div>
              <div className="products-page-kicker dark">
                <span />
                {category.number} / {category.title}
              </div>

              <h2>{category.subtitle}</h2>
            </div>

            <div className="products-page-search">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="m16 16 5 5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search this category..."
                aria-label="Search products"
              />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-page-product-grid">
              {filteredProducts.map((product, index) => (
                <article
                  key={product.name}
                  className="products-page-product-card"
                >
                  <div className="products-page-product-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="products-page-product-line" />

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="products-page-product-section">
                    <span>Standards</span>

                    <div className="products-page-tags">
                      {product.standards.map((standard) => (
                        <span key={standard}>
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="products-page-product-section">
                    <span>Applications</span>

                    <div className="products-page-application-list">
                      {product.applications.map(
                        (application) => (
                          <span key={application}>
                            {application}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <a
                    href={`/?product=${encodeURIComponent(
                      product.name,
                    )}#contact`}
                    className="products-page-product-enquire"
                  >
                    Enquire Now
                    <Arrow />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="products-page-no-results">
              <strong>No matching products found.</strong>

              <span>
                Try another product name, standard or
                application.
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="products-page-cta">
        <div className="products-page-container">
          <div className="products-page-cta-box">
            <div>
              <div className="products-page-kicker light">
                <span />
                Have a Specific Requirement?
              </div>

              <h2>
                Tell us what you
                <br />
                <em>need.</em>
              </h2>

              <p>
                Share your product, size, quantity or technical
                requirement with our team and we&apos;ll help
                identify the right fastening solution.
              </p>
            </div>

            <a
              href="/#contact"
              className="products-page-primary"
            >
              Get a Quote
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer className="products-page-footer">
        <div className="products-page-container products-page-footer-grid">
          <div>
            <a href="/" className="products-page-logo">
              <img
                src="/images/shabda-logo-white.png"
                alt="Shabda Engineering"
              />
            </a>

            <p>
              Traders &amp; Manufacturers of Industrial
              Fasteners.
              <br />
              Faridabad, Haryana, India.
            </p>
          </div>

          <div className="products-page-footer-column">
            <strong>Explore</strong>

            <a href="/">Home</a>
            <a href="/#about">About Us</a>
            <a href="/products">Products</a>
            <a href="/#industries">Industries</a>
          </div>

          <div className="products-page-footer-column">
            <strong>Contact</strong>

            <a href="/#contact">Get a Quote</a>

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

        <div className="products-page-footer-bottom">
          <div className="products-page-container">
            <span>
              © 2026 Shabda Engineering. All rights reserved.
            </span>

            <span>
              Industrial Fastening Solutions
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}