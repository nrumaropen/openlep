import Footer from "../components/Footer";

function DataEvaluation() {
  return (
    <>
      <main className="inner-page">
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">OPENLEP FRAMEWORK / 03</p>

            <h1>
              Data &amp;
              <span> Evaluation.</span>
            </h1>

            <p>
              A framework for organizing language-access data, monitoring
              implementation, measuring performance, and supporting
              evidence-based improvement.
            </p>
          </div>
        </section>

        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">THE DATA LAYER</p>

                <h2>
                  Turning language-access activity into usable information.
                </h2>
              </div>

              <div>
                <p>
                  Language-access programs generate information throughout the
                  service process. This can include language needs, requests,
                  interpretation and translation services, response times,
                  providers, costs, and outcomes.
                </p>

                <p>
                  When this information is structured consistently,
                  organizations can begin to understand demand and performance
                  across programs and locations.
                </p>

                <p>
                  OpenLEP explores common data concepts and structures that can
                  support interoperability between language-access systems and
                  organizational platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-highlight">
          <div className="section-container">
            <div className="highlight-box">
              <p className="eyebrow">WHAT IT CAN MEASURE</p>

              <h2>
                From service activity to organizational insight.
              </h2>

              <p>
                Data and evaluation can help organizations understand how much
                language-access demand exists, where requests are occurring,
                how quickly services are delivered, and where capacity may be
                limited.
              </p>

              <p>
                These measures can support planning, resource allocation,
                quality improvement, and ongoing evaluation of language-access
                programs.
              </p>
            </div>
          </div>
        </section>

        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">CORE AREAS</p>

                <h2>
                  A foundation for measurement and evaluation.
                </h2>
              </div>

              <div>
                <p>
                  <strong>Language needs:</strong> Understand the languages and
                  communication needs represented across programs and
                  communities.
                </p>

                <p>
                  <strong>Service requests:</strong> Track requests for
                  interpretation, translation, and other language-access
                  services.
                </p>

                <p>
                  <strong>Performance:</strong> Monitor response times,
                  fulfillment, capacity, utilization, and other operational
                  indicators.
                </p>

                <p>
                  <strong>Gaps:</strong> Identify recurring service gaps,
                  unmet needs, delays, and areas where additional resources may
                  be required.
                </p>

                <p>
                  <strong>Evaluation:</strong> Use structured data to assess
                  performance and support evidence-based improvements over
                  time.
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

export default DataEvaluation;