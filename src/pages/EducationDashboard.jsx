import Footer from "../components/Footer";
import ComplianceRulesPanel from "../components/ComplianceRulesPanel";

const educationComplianceRules = [
  {
    label: "Family and parent communication available in preferred language",
    status: "flagged",
    citation: "EEOA, 20 U.S.C. §1703(f)",
    evidence: "18% of multilingual families lack documented language support",
  },
  {
    label: "Vital educational documents translated for LEP families",
    status: "flagged",
    citation: "Title VI; Lau v. Nichols, 414 U.S. 563 (1974)",
    evidence: "12 priority documents awaiting translation",
  },
  {
    label: "Interpreter services provided within district response standard",
    status: "pass",
    citation: "DOJ Title VI Language Access Guidance",
    evidence: "94% of requests fulfilled within target time",
  },
  {
    label: "Student language need documented during enrollment",
    status: "pass",
    citation: "EEOA appropriate action standard",
    evidence: "Language identification process active district-wide",
  },
];


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
              <span> Compliance Dashboard.</span>
            </h1>

            <p>
              Monitor multilingual student needs, family communication,
              interpreter services, compliance obligations, and emerging
              language access risks across schools and districts.
            </p>

          </div>
        </section>


        {/* DASHBOARD CONTENT */}
        <section className="education-section">

          <div className="education-container">
            {/* KPI SUMMARY */}
            <div className="education-kpis">

              <div className="education-card">
                <h3>Multilingual Students</h3>
                <strong>1,248</strong>
                <p>
                  Students identified as requiring language assistance.
                </p>
              </div>

              <div className="education-card">
                <h3>Languages Identified</h3>
                <strong>37</strong>
                <p>
                  Languages represented across the district.
                </p>
              </div>

              <div className="education-card">
                <h3>Interpreter Requests</h3>
                <strong>486</strong>
                <p>
                  Requests tracked during the current reporting period.
                </p>
              </div>

              <div className="education-card">
                <h3>Access Fulfillment</h3>
                <strong>94%</strong>
                <p>
                  Requests completed within district standards.
                </p>
              </div>

              <div className="education-card">
                <h3>Language Complaints</h3>
                <strong>7</strong>
                <p>
                  Reported language access concerns requiring review.
                </p>
              </div>
            </div>

            {/* COMPLIANCE ENGINE */}
            <ComplianceRulesPanel
              score={82}
              rules={educationComplianceRules}
              role="education"
            />

            {/* COMPLIANCE EVIDENCE */}
            <section className="education-panel">

              <div className="education-panel-heading">
                <div>
                  <span>OPENLEP COMPLIANCE ENGINE</span>
                  <h2>
                    Requirement to Evidence Mapping
                  </h2>
                </div>
              </div>

              <div className="education-table">

                <div className="education-table-row education-table-header">
                  <span>Requirement</span>
                  <span>Operational Evidence</span>
                  <span>Status</span>
                </div>

                <div className="education-table-row">
                  <span>
                    Family communication access
                  </span>

                  <span>
                    Parent communication records and preferred language data
                  </span>

                  <strong>
                    Gap
                  </strong>
                </div>

                <div className="education-table-row">

                  <span>
                    Translated vital documents
                  </span>

                  <span>
                    Translation inventory and document tracking
                  </span>

                  <strong>
                    Gap
                  </strong>

                </div>

                <div className="education-table-row">

                  <span>
                    Interpreter availability
                  </span>

                  <span>
                    Request fulfillment and response time records
                  </span>

                  <strong>
                    Pass
                  </strong>

                </div>

                <div className="education-table-row">

                  <span>
                    Student language identification
                  </span>

                  <span>
                    Enrollment language identification records
                  </span>

                  <strong>
                    Pass
                  </strong>
                </div>

              </div>
            </section>

            {/* STUDENT LANGUAGES */}
            <section className="education-panel">

              <div className="education-panel-heading">
                <div>
                  <span>STUDENT DEMOGRAPHICS</span>
                  <h2>
                    Top Student Languages
                  </h2>
                </div>
              </div>


              <div className="education-language-list">

                {[
                  ["Spanish","82%","742"],
                  ["Vietnamese","25%","96"],
                  ["Arabic","19%","74"],
                  ["Mandarin","15%","58"],
                  ["Other Languages","31%","278"],
                ].map((language,index)=>(
                  
                  <div
                    className="education-language-row"
                    key={index}
                  >

                    <span>
                      {language[0]}
                    </span>


                    <div className="education-bar">
                      <span
                        style={{
                          width: language[1]
                        }}
                      ></span>
                    </div>

                    <strong>
                      {language[2]}
                    </strong>
                  </div>
                ))}
              </div>
            </section>

            {/* SCHOOL PERFORMANCE */}
            <section className="education-panel">

              <div className="education-panel-heading">

                <div>
                  <span>SCHOOL PERFORMANCE</span>
                  <h2>
                    Language Access by School
                  </h2>
                </div>

              </div>

              <div className="education-table">

                <div className="education-table-row education-table-header">
                  <span>School</span>
                  <span>ML Students</span>
                  <span>Requests</span>
                  <span>Fulfilled</span>
                </div>

                {[
                  ["Central High School","312","128","96%"],
                  ["North Middle School","241","94","93%"],
                  ["Lincoln Elementary","198","81","97%"],
                  ["Washington Elementary","167","72","91%"],
                ].map((school,index)=>(

                  <div
                    className="education-table-row"
                    key={index}
                  >
                    <span>{school[0]}</span>
                    <span>{school[1]}</span>
                    <span>{school[2]}</span>
                    <strong>{school[3]}</strong>
                  </div>
                ))}
              </div>
            </section>


            {/* RISK MONITORING */}
            <section className="education-panel">


              <div className="education-panel-heading">

                <div>
                  <span>RISK MONITORING</span>
                  <h2>
                    Language Access Risk Areas
                  </h2>
                </div>

              </div>

              <div className="education-gap-grid">


                <div className="education-gap-card">

                  <div className="education-gap-icon">
                    01
                  </div>

                  <h3>
                    Family Communication Gap
                  </h3>

                  <p>
                    18% of multilingual families have no documented
                    language-access support record.
                  </p>

                </div>

                <div className="education-gap-card">

                  <div className="education-gap-icon">
                    02
                  </div>

                  <h3>
                    Translation Backlog
                  </h3>

                  <p>
                    12 high-priority educational documents require
                    translation review.
                  </p>

                </div>

                <div className="education-gap-card">

                  <div className="education-gap-icon">
                    03
                  </div>

                  <h3>
                    Complaint Monitoring
                  </h3>

                  <p>
                    7 language access complaints require corrective
                    action tracking.
                  </p>

                </div>
              </div>
            </section>

            {/* AI INSIGHT */}

            <section className="education-ai">


              <div className="education-ai-mark">
                AI
              </div>



              <div className="education-ai-content">


                <div className="education-ai-heading">

                  <div>

                    <span className="education-section-label">
                      OPENLEP INTELLIGENCE
                    </span>


                    <h2>
                      AI-Assisted Compliance Insight
                    </h2>

                  </div>
                  <span className="education-ai-live">
                    ● Monitoring
                  </span>

                </div>
                <p>
                  <strong>
                    Language access risk detected:
                  </strong>{" "}
                  multilingual families at Washington Elementary and
                  North Middle School show incomplete documentation of
                  language support services.

                </p>

                <div className="education-recommendation">
                  <strong>
                    Recommended action
                  </strong>
                  <span>
                    Review enrollment language identification,
                    prioritize family outreach, and verify translated
                    communication workflows before the next compliance review.
                  </span>
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