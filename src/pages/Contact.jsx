import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <main className="inner-page contact-page">

        {/* =====================================================
            CONTACT HERO
        ===================================================== */}

        <section className="page-hero contact-hero">

          <div className="section-container">

            <p className="eyebrow">
              GET INVOLVED
            </p>

            <h1>
              Build better language access
              <span> infrastructure together.</span>
            </h1>

            <p className="contact-hero-description">
              OpenLEP is an open project. Contributions, research,
              technical feedback, and implementation ideas can help
              shape the framework.
            </p>

          </div>

        </section>


        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}

        <section className="section contact-content">

          <div className="section-container">

            <div className="contact-layout">


              {/* =================================================
                  CONTACT FORM
              ================================================= */}

              <div className="contact-form-card">

                <div className="contact-form-header">

                  <p className="section-label">
                    SEND A MESSAGE
                  </p>

                  <h2>
                    Tell us what you're working on.
                  </h2>

                  <p>
                    Whether you're exploring language access,
                    researching compliance, building technology,
                    or interested in contributing to OpenLEP,
                    we'd like to hear from you.
                  </p>

                </div>


                <form className="contact-form">

                  {/* NAME + ORGANIZATION */}

                  <div className="form-row">

                    <div className="form-field">

                      <label htmlFor="name">
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                      />

                    </div>


                    <div className="form-field">

                      <label htmlFor="organization">
                        Organization
                      </label>

                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        placeholder="Organization"
                      />

                    </div>

                  </div>


                  {/* EMAIL */}

                  <div className="form-field">

                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />

                  </div>


                  {/* TOPIC */}

                  <div className="form-field">

                    <label htmlFor="topic">
                      What can we help with?
                    </label>

                    <select
                      id="topic"
                      name="topic"
                      defaultValue=""
                    >

                      <option value="" disabled>
                        Select an option
                      </option>

                      <option value="general">
                        General inquiry
                      </option>

                      <option value="research">
                        Research & collaboration
                      </option>

                      <option value="language-access">
                        Language access
                      </option>

                      <option value="technical">
                        Technical contribution
                      </option>

                      <option value="partnership">
                        Partnership
                      </option>

                    </select>

                  </div>


                  {/* MESSAGE */}

                  <div className="form-field">

                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="7"
                      placeholder="Tell us a little about what you're working on..."
                    />

                  </div>


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send message
                  </button>

                </form>

              </div>


              {/* =================================================
                  RIGHT SIDE
              ================================================= */}

              <aside className="contact-sidebar">


                {/* DEVELOPERS */}

                <div className="contact-card">

                  <span className="contact-number">
                    01
                  </span>

                  <div>

                    <h3>
                      Developers
                    </h3>

                    <p>
                      Explore the technical architecture and
                      contribute to the OpenLEP project.
                    </p>

                    <a href="/openlep/#/architecture">
                      View architecture →
                    </a>

                  </div>

                </div>


                {/* RESEARCHERS */}

                <div className="contact-card">

                  <span className="contact-number">
                    02
                  </span>

                  <div>

                    <h3>
                      Researchers
                    </h3>

                    <p>
                      Examine language access infrastructure
                      and contribute research, data, and
                      evaluation approaches.
                    </p>

                    <a href="#research">
                      Explore research →
                    </a>

                  </div>

                </div>


                {/* ORGANIZATIONS */}

                <div className="contact-card">

                  <span className="contact-number">
                    03
                  </span>

                  <div>

                    <h3>
                      Organizations
                    </h3>

                    <p>
                      Explore how OpenLEP could support
                      language access planning, implementation,
                      and accountability.
                    </p>

                    <a href="#organizations">
                      Learn more →
                    </a>

                  </div>

                </div>


                {/* =================================================
                    OPENLEP NOTE
                ================================================= */}

                <div className="contact-note">

                  <p className="contact-note-label">
                    OPEN LANGUAGE ACCESS INFRASTRUCTURE
                  </p>

                  <p>
                    OpenLEP is an open framework for helping
                    organizations design, document, and evaluate
                    language access infrastructure across
                    digital services.
                  </p>

                </div>

              </aside>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;