import Footer from "./Footer";

function Architecture() {
  return (
    <>

      <main className="inner-page">
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">OPENLEP ARCHITECTURE</p>

            <h1>
              From language-access needs to
              <span> actionable intelligence.</span>
            </h1>

            <p>
              OpenLEP proposes a layered architecture that connects language
              access data, workflows, analytics, and decision-support tools.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">SYSTEM ARCHITECTURE</p>

              <h2>How the OpenLEP framework works</h2>

              <p>
                The proposed architecture connects operational language-access
                activities with structured data, analytical processes, and
                user-facing applications.
              </p>
            </div>

            <div className="architecture-flow">
              <div className="architecture-card">
                <span>01</span>
                <h3>Language Access Needs</h3>
                <p>
                  Language requests, service needs, language preferences, and
                  institutional demand enter the system.
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-card">
                <span>02</span>
                <h3>Data Layer</h3>
                <p>
                  Structured data models organize requests, services,
                  institutions, languages, and performance indicators.
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-card">
                <span>03</span>
                <h3>OpenLEP Core</h3>
                <p>
                  APIs, workflows, validation rules, and interoperability
                  components connect the underlying language-access systems.
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-card">
                <span>04</span>
                <h3>Analytics & AI</h3>
                <p>
                  Analytical and AI-assisted processes identify trends,
                  service gaps, demand patterns, and potential areas for
                  intervention.
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-card">
                <span>05</span>
                <h3>Applications</h3>
                <p>
                  Dashboards, reports, alerts, and decision-support tools
                  present information to organizations and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-highlight">
          <div className="section-container">
            <div className="highlight-box">
              <p className="eyebrow">DESIGN PRINCIPLE</p>

              <h2>
                Connect existing systems instead of replacing them.
              </h2>

              <p>
                OpenLEP is envisioned as an interoperable framework. The goal
                is to provide common structures and interfaces that can help
                organizations connect existing language-access processes and
                technologies rather than requiring a single system or vendor.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Architecture;
