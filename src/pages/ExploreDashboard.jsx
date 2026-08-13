import Footer from "../components/Footer";

function ExploreDashboard() {
  return (
    <>
      <main className="inner-page">

        {/* HERO */}
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">EXPLORE DASHBOARDS</p>

            <h1>
              Interactive dashboard
              <span> demonstrations.</span>
            </h1>

            <p>
              Explore example dashboards that demonstrate how the OpenLEP
              Framework can support language access planning, compliance,
              monitoring, and evaluation.
            </p>
          </div>
        </section>

        {/* DASHBOARD GALLERY */}
        <section className="section">
          <div className="section-container">

            <div className="dashboard-grid">

              {/* Dashboard 1 */}
              <a href="/openlep/#/compliance" className="dashboard-card">
                <img src="/images/compliance-preview.png" alt="" />

                <h3>Language Access Compliance</h3>

                <p>
                  Monitor interpreter usage, unmet language needs,
                  and compliance indicators.
                </p>

                <span>Open Dashboard →</span>
              </a>

              {/* Dashboard 2 */}
              <a href="/openlep/#/dmvdashboard" className="dashboard-card">
                <img src="/images/dmv-preview.png" alt="" />

                <h3>DMV Compliance</h3>

                <p>
                  Organization-wide language access metrics and trends.
                </p>

                <span>Open Dashboard →</span>
              </a>

              {/* Dashboard 3 */}
              <a href="/openlep/#/interpreter-dashboard" className="dashboard-card">
                <img src="/images/interpreter-preview.png" alt="" />

                <h3>Interpreter Services</h3>

                <p>
                  Track interpreter requests, availability,
                  and response times.
                </p>

                <span>Open Dashboard →</span>
              </a>

              {/* Dashboard 4 */}
              <a
                href="/openlep/#/hospital-language-access"
                className="dashboard-card"
              >
                <img
                  src="/images/hospital-preview.png"
                  alt=""
                />

                <h3>Hospital Language Access</h3>

                <p>
                  Monitor patients requiring language assistance,
                  interpreter access, and service gaps across
                  hospital departments.
                </p>

                <span>Open Dashboard →</span>
              </a>

              {/* Dashboard 5 */}
              <a
                href="/openlep/#/education"
                className="dashboard-card"
              >
                <img
                  src="/images/education-preview.png"
                  alt=""
                />

                <h3>Education Language Access</h3>

                <p>
                  Monitor multilingual student populations, family language
                  access, interpreter services, and language access gaps
                  across schools and districts.
                </p>

                <span>Open Dashboard →</span>
              </a>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default ExploreDashboard;