function KPIGrid({

  metrics = []

}) {

  const defaultMetrics = [

    {

      label: "Language Requests",

      value: "12,486",

      change: "+14.2%",

      detail: "Current reporting period",

      icon: "↗",

      status: "positive",

    },

    {

      label: "Compliance Score",

      value: "87%",

      change: "+3.1%",

      detail: "Enterprise average",

      icon: "✓",

      status: "positive",

    },

    {

      label: "Languages Supported",

      value: "47",

      change: "+2",

      detail: "Active language services",

      icon: "🌐",

      status: "neutral",

    },

    {

      label: "Average Response",

      value: "18.6 min",

      change: "-2.4 min",

      detail: "Interpreter response time",

      icon: "⏱",

      status: "positive",

    }

  ];

  const dashboardMetrics =

    metrics.length > 0

      ? metrics

      : defaultMetrics;

  return (

    <section 
      id="kpis"
      className="dashboard-kpis">

      {

        dashboardMetrics.map((metric) => (

          <article

            key={metric.label}

            className="kpi-card"

          >

            <div className="kpi-header">

              <div className="kpi-icon">

                {metric.icon}

              </div>

              <span>

                {metric.label}

              </span>

            </div>

            <div className="kpi-body">

              <strong>

                {metric.value}

              </strong>

            </div>

            <div className="kpi-footer">

              <span

                className={`kpi-change ${metric.status}`}

              >

                {metric.change}

              </span>

              <small>

                {metric.detail}

              </small>

            </div>

          </article>

        ))

      }

    </section>

  );

}

export default KPIGrid;