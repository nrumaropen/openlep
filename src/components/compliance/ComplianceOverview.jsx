{/* COMPLIANCE OVERVIEW */}

function ComplianceOverview() {
    return (
           <section className="compliance-panel">
              <div className="compliance-panel-heading">
                <div>
                  <span>PERFORMANCE</span>
                  <h2>Compliance Overview</h2>
                </div>

                <div className="compliance-score">
                  <strong>{overallCompliance}%</strong>
                  <small>Overall</small>
                </div>
              </div>

              <div className="compliance-metrics">

                <div className="compliance-metric">
                  <div>
                    <span>Interpreter Access</span>
                    <strong>{interpreterFulfillment}%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: `${interpreterFulfillment}%` }}></span>
                  </div>
                </div>

                <div className="compliance-metric">
                  <div>
                    <span>Translated Materials</span>
                    <strong>{translatedMaterialsRate}%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: `${translatedMaterialsRate}%` }}></span>
                  </div>
                </div>

                <div className="compliance-metric">
                  <div>
                    <span>Staff Training</span>
                    <strong>{staffTrainingRate}%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: `${staffTrainingRate}%` }}></span>
                  </div>
                </div>

                <div className="compliance-metric">
                  <div>
                    <span>Documentation</span>
                    <strong>{documentCompliance}%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: `${documentCompliance}%` }}></span>
                  </div>
                </div>

              </div>
            </section>
    )
}
 
export default ComplianceOverview;