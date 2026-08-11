function Architecture() {
  return (
    <section id="architecture" className="section architecture-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">SYSTEM ARCHITECTURE</p>

          <h2>From standards to implementation.</h2>

          <p>
            OpenLEP connects language access standards, organizational
            processes, data, and evaluation into a structured infrastructure.
          </p>
        </div>

        <div className="architecture-flow">
          <div className="architecture-step">
            <span>01</span>
            <h3>Standards</h3>
            <p>
              Define language access requirements, terminology, and policies.
            </p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="architecture-step">
            <span>02</span>
            <h3>Implementation</h3>
            <p>
              Connect requirements with organizational workflows and digital
              services.
            </p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="architecture-step">
            <span>03</span>
            <h3>Data</h3>
            <p>
              Capture structured information about language access activities
              and services.
            </p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="architecture-step">
            <span>04</span>
            <h3>Evaluation</h3>
            <p>
              Use evidence and measurement to identify gaps and improve
              implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;