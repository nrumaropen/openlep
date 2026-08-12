function Components() {
  return (
    <section id="components" className="section components-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">THE OPENLEP FRAMEWORK</p>

          <h2>Three connected components.</h2>

          <p>
            OpenLEP provides a structured approach for connecting language
            access requirements with organizational processes and digital
            systems.
          </p>
        </div>

        <div className="components-grid">
          {/* LANGUAGE ACCESS STANDARDS */}
          <div className="framework-card">
            <div className="framework-icon">01</div>

            <h3>Language Access Standards</h3>

            <p>
              A structured foundation for defining language access requirements,
              terminology, policies, and implementation standards.
            </p>

            <a href="/openlep/#/language-access-standards">
              Learn more →
            </a>
          </div>

          {/* COMPLIANCE INFRASTRUCTURE */}
          <div className="framework-card">
            <div className="framework-icon">02</div>

            <h3>Compliance Infrastructure</h3>

            <p>
              Tools and processes that help organizations connect language
              access requirements with operational and compliance workflows.
            </p>

            <a href="/openlep/#/compliance-infrastructure">
              Learn more →
            </a>
          </div>

          {/* DATA & EVALUATION */}
          <div className="framework-card">
            <div className="framework-icon">03</div>

            <h3>Data &amp; Evaluation</h3>

            <p>
              A framework for organizing language access data, monitoring
              implementation, and supporting evidence-based evaluation.
            </p>

            <a href="/openlep/#/data-evaluation">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Components;