import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function CompliancePanel({
  complianceScores = [],
  complianceRules = [],
  requestStats,
}) {

  const overallScore =
    complianceScores.length > 0
      ? Math.round(
          complianceScores.reduce(
            (sum, item) => sum + item.overall_score,
            0
          ) / complianceScores.length
        )
      : 87;

  const averageCoverage =
    complianceScores.length > 0
      ? Math.round(
          complianceScores.reduce(
            (sum, item) => sum + item.language_coverage,
            0
          ) / complianceScores.length
        )
      : 92;

  const averageResponse =
    complianceScores.length > 0
      ? Math.round(
          complianceScores.reduce(
            (sum, item) => sum + item.response_time_score,
            0
          ) / complianceScores.length
        )
      : 78;

  const averageDocumentation = 95;
  const averageComplaints = 97;

  const complianceItems = [
    {
      label: "Language Coverage",
      value: averageCoverage,
    },
    {
      label: "Request Fulfillment",
      value: requestStats.fulfillmentRate,
    },
    {
      label: "Response Time",
      value: averageResponse,
    },
    {
      label: "Documentation",
      value: averageDocumentation,
    },
    {
      label: "Complaint Resolution",
      value: averageComplaints,
    },
  ];

  const rules =
    complianceRules.length > 0
      ? complianceRules
      : [
          {
            status: "pass",
            title: "Qualified Interpreter",
            description:
              "Interpreter provided within the required response time.",
          },
          {
            status: "pass",
            title: "Translated Documents",
            description:
              "Required translated documents were available.",
          },
          {
            status: "pass",
            title: "Documentation",
            description:
              "Required documentation fields were completed.",
          },
          {
            status: "warning",
            title: "Response Time",
            description:
              "Average response time exceeds the preferred target.",
          },
          {
            status: "warning",
            title: "Arabic Capacity",
            description:
              "Additional interpreter capacity is recommended.",
          },
          {
            status: "pass",
            title: "Complaint Resolution",
            description:
              "Complaints were resolved within the required timeframe.",
          },
        ];

  const chartData = [
    {
      name: "Compliant",
      value: overallScore,
    },
    {
      name: "Remaining",
      value: 100 - overallScore,
    },
  ];

  const COLORS = [
    "#3d7352",
    "#e7ece8",
  ];

  return (
    <section
      id="compliance"
      className="dashboard-panel"
    >

      <div className="panel-header">

        <div>

          <span className="panel-label">
            COMPLIANCE
          </span>

          <h2>
            Operational Compliance
          </h2>

          <p>
            Compliance monitoring based on
            language-access performance and
            OpenLEP evaluation rules.
          </p>

        </div>

      </div>

      <div className="compliance-overview">

        <div className="compliance-chart">

          <ResponsiveContainer
            width={260}
            height={260}
          >

            <PieChart>

              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={82}
                outerRadius={102}
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >

                {chartData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

            </PieChart>

          </ResponsiveContainer>

          <div className="chart-center">

            <strong>
              {overallScore}%
            </strong>

            <span>
              Overall Compliance
            </span>

          </div>

        </div>

        <div className="compliance-metrics">

          {complianceItems.map((item) => (

            <div
              key={item.label}
              className="metric-row"
            >

              <span>
                {item.label}
              </span>

              <strong>
                {item.value}%
              </strong>

            </div>

          ))}

        </div>

      </div>

      <div className="rules-section">

        <div className="rules-section-header">

          <strong>
            Compliance Rules Engine
          </strong>

          <span>
            {rules.length} Active Rules
          </span>

        </div>

        <div className="rules-list">

          {rules.map((rule) => (

            <article
              key={rule.title}
              className={`rule-card ${rule.status}`}
            >

              <div
                className={`rule-icon ${rule.status}`}
              >

                {rule.status === "pass"
                  ? "✓"
                  : "!"}

              </div>

              <div>

                <strong>
                  {rule.title}
                </strong>

                <p>
                  {rule.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );

}

export default CompliancePanel;