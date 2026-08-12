function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="eyebrow">OPEN LANGUAGE ACCESS INFRASTRUCTURE</p>

          <h1>
            Building a more
            <span> accessible digital future.</span>
          </h1>

          <p className="hero-description">
            OpenLEP is an open framework for helping organizations design,
            document, and evaluate language access infrastructure across
            digital services.
          </p>

          <div className="hero-actions">
            <a href="#documentation" className="primary-button">
              Explore the Framework
            </a>

            <a href="#architecture" className="secondary-button">
              View Architecture
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="architecture-card">
            <div className="card-label">OPENLEP</div>

            <div className="architecture-line" />

            <div className="architecture-node">
              <span>01</span>
              Language Access
            </div>

            <div className="architecture-node">
              <span>02</span>
              Compliance
            </div>

            <div className="architecture-node">
              <span>03</span>
              Infrastructure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
