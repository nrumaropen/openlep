function DMVOfficePerformance(){

    return (
                    <div className="dmv-grid">

              {/* REGIONAL MAP */}
              <section className="dmv-panel">

                <div className="dmv-panel-header">
                  <div>
                    <span>FIELD OFFICE NETWORK</span>
                    <h2>Regional Demand</h2>
                  </div>
                </div>

                <div className="dmv-map">

                  <div className="dmv-map-area">

                    <div className="dmv-region dmv-region-north">
                      <strong>North</strong>
                      <span>742</span>
                    </div>

                    <div className="dmv-region dmv-region-west">
                      <strong>West</strong>
                      <span>691</span>
                    </div>

                    <div className="dmv-region dmv-region-central">
                      <strong>Central</strong>
                      <span>1,284</span>
                    </div>

                    <div className="dmv-region dmv-region-east">
                      <strong>East</strong>
                      <span>963</span>
                    </div>

                    <div className="dmv-region dmv-region-south">
                      <strong>South</strong>
                      <span>606</span>
                    </div>

                  </div>

                </div>

                <div className="dmv-map-legend">
                  <span>
                    <i className="low"></i>
                    Low
                  </span>

                  <span>
                    <i className="medium"></i>
                    Moderate
                  </span>

                  <span>
                    <i className="high"></i>
                    High
                  </span>
                </div>

              </section>


              {/* OFFICE PERFORMANCE */}
              <section className="dmv-panel">

                <div className="dmv-panel-header">
                  <div>
                    <span>PERFORMANCE</span>
                    <h2>Office Wait Times</h2>
                  </div>
                </div>

                <div className="dmv-office-table">

                  <div className="dmv-office-row dmv-office-header">
                    <span>Office</span>
                    <span>Customers</span>
                    <span>Wait</span>
                  </div>

                  <div className="dmv-office-row">
                    <span>Central Service Center</span>
                    <strong>684</strong>
                    <b className="good">14 min</b>
                  </div>

                  <div className="dmv-office-row">
                    <span>North Metro Office</span>
                    <strong>571</strong>
                    <b className="good">17 min</b>
                  </div>

                  <div className="dmv-office-row">
                    <span>East Regional Office</span>
                    <strong>498</strong>
                    <b className="warning">24 min</b>
                  </div>

                  <div className="dmv-office-row">
                    <span>South Service Center</span>
                    <strong>443</strong>
                    <b className="good">19 min</b>
                  </div>

                  <div className="dmv-office-row">
                    <span>West Regional Office</span>
                    <strong>391</strong>
                    <b className="danger">31 min</b>
                  </div>

                </div>

              </section>

            </div>
    )
}

export default DMVOfficePerformance