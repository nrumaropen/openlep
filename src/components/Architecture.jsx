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
              The OpenLEP Framework provides a structured architecture that
              translates language access requirements into organizational
              implementation, measurable outcomes, and continuous improvement.
            </p>
          </div>
        </section>

        {/* FIVE-LAYER FRAMEWORK */}
        <section className="section">
          <div className="section-container">

            <div className="section-heading">
              <p className="eyebrow">HOW THE FRAMEWORK WORKS</p>

              <h2>Five interconnected layers</h2>

              <p>
                OpenLEP connects language access standards with organizational
                governance, operational implementation, structured data, and
                performance evaluation through an integrated framework.
              </p>
            </div>

            <div className="architecture-flow">

              <div className="architecture-card">
                <span>01</span>

                <h3>Language Access Standards</h3>

                <p>
                  Establishes common terminology, policy requirements, and
                  language access principles that create a consistent
                  foundation across organizations.
                </p>
              </div>

              <div className="architecture-card">
                <span>02</span>

                <h3>Compliance Infrastructure</h3>

                <p>
                  Connects standards with governance structures,
                  organizational responsibilities, operational workflows,
                  and compliance processes.
                </p>
              </div>

              <div className="architecture-card">
                <span>03</span>

                <h3>Operational Implementation</h3>

                <p>
                  Supports the delivery of language access services while
                  documenting requests, interpreter activities, operational
                  decisions, and program implementation.
                </p>
              </div>

              <div className="architecture-card">
                <span>04</span>

                <h3>Compliance Data Model</h3>

                <p>
                  Organizes language access information into a standardized
                  data model that enables interoperability, monitoring,
                  reporting, and evidence-based analysis.
                </p>
              </div>

              <div className="architecture-card">
                <span>05</span>

                <h3>Monitoring &amp; Evaluation</h3>

                <p>
                  Measures implementation, identifies service gaps,
                  evaluates compliance, and provides organizations with
                  actionable insights for continuous improvement.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* LAYER 5 ARCHITECTURE */}
        <section className="section">
          <div className="section-container">

            <div className="section-heading">
              <p className="eyebrow">LAYER 5 DEEP DIVE</p>

              <h2>Monitoring &amp; Evaluation System Architecture</h2>

              <p>
                The Monitoring &amp; Evaluation layer consists of multiple
                analytical components that transform standardized operational
                data into compliance intelligence, performance measurement,
                early risk detection, and organizational decision support.
              </p>
            </div>

            <div className="architecture-details">

              <details className="detail-card">
                <summary>
                  <span>5.1</span>
                  <h3>Data Integration Layer</h3>
                </summary>

                <p>
                  Integrates standardized information from the OpenLEP
                  Compliance Data Model, consolidating operational records
                  from multiple departments while eliminating manual data
                  reconciliation across disconnected systems.
                </p>
              </details>

              <details className="detail-card">
                <summary>
                  <span>5.2</span>
                  <h3>Compliance Rules Engine</h3>
                </summary>

                <p>
                  Continuously evaluates operational activities against
                  language access requirements, including interpreter
                  provision, response times, documentation completeness,
                  and organizational policies.
                </p>
              </details>

              <details className="detail-card">
                <summary>
                  <span>5.3</span>
                  <h3>AI Analytics Engine</h3>
                </summary>

                <p>
                  Identifies trends across historical and current
                  operational data—including demand spikes, complaint
                  clusters, and predicted interpreter shortages—to support
                  evidence-based organizational decision making. AI provides
                  recommendations rather than autonomous decisions.
                </p>
              </details>

              <details className="detail-card">
                <summary>
                  <span>5.4</span>
                  <h3>Performance Measurement Engine</h3>
                </summary>

                <p>
                  Automatically calculates standardized performance
                  indicators such as fulfillment rate, response time,
                  interpreter utilization, qualified interpreter usage,
                  and overall compliance percentage.
                </p>
              </details>

              <details className="detail-card">
                <summary>
                  <span>5.5</span>
                  <h3>Dashboard &amp; Visualization Layer</h3>
                </summary>

                <p>
                  Presents role-specific dashboards for executives,
                  hospitals, interpreter services, courts, public
                  agencies, and other stakeholders, ensuring each audience
                  receives relevant operational and compliance insights.
                </p>
              </details>

              <details className="detail-card">
                <summary>
                  <span>5.6</span>
                  <h3>Automated Reporting Layer</h3>
                </summary>

                <p>
                  Generates operational, compliance, and regulatory
                  reports automatically using standardized metrics,
                  reducing manual reporting while improving consistency
                  and transparency.
                </p>
              </details>

              <details className="detail-card">
                <summary>
                  <span>5.7</span>
                  <h3>Alerts &amp; Early Warning System</h3>
                </summary>

                <p>
                  Continuously monitors predefined thresholds and
                  proactively flags interpreter shortages, rising
                  complaint volumes, overdue requests, declining
                  performance, and emerging compliance risks before
                  they escalate.
                </p>
              </details>

              <details className="detail-card">
                <summary>
                  <span>5.8</span>
                  <h3>Decision Support Layer</h3>
                </summary>

                <p>
                  Synthesizes information from all analytical components
                  to provide evidence-based recommendations for resource
                  allocation, interpreter deployment, departmental
                  intervention, and strategic planning.
                </p>
              </details>

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
                OpenLEP is designed as an open implementation framework
                rather than a single software platform. Organizations can
                adopt the framework using existing technologies while
                benefiting from a common structure for language access
                planning, implementation, compliance, monitoring, and
                continuous improvement.
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