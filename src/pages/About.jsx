import Footer from "../components/Footer";

function About() {
  return (
    <>
      <main className="inner-page">
        {/* HERO */}
        <section className="page-hero">
          <div className="section-container">
            <p className="eyebrow">ABOUT OPENLEP</p>

            <h1>
              From language-access policy to
              <span> measurable infrastructure.</span>
            </h1>

            <p>
              OpenLEP explores how organizations can move from language-access
              requirements and policies toward structured, measurable, and
              sustainable digital infrastructure.
            </p>
          </div>
        </section>

        {/* WHAT IS OPENLEP */}
        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">WHAT IS OPENLEP?</p>

                <h2>
                  An open framework for language-access infrastructure.
                </h2>
              </div>

              <div>
                <p>
                  Language access is more than translating a document or
                  providing an interpreter when a need arises. Effective
                  language-access programs can involve policies, language
                  identification, service requests, interpretation,
                  translation, staff responsibilities, technology, vendors,
                  documentation, and ongoing evaluation.
                </p>

                <p>
                  OpenLEP explores how these elements can be connected through
                  an open conceptual and technical framework. The goal is to
                  make language-access information more structured, measurable,
                  transparent, and useful to the organizations responsible for
                  delivering services.
                </p>

                <p>
                  The project is intended as an open-source initiative that can
                  be examined, adapted, and extended by researchers,
                  developers, public institutions, service organizations, and
                  language-access practitioners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HISTORICAL CONTEXT */}
        <section className="section historical-section">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">HISTORICAL CONTEXT</p>

              <h2>
                Language access has evolved through civil-rights policy,
                federal guidance, and institutional practice.
              </h2>

              <p>
                OpenLEP builds on decades of work intended to reduce barriers
                faced by people with limited English proficiency. The policy
                landscape has changed over time, but the practical challenge of
                delivering and evaluating language access remains.
              </p>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">1964</div>

                <div className="timeline-content">
                  <h3>Title VI of the Civil Rights Act</h3>

                  <p>
                    Title VI established a foundational federal civil-rights
                    protection by prohibiting discrimination based on race,
                    color, or national origin in programs and activities
                    receiving federal financial assistance.
                  </p>

                  <p>
                    Over time, federal guidance and enforcement interpreted
                    national-origin discrimination to include circumstances in
                    which limited English proficiency creates barriers to
                    meaningful access to federally assisted programs and
                    services.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2000</div>

                <div className="timeline-content">
                  <h3>Executive Order 13166</h3>

                  <p>
                    Executive Order 13166 directed federal agencies to improve
                    access to federally conducted and federally assisted
                    programs for people with limited English proficiency.
                  </p>

                  <p>
                    The order helped establish language access as an important
                    component of effective public-service delivery and
                    contributed to the development of agency language-access
                    plans, guidance, procedures, and implementation practices.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2021</div>

                <div className="timeline-content">
                  <h3>
                    Executive Order 13985 and the broader equity framework
                  </h3>

                  <p>
                    Executive Order 13985 expanded the federal focus on
                    advancing equity and addressing barriers affecting
                    underserved communities. Federal agencies were directed to
                    examine how policies and programs could produce unequal
                    access or outcomes.
                  </p>

                  <p>
                    Although the order was broader than language access, it
                    placed questions of access, participation, and barriers to
                    government services within a larger federal equity
                    framework.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2023</div>

                <div className="timeline-content">
                  <h3>
                    Executive Order 14091 and institutionalizing equity
                  </h3>

                  <p>
                    Executive Order 14091 continued efforts to institutionalize
                    equity across federal agencies and programs. It emphasized
                    identifying and addressing barriers that affect underserved
                    communities and improving access to government programs
                    and services.
                  </p>

                  <p>
                    For language-access programs, this broader policy
                    environment reinforced the importance of understanding
                    access barriers systematically rather than treating
                    translation and interpretation as isolated activities.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2025</div>

                <div className="timeline-content">
                  <h3>
                    Executive Order 14224 and a shift in federal policy
                  </h3>

                  <p>
                    Executive Order 14224 designated English as the official
                    language of the United States and revoked Executive Order
                    13166.
                  </p>

                  <p>
                    The order also stated that agencies were not required to
                    stop producing or providing documents, products, or
                    services in languages other than English. It directed the
                    Attorney General to rescind guidance issued pursuant to
                    Executive Order 13166 and develop updated guidance
                    consistent with applicable law.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2025–Present</div>

                <div className="timeline-content">
                  <h3>From policy history to implementation infrastructure</h3>

                  <p>
                    The federal policy environment continues to evolve.
                    Regardless of changes in federal directives, organizations
                    serving multilingual communities still face practical
                    questions about how language needs are identified, how
                    services are requested, how interpretation and translation
                    are coordinated, and how performance is measured.
                  </p>

                  <p>
                    These activities can generate valuable operational data,
                    but that information is often distributed across
                    disconnected systems, spreadsheets, vendors, case
                    management platforms, and administrative processes.
                  </p>

                  <p>
                    OpenLEP explores how this information can be organized into
                    a more structured infrastructure that supports monitoring,
                    analysis, interoperability, and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE IMPLEMENTATION GAP */}
        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">THE IMPLEMENTATION GAP</p>

                <h2>
                  A policy can establish an obligation. Infrastructure helps
                  organizations operationalize it.
                </h2>
              </div>

              <div>
                <p>
                  Language-access requirements can establish expectations for
                  meaningful access, but translating those expectations into
                  daily operations can be complex.
                </p>

                <p>
                  Organizations may need to identify the languages used by
                  their communities, receive and track language-service
                  requests, coordinate interpreters and translators, document
                  completed services, manage vendors, monitor response times,
                  and identify recurring gaps.
                </p>

                <p>
                  When these activities are managed through disconnected
                  processes, organizations may have difficulty developing a
                  consistent picture of language-access demand, service
                  delivery, cost, capacity, and performance.
                </p>

                <p>
                  OpenLEP focuses on this gap between policy and operations. It
                  explores whether shared data concepts, interoperable
                  components, APIs, dashboards, and evaluation methods can help
                  organizations turn language-access activity into usable
                  information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY OPENLEP */}
        <section className="section about-highlight">
          <div className="section-container">
            <div className="highlight-box">
              <p className="eyebrow">WHY OPENLEP</p>

              <h2>
                Turning language-access information into actionable insight.
              </h2>

              <p>
                Organizations cannot effectively manage what they cannot
                consistently observe. Understanding language-access demand
                requires more than knowing which languages are spoken. It can
                require understanding where requests occur, which services are
                being used, how quickly needs are addressed, where capacity is
                limited, and where people may encounter barriers.
              </p>

              <p>
                OpenLEP is designed around the idea that language-access data
                can become a management resource. Structured information can
                help organizations identify patterns, monitor performance,
                recognize service gaps, support planning, and evaluate whether
                interventions are producing better access.
              </p>

              <p>
                The framework is not intended to replace existing language-
                access policies, interpretation providers, translation
                services, or organizational responsibilities. Instead, it
                explores a technical layer for connecting the information
                generated by those activities.
              </p>
            </div>
          </div>
        </section>

        {/* THE OPENLEP APPROACH */}
        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">THE OPENLEP APPROACH</p>

                <h2>
                  Connecting policy, data, technology, and evaluation.
                </h2>
              </div>

              <div>
                <p>
                  OpenLEP can be understood as a framework connecting four
                  related layers of language-access infrastructure.
                </p>

                <p>
                  <strong>Policy:</strong> language-access requirements,
                  organizational policies, standards, procedures, and
                  responsibilities that establish expectations for service
                  delivery.
                </p>

                <p>
                  <strong>Data:</strong> information about language needs,
                  requests, services, response times, providers, capacity,
                  costs, and institutional performance.
                </p>

                <p>
                  <strong>Technology:</strong> interoperable systems, APIs,
                  dashboards, databases, and analytical tools that allow
                  language-access information to be collected, connected, and
                  used.
                </p>

                <p>
                  <strong>Evaluation:</strong> metrics and evidence that help
                  organizations understand performance, identify gaps, compare
                  outcomes, and improve language-access practices over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FROM DATA TO INFRASTRUCTURE */}
        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">FROM DATA TO INFRASTRUCTURE</p>

                <h2>
                  The goal is not simply to collect more data. It is to make
                  language-access information usable.
                </h2>
              </div>

              <div>
                <p>
                  A language-access program can generate information at many
                  points: when a person identifies a preferred language, when
                  a service request is submitted, when an interpreter is
                  assigned, when a translation is completed, or when a service
                  interaction is evaluated.
                </p>

                <p>
                  Without common structures, these pieces of information can
                  remain isolated. Different departments may use different
                  definitions, systems may not communicate with one another,
                  and important performance indicators may be difficult to
                  compare.
                </p>

                <p>
                  OpenLEP explores common concepts and technical structures
                  that could make this information more interoperable. The
                  objective is to create a foundation that organizations can
                  adapt to their own systems and operational requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="section about-highlight">
          <div className="section-container">
            <div className="highlight-box">
              <p className="eyebrow">OPEN PRINCIPLES</p>

              <h2>Transparent. Structured. Reusable.</h2>

              <p>
                OpenLEP is built around openly documented concepts, structured
                data, interoperable components, and evidence-based evaluation.
              </p>

              <p>
                The framework is intended to be adaptable rather than
                prescriptive. Different organizations may use different
                systems, vendors, workflows, and service models while still
                benefiting from shared definitions and interoperable
                structures.
              </p>

              <p>
                An open approach can also make it easier for researchers,
                developers, practitioners, and institutions to examine the
                framework, contribute improvements, build compatible tools, and
                evaluate how language-access infrastructure works in practice.
              </p>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="section about-content">
          <div className="section-container">
            <div className="about-grid">
              <div>
                <p className="eyebrow">THE LONG-TERM VISION</p>

                <h2>
                  Make language access something organizations can understand,
                  measure, and improve.
                </h2>
              </div>

              <div>
                <p>
                  Language access sits at the intersection of policy, public
                  service, technology, and human experience. The systems that
                  support it should reflect that complexity without making the
                  underlying information impossible to use.
                </p>

                <p>
                  OpenLEP explores a future in which language-access
                  infrastructure is more connected, observable, and
                  interoperable—giving organizations better tools to understand
                  demand, identify gaps, allocate resources, and improve
                  services.
                </p>

                <p>
                  The objective is simple: help turn language-access
                  commitments into infrastructure that can be measured,
                  improved, and shared.
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

export default About;