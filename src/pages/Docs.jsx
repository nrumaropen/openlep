import Footer from "../components/Footer";

function Docs() {
  return (
    <>
      <main className="inner-page">

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">DOCUMENTATION</p>

            <h1>
              Technical documentation
              <span> for the OpenLEP Framework.</span>
            </h1>

            <p>
              Explore the concepts, framework architecture, data model,
              compliance structure, and implementation guidance that define
              OpenLEP.
            </p>
          </div>
        </section>

        {/* FRAMEWORK */}
        <section className="section docs-content">
          <div className="section-container">

            <div className="section-heading">
              <p className="eyebrow">THE OPENLEP FRAMEWORK</p>

              <h2>Three integrated pillars</h2>

              <p>
                The OpenLEP Framework is organized into three interconnected
                domains that guide organizations from language access standards
                through implementation and measurable evaluation.
              </p>
            </div>

            <div className="docs-grid">

              <a
                href="/openlep/#/language-access-standards"
                className="docs-card"
              >
                <span>01</span>

                <h2>Language Access Standards</h2>

                <p>
                  Defines the terminology, principles, requirements, and policy
                  foundation for language access across organizations.
                </p>
              </a>

              <a
                href="/openlep/#/compliance-infrastructure"
                className="docs-card"
              >
                <span>02</span>

                <h2>Compliance Infrastructure</h2>

                <p>
                  Connects standards with governance, organizational
                  responsibilities, operational workflows, and implementation.
                </p>
              </a>

              <a
                href="/openlep/#/data-evaluation"
                className="docs-card"
              >
                <span>03</span>

                <h2>Data &amp; Evaluation</h2>

                <p>
                  Supports structured data, monitoring, performance
                  measurement, reporting, and continuous improvement.
                </p>
              </a>

            </div>
          </div>
        </section>

        {/* TECHNICAL REFERENCE */}
        <section className="section docs-detail">
          <div className="section-container">

            <div className="detail-grid">

              <div>
                <p className="eyebrow">TECHNICAL REFERENCE</p>

                <h2>
                  Documentation designed for transparency and implementation.
                </h2>
              </div>

              <div>

                <p>
                  OpenLEP is an open framework that organizations,
                  researchers, developers, and language access professionals
                  can understand, implement, and extend.
                </p>

                <div className="documentation-links">

                  <a href="#overview" className="documentation-item">
                    <div>
                      <span>01</span>

                      <h3>Framework Overview</h3>

                      <p>
                        Understand the purpose, scope, and guiding principles
                        of the OpenLEP Framework.
                      </p>
                    </div>

                    <strong>→</strong>
                  </a>

                  <a href="#architecture" className="documentation-item">
                    <div>
                      <span>02</span>

                      <h3>Framework Architecture</h3>

                      <p>
                        Explore how the framework connects standards,
                        implementation, data, and evaluation.
                      </p>
                    </div>

                    <strong>→</strong>
                  </a>

                  <a href="#schema" className="documentation-item">
                    <div>
                      <span>03</span>

                      <h3>Data Schema</h3>

                      <p>
                        Learn how language access information can be represented
                        using a structured data model.
                      </p>
                    </div>

                    <strong>→</strong>
                  </a>

                  <a href="#compliance" className="documentation-item">
                    <div>
                      <span>04</span>

                      <h3>Compliance Framework</h3>

                      <p>
                        Understand how requirements are mapped to
                        organizational implementation and evaluation.
                      </p>
                    </div>

                    <strong>→</strong>
                  </a>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* FRAMEWORK OVERVIEW */}
        <section id="overview" className="section docs-detail">
          <div className="section-container">

            <div className="detail-grid">

              <div>
                <p className="eyebrow">01 — FRAMEWORK OVERVIEW</p>

                <h2>Purpose and Scope</h2>
              </div>

              <div>

                <p>
                  OpenLEP is an open framework for designing, implementing,
                  monitoring, and evaluating language access across
                  organizations.
                </p>

                <p>
                  Rather than prescribing a single software platform, the
                  framework provides a common structure that connects language
                  access standards, organizational implementation, structured
                  information, and continuous evaluation.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* FRAMEWORK ARCHITECTURE */}
        <section id="architecture" className="section docs-detail">
          <div className="section-container">

            <div className="detail-grid">

              <div>
                <p className="eyebrow">02 — FRAMEWORK ARCHITECTURE</p>

                <h2>How the framework works</h2>
              </div>

              <div>

                <p>
                  The OpenLEP Framework organizes language access into a
                  connected architecture that links standards,
                  organizational implementation, structured information,
                  and evaluation.
                </p>

                <p>
                  Each layer builds upon the previous one, enabling
                  organizations to translate policy into operational practice
                  while generating measurable evidence for monitoring,
                  reporting, and continuous improvement.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* DATA SCHEMA */}
        <section id="schema" className="section docs-detail">
          <div className="section-container">

            <div className="detail-grid">

              <div>
                <p className="eyebrow">03 — DATA SCHEMA</p>

                <h2>Structured data model</h2>
              </div>

              <div>

                <p>
                  The OpenLEP Data Schema provides a structured model for
                  representing language access information in a consistent,
                  interoperable, and implementation-ready format.
                </p>

                <p>
                  The schema supports monitoring, reporting, compliance,
                  and evaluation while enabling organizations to integrate
                  language access information across existing systems.
                </p>

              </div>

            </div>

            {/* Add ER Diagram here */}

          </div>
        </section>

        {/* COMPLIANCE FRAMEWORK */}
        <section id="compliance" className="section docs-detail">
          <div className="section-container">

            <div className="detail-grid">

              <div>
                <p className="eyebrow">04 — COMPLIANCE FRAMEWORK</p>

                <h2>From requirements to implementation</h2>
              </div>

              <div>

                <p>
                  The OpenLEP Compliance Framework connects language access
                  requirements with governance, implementation activities,
                  organizational responsibilities, and measurable outcomes.
                </p>

                <p>
                  Organizations can use this structure to document compliance,
                  monitor implementation, identify service gaps, and support
                  continuous improvement through evidence-based evaluation.
                </p>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Docs;