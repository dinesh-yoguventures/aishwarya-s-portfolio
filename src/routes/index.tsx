import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Check, Copy, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import portraitUrl from "@/assets/aishwarya-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aishwarya S — Senior Frontend Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Aishwarya S, a senior frontend engineer specializing in Angular architecture, enterprise portals, and performance.",
      },
      { property: "og:title", content: "Aishwarya S — Senior Frontend Engineer" },
      {
        property: "og:description",
        content:
          "Enterprise frontend architecture, Angular modernization, and high-performance web systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    number: "I·I",
    title: "NextBI DTE — FPL, USA",
    subtitle: "Industrial BESS & Grid Performance Analytics Console",
    period: "2021 — Present",
    summary:
      "Architected Angular dashboards for Battery Energy Storage Systems, enabling real-time visualization of solar and grid performance metrics.",
    metrics: [
      ["17", "Angular"],
      ["BESS", "Domain"],
      ["Live", "Visualization"],
    ],
    tags: ["Angular 17", "BESS Analytics", "REST APIs", "Site Tag Mapping"],
    challenge:
      "Operational teams needed a dependable view of solar, grid, and battery-storage performance across individual sites.",
    contribution:
      "I architected the Angular dashboard experience, integrated backend data, investigated data-quality issues, and implemented site-level tag mappings.",
    implementation: [
      "Angular 17 dashboard modules",
      "RESTful service integration",
      "Real-time performance visualization",
      "Site-level telemetry tag mapping",
    ],
    outcome:
      "Delivered clearer operational visibility while resolving data-quality issues that affected site-level reporting.",
    flow: ["SITE DATA", "REST SERVICES", "ANGULAR DASHBOARD"],
  },
  {
    number: "I·II",
    title: "Anti-Money Laundering Platform",
    subtitle: "Rule-Based Banking Surveillance & FATF Compliance",
    period: "2019 — 2020",
    summary:
      "Built configurable rule-based surveillance and alerting capabilities for banking compliance, with advanced dashboards and reporting modules.",
    metrics: [
      ["10", "Angular"],
      ["FATF", "Context"],
      ["Rules", "Configurable"],
    ],
    tags: ["Angular 10", "RegTech", "Rule Engine", "Audit Trails"],
    challenge:
      "Banking teams required configurable surveillance workflows that could support regulatory monitoring, alerts, and reporting.",
    contribution:
      "I led planning, estimation, frontend development, testing, and delivery for the platform’s surveillance and reporting interfaces.",
    implementation: [
      "Configurable rule-based screens",
      "Surveillance and alert workflows",
      "Compliance dashboards",
      "Reporting modules",
    ],
    outcome:
      "Supported FATF-focused compliance work through structured monitoring, investigation, and reporting experiences.",
    flow: ["RULE CONFIGURATION", "ALERT WORKFLOW", "COMPLIANCE REPORTING"],
  },
  {
    number: "I·III",
    title: "Basel II / III Compliance",
    subtitle: "Risk-Weighted Asset Dashboards",
    period: "2019 — 2020",
    summary:
      "Delivered enterprise RegTech interfaces for Basel II/III compliance, including business-rule engines and risk-weighted asset dashboards.",
    metrics: [
      ["8", "Angular"],
      ["II / III", "Basel"],
      ["RWA", "Dashboards"],
    ],
    tags: ["Angular 8", "JAX-RS", "Risk Analytics", "Jasmine"],
    challenge:
      "The product needed to translate complex banking rules into usable interfaces for capital and risk-weighted asset workflows.",
    contribution:
      "I implemented frontend modules and coordinated with cross-functional teams to maintain quality under strict delivery timelines.",
    implementation: [
      "Business-rule interfaces",
      "Risk-weighted asset dashboards",
      "JAX-RS service integration",
      "Frontend testing with Jasmine",
    ],
    outcome:
      "Delivered the required Basel II/III compliance capabilities within the project’s regulated banking environment.",
    flow: ["BUSINESS RULES", "RISK CALCULATION DATA", "COMPLIANCE DASHBOARD"],
  },
];

const experience = [
  {
    period: "FEB 2021 — PRESENT",
    role: "Application Developer · Senior Frontend Engineer",
    company: "IBM India Pvt Ltd.",
    body: "Lead frontend architecture, Angular modernization, performance programs, reviews, estimations, and release coordination for global enterprise portals.",
  },
  {
    period: "MAY 2018 — DEC 2020",
    role: "System Analyst · Frontend Engineer",
    company: "Sensiple Software Solutions",
    body: "Owned end-to-end delivery for regulated banking products, translating complex requirements into robust Angular interfaces and mentoring junior engineers.",
  },
  {
    period: "2014 — 2018",
    role: "B.Tech · Information Technology",
    company: "Anna University",
    body: "Built a foundation in software engineering, data structures, algorithms, databases, and web application architecture.",
  },
];

const skillGroups = [
  {
    label: "Core frontend",
    skills: ["Angular 8–17+", "TypeScript", "JavaScript ES6+", "HTML5 & CSS3"],
  },
  {
    label: "Platforms & UI",
    skills: ["Liferay DXP", "Material UI", "Bootstrap", "Reusable components"],
  },
  { label: "Integration", skills: ["RESTful APIs", "JAX-RS", "JSON & XML", "Microservices"] },
  {
    label: "Quality & delivery",
    skills: ["Jasmine & Karma", "Git workflows", "Agile / Scrum", "Release coordination"],
  },
];

const performanceStages = [
  {
    index: "01",
    title: "Modernize the foundation",
    metric: "8 → 17+",
    label: "Angular evolution",
    summary: "Upgrade the framework deliberately while protecting business-critical workflows.",
    details: [
      "Incremental framework upgrades",
      "Modular application boundaries",
      "Reusable UI foundations",
    ],
  },
  {
    index: "02",
    title: "Render with intent",
    metric: "25–30%",
    label: "Page-load improvement",
    summary:
      "Remove avoidable rendering and loading work so dense enterprise screens respond faster.",
    details: ["Deferred feature loading", "Lean component updates", "Focused bundle optimization"],
  },
  {
    index: "03",
    title: "Make reliability visible",
    metric: "50K+",
    label: "Portal users supported",
    summary: "Pair resilient integrations with testing and release discipline at enterprise scale.",
    details: [
      "REST integration hardening",
      "Unit and integration testing",
      "Cross-browser delivery",
    ],
  },
];

const deliveryPractices = [
  {
    index: "01",
    title: "Design & build",
    body: "Translate functional and technical specifications into structured, maintainable Angular modules and reusable interface components.",
  },
  {
    index: "02",
    title: "Connect systems",
    body: "Integrate RESTful services for secure data exchange, real-time presentation, and dependable user interactions.",
  },
  {
    index: "03",
    title: "Test & refine",
    body: "Run unit and integration testing, debug defects, refactor code, and tune application performance before release.",
  },
  {
    index: "04",
    title: "Deliver together",
    body: "Contribute to design discussions, technical estimates, code reviews, version control, deployment, and production support.",
  },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activePerformance, setActivePerformance] = useState(1);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setBookingOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("aishusara52@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  const activeStage = performanceStages[activePerformance];
  if (!activeStage) return null;

  return (
    <div className="portfolio-shell" id="top">
      <div className="drafting-canvas" aria-hidden="true">
        <span className="datum datum-a" />
        <span className="datum datum-b" />
        <span className="datum datum-c" />
        <span className="sheet-code">N° 04 — 2026</span>
      </div>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="wordmark" href="#top">
            <strong>Aishwarya S</strong>
            <small>Frontend Engineer · Bangalore</small>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">
             Expertise
            </a>
            <a href="#projects">
             Work
            </a>
            <a href="#experience">
              Experience
            </a>
            <a href="#practice">
              Practice
            </a>
            <a href="#contact">
              Contact
            </a>
          </nav>
          <div className="nav-actions">
            <button
              className="nav-search desktop-only"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              title="Search"
            >
              <Search size={15} />
              <span>⌘K</span>
            </button>
            <button className="nav-contact desktop-only" onClick={() => setBookingOpen(true)}>
              Let’s talk <ArrowUpRight size={14} />
            </button>
            <button
              className="icon-action mobile-only"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              02 · Expertise
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              03 · Work
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              04 · Experience
            </a>
            <a href="#practice" onClick={() => setMenuOpen(false)}>
              04 · Delivery practice
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
             · Contact
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero section-wrap">
          <div className="hero-copy rise">
            <div className="eyebrow">
              <span /> SENIOR FRONTEND ENGINEER
            </div>
            <h1>
              <span className="hero-name">Aishwarya S</span>
              <span className="hero-statement">
                Frontend engineering,
                <br />
                drawn to a hairline.
              </span>
            </h1>
            <p>
              I’m Aishwarya S — a Senior Frontend Engineer with 7+ years building high-performance
              enterprise systems across Energy, Banking and RegTech.
            </p>
            <div className="hero-actions">
              <a className="outline-action" href="#projects">
                <ArrowDownRight size={16} /> View systems &amp; architecture
              </a>
              <button className="link-action" onClick={() => setBookingOpen(true)}>
                Book a call <ArrowUpRight size={15} />
              </button>
            </div>
            <div className="hero-metrics">
              <div>
                <strong>7+</strong>
                <span>Years enterprise</span>
              </div>
              <div>
                <strong>50K+</strong>
                <span>Global users</span>
              </div>
              <div>
                <strong>25–30%</strong>
                <span>Load optimization</span>
              </div>
            </div>
          </div>
          <div className="portrait-block rise delay-one">
            <div className="portrait-frame">
              <img src={portraitUrl} alt="Aishwarya S, Senior Frontend Engineer" />
            </div>
            <div className="portrait-meta">
              <span>BANGALORE · INDIA</span>
              <span>ANGULAR 17+</span>
            </div>
          </div>
        </section>

        <section className="numbered-section" id="about">
          <div className="section-wrap about-wrap">
            <div className="split-section about-split">
              <header className="section-index scroll-reveal">
                <span>02</span>
                <h2>Expertise</h2>
                <i />
              </header>
              <div className="expertise-list scroll-reveal reveal-delay-1">
                <article>
                  <h3>Frontend architecture</h3>
                  <p>
                    Scalable Angular applications, component governance, reactive state, RESTful
                    integrations, and maintainable enterprise systems.
                  </p>
                </article>
                <article>
                  <h3>Performance engineering</h3>
                  <p>
                    OnPush detection, deferred loading, bundle optimization, and rendering
                    strategies delivering measurable speed improvements.
                  </p>
                </article>
                <article>
                  <h3>Technical leadership</h3>
                  <p>
                    Frontend SPOC delivery, code reviews, estimations, release coordination,
                    mentoring, and cross-functional alignment.
                  </p>
                </article>
              </div>
            </div>

            <div className="skills-matrix-wrap scroll-reveal reveal-delay-2">
              <div className="skills-matrix" aria-label="Technical skills">
                {skillGroups.map((group) => (
                  <article key={group.label}>
                    <h3>{group.label}</h3>
                    <ul>
                      {group.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="metric-grid scroll-reveal reveal-delay-3">
              <div>
                <strong>25–30%</strong>
                <span>Page load gain</span>
              </div>
              <div>
                <strong>50K+</strong>
                <span>Portal users</span>
              </div>
              <div>
                <strong>17+</strong>
                <span>Angular</span>
              </div>
              <div>
                <strong>7+</strong>
                <span>Years experience</span>
              </div>
            </div>
          </div>
        </section>

        <section className="numbered-section performance" id="performance-lab">
          <div className="section-wrap">
            <div className="performance-heading scroll-reveal">
              <div>
                <div className="eyebrow">
                  <span /> PERFORMANCE LAB
                </div>
                <h2>
                  Performance is a<br />
                  system, not a score.
                </h2>
              </div>
              <p>A practical modernization blueprint shaped by enterprise Angular delivery.</p>
            </div>
            <div className="performance-console scroll-reveal reveal-delay-1">
              <div className="performance-rail" role="tablist" aria-label="Performance approach">
                {performanceStages.map((stage, index) => (
                  <button
                    key={stage.index}
                    className={activePerformance === index ? "active" : ""}
                    onClick={() => setActivePerformance(index)}
                    role="tab"
                    aria-selected={activePerformance === index}
                  >
                    <span>{stage.index}</span>
                    <strong>{stage.title}</strong>
                    <ArrowUpRight size={15} />
                  </button>
                ))}
              </div>
              <article className="performance-detail" aria-live="polite">
                <div className="performance-readout">
                  <small>{activeStage.label}</small>
                  <strong>{activeStage.metric}</strong>
                </div>
                <div className="performance-copy">
                  <p>{activeStage.summary}</p>
                  <ul>
                    {activeStage.details.map((detail) => (
                      <li key={detail}>
                        <Check size={14} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="performance-signal" aria-hidden="true">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((bar) => (
                    <i key={bar} style={{ "--bar": bar } as React.CSSProperties} />
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="numbered-section" id="projects">
          <div className="section-wrap projects-section-wrap">
            <div className="split-section projects-header-split">
              <header className="section-index scroll-reveal">
                <span>03</span>
                <h2>Work</h2>
                <i />
              </header>
              <div className="projects-heading-right scroll-reveal reveal-delay-1">
                <div className="eyebrow">
                  <span /> PRODUCTION SYSTEMS
                </div>
                <h2>
                  Featured Systems &amp;<br />
                  Architecture.
                </h2>
                <p>
                  Mission-critical enterprise platforms delivered across Energy telemetry, Banking surveillance, and RegTech compliance.
                </p>
              </div>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className="project-row scroll-reveal" key={project.title}>
                  <div className="project-visual" aria-hidden="true">
                    <span>{project.number}</span>
                    <div className={`diagram diagram-${index + 1}`}>
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                  <div className="project-copy">
                    <div className="project-kicker">
                      {project.number} — {project.period}
                    </div>
                    <h3>{project.title}</h3>
                    <p className="subtitle">{project.subtitle}</p>
                    <p>{project.summary}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <dl>
                      {project.metrics.map(([value, label]) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <button className="inspect-action" onClick={() => setSelectedProject(project)}>
                      Inspect architecture <ArrowUpRight size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="numbered-section" id="experience">
          <div className="section-wrap split-section">
            <header className="section-index scroll-reveal">
              <span>04</span>
              <h2>Experience</h2>
              <i />
            </header>
            <ol className="timeline scroll-reveal reveal-delay-1">
              {experience.map((item, index) => (
                <li key={item.period}>
                  <span className={index === 0 ? "active-dot" : ""} />
                  <small>{item.period}</small>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="numbered-section practice-section" id="practice">
          <div className="section-wrap practice-wrap">
            <header className="section-index scroll-reveal">
              <span>05</span>
              <h2>Delivery practice</h2>
              <i />
            </header>
            <div className="practice-content">
              <div className="practice-intro scroll-reveal reveal-delay-1">
                <div className="eyebrow">
                  <span /> FROM SPECIFICATION TO SUPPORT
                </div>
                <h2>
                  Engineering discipline
                  <br />
                  across the full lifecycle.
                </h2>
              </div>
              <div className="practice-ledger">
                {deliveryPractices.map((item, idx) => (
                  <article key={item.index} className={`scroll-reveal reveal-delay-${(idx % 4) + 1}`}>
                    <span>{item.index}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-grid scroll-reveal">
            <div>
              <div className="eyebrow">
                <span /> CONTACT
              </div>
              <h2>
                Let’s draw the
                <br />
                next line together.
              </h2>
            </div>
            <div className="contact-actions">
              <button className="email-button" onClick={copyEmail}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span>{copied ? "Email copied" : "aishusara52@gmail.com"}</span>
              </button>
              <p>Available for Senior Frontend, Staff SDE, and Lead Angular opportunities.</p>
              <div>
                <button className="solid-action" onClick={() => setBookingOpen(true)}>
                  Book a call
                </button>
                <a
                  className="outline-action"
                  href="https://www.linkedin.com/in/aishwarya-saravanan-sde/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
          <footer>
            <span>© 2026 AISHWARYA S</span>
            <span>LIBRE BASKERVILLE × IBM PLEX SANS</span>
            <a href="#top">BACK TO TOP ↑</a>
          </footer>
        </section>
      </main>

      {selectedProject && (
        <div className="overlay" role="presentation" onMouseDown={() => setSelectedProject(null)}>
          <aside
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} project details`}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="close-action"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <X size={19} />
            </button>
            <small>
              CASE STUDY · {selectedProject.number} · {selectedProject.period}
            </small>
            <h2>{selectedProject.title}</h2>
            <div className="drawer-section">
              <h3>Challenge</h3>
              <p>{selectedProject.challenge}</p>
            </div>
            <div className="drawer-section">
              <h3>My contribution</h3>
              <p>{selectedProject.contribution}</p>
            </div>
            <div className="drawer-section">
              <h3>Implementation</h3>
              <ul>
                {selectedProject.implementation.map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="drawer-section outcome">
              <h3>Outcome</h3>
              <p>{selectedProject.outcome}</p>
            </div>
            <div className="spec-flow">
              {selectedProject.flow.map((step, index) => (
                <div key={step}>
                  <span>{step}</span>
                  {index < selectedProject.flow.length - 1 && <i>↓</i>}
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
      {bookingOpen && (
        <div
          className="overlay centered"
          role="presentation"
          onMouseDown={() => setBookingOpen(false)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Book a call"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="close-action"
              onClick={() => setBookingOpen(false)}
              aria-label="Close"
            >
              <X size={19} />
            </button>
            <small>DIRECT CONTACT</small>
            <h2>Start a conversation.</h2>
            <p>
              Share the opportunity or architecture challenge and I’ll respond directly.
            </p>
            <a
              className="solid-action"
              href="mailto:aishusara52@gmail.com?subject=Frontend%20opportunity"
            >
              Email me <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
      {searchOpen && (
        <div
          className="overlay search-overlay"
          role="presentation"
          onMouseDown={() => setSearchOpen(false)}
        >
          <div
            className="search-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Quick navigation"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="search-head">
              <Search size={18} />
              <span>Navigate portfolio</span>
              <kbd>ESC</kbd>
            </div>
            {[
              ["Expertise", "#about"],
              ["Performance Lab", "#performance-lab"],
              ["Featured Systems & Architecture", "#projects"],
              ["Experience", "#experience"],
              ["Delivery Practice", "#practice"],
              ["Contact", "#contact"],
            ].map(([label, href], index) => (
              <a href={href} key={href} onClick={() => setSearchOpen(false)}>
                <span>0{index + 1}</span>
                {label}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
