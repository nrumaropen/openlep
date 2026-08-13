import Footer from "./Footer";

function Architecture() {
  return (
    <>
      <main className="inner-page">
        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">FRAMEWORK ARCHITECTURE</p>

            <h1>
              Connecting policy,
              <span> implementation, and evaluation.</span>
            </h1>

            <p>
              The OpenLEP Framework provides a structured architecture for
              translating language access requirements into organizational
              implementation, measurable outcomes, and continuous improvement.
            </p>
          </div>
        </section>

        {/* FRAMEWORK ARCHITECTURE */}
        <section className="section">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">HOW THE FRAMEWORK WORKS</p>

              <h2>Five interconnected layers</h2>

              <p>
                OpenLEP connects language access standards with organizational
                processes, structured data, and evaluation through a continuous
                implementation framework.
              </p>
            </div>

            <div className="architecture-flow">

              <div className="architecture-card">
                <span>01</span>
                <h3>Language Access Standards</h3>
                <p>
                  Establishes common terminology, policy requirements, and
                  language access principles that provide a consistent
                  foundation across organizations.
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-card">
                <span>02</span>
                <h3>Compliance Infrastructure</h3>
                <p>
                  Connects standards with governance, organizational
                  responsibilities, operational workflows, and compliance
                  processes.
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-card">
                <span>03</span>
                <h3>Operational Implementation</h3>
                <p>
                  Supports the delivery of language access services while
                  documenting activities, decisions, and implementation across
                  programs and institutions.
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-card">
                <span>04</span>
                <h3>Data Model</h3>
                <p>
                  Organizes language access information into a structured data
                  model that supports interoperability, monitoring, reporting,
                  and evidence-based analysis.
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-card">
                <span>05</span>
                <h3>Monitoring & Evaluation</h3>
                <p>
                  Measures implementation, identifies service gaps, and
                  provides organizations with actionable insights for
                  continuous improvement and accountability.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* DESIGN PRINCIPLE */}
        <section className="section about-highlight">
          <div className="section-container">
            <div className="highlight-box">
              <p className="eyebrow">FRAMEWORK PRINCIPLE</p>

              <h2>
                Connect systems. Standardize implementation. Improve outcomes.
              </h2>

              <p>
                OpenLEP is designed as an open framework rather than a single
                software platform. Organizations can adopt the framework using
                their existing technologies while benefiting from a common
                structure for language access planning, implementation,
                compliance, and evaluation.
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