function AIInsightPanel({
  organizations = [],
  complianceScores = [],
  requestStats,
}) {

  const lowestOrganization =
    complianceScores.length > 0
      ? complianceScores.reduce((lowest, current) =>
          current.overall_score < lowest.overall_score
            ? current
            : lowest
        )
      : null;

  const organizationName =
    lowestOrganization
      ? organizations.find(
          (organization) =>
            organization.id ===
            lowestOrganization.organization_id
        )?.name
      : "No organization";

  const insights = [

    {
      priority: "high",
      title: "Increase Spanish Interpreter Capacity",
      description:
        "Interpreter demand remains highest for Spanish language services and should continue to be monitored as request volumes increase.",
      impact: "High",
    },

    {
      priority: "high",
      title: organizationName,
      description:
        "This organization currently has the lowest overall compliance score and should be prioritized for operational review.",
      impact: "High",
    },

    {
      priority: "medium",
      title: "Monitor Response Time",
      description:
        "Continue improving interpreter response times to support timely language access services.",
      impact: "Medium",
    },

    {
      priority: "low",
      title: "Maintain Documentation Quality",
      description:
        "Documentation practices remain consistent and should continue under current operational procedures.",
      impact: "Low",
    },

  ];

  const high = insights.filter(
    (item) => item.priority === "high"
  );

  const other = insights.filter(
    (item) => item.priority !== "high"
  );

  return (

    <section
      id="ai"
      className="dashboard-panel ai-panel"
    >

      <div className="panel-header">

        <div>

          <span className="panel-label">
            OPENLEP INSIGHTS
          </span>

          <h2>
            Operational Analysis
          </h2>

          <p>
            OpenLEP recommendations generated from
            language-access performance,
            interpreter utilization,
            and compliance indicators.
          </p>

        </div>

      </div>

      <section className="ai-overview">

        <div className="overview-card">

          <h3>
            Executive Assessment
          </h3>

          <p>

            OpenLEP analyzed{" "}
            <strong>
              {requestStats.total}
            </strong>{" "}
            interpreter requests.
            Overall fulfillment reached{" "}
            <strong>
              {requestStats.fulfillmentRate}%
            </strong>
            . Participating organizations continue
            to demonstrate generally stable
            language-access performance while
            several operational areas should
            continue to be monitored.

          </p>

        </div>

        <div className="forecast-card">

          <h3>
            Operational Outlook
          </h3>

          <p>

            Based on the current sample dataset,
            language-access demand is expected to
            continue increasing during the next
            reporting period.

          </p>

          <button>

            Generate Executive Report

          </button>

        </div>

      </section>

      <section className="recommendation-group">

        <div className="group-title">

          <h3>

            High Priority Recommendations

          </h3>

          <span>

            Immediate Action

          </span>

        </div>

        <div className="recommendation-grid">

          {high.map((item) => (

            <article
              key={item.title}
              className={`recommendation-card ${item.priority}`}
            >

              <div className="recommendation-top">

                <h4>

                  {item.title}

                </h4>

                <span
                  className={`priority ${item.priority}`}
                >

                  {item.impact}

                </span>

              </div>

              <p>

                {item.description}

              </p>

              <button>

                Review

              </button>

            </article>

          ))}

        </div>

      </section>

      <section className="recommendation-group">

        <div className="group-title">

          <h3>

            Additional Recommendations

          </h3>

          <span>

            Continuous Improvement

          </span>

        </div>

        <div className="recommendation-grid">

          {other.map((item) => (

            <article
              key={item.title}
              className={`recommendation-card ${item.priority}`}
            >

              <div className="recommendation-top">

                <h4>

                  {item.title}

                </h4>

                <span
                  className={`priority ${item.priority}`}
                >

                  {item.impact}

                </span>

              </div>

              <p>

                {item.description}

              </p>

              <button>

                Review

              </button>

            </article>

          ))}

        </div>

      </section>

    </section>

  );

}

export default AIInsightPanel;