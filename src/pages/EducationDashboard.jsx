import Footer from "../components/Footer";

function EducationDashboard() {
  return (
    <>
      <main className="education-dashboard">

        {/* HERO */}
        <section className="education-hero">
          <div className="education-container">
            <p className="education-eyebrow">
              EDUCATION LANGUAGE ACCESS
            </p>

            <h1>
              Education Language
              <span> Access Dashboard.</span>
            </h1>

            <p>
              Monitor multilingual student needs, interpretation services,
              family language access, and language access gaps across
              schools and districts.
            </p>
          </div>
        </section>

        {/* DASHBOARD */}
        <section className="education-section">
          <div className="education-container">

            {/* SUMMARY */}
            <div className="education-kpis">

              <div className="education-card">
                <h3>Multilingual Students</h3>
                <strong>1,248</strong>
                <p>
                  Students identified as needing language assistance.
                </p>
              </div>

              <div className="education-card">
                <h3>Languages Served</h3>
                <strong>37</strong>
                <p>
                  Languages represented across the district.
                </p>
              </div>

              <div className="education-card">
                <h3>Interpreter Requests</h3>
                <strong>486</strong>
                <p>
                  Interpretation requests this month.
                </p>
              </div>

              <div className="education-card">
                <h3>Access Rate</h3>
                <strong>94%</strong>
                <p>
                  Requests fulfilled within the target response time.
                </p>
              </div>

            </div>

            {/* TOP LANGUAGES */}
            <section className="education-panel">
              <div className="education-panel-heading">
                <div>
                  <span>STUDENT DEMOGRAPHICS</span>
                  <h2>Top Student Languages</h2>
                </div>
              </div>

              <div className="education-language-list">

                <div className="education-language-row">
                  <span>Spanish</span>
                  <div className="education-bar">
                    <span style={{ width: "82%" }}></span>
                  </div>
                  <strong>742</strong>
                </div>

                <div className="education-language-row">
                  <span>Vietnamese</span>
                  <div className="education-bar">
                    <span style={{ width: "25%" }}></span>
                  </div>
                  <strong>96</strong>
                </div>

                <div className="education-language-row">
                  <span>Arabic</span>
                  <div className="education-bar">
                    <span style={{ width: "19%" }}></span>
                  </div>
                  <strong>74</strong>
                </div>

                <div className="education-language-row">
                  <span>Mandarin</span>
                  <div className="education-bar">
                    <span style={{ width: "15%" }}></span>
                  </div>
                  <strong>58</strong>
                </div>

                <div className="education-language-row">
                  <span>Other Languages</span>
                  <div className="education-bar">
                    <span style={{ width: "31%" }}></span>
                  </div>
                  <strong>278</strong>
                </div>

              </div>
            </section>

            {/* SCHOOL PERFORMANCE */}
            <section className="education-panel">
              <div className="education-panel-heading">
                <div>
                  <span>SCHOOL PERFORMANCE</span>
                  <h2>Language Access by School</h2>
                </div>
              </div>

              <div className="education-table">

                <div className="education-table-row education-table-header">
                  <span>School</span>
                  <span>ML Students</span>
                  <span>Requests</span>
                  <span>Fulfilled</span>
                </div>

                <div className="education-table-row">
                  <span>Central High School</span>
                  <span>312</span>
                  <span>128</span>
                  <strong>96%</strong>
                </div>

                <div className="education-table-row">
                  <span>North Middle School</span>
                  <span>241</span>
                  <span>94</span>
                  <strong>93%</strong>
                </div>

                <div className="education-table-row">
                  <span>Lincoln Elementary</span>
                  <span>198</span>
                  <span>81</span>
                  <strong>97%</strong>
                </div>

                <div className="education-table-row">
                  <span>Washington Elementary</span>
                  <span>167</span>
                  <span>72</span>
                  <strong>91%</strong>
                </div>

              </div>
            </section>

            {/* ACCESS GAPS */}
            <section className="education-panel">
              <div className="education-panel-heading">
                <div>
                  <span>MONITORING</span>
                  <h2>Language Access Gaps</h2>
                </div>
              </div>

              <div className="education-gap-grid">

                <div className="education-gap-card">
                  <div className="education-gap-icon">01</div>
                  <h3>Parent / Family Communication</h3>
                  <p>
                    18% of identified multilingual families have not
                    received documented language-access support.
                  </p>
                </div>

                <div className="education-gap-card">
                  <div className="education-gap-icon">02</div>
                  <h3>Interpreter Response</h3>
                  <p>
                    6% of interpretation requests exceeded the district's
                    target response time.
                  </p>
                </div>

                <div className="education-gap-card">
                  <div className="education-gap-icon">03</div>
                  <h3>Translated Documents</h3>
                  <p>
                    12 high-priority documents are currently awaiting
                    translation.
                  </p>
                </div>

              </div>
            </section>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default EducationDashboard;