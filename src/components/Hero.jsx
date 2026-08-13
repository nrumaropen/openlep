import LanguageMap from "./LanguageMap";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* ==================================================
            HERO TOP
        ================================================== */}

        <div className="hero-top">

          <div className="hero-content">

            <p className="hero-eyebrow">
              OPEN LANGUAGE ACCESS INFRASTRUCTURE
            </p>

            <h1>
              Building a more
              <span> accessible digital future.</span>
            </h1>

            <p className="hero-description">
              OpenLEP is an open framework for helping organizations
              design, document, and evaluate language access
              infrastructure across digital services.
            </p>

            <div className="hero-actions">

              <a
                href="#documentation"
                className="primary-button"
              >
                Explore the Framework
                <span className="button-arrow">↗</span>
              </a>

              <a
                href="/openlep/#/architecture"
                className="secondary-button"
              >
                View Architecture
              </a>

            </div>

          </div>


          {/* FRAMEWORK HEADER */}

          <div className="framework-header">

            <div className="framework-number" />

            <div className="framework-title">

              <span>
                OPENLEP FRAMEWORK
              </span>

              <h2>
                speak to everyone
              </h2>

            </div>

            <div className="framework-line" />

          </div>

        </div>


        {/* ==================================================
            LANGUAGE ACCESS LANDSCAPE
        ================================================== */}

        <section className="language-landscape">

          <div className="landscape-intro">

            <div>
              <span className="section-label">
                01 — LANGUAGE ACCESS LANDSCAPE
              </span>

              <h2>
                A country shaped by
                <span> many languages.</span>
              </h2>
            </div>


          </div>


          {/* MAP */}

          <div className="language-map-card">
            <LanguageMap />
          </div>

        </section>


        {/* ==================================================
            THE PROBLEM
        ================================================== */}

        <section className="problem-section">

          <div className="problem-heading">

            <span className="section-label">
              02 — THE PROBLEM
            </span>

            <h2>
              Language access is often treated
              <span> as a service, not infrastructure.</span>
            </h2>

          </div>


          <div className="problem-content">

            <p className="problem-lead">
              Knowing which languages people speak is only the
              beginning.
            </p>

            <p>
              Organizations may offer translated documents,
              interpretation, or multilingual websites, but the
              systems behind these services are often fragmented.
              There is rarely a consistent way to understand where
              language barriers exist across an entire digital
              experience.
            </p>

            <p>
              This means that language access can depend on the
              organization, the service, or even the individual
              responsible for implementing it.
            </p>

          </div>

        </section>


        {/* ==================================================
            HUMAN IMPACT
        ================================================== */}

        <section className="impact-section">

          <div className="impact-header">

            <span className="section-label">
              03 — WHEN ACCESS FAILS
            </span>

            <h2>
              A language barrier can become
              <span> a barrier to participation.</span>
            </h2>

          </div>


          <div className="impact-grid">

            <article className="impact-card">

              <span className="impact-number">
                01
              </span>

              <h3>
                Finding information
              </h3>

              <p>
                Important information may exist, but remain difficult
                to find, navigate, or understand.
              </p>

            </article>


            <article className="impact-card">

              <span className="impact-number">
                02
              </span>

              <h3>
                Accessing services
              </h3>

              <p>
                A person may be unable to complete a form,
                application, or digital service in a language they
                understand.
              </p>

            </article>


            <article className="impact-card">

              <span className="impact-number">
                03
              </span>

              <h3>
                Making decisions
              </h3>

              <p>
                Incomplete language access can make it harder for
                people to understand their options and make informed
                decisions.
              </p>

            </article>

          </div>

        </section>


        {/* ==================================================
            INFRASTRUCTURE GAP
        ================================================== */}

        <section className="infrastructure-gap">

          <div className="gap-heading">

            <span className="section-label">
              04 — THE INFRASTRUCTURE GAP
            </span>

            <h2>
              The problem isn't only
              <span> translation.</span>
            </h2>

          </div>


          <div className="gap-content">

            <p>
              Organizations need a way to understand, document,
              and continuously improve language access across
              their digital services.
            </p>

            <div className="gap-questions">

              <div>
                <span>01</span>
                <strong>
                  What languages should we support?
                </strong>
              </div>

              <div>
                <span>02</span>
                <strong>
                  Where are the gaps in our services?
                </strong>
              </div>

              <div>
                <span>03</span>
                <strong>
                  How do we evaluate language accessibility?
                </strong>
              </div>

              <div>
                <span>04</span>
                <strong>
                  How do we improve access over time?
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            OPENLEP SOLUTION
        ================================================== */}

        <section className="openlep-solution">

          <div className="solution-intro">

            <span className="section-label">
              05 — THE SOLUTION
            </span>

            <h2>
              Meet <span>OpenLEP.</span>
            </h2>

            <p>
              An open framework for building language access into
              digital infrastructure from the start.
            </p>

          </div>


          <div className="solution-statement">

            <p>
              OpenLEP gives organizations a shared way to
              <strong> design, document, and evaluate </strong>
              language access across digital services.
            </p>

            <p>
              Instead of treating language access as a one-time
              translation task, OpenLEP treats it as an ongoing
              part of digital infrastructure.
            </p>

          </div>


          {/* FRAMEWORK COMPONENTS */}

          <section className="architecture-components">

            <div className="architecture-component">

              <div className="component-number">
                01
              </div>

              <div className="component-content">

                <span>
                  DEFINE
                </span>

                <strong>
                  Language Access
                </strong>

              </div>

            </div>


            <div className="component-connector">
              <span />
            </div>


            <div className="architecture-component">

              <div className="component-number">
                02
              </div>

              <div className="component-content">

                <span>
                  ESTABLISH
                </span>

                <strong>
                  Compliance
                </strong>

              </div>

            </div>


            <div className="component-connector">
              <span />
            </div>


            <div className="architecture-component">

              <div className="component-number">
                03
              </div>

              <div className="component-content">

                <span>
                  BUILD
                </span>

                <strong>
                  Infrastructure
                </strong>

              </div>

            </div>

          </section>

        </section>


        {/* ==================================================
            FINAL STATEMENT
        ================================================== */}

        <section className="hero-final">

          <h2>
            Language access should be
            <span> built in.</span>
          </h2>

          <p>
            OpenLEP provides the framework for making language
            access visible, measurable, and actionable.
          </p>

        </section>

      </div>
    </section>
  );
}

export default Hero;