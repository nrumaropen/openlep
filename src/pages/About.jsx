import Footer from "../components/Footer";

function About() {
  return (
    <>
      <main className="inner-page">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="page-hero">
          <div className="section-container">

            <p className="eyebrow">
              ABOUT OPENLEP
            </p>

            <h1>
              From language-access policy to
              <span> measurable infrastructure.</span>
            </h1>

            <p>
              OpenLEP is an open framework for connecting language-access
              policy, data, technology, and evaluation across digital
              services.
            </p>

          </div>
        </section>


        {/* ==================================================
            WHAT IS OPENLEP?
        ================================================== */}

        <section className="section about-content">
          <div className="section-container">

            <div className="about-grid">

              <div>
                <p className="eyebrow">
                  01 — WHAT IS OPENLEP?
                </p>

                <h2>
                  An open framework for
                  language-access infrastructure.
                </h2>
              </div>

              <div>

                <p>
                  Language access is more than translating a document or
                  providing an interpreter when a need arises. Effective
                  language-access programs can involve policies, language
                  identification, service requests, interpretation,
                  translation, staff responsibilities, technology,
                  vendors, documentation, and evaluation.
                </p>

                <p>
                  OpenLEP connects these elements through an open
                  conceptual and technical framework designed to make
                  language-access information more structured, measurable,
                  transparent, and useful.
                </p>

                <p>
                  The project is intended as an open-source initiative
                  that researchers, developers, public institutions,
                  service organizations, and language-access practitioners
                  can examine, adapt, and extend.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* ==================================================
            WHY INFRASTRUCTURE?
        ================================================== */}

        <section className="section about-highlight">
          <div className="section-container">

            <div className="highlight-box">

              <p className="eyebrow">
                02 — WHY INFRASTRUCTURE?
              </p>

              <h2>
                Language access is not a single service.
                <span> It is a system.</span>
              </h2>

              <p>
                A person may encounter language access at many points:
                identifying a preferred language, requesting a service,
                receiving interpretation, accessing translated
                information, completing a digital form, or providing
                feedback.
              </p>

              <p>
                Each interaction can generate information about what
                people need and how organizations respond. When that
                information remains fragmented across departments,
                vendors, spreadsheets, and disconnected systems,
                organizations have limited visibility into how language
                access is actually working.
              </p>

              <p>
                OpenLEP focuses on the infrastructure needed to connect
                these activities into something organizations can
                understand, measure, and improve.
              </p>

            </div>

          </div>
        </section>


        {/* ==================================================
            HISTORICAL CONTEXT
        ================================================== */}

        <section className="section historical-section">
          <div className="section-container">

            <div className="section-heading">

              <p className="eyebrow">
                03 — HISTORICAL CONTEXT
              </p>

              <h2>
                Language access has evolved through civil-rights policy,
                federal guidance, and institutional practice.
              </h2>

              <p>
                OpenLEP builds on decades of work intended to reduce
                barriers faced by people with limited English proficiency.
                The policy environment has changed over time, while the
                practical challenge of delivering and evaluating language
                access remains.
              </p>

            </div>


            <div className="timeline">

              {/* 1964 */}

              <div className="timeline-item">

                <div className="timeline-year">
                  1964
                </div>

                <div className="timeline-content">

                  <h3>
                    Title VI of the Civil Rights Act
                  </h3>

                  <p>
                    Title VI established a foundational federal
                    civil-rights protection against discrimination based
                    on race, color, or national origin in programs and
                    activities receiving federal financial assistance.
                  </p>

                  <p>
                    Federal guidance and enforcement subsequently
                    addressed circumstances in which limited English
                    proficiency can create barriers to meaningful access
                    to federally assisted programs and services.
                  </p>

                </div>

              </div>


              {/* 2000 */}

              <div className="timeline-item">

                <div className="timeline-year">
                  2000
                </div>

                <div className="timeline-content">

                  <h3>
                    Executive Order 13166
                  </h3>

                  <p>
                    Executive Order 13166 directed federal agencies to
                    improve access to federally conducted and federally
                    assisted programs for people with limited English
                    proficiency.
                  </p>

                  <p>
                    The order contributed to the development of agency
                    language-access plans, guidance, procedures, and
                    implementation practices.
                  </p>

                </div>

              </div>

              {/* 2001-20210s */}

              <div className="timeline-item">

                <div className="timeline-year">
                  2001-2010s
                </div>

                <div className="timeline-content">

                  <h3>
                    Implementation & Expansion
                  </h3>

                  <p>
                    Federal agencies developed LEP guidance, language-access plans, 
                    interpretation and translation practices, staff training, and 
                    tools for identifying and serving LEP populations. 
                    Language access increasingly became part of everyday program operations.
                  </p>

                </div>

              </div>


              {/* 2021 */}

              <div className="timeline-item">

                <div className="timeline-year">
                  2021
                </div>

                <div className="timeline-content">

                  <h3>
                    Executive Order 13985
                  </h3>

                  <p>
                    Executive Order 13985 expanded the federal focus on
                    advancing equity and examining barriers that can
                    produce unequal access or outcomes.
                  </p>

                  <p>
                    Although broader than language access, the order
                    placed questions of access and participation within
                    a larger federal equity framework.
                  </p>

                </div>

              </div>


              {/* 2023 */}

              <div className="timeline-item">

                <div className="timeline-year">
                  2023
                </div>

                <div className="timeline-content">

                  <h3>
                    Executive Order 14091
                  </h3>

                  <p>
                    Executive Order 14091 continued efforts to
                    institutionalize equity across federal agencies
                    and programs, emphasizing the identification and
                    reduction of barriers affecting underserved
                    communities.
                  </p>

                  <p>
                    For language-access programs, this broader policy
                    environment reinforced the importance of
                    understanding access barriers systematically.
                  </p>

                </div>

              </div>


              {/* 2025 */}

              <div className="timeline-item">

                <div className="timeline-year">
                  2025
                </div>

                <div className="timeline-content">

                  <h3>
                    Executive Order 14224
                  </h3>

                  <p>
                    Executive Order 14224 designated English as the
                    official language of the United States and revoked
                    Executive Order 13166.
                  </p>

                  <p>
                    The order did not require agencies to stop providing
                    documents, products, or services in languages other
                    than English. It also directed the Attorney General
                    to rescind prior guidance associated with Executive
                    Order 13166 and develop updated guidance.
                  </p>

                </div>

              </div>


              {/* 2025–Present */}

              <div className="timeline-item">

                <div className="timeline-year">
                  2025–Present
                </div>

                <div className="timeline-content">

                  <h3>
                    From policy history to implementation infrastructure
                  </h3>

                  <p>
                    Regardless of changes in federal directives,
                    organizations serving multilingual communities
                    continue to face practical questions about how
                    language needs are identified, how services are
                    requested, how interpretation and translation are
                    coordinated, and how performance is measured.
                  </p>

                  <p>
                    These activities can generate valuable operational
                    data, but that information is often distributed
                    across disconnected systems, vendors, spreadsheets,
                    case-management platforms, and administrative
                    processes.
                  </p>

                  <p>
                    OpenLEP addresses this gap by exploring how
                    language-access information can be organized into
                    infrastructure that supports monitoring, analysis,
                    interoperability, and continuous improvement.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ==================================================
            IMPLEMENTATION GAP
        ================================================== */}

        <section className="section about-content">
          <div className="section-container">

            <div className="about-grid">

              <div>

                <p className="eyebrow">
                  04 — THE IMPLEMENTATION GAP
                </p>

                <h2>
                  Policy can establish an obligation.
                  <span> Infrastructure makes it operational.</span>
                </h2>

              </div>

              <div>

                <p>
                  Language-access requirements can establish expectations
                  for meaningful access, but translating those expectations
                  into daily operations can be complex.
                </p>

                <p>
                  Organizations may need to identify the languages used by
                  their communities, receive and track service requests,
                  coordinate interpreters and translators, document
                  completed services, manage vendors, monitor response
                  times, and identify recurring gaps.
                </p>

                <p>
                  When these activities are managed through disconnected
                  processes, organizations can have difficulty developing
                  a consistent picture of language-access demand, service
                  delivery, cost, capacity, and performance.
                </p>

                <p>
                  OpenLEP focuses on this gap between policy and operations.
                  The framework provides shared concepts and technical
                  structures that can help organizations turn
                  language-access activity into usable information.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* ==================================================
            OPENLEP APPROACH
        ================================================== */}

        <section className="section approach-section">
          <div className="section-container">

            <div className="approach-heading">

              <p className="eyebrow">
                05 — THE OPENLEP APPROACH
              </p>

              <h2>
                Connecting policy, data,
                <span> technology, and evaluation.</span>
              </h2>

              <p>
                OpenLEP treats language access as an interconnected
                infrastructure problem rather than a collection of
                isolated translation and interpretation activities.
              </p>

            </div>


            <div className="approach-grid">

              <article className="approach-card">

                <span>
                  01
                </span>

                <h3>
                  Policy
                </h3>

                <p>
                  Requirements, standards, procedures, and
                  responsibilities that establish expectations for
                  language-access delivery.
                </p>

              </article>


              <article className="approach-card">

                <span>
                  02
                </span>

                <h3>
                  Data
                </h3>

                <p>
                  Information about language needs, requests, services,
                  response times, providers, capacity, costs, and
                  performance.
                </p>

              </article>


              <article className="approach-card">

                <span>
                  03
                </span>

                <h3>
                  Technology
                </h3>

                <p>
                  Interoperable systems, APIs, databases, dashboards,
                  and analytical tools that allow language-access
                  information to be connected and used.
                </p>

              </article>


              <article className="approach-card">

                <span>
                  04
                </span>

                <h3>
                  Evaluation
                </h3>

                <p>
                  Metrics and evidence that help organizations identify
                  gaps, understand performance, compare outcomes, and
                  improve practices over time.
                </p>

              </article>

            </div>

          </div>
        </section>


        {/* ==================================================
            OPEN PRINCIPLES
        ================================================== */}

        <section className="section about-highlight">
          <div className="section-container">

            <div className="highlight-box">

              <p className="eyebrow">
                06 — OPEN PRINCIPLES
              </p>

              <h2>
                Transparent.
                <span> Structured. Reusable.</span>
              </h2>

              <p>
                OpenLEP is built around openly documented concepts,
                structured data, interoperable components, and
                evidence-based evaluation.
              </p>

              <p>
                The framework is intended to be adaptable rather than
                prescriptive. Organizations can use different systems,
                vendors, workflows, and service models while still
                benefiting from shared definitions and interoperable
                structures.
              </p>

              <p>
                An open approach also allows researchers, developers,
                practitioners, and institutions to examine the framework,
                contribute improvements, build compatible tools, and
                evaluate how language-access infrastructure works in
                practice.
              </p>

            </div>

          </div>
        </section>


        {/* ==================================================
            CLOSING
        ================================================== */}

        <section className="section about-closing">
          <div className="section-container">

            <p className="closing-statement">
              The objective is simple: turn language-access commitments
              into infrastructure that can be measured, improved, and
              shared.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;