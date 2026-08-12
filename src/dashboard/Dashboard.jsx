
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <div className="dashboard-header">
          <div>
            <p className="dashboard-label">OPENLEP DEMONSTRATION</p>

            <h1>Language Access Dashboard</h1>

            <p>
              A demonstration of how OpenLEP can monitor language-access
              demand, institutional performance, and service gaps.
            </p>
          </div>

          <div className="dashboard-status">
            <span className="status-dot"></span>
            Demonstration Data
          </div>
        </div>

        <section className="metric-grid">
          <div className="metric-card">
            <span>Total Requests</span>
            <strong>12,486</strong>
            <small>↑ 14.2% this month</small>
          </div>

          <div className="metric-card">
            <span>Fulfillment Rate</span>
            <strong>91.4%</strong>
            <small>↑ 3.8% this month</small>
          </div>

          <div className="metric-card">
            <span>Languages</span>
            <strong>47</strong>
            <small>Languages requested</small>
          </div>

          <div className="metric-card">
            <span>Avg. Response</span>
            <strong>18.6 min</strong>
            <small>↓ 6.4% this month</small>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-card large-card">
            <div className="card-header">
              <div>
                <h2>Language Access Demand</h2>
                <p>Requests by language</p>
              </div>
            </div>

            <div className="bar-chart">
              <div className="bar-row">
                <span>Spanish</span>

                <div className="bar">
                  <div style={{ width: "88%" }}></div>
                </div>

                <strong>4,820</strong>
              </div>

              <div className="bar-row">
                <span>Chinese</span>

                <div className="bar">
                  <div style={{ width: "57%" }}></div>
                </div>

                <strong>3,120</strong>
              </div>

              <div className="bar-row">
                <span>Vietnamese</span>

                <div className="bar">
                  <div style={{ width: "42%" }}></div>
                </div>

                <strong>2,140</strong>
              </div>

              <div className="bar-row">
                <span>Arabic</span>

                <div className="bar">
                  <div style={{ width: "28%" }}></div>
                </div>

                <strong>1,420</strong>
              </div>

              <div className="bar-row">
                <span>Other</span>

                <div className="bar">
                  <div style={{ width: "19%" }}></div>
                </div>

                <strong>986</strong>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h2>Compliance</h2>
                <p>Overall institutional performance</p>
              </div>
            </div>

            <div className="compliance-score">
              <strong>87%</strong>
              <span>Overall Score</span>
            </div>

            <div className="progress-item">
              <div>
                <span>Language Coverage</span>
                <strong>92%</strong>
              </div>

              <div className="progress">
                <div style={{ width: "92%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Request Fulfillment</span>
                <strong>91%</strong>
              </div>

              <div className="progress">
                <div style={{ width: "91%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Response Time</span>
                <strong>78%</strong>
              </div>

              <div className="progress">
                <div style={{ width: "78%" }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h2>Institution Performance</h2>
                <p>Language-access compliance</p>
              </div>
            </div>

            <div className="institution-list">
              <div className="institution-row">
                <span>Institution A</span>
                <strong>94%</strong>
              </div>

              <div className="institution-row">
                <span>Institution B</span>
                <strong>91%</strong>
              </div>

              <div className="institution-row">
                <span>Institution C</span>
                <strong>87%</strong>
              </div>

              <div className="institution-row warning">
                <span>Institution D</span>
                <strong>72%</strong>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h2>Alerts</h2>
                <p>Areas requiring attention</p>
              </div>
            </div>

            <div className="alert-list">
              <div className="alert-item">
                <span className="alert-icon">!</span>

                <div>
                  <strong>Spanish demand increased</strong>

                  <p>
                    Requests increased 24% over three months.
                  </p>
                </div>
              </div>

              <div className="alert-item">
                <span className="alert-icon">!</span>

                <div>
                  <strong>Institution D below threshold</strong>

                  <p>
                    Current compliance score is 72%.
                  </p>
                </div>
              </div>

              <div className="alert-item success">
                <span className="alert-icon">✓</span>

                <div>
                  <strong>Institution A improved</strong>

                  <p>
                    Compliance increased by 8% this quarter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ai-insight">
          <div className="ai-badge">AI</div>

          <div>
            <p className="dashboard-label">
              OPENLEP INTELLIGENCE
            </p>

            <h2>AI-Generated Insight</h2>

            <p>
              Language-access demand for Spanish increased by approximately
              24% over the last three months while fulfillment capacity
              remained relatively stable.
            </p>

            <p>
              <strong>Recommended action:</strong> Review interpreter
              availability at institutions with fulfillment rates below 80%.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;
