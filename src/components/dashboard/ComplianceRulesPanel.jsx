function CompliancePanel() {

  const overallScore = 87;

  const categories = [

    {

      label: "Language Coverage",

      score: 92,

      status: "healthy",

    },

    {

      label: "Interpreter Availability",

      score: 91,

      status: "healthy",

    },

    {

      label: "Response Time",

      score: 78,

      status: "warning",

    },

    {

      label: "Documentation",

      score: 95,

      status: "healthy",

    },

    {

      label: "Complaint Resolution",

      score: 97,

      status: "healthy",

    },

  ];

  const rules = [

    {

      title: "Qualified Interpreter",

      status: "pass",

      description:

        "Interpreter services satisfied current operational requirements.",

    },

    {

      title: "Translated Documents",

      status: "pass",

      description:

        "Required translated materials were available when needed.",

    },

    {

      title: "Encounter Documentation",

      status: "pass",

      description:

        "Language-access documentation is complete.",

    },

    {

      title: "Interpreter Response Time",

      status: "warning",

      description:

        "Average response time exceeded the preferred target.",

    },

    {

      title: "Arabic Language Capacity",

      status: "warning",

      description:

        "Additional interpreter coverage is recommended.",

    },

    {

      title: "Complaint Resolution",

      status: "pass",

      description:

        "Complaints were resolved within policy requirements.",

    },

  ];

  return (

    <section className="dashboard-panel">

      <div className="panel-header">

        <div>

          <span className="panel-label">

            COMPLIANCE

          </span>

          <h2>

            Enterprise Compliance Overview

          </h2>

          <p>

            Current operational compliance across
            language-access services, interpreter
            performance, and documentation quality.

          </p>

        </div>

        <div className="compliance-score">

          <strong>

            {overallScore}%

          </strong>

          <span>

            Overall Score

          </span>

        </div>

      </div>

      <div className="compliance-grid">

        {

          categories.map((category) => (

            <article

              key={category.label}

              className="compliance-card"

            >

              <div className="compliance-card-header">

                <span>

                  {category.label}

                </span>

                <strong>

                  {category.score}%

                </strong>

              </div>

              <div className="compliance-track">

                <div

                  className={`compliance-fill ${category.status}`}

                  style={{

                    width: `${category.score}%`,

                  }}

                />

              </div>

            </article>

          ))

        }

      </div>

      <div className="rules-header">

        <strong>

          Rules Engine

        </strong>

        <span>

          {rules.length} Active Evaluations

        </span>

      </div>

      <div className="rules-grid">

        {

          rules.map((rule) => (

            <article

              key={rule.title}

              className={`rule-card ${rule.status}`}

            >

              <div

                className={`rule-icon ${rule.status}`}

              >

                {

                  rule.status === "pass"

                    ? "✓"

                    : "!"

                }

              </div>

              <div className="rule-content">

                <strong>

                  {rule.title}

                </strong>

                <p>

                  {rule.description}

                </p>

              </div>

            </article>

          ))

        }

      </div>

    </section>

  );

}

export default CompliancePanel;