function AIInsightPanel() {

  const insights = [

    {
      priority: "high",
      title: "Increase Spanish Interpreter Capacity",
      description:
        "Spanish interpreter requests increased by 24% during the current reporting period, creating sustained pressure on available resources.",
      impact: "High",
    },

    {
      priority: "high",
      title: "Review Institution D",
      description:
        "Operational performance remains below the recommended compliance threshold across multiple language-access indicators.",
      impact: "High",
    },

    {
      priority: "medium",
      title: "Expand Arabic Coverage",
      description:
        "Projected demand indicates additional Arabic interpreter capacity may be required within the next reporting cycle.",
      impact: "Medium",
    },

    {
      priority: "low",
      title: "Maintain Documentation Quality",
      description:
        "Documentation compliance remains strong and should continue under current operational procedures.",
      impact: "Low",
    },

  ];

  const high = insights.filter(
    item => item.priority === "high"
  );

  const other = insights.filter(
    item => item.priority !== "high"
  );

  return (

    <section
      id="ai"
      className="dashboard-panel ai-panel"
    >

      <div className="panel-header">

        <div>

          <span className="panel-label">
            OPENLEP INTELLIGENCE
          </span>

          <h2>
            AI Operational Analysis
          </h2>

          <p>
            AI-generated recommendations based on enterprise
            language-access performance, compliance indicators,
            and operational trends.
          </p>

        </div>

        <div className="ai-status">

          <strong>91%</strong>

          <span>Confidence</span>

        </div>

      </div>


      <section className="ai-overview">

        <div className="overview-card">

          <h3>
            Executive Assessment
          </h3>

          <p>

            Current language-access operations remain stable
            across participating organizations. Interpreter
            demand continues increasing, particularly for
            Spanish language services, while enterprise
            compliance remains above target performance.

          </p>

        </div>

        <div className="forecast-card">

          <h3>
            Forecast
          </h3>

          <p>

            Enterprise compliance is projected to remain
            above <strong>89%</strong> during the next
            reporting period if recommended actions are
            implemented.

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

          {high.map((item)=>(

            <article
              key={item.title}
              className={`recommendation-card ${item.priority}`}
            >

              <div className="recommendation-top">

                <h4>

                  {item.title}

                </h4>

                <span className={`priority ${item.priority}`}>

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

          {other.map((item)=>(

            <article
              key={item.title}
              className={`recommendation-card ${item.priority}`}
            >

              <div className="recommendation-top">

                <h4>

                  {item.title}

                </h4>

                <span className={`priority ${item.priority}`}>

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