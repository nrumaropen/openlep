function ComplianceGaps() {

    return (
            <section className="compliance-panel">

              <div className="compliance-panel-heading">
                <div>
                  <span>RISK MONITORING</span>
                  <h2>Open Compliance Gaps</h2>
                </div>

                <div className="compliance-gap-count">
                  {openGapsCount} open
                </div>
              </div>

              <div className="compliance-gap-grid">

                <div className="compliance-gap-card high">
                  <div className="compliance-gap-top">
                    <span>HIGH</span>
                    <strong>{String(gapsBySeverity.high).padStart(2, "0")}</strong>
                  </div>

                  <h3>Language Access Complaints</h3>

                  <p>
                    Open complaints tied directly to interpreter or language
                    access service failures.
                  </p>
                </div>

                <div className="compliance-gap-card medium">
                  <div className="compliance-gap-top">
                    <span>MEDIUM</span>
                    <strong>{String(gapsBySeverity.medium).padStart(2, "0")}</strong>
                  </div>

                  <h3>Documentation Gaps</h3>

                  <p>
                    Open complaints related to missing or incomplete
                    documentation of language access services.
                  </p>
                </div>

                <div className="compliance-gap-card low">
                  <div className="compliance-gap-top">
                    <span>LOW</span>
                    <strong>{String(gapsBySeverity.low).padStart(2, "0")}</strong>
                  </div>

                  <h3>Training Updates</h3>

                  <p>
                    Staff members approaching required language access
                    training renewal.
                  </p>
                </div>

              </div>
            </section>
    )
}

export default ComplianceGaps;