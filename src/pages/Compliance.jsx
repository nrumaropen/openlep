import Footer from "../components/Footer";

function Compliance() {
  return (
    <>
      <main className="inner-page">
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">OPENLEP FRAMEWORK / 02</p>

            <h1>
              Compliance
              <span> Infrastructure.</span>
            </h1>

            <p>
              A structured approach for connecting language-access
              requirements with organizational policies, workflows,
              responsibilities, and compliance processes.
            </p>
          </div>
        </section>

        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">THE COMPLIANCE LAYER</p>

                <h2>
                  Connecting requirements to organizational practice.
                </h2>
              </div>

              <div>
                <p>
                  Language-access requirements can come from federal and
                  state law, regulations, agency guidance, organizational
                  policies, contracts, and internal standards.
                </p>

                <p>
                  The challenge is translating those requirements into
                  repeatable organizational processes. OpenLEP explores how
                  compliance information can be connected to workflows,
                  responsibilities, documentation, and monitoring.
                </p>

                <p>
                  The goal is not to replace legal or compliance advice.
                  Instead, this layer provides a structured way to represent
                  requirements and connect them to operational activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-highlight">
          <div className="section-container">
            <div className="highlight-box">
              <p className="eyebrow">WHAT IT CAN INCLUDE</p>

              <h2>
                Turning requirements into trackable activities.
              </h2>

              <p>
                Compliance infrastructure can help organizations document
                applicable requirements, assign responsibilities, track
                implementation activities, maintain evidence, and identify
                areas that require attention.
              </p>

              <p>
                This creates a connection between what a policy or standard
                requires and what an organization actually does.
              </p>
            </div>
          </div>
        </section>

        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">CORE AREAS</p>

                <h2>
                  From requirements to accountability.
                </h2>
              </div>

              <div>
                <p>
                  <strong>Requirements:</strong> Identify the laws, policies,
                  regulations, standards, and organizational requirements that
                  apply to a language-access program.
                </p>

                <p>
                  <strong>Responsibilities:</strong> Connect requirements to
                  departments, staff, contractors, vendors, and other
                  responsible parties.
                </p>

                <p>
                  <strong>Workflows:</strong> Represent the operational
                  processes used to fulfill language-access obligations.
                </p>

                <p>
                  <strong>Documentation:</strong> Organize evidence,
                  procedures, plans, records, and implementation materials.
                </p>

                <p>
                  <strong>Monitoring:</strong> Track implementation and
                  identify potential gaps between requirements and practice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Compliance;