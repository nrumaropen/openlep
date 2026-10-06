function ActivityFeed() {

  const activities = [

    {

      time: "11:42",

      type: "critical",

      title: "Spanish Interpreter Demand Increased",

      description:

        "Interpreter requests increased by 24% across participating organizations.",

      category: "Demand",

    },

    {

      time: "11:15",

      type: "warning",

      title: "Institution D Below Compliance Target",

      description:

        "Overall compliance performance remains below the enterprise threshold.",

      category: "Compliance",

    },

    {

      time: "10:51",

      type: "success",

      title: "Arabic Coverage Expanded",

      description:

        "Additional interpreter capacity improved language service availability.",

      category: "Operations",

    },

    {

      time: "09:36",

      type: "success",

      title: "Documentation Audit Completed",

      description:

        "Required language-access documentation passed automated validation.",

      category: "Documentation",

    },

    {

      time: "09:02",

      type: "information",

      title: "Monthly Forecast Updated",

      description:

        "AI forecasting models generated updated demand projections.",

      category: "Forecast",

    },

    {

      time: "08:41",

      type: "information",

      title: "Compliance Report Published",

      description:

        "Enterprise compliance dashboard successfully refreshed.",

      category: "Reporting",

    },

  ];

  return (

    <section 
      id="activity"
      className="dashboard-panel">

      <div className="panel-header">

        <div>

          <span className="panel-label">

            ACTIVITY CENTER

          </span>

          <h2>

            Operational Activity

          </h2>

          <p>

            Recent events generated from OpenLEP
            monitoring, compliance evaluation,
            and language-access operations.

          </p>

        </div>

        <div className="activity-status">

          <span className="status-dot" />

          <span>

            Live Updates

          </span>

        </div>

      </div>

      <div className="activity-feed">

        {

          activities.map((activity) => (

            <article

              key={`${activity.time}-${activity.title}`}

              className={`activity-card ${activity.type}`}

            >

              <div className="activity-time">

                {activity.time}

              </div>

              <div className="activity-content">

                <div className="activity-header">

                  <strong>

                    {activity.title}

                  </strong>

                  <span>

                    {activity.category}

                  </span>

                </div>

                <p>

                  {activity.description}

                </p>

              </div>

              <div

                className={`activity-indicator ${activity.type}`}

              />

            </article>

          ))

        }

      </div>

      <div className="activity-footer">

        <div>

          <strong>

            Monitoring Status

          </strong>

          <p>

            OpenLEP continues monitoring language
            demand, interpreter utilization,
            compliance indicators, and operational
            performance in real time.

          </p>

        </div>

        <button>

          View Activity Log

        </button>

      </div>

    </section>

  );

}

export default ActivityFeed;