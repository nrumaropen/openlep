function MonitoringArchitecture() {

    return(
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

              <p className="status-note">
                <strong>Status:</strong> This section describes the target
                architecture of the Monitoring &amp; Evaluation layer. The current
                prototype computes compliance metrics from structured sample data.
                Components tagged <em>Planned</em> are on the roadmap and are not
                yet implemented.
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
                  <span className="status-tag">Planned</span>
                </summary>

                <p>
                  Is designed to identify trends across historical and current
                  operational data, including demand spikes, complaint clusters,
                  and predicted interpreter shortages, to support evidence-based
                  organizational decision making. AI provides recommendations
                  rather than autonomous decisions.
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
                  <span className="status-tag">Planned</span>
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
    )
}

export default MonitoringArchitecture