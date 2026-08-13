import Footer from "../components/Footer";


function DMVDashboard() {
  return (
    <>
      <main className="dmv-dashboard">

        {/* HERO */}
        <section className="dmv-hero">
          <div className="dmv-container">
            <p className="dmv-eyebrow">DMV OPERATIONS</p>

            <div className="dmv-hero-content">
              <div>
                <h1>
                  DMV
                  <span> Operations Dashboard</span>
                </h1>

                <p>
                  Monitor customer demand, service performance, office
                  capacity, wait times, and operational priorities across
                  DMV field offices.
                </p>
              </div>

              <div className="dmv-live">
                <span></span>
                Live operations
              </div>
            </div>
          </div>
        </section>


        {/* DASHBOARD */}
        <section className="dmv-section">
          <div className="dmv-container">

            {/* KPI CARDS */}
            <div className="dmv-kpis">

              <div className="dmv-kpi">
                <span>Customers Today</span>
                <strong>4,286</strong>
                <small className="positive">↑ 8.4% vs. daily average</small>
              </div>

              <div className="dmv-kpi">
                <span>Average Wait Time</span>
                <strong>18 min</strong>
                <small className="positive">↓ 4 min this week</small>
              </div>

              <div className="dmv-kpi">
                <span>Transactions Completed</span>
                <strong>3,942</strong>
                <small>92% completion rate</small>
              </div>

              <div className="dmv-kpi">
                <span>Offices Online</span>
                <strong>24 / 26</strong>
                <small className="warning">2 offices limited</small>
              </div>

            </div>


            {/* TRAFFIC + TRANSACTIONS */}
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


            {/* OFFICE MAP + PERFORMANCE */}
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


            {/* OPERATIONAL CAPACITY */}
            <section className="dmv-panel">

              <div className="dmv-panel-header">
                <div>
                  <span>CAPACITY</span>
                  <h2>Counter & Staffing Utilization</h2>
                </div>

                <span className="dmv-capacity-badge">
                  86% utilized
                </span>
              </div>

              <div className="dmv-capacity-grid">

                <div className="dmv-capacity-card">
                  <div>
                    <span>Customer Service Counters</span>
                    <strong>86%</strong>
                  </div>

                  <div className="dmv-capacity-track">
                    <span style={{ width: "86%" }}></span>
                  </div>

                  <small>
                    74 of 86 counters active
                  </small>
                </div>


                <div className="dmv-capacity-card">
                  <div>
                    <span>Testing Staff</span>
                    <strong>79%</strong>
                  </div>

                  <div className="dmv-capacity-track">
                    <span style={{ width: "79%" }}></span>
                  </div>

                  <small>
                    38 of 48 positions staffed
                  </small>
                </div>


                <div className="dmv-capacity-card">
                  <div>
                    <span>Appointment Capacity</span>
                    <strong>91%</strong>
                  </div>

                  <div className="dmv-capacity-track">
                    <span style={{ width: "91%" }}></span>
                  </div>

                  <small>
                    1,184 appointments scheduled
                  </small>
                </div>

              </div>

            </section>


            {/* LANGUAGE ACCESS */}
            <section className="dmv-panel">

              <div className="dmv-panel-header">
                <div>
                  <span>LANGUAGE ACCESS</span>
                  <h2>Customer Assistance Demand</h2>
                </div>

                <span className="dmv-badge">
                  386 requests
                </span>
              </div>

              <div className="dmv-language-grid">

                <div className="dmv-language">
                  <div>
                    <span>Spanish</span>
                    <strong>241</strong>
                  </div>

                  <div className="dmv-progress">
                    <span style={{ width: "63%" }}></span>
                  </div>
                </div>

                <div className="dmv-language">
                  <div>
                    <span>Vietnamese</span>
                    <strong>42</strong>
                  </div>

                  <div className="dmv-progress">
                    <span style={{ width: "28%" }}></span>
                  </div>
                </div>

                <div className="dmv-language">
                  <div>
                    <span>Mandarin</span>
                    <strong>31</strong>
                  </div>

                  <div className="dmv-progress">
                    <span style={{ width: "22%" }}></span>
                  </div>
                </div>

                <div className="dmv-language">
                  <div>
                    <span>Arabic</span>
                    <strong>24</strong>
                  </div>

                  <div className="dmv-progress">
                    <span style={{ width: "17%" }}></span>
                  </div>
                </div>

                <div className="dmv-language">
                  <div>
                    <span>Other Languages</span>
                    <strong>48</strong>
                  </div>

                  <div className="dmv-progress">
                    <span style={{ width: "31%" }}></span>
                  </div>
                </div>

              </div>

            </section>


            {/* EXECUTIVE ALERT */}
            <section className="dmv-alert">

              <div className="dmv-alert-icon">
                !
              </div>

              <div>
                <span>EXECUTIVE ATTENTION</span>

                <h2>
                  West Regional Office is experiencing elevated wait times.
                </h2>

                <p>
                  Current average wait time is 31 minutes, approximately
                  63% above the network average. Consider temporary counter
                  reassignment during the afternoon peak.
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

export default DMVDashboard;