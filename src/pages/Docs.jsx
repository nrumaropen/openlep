import Footer from "../components/Footer";

function Docs() {
  return (
    <>
      <main className="inner-page">
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">DOCUMENTATION</p>

            <h1>
              OpenLEP
              <span> Technical Documentation.</span>
            </h1>

            <p>
              Explore the framework, architecture, data model, and concepts
              behind OpenLEP.
            </p>
          </div>
        </section>

        <section className="section docs-content">
          <div className="section-container">
            <div className="docs-grid">
              <a href="#overview" className="docs-card">
                <span>01</span>
                <h2>Framework Overview</h2>
                <p>
                  Understand the purpose, principles, and structure of OpenLEP.
                </p>
              </a>

              <a href="#architecture" className="docs-card">
                <span>02</span>
                <h2>Architecture</h2>
                <p>
                  Explore how standards, implementation, data, and evaluation
                  connect.
                </p>
              </a>

              <a href="#schema" className="docs-card">
                <span>03</span>
                <h2>Data Schema</h2>
                <p>
                  Learn how language access information can be represented as
                  structured data.
                </p>
              </a>

              <a href="#compliance" className="docs-card">
                <span>04</span>
                <h2>Compliance Model</h2>
                <p>
                  Examine how requirements can be mapped to organizational
                  implementation.
                </p>
              </a>
            </div>
          </div>
        </section>

        <section id="overview" className="section docs-detail">
          <div className="section-container">
            <div className="detail-grid">
              <div>
                <p className="eyebrow">01 — FRAMEWORK</p>
                <h2>Framework Overview</h2>
              </div>

              <div>
                <p>
                  OpenLEP provides a conceptual framework for organizing
                  language access requirements and connecting them to
                  implementation, data collection, and evaluation.
                </p>

                <p>
                  The framework is intended to support organizations that need
                  to understand where language access requirements exist, how
                  those requirements are implemented, and how implementation can
                  be evaluated.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="schema" className="section docs-schema">
          <div className="section-container">
            <div className="schema-header">
              <p className="eyebrow">03 — DATA MODEL</p>

              <h2>Example OpenLEP schema</h2>
            </div>

            <div className="code-window">
              <div className="code-header">
                <span>openlep.example.json</span>
              </div>

              <pre>
{`{
  "organization": {
    "name": "Example Organization",
    "language_access": {
      "languages": [],
      "services": [],
      "requirements": []
    }
  },
  "implementation": {
    "status": "active",
    "owner": "",
    "review_date": ""
  },
  "evaluation": {
    "metrics": [],
    "findings": [],
    "actions": []
  }
}`}
              </pre>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Docs;