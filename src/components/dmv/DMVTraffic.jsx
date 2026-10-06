function DMVTraffic() {

    return (
                    <div className="dmv-grid dmv-grid-main">

              {/* TRAFFIC */}
              <section className="dmv-panel dmv-traffic-panel">

                <div className="dmv-panel-header">
                  <div>
                    <span>DAILY DEMAND</span>
                    <h2>Customer Traffic</h2>
                  </div>

                  <select className="dmv-select">
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                  </select>
                </div>

                <div className="dmv-chart">

                  <div className="dmv-y-axis">
                    <span>600</span>
                    <span>450</span>
                    <span>300</span>
                    <span>150</span>
                    <span>0</span>
                  </div>

                  <div className="dmv-chart-body">

                    <div className="dmv-chart-lines">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>

                    <div className="dmv-bars">
                      <div style={{ height: "30%" }}></div>
                      <div style={{ height: "43%" }}></div>
                      <div style={{ height: "59%" }}></div>
                      <div style={{ height: "76%" }}></div>
                      <div style={{ height: "91%" }}></div>
                      <div style={{ height: "82%" }}></div>
                      <div style={{ height: "69%" }}></div>
                      <div style={{ height: "73%" }}></div>
                      <div style={{ height: "55%" }}></div>
                      <div style={{ height: "39%" }}></div>
                      <div style={{ height: "27%" }}></div>
                    </div>

                    <div className="dmv-x-axis">
                      <span>8 AM</span>
                      <span>9 AM</span>
                      <span>10 AM</span>
                      <span>11 AM</span>
                      <span>12 PM</span>
                      <span>1 PM</span>
                      <span>2 PM</span>
                      <span>3 PM</span>
                      <span>4 PM</span>
                      <span>5 PM</span>
                    </div>

                  </div>
                </div>

                <div className="dmv-chart-summary">
                  <span>Peak period</span>
                  <strong>11 AM – 1 PM</strong>
                  <span>1,024 customers</span>
                </div>

              </section>


              {/* TRANSACTION MIX */}
              <section className="dmv-panel">

                <div className="dmv-panel-header">
                  <div>
                    <span>SERVICE MIX</span>
                    <h2>Today's Transactions</h2>
                  </div>
                </div>

                <div className="dmv-service-list">

                  <div className="dmv-service">
                    <div>
                      <span>Driver License</span>
                      <strong>38%</strong>
                    </div>

                    <div className="dmv-progress">
                      <span style={{ width: "38%" }}></span>
                    </div>
                  </div>

                  <div className="dmv-service">
                    <div>
                      <span>Vehicle Registration</span>
                      <strong>29%</strong>
                    </div>

                    <div className="dmv-progress">
                      <span style={{ width: "29%" }}></span>
                    </div>
                  </div>

                  <div className="dmv-service">
                    <div>
                      <span>Identification Card</span>
                      <strong>17%</strong>
                    </div>

                    <div className="dmv-progress">
                      <span style={{ width: "17%" }}></span>
                    </div>
                  </div>

                  <div className="dmv-service">
                    <div>
                      <span>Permits & Testing</span>
                      <strong>11%</strong>
                    </div>

                    <div className="dmv-progress">
                      <span style={{ width: "11%" }}></span>
                    </div>
                  </div>

                  <div className="dmv-service">
                    <div>
                      <span>Other Services</span>
                      <strong>5%</strong>
                    </div>

                    <div className="dmv-progress">
                      <span style={{ width: "5%" }}></span>
                    </div>
                  </div>

                </div>

              </section>

            </div>
    )
}

export default DMVTraffic