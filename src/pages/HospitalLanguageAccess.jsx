import Footer from "../components/Footer";


function HospitalLanguageAccess() {
  return (
    <>
      <main className="hospital-dashboard">

        {/* HERO */}
        <section className="hospital-hero">
          <div className="hospital-container">
            <p className="hospital-eyebrow">
              HOSPITAL LANGUAGE ACCESS
            </p>

            <div className="hospital-hero-content">
              <div>
                <h1>
                  Language Access
                  <span> Operations.</span>
                </h1>

                <p>
                  Monitor patient language needs, interpreter demand,
                  response times, and service availability across
                  hospital departments.
                </p>
              </div>

              <div className="hospital-live">
                <span></span>
                Live operations
              </div>
            </div>
          </div>
        </section>

        {/* DASHBOARD */}
        <section className="hospital-content">
          <div className="hospital-container">

            {/* KPIs */}
            <div className="hospital-kpis">

              <div className="hospital-kpi">
                <span>Patients Requiring Access</span>
                <strong>1,842</strong>
                <small>↑ 8.4% this month</small>
              </div>

              <div className="hospital-kpi">
                <span>Interpreter Requests</span>
                <strong>3,426</strong>
                <small>Across all departments</small>
              </div>

              <div className="hospital-kpi">
                <span>Fulfillment Rate</span>
                <strong>96%</strong>
                <small className="good">↑ 2.1% this month</small>
              </div>

              <div className="hospital-kpi">
                <span>Average Response</span>
                <strong>8.4 min</strong>
                <small>Target: under 10 min</small>
              </div>

            </div>

            {/* MAIN VISUALS */}
            <div className="hospital-main-grid">

              {/* REQUEST TREND */}
              <section className="hospital-panel">

                <div className="hospital-panel-header">
                  <div>
                    <span>DEMAND TREND</span>
                    <h2>Interpreter Requests</h2>
                    <p>Monthly request volume across the hospital.</p>
                  </div>

                  <strong className="hospital-panel-stat">
                    3,426
                    <small>requests</small>
                  </strong>
                </div>

                <div className="hospital-chart">

                  <div className="chart-y">
                    <span>600</span>
                    <span>450</span>
                    <span>300</span>
                    <span>150</span>
                    <span>0</span>
                  </div>

                  <svg
                    viewBox="0 0 700 260"
                    preserveAspectRatio="none"
                  >
                    <line x1="45" y1="20" x2="680" y2="20" />
                    <line x1="45" y1="75" x2="680" y2="75" />
                    <line x1="45" y1="130" x2="680" y2="130" />
                    <line x1="45" y1="185" x2="680" y2="185" />
                    <line x1="45" y1="240" x2="680" y2="240" />

                    <polyline
                      className="hospital-chart-area"
                      points="
                        45,190
                        145,165
                        245,175
                        345,115
                        445,135
                        545,75
                        680,48
                        680,240
                        45,240
                      "
                    />

                    <polyline
                      className="hospital-chart-line"
                      points="
                        45,190
                        145,165
                        245,175
                        345,115
                        445,135
                        545,75
                        680,48
                      "
                    />

                    <circle cx="680" cy="48" r="5" />
                  </svg>

                  <div className="chart-x">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>

                </div>

              </section>

              {/* DEPARTMENT MAP */}
              <section className="hospital-panel">

                <div className="hospital-panel-header">
                  <div>
                    <span>DEPARTMENT DEMAND</span>
                    <h2>Hospital Activity</h2>
                    <p>Interpreter demand by department.</p>
                  </div>
                </div>

                <div className="hospital-map">

                  <div className="hospital-department maternity">
                    <i className="demand-dot medium"></i>
                    <strong>Maternity</strong>
                    <small>286 requests</small>
                  </div>

                  <div className="hospital-department icu">
                    <i className="demand-dot high"></i>
                    <strong>ICU</strong>
                    <small>416 requests</small>
                  </div>

                  <div className="hospital-department oncology">
                    <i className="demand-dot medium"></i>
                    <strong>Oncology</strong>
                    <small>241 requests</small>
                  </div>

                  <div className="hospital-department outpatient">
                    <i className="demand-dot low"></i>
                    <strong>Outpatient</strong>
                    <small>198 requests</small>
                  </div>

                  <div className="hospital-department er">
                    <i className="demand-dot high"></i>
                    <strong>Emergency Department</strong>
                    <small>842 requests</small>
                  </div>

                </div>

              </section>

            </div>

            {/* SECOND ROW */}
            <div className="hospital-two-column">

              {/* LANGUAGES */}
              <section className="hospital-panel">

                <div className="hospital-panel-header">
                  <div>
                    <span>PATIENT LANGUAGE</span>
                    <h2>Top Languages</h2>
                  </div>
                </div>

                <div className="language-bars">

                  <div className="language-item">
                    <div>
                      <span>Spanish</span>
                      <strong>54%</strong>
                    </div>
                    <div className="language-track">
                      <span style={{ width: "54%" }}></span>
                    </div>
                    <small>1,001 patients</small>
                  </div>

                  <div className="language-item">
                    <div>
                      <span>Vietnamese</span>
                      <strong>18%</strong>
                    </div>
                    <div className="language-track">
                      <span style={{ width: "18%" }}></span>
                    </div>
                    <small>332 patients</small>
                  </div>

                  <div className="language-item">
                    <div>
                      <span>Arabic</span>
                      <strong>12%</strong>
                    </div>
                    <div className="language-track">
                      <span style={{ width: "12%" }}></span>
                    </div>
                    <small>221 patients</small>
                  </div>

                  <div className="language-item">
                    <div>
                      <span>Mandarin</span>
                      <strong>8%</strong>
                    </div>
                    <div className="language-track">
                      <span style={{ width: "8%" }}></span>
                    </div>
                    <small>147 patients</small>
                  </div>

                  <div className="language-item">
                    <div>
                      <span>Other</span>
                      <strong>8%</strong>
                    </div>
                    <div className="language-track">
                      <span style={{ width: "8%" }}></span>
                    </div>
                    <small>141 patients</small>
                  </div>

                </div>

              </section>

              {/* RESPONSE TIMES */}
              <section className="hospital-panel">

                <div className="hospital-panel-header">
                  <div>
                    <span>INTERPRETER PERFORMANCE</span>
                    <h2>Response Time</h2>
                  </div>
                </div>

                <div className="response-list">

                  <div className="response-row">
                    <div>
                      <strong>Phone</strong>
                      <span>1,462 requests</span>
                    </div>

                    <b className="response-good">6 min</b>
                  </div>

                  <div className="response-row">
                    <div>
                      <strong>Video</strong>
                      <span>1,208 requests</span>
                    </div>

                    <b className="response-good">9 min</b>
                  </div>

                  <div className="response-row">
                    <div>
                      <strong>In-person</strong>
                      <span>756 requests</span>
                    </div>

                    <b className="response-warning">14 min</b>
                  </div>

                </div>

                <div className="response-target">
                  <span>Hospital target</span>
                  <strong>Under 10 minutes</strong>
                </div>

              </section>

            </div>

            {/* SERVICE MIX */}
            <section className="hospital-panel">

              <div className="hospital-panel-header">
                <div>
                  <span>SERVICE UTILIZATION</span>
                  <h2>Interpretation Methods</h2>
                  <p>
                    How patients are receiving language assistance.
                  </p>
                </div>
              </div>

              <div className="service-grid">

                <div className="service-card">
                  <div className="service-circle phone">
                    43%
                  </div>

                  <div>
                    <strong>Phone</strong>
                    <span>1,462 requests</span>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-circle video">
                    35%
                  </div>

                  <div>
                    <strong>Video</strong>
                    <span>1,208 requests</span>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-circle inperson">
                    22%
                  </div>

                  <div>
                    <strong>In-person</strong>
                    <span>756 requests</span>
                  </div>
                </div>

              </div>

            </section>

            {/* ALERTS */}
            <section className="hospital-alert-panel">

              <div className="hospital-alert-icon">!</div>

              <div>
                <span>OPERATIONAL ALERT</span>

                <h2>
                  Emergency Department demand is increasing.
                </h2>

                <p>
                  Interpreter requests in the Emergency Department have
                  increased 18% over the last 30 days. Spanish and Arabic
                  account for the largest increase in demand.
                </p>
              </div>

              <button>
                View Department
              </button>

            </section>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default HospitalLanguageAccess;