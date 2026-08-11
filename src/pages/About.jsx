import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">ABOUT OPENLEP</p>

            <h1>
              An open framework for
              <span> language access infrastructure.</span>
            </h1>

            <p>
              OpenLEP explores how organizations can move from language access
              policies toward measurable, structured, and sustainable digital
              infrastructure.
            </p>
          </div>
        </section>

        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">WHY OPENLEP</p>

                <h2>Language access requires infrastructure.</h2>
              </div>

              <div>
                <p>
                  Language access is often treated as an individual service,
                  translation task, or policy requirement. In practice,
                  effective language access can involve data, workflows,
                  technology, governance, staff responsibilities, and
                  evaluation.
                </p>

                <p>
                  OpenLEP is intended to provide a common conceptual and
                  technical framework for connecting these elements.
                </p>

                <p>
                  The project is designed as an open-source initiative so that
                  organizations, researchers, developers, and language access
                  practitioners can examine and adapt the framework.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-highlight">
          <div className="section-container">
            <div className="highlight-box">
              <p className="eyebrow">OPEN PRINCIPLES</p>

              <h2>
                Transparent. Structured. Reusable.
              </h2>

              <p>
                OpenLEP is designed around openly documented concepts,
                structured data, interoperable components, and evidence-based
                evaluation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;