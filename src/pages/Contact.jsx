import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">GET INVOLVED</p>

            <h1>
              Build better language access
              <span> infrastructure together.</span>
            </h1>

            <p>
              OpenLEP is an open project. Contributions, research, technical
              feedback, and implementation ideas can help shape the framework.
            </p>
          </div>
        </section>

        <section className="section contact-content">
          <div className="section-container">
            <div className="contact-grid">
              <div className="contact-card">
                <span>01</span>
                <h2>Developers</h2>
                <p>
                  Explore the technical architecture and contribute to the
                  project.
                </p>
              </div>

              <div className="contact-card">
                <span>02</span>
                <h2>Researchers</h2>
                <p>
                  Examine language access infrastructure and contribute research
                  and evaluation approaches.
                </p>
              </div>

              <div className="contact-card">
                <span>03</span>
                <h2>Organizations</h2>
                <p>
                  Explore how the framework could support language access
                  planning and implementation.
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

export default Contact;