function Problem() {
  return (
    <section id="problem" className="section problem-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">THE PROBLEM</p>

          <h2>Language access is more than translation.</h2>

          <p>
            Organizations may have language access policies, but turning those
            policies into consistent, measurable, and sustainable digital
            infrastructure remains a challenge.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <span className="card-number">01</span>
            <h3>Fragmented Systems</h3>
            <p>
              Language access information can be distributed across policies,
              applications, documents, and operational teams.
            </p>
          </div>

          <div className="problem-card">
            <span className="card-number">02</span>
            <h3>Inconsistent Implementation</h3>
            <p>
              Without a common framework, organizations may implement language
              access differently across services and departments.
            </p>
          </div>

          <div className="problem-card">
            <span className="card-number">03</span>
            <h3>Limited Measurement</h3>
            <p>
              Organizations need better ways to document, monitor, and evaluate
              whether language access requirements are being addressed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;