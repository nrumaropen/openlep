import LanguageMap from "./LanguageMap";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* ==================================================
            HERO TOP
        ================================================== */}

        <div className="hero-top">

          {/* HERO CONTENT */}

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
            LANGUAGE MAP
        ================================================== */}

        <section className="language-map-section">

          <div className="language-map-card">
            <LanguageMap />
          </div>

          <div className="language-map-footer" />

        </section>


        {/* ==================================================
            FRAMEWORK COMPONENTS
        ================================================== */}

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

      </div>
    </section>
  );
}

export default Hero;