function ExecutiveSummary() {

  const summaries = [

    {

      title: "Overall Compliance",

      value: "87%",

      trend: "+3%",

      description:
        "Compliance performance improved during the current reporting period.",

      status: "positive",

    },

    {

      title: "Highest Demand",

      value: "Spanish",

      trend: "+24%",

      description:
        "Spanish interpreter requests continue increasing across participating organizations.",

      status: "warning",

    },

    {

      title: "Highest Risk",

      value: "The Global Insitute for Linguistic",

      trend: "Review",

      description:
        "Operational performance remains below the recommended compliance threshold.",

      status: "critical",

    },

    {

      title: "AI Forecast",

      value: "89%",

      trend: "30 Days",

      description:
        "Projected enterprise compliance if current operational trends continue.",

      status: "positive",

    },

  ];

  return (

    <section 
      id="summary"
      className="dashboard-panel">

      <div className="panel-header">

        <div>

          <span className="panel-label">

            EXECUTIVE SUMMARY

          </span>

          <h2>

            Current Operational Status

          </h2>

          <p>

            High-level overview of enterprise language
            access performance across participating
            organizations.

          </p>

        </div>

      </div>

      <div className="summary-grid">

        {summaries.map((summary) => (

          <article

            key={summary.title}

            className={`summary-card ${summary.status}`}

          >

            <div className="summary-top">

              <span>

                {summary.title}

              </span>

              <strong>

                {summary.value}

              </strong>

            </div>

            <div className="summary-middle">

              <span className={`summary-trend ${summary.status}`}>

                {summary.trend}

              </span>

            </div>

            <p>

              {summary.description}

            </p>

          </article>

        ))}

      </div>

    </section>

  );

}

export default ExecutiveSummary;