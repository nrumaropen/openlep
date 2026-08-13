import Footer from "../components/Footer";

function Compliance() {
  return (
    <>
      <main className="compliance-dashboard">

        {/* HERO */}
        <section className="compliance-hero">
          <div className="compliance-container">
            <p className="compliance-eyebrow">
              LANGUAGE ACCESS COMPLIANCE
            </p>

            <h1>
              Language Access
              <span> Compliance Dashboard.</span>
            </h1>

            <p>
              Monitor language access requirements, interpreter utilization,
              service gaps, documentation, and compliance performance across
              your organization.
            </p>

            <div className="compliance-status">
              <span></span>
              Compliance monitoring active
            </div>
          </div>
        </section>

        {/* DASHBOARD */}
        <section className="compliance-section">
          <div className="compliance-container">

            {/* KPI CARDS */}
            <div className="compliance-kpis">

              <div className="compliance-card">
                <p>Overall Compliance</p>
                <strong>94%</strong>
                <span className="compliance-positive">
                  ↑ 3.2% this quarter
                </span>
              </div>

              <div className="compliance-card">
                <p>Interpreter Fulfillment</p>
                <strong>91%</strong>
                <span className="compliance-positive">
                  ↑ 2.8% this quarter
                </span>
              </div>

              <div className="compliance-card">
                <p>Document Compliance</p>
                <strong>87%</strong>
                <span className="compliance-warning">
                  Needs attention
                </span>
              </div>

              <div className="compliance-card">
                <p>Open Compliance Gaps</p>
                <strong>12</strong>
                <span className="compliance-danger">
                  4 high priority
                </span>
              </div>

            </div>

            {/* COMPLIANCE OVERVIEW */}
            <section className="compliance-panel">
              <div className="compliance-panel-heading">
                <div>
                  <span>PERFORMANCE</span>
                  <h2>Compliance Overview</h2>
                </div>

                <div className="compliance-score">
                  <strong>94%</strong>
                  <small>Overall</small>
                </div>
              </div>

              <div className="compliance-metrics">

                <div className="compliance-metric">
                  <div>
                    <span>Interpreter Access</span>
                    <strong>96%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: "96%" }}></span>
                  </div>
                </div>

                <div className="compliance-metric">
                  <div>
                    <span>Translated Materials</span>
                    <strong>87%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: "87%" }}></span>
                  </div>
                </div>

                <div className="compliance-metric">
                  <div>
                    <span>Staff Training</span>
                    <strong>92%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: "92%" }}></span>
                  </div>
                </div>

                <div className="compliance-metric">
                  <div>
                    <span>Documentation</span>
                    <strong>84%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: "84%" }}></span>
                  </div>
                </div>

              </div>
            </section>

            {/* REQUIREMENTS */}
            <section className="compliance-panel">

              <div className="compliance-panel-heading">
                <div>
                  <span>REQUIREMENTS</span>
                  <h2>Compliance Requirements</h2>
                </div>
              </div>

              <div className="compliance-table">

                <div className="compliance-table-row compliance-table-header">
                  <span>Requirement</span>
                  <span>Status</span>
                  <span>Score</span>
                  <span>Review</span>
                </div>

                <div className="compliance-table-row">
                  <span>Interpreter Availability</span>
                  <span>
                    <b className="status-compliant">Compliant</b>
                  </span>
                  <strong>98%</strong>
                  <span>Current</span>
                </div>

                <div className="compliance-table-row">
                  <span>Language Identification</span>
                  <span>
                    <b className="status-compliant">Compliant</b>
                  </span>
                  <strong>95%</strong>
                  <span>Current</span>
                </div>

                <div className="compliance-table-row">
                  <span>Translated Materials</span>
                  <span>
                    <b className="status-review">Review</b>
                  </span>
                  <strong>87%</strong>
                  <span>30 days</span>
                </div>

                <div className="compliance-table-row">
                  <span>Staff Training</span>
                  <span>
                    <b className="status-compliant">Compliant</b>
                  </span>
                  <strong>92%</strong>
                  <span>Current</span>
                </div>

                <div className="compliance-table-row">
                  <span>Documentation</span>
                  <span>
                    <b className="status-action">Action Needed</b>
                  </span>
                  <strong>84%</strong>
                  <span>14 days</span>
                </div>

              </div>
            </section>

            {/* OPEN GAPS */}
            <section className="compliance-panel">

              <div className="compliance-panel-heading">
                <div>
                  <span>RISK MONITORING</span>
                  <h2>Open Compliance Gaps</h2>
                </div>

                <div className="compliance-gap-count">
                  12 open
                </div>
              </div>

              <div className="compliance-gap-grid">

                <div className="compliance-gap-card high">
                  <div className="compliance-gap-top">
                    <span>HIGH</span>
                    <strong>04</strong>
                  </div>

                  <h3>Documentation Gaps</h3>

                  <p>
                    Missing documentation for completed language access
                    services across several departments.
                  </p>
                </div>

                <div className="compliance-gap-card medium">
                  <div className="compliance-gap-top">
                    <span>MEDIUM</span>
                    <strong>05</strong>
                  </div>

                  <h3>Translation Backlog</h3>

                  <p>
                    Required materials remain pending translation or review.
                  </p>
                </div>

                <div className="compliance-gap-card low">
                  <div className="compliance-gap-top">
                    <span>LOW</span>
                    <strong>03</strong>
                  </div>

                  <h3>Training Updates</h3>

                  <p>
                    Staff members are approaching required language access
                    training renewal dates.
                  </p>
                </div>

              </div>
            </section>

            {/* ACTIONS */}
            <section className="compliance-action">

              <div className="compliance-action-icon">
                !
              </div>

              <div>
                <span>RECOMMENDED ACTION</span>

                <h2>
                  Address documentation gaps before the next review.
                </h2>

                <p>
                  Four high-priority documentation gaps require attention.
                  Completing these items could increase overall compliance
                  from 94% to approximately 97%.
                </p>
              </div>

            </section>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Compliance;