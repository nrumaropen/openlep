function RiskPanel() {

  const risks = [

    {

      category: "Spanish Demand",

      level: "high",

      score: 91,

      description:
        "Interpreter demand continues increasing across multiple organizations.",

    },

    {

      category: "Arabic Capacity",

      level: "medium",

      score: 67,

      description:
        "Current interpreter availability may not meet projected demand.",

    },

    {

      category: "Response Time",

      level: "medium",

      score: 74,

      description:
        "Average response time exceeds the preferred operational target.",

    },

    {

      category: "Documentation",

      level: "low",

      score: 96,

      description:
        "Documentation quality remains consistently compliant.",

    },

    {

      category: "Complaint Resolution",

      level: "low",

      score: 94,

      description:
        "Complaints continue to be resolved within expected timeframes.",

    },

  ];

  return (

    <section 
      id="risk"
      className="dashboard-panel">

      <div className="panel-header">

        <div>

          <span className="panel-label">

            RISK ASSESSMENT

          </span>

          <h2>

            Operational Risk Overview

          </h2>

          <p>

            Current operational risks identified through
            OpenLEP monitoring and predictive analysis.

          </p>

        </div>

        <div className="risk-summary">

          <strong>

            2

          </strong>

          <span>

            High Priority Risks

          </span>

        </div>

      </div>

      <div className="risk-list">

        {

          risks.map((risk) => (

            <article

              key={risk.category}

              className={`risk-card ${risk.level}`}

            >

              <div className="risk-top">

                <div>

                  <strong>

                    {risk.category}

                  </strong>

                  <span>

                    Risk Score {risk.score}%

                  </span>

                </div>

                <span

                  className={`risk-level ${risk.level}`}

                >

                  {risk.level.toUpperCase()}

                </span>

              </div>

              <div className="risk-progress">

                <div

                  className={`risk-progress-fill ${risk.level}`}

                  style={{

                    width: `${risk.score}%`

                  }}

                />

              </div>

              <p>

                {risk.description}

              </p>

            </article>

          ))

        }

      </div>

      <div className="risk-footer">

        <div>

          <strong>

            OpenLEP Recommendation

          </strong>

          <p>

            Increase Spanish interpreter capacity,
            monitor Arabic language availability,
            and continue improving response time
            performance across participating
            organizations.

          </p>

        </div>

        <button>

          View Risk Report

        </button>

      </div>

    </section>

  );

}

export default RiskPanel;