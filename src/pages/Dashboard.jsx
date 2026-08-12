
import Footer from "../components/Footer";


function Dashboard() {
  const metrics = [
    {
      label: "Total Requests",
      value: "12,486",
      icon: "↗",
      change: "↑ 14.2%",
      description: "vs previous period",
      type: "positive",
    },
    {
      label: "Fulfillment Rate",
      value: "91.4%",
      icon: "✓",
      change: "↑ 3.8%",
      description: "vs previous period",
      type: "positive",
    },
    {
      label: "Languages",
      value: "47",
      icon: "文",
      change: "Active demand",
      description: "languages requested",
      type: "neutral",
    },
    {
      label: "Avg. Response",
      value: "18.6",
      unit: "min",
      icon: "◷",
      change: "↓ 6.4%",
      description: "faster response",
      type: "positive",
    },
    {
      label: "Unmet Requests",
      value: "1,074",
      icon: "!",
      change: "↑ 8.1%",
      description: "requires attention",
      type: "negative",
    },
    {
      label: "Compliance Score",
      value: "87%",
      icon: "◎",
      change: "↑ 4.2%",
      description: "this quarter",
      type: "positive",
    },
  ];

  const languageDemand = [
    {
      language: "Spanish",
      requests: "4,820",
      percentage: "38.6%",
      width: "88%",
    },
    {
      language: "Chinese",
      requests: "3,120",
      percentage: "25.0%",
      width: "65%",
    },
    {
      language: "Vietnamese",
      requests: "2,140",
      percentage: "17.1%",
      width: "45%",
    },
    {
      language: "Arabic",
      requests: "1,420",
      percentage: "11.4%",
      width: "30%",
    },
    {
      language: "Other",
      requests: "986",
      percentage: "7.9%",
      width: "21%",
    },
  ];

  const complianceItems = [
    {
      label: "Language Coverage",
      value: 92,
    },
    {
      label: "Request Fulfillment",
      value: 91,
    },
    {
      label: "Response Time",
      value: 78,
    },
  ];

  const institutions = [
    {
      name: "Institution A",
      type: "Regional Services",
      requests: "3,842",
      fulfillment: "96.2%",
      score: "94%",
      scoreClass: "good",
    },
    {
      name: "Institution B",
      type: "Public Services",
      requests: "3,214",
      fulfillment: "93.8%",
      score: "91%",
      scoreClass: "good",
    },
    {
      name: "Institution C",
      type: "Health Services",
      requests: "2,918",
      fulfillment: "89.4%",
      score: "87%",
      scoreClass: "average",
    },
    {
      name: "Institution D",
      type: "Community Services",
      requests: "2,512",
      fulfillment: "76.2%",
      score: "72%",
      scoreClass: "warning",
    },
  ];

  const alerts = [
    {
      type: "warning",
      title: "Spanish demand increased",
      description:
        "Requests increased 24% over the last three months.",
      symbol: "!",
    },
    {
      type: "danger",
      title: "Institution D below threshold",
      description: "Current compliance score is 72%.",
      symbol: "!",
    },
    {
      type: "success",
      title: "Institution A improved",
      description: "Compliance increased by 8% this quarter.",
      symbol: "✓",
    },
  ];

  const serviceGaps = [
    {
      title: "Spanish",
      value: "24%",
      description:
        "Demand growth over the last three months.",
      width: "78%",
      status: "High demand growth",
    },
    {
      title: "Institution D",
      value: "72%",
      description:
        "Current language-access compliance score.",
      width: "72%",
      status: "Below target threshold",
      warning: true,
    },
    {
      title: "Arabic",
      value: "82%",
      description:
        "Current request fulfillment rate.",
      width: "82%",
      status: "Capacity pressure",
      warning: true,
    },
    {
      title: "Response Time",
      value: "18.6m",
      description:
        "Average time to fulfill a request.",
      width: "61%",
      status: "Improving",
    },
  ];

  return (
    <>
      <main className="dashboard">
        {/* =====================================================
            DASHBOARD HERO
        ===================================================== */}

        <section className="dashboard-hero">
          <div className="dashboard-container">
            <div className="dashboard-hero-top">
              <div className="dashboard-hero-content">
                <span className="dashboard-eyebrow">
                  OPENLEP DEMONSTRATION
                </span>

                <h1>
                  <span className="title-accent">
                    Language Access
                  </span>{" "}
                  Dashboard
                </h1>

                <p>
                  Monitor language-access demand, service delivery,
                  institutional performance, compliance, and
                  emerging service gaps.
                </p>
              </div>

              <div className="dashboard-status">
                <span className="status-indicator" />
                <span>Demonstration Data</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DASHBOARD CONTENT
        ===================================================== */}

        <section className="dashboard-content">
          <div className="dashboard-container">

            {/* =================================================
                OVERVIEW
            ================================================= */}

            <div className="dashboard-section-intro">
              <div>
                <span className="dashboard-section-label">
                  REPORTING CONTROLS
                </span>

                <h2>Dashboard Overview</h2>

                <p>
                  Explore how language-access information can be
                  organized and monitored across an institution.
                </p>
              </div>
            </div>

            {/* =================================================
                CONTROLS
            ================================================= */}

            <div className="dashboard-controls">
              <div className="control-group">
                <label htmlFor="period">
                  Reporting Period
                </label>

                <select
                  id="period"
                  defaultValue="30"
                >
                  <option value="7">
                    Last 7 Days
                  </option>

                  <option value="30">
                    Last 30 Days
                  </option>

                  <option value="90">
                    Last 90 Days
                  </option>

                  <option value="365">
                    Last 12 Months
                  </option>
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="organization">
                  Organization
                </label>

                <select
                  id="organization"
                  defaultValue="all"
                >
                  <option value="all">
                    All Organizations
                  </option>

                  <option value="a">
                    Institution A
                  </option>

                  <option value="b">
                    Institution B
                  </option>

                  <option value="c">
                    Institution C
                  </option>

                  <option value="d">
                    Institution D
                  </option>
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="language">
                  Language
                </label>

                <select
                  id="language"
                  defaultValue="all"
                >
                  <option value="all">
                    All Languages
                  </option>

                  <option value="spanish">
                    Spanish
                  </option>

                  <option value="chinese">
                    Chinese
                  </option>

                  <option value="vietnamese">
                    Vietnamese
                  </option>

                  <option value="arabic">
                    Arabic
                  </option>
                </select>
              </div>

              <button
                type="button"
                className="filter-button"
              >
                Apply Filters
              </button>
            </div>

            {/* =================================================
                KPI CARDS
            ================================================= */}

            <div className="dashboard-kpis">
              {metrics.map((metric) => (
                <article
                  className="kpi-card"
                  key={metric.label}
                >
                  <div className="kpi-top">
                    <span>{metric.label}</span>

                    <span
                      className={`kpi-icon ${
                        metric.type === "negative"
                          ? "warning-icon"
                          : ""
                      }`}
                    >
                      {metric.icon}
                    </span>
                  </div>

                  <strong>
                    {metric.value}

                    {metric.unit && (
                      <small>
                        {metric.unit}
                      </small>
                    )}
                  </strong>

                  <div
                    className={`kpi-change ${metric.type}`}
                  >
                    <span>
                      {metric.change}
                    </span>

                    <span>
                      {metric.description}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* =================================================
                DEMAND + COMPLIANCE
            ================================================= */}

            <div className="dashboard-main-grid">

              {/* LANGUAGE DEMAND */}

              <article className="dashboard-panel demand-panel">
                <div className="panel-header">
                  <div>
                    <span className="panel-label">
                      SERVICE DEMAND
                    </span>

                    <h2>
                      Language Requests
                    </h2>

                    <p>
                      Distribution of language-access
                      requests during the selected period.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="panel-action"
                  >
                    View details →
                  </button>
                </div>

                <div className="demand-chart">
                  {languageDemand.map((item) => (
                    <div
                      className="demand-row"
                      key={item.language}
                    >
                      <div className="demand-language">
                        <span className="language-dot" />

                        <span>
                          {item.language}
                        </span>
                      </div>

                      <div className="demand-bar">
                        <span
                          style={{
                            width: item.width,
                          }}
                        />
                      </div>

                      <strong>
                        {item.requests}
                      </strong>

                      <small>
                        {item.percentage}
                      </small>
                    </div>
                  ))}
                </div>

                <div className="chart-footer">
                  <span>
                    Total language-access requests
                  </span>

                  <strong>
                    12,486
                  </strong>
                </div>
              </article>

              {/* COMPLIANCE */}

              <article className="dashboard-panel compliance-panel">
                <div className="panel-header">
                  <div>
                    <span className="panel-label">
                      PERFORMANCE
                    </span>

                    <h2>
                      Compliance
                    </h2>

                    <p>
                      Overall institutional performance.
                    </p>
                  </div>
                </div>

                <div className="compliance-score">
                  <div className="score-ring">
                    <div>
                      <strong>
                        87%
                      </strong>

                      <span>
                        Overall
                      </span>
                    </div>
                  </div>
                </div>

                <div className="compliance-items">
                  {complianceItems.map((item) => (
                    <div
                      className="compliance-item"
                      key={item.label}
                    >
                      <div>
                        <span>
                          {item.label}
                        </span>

                        <strong>
                          {item.value}%
                        </strong>
                      </div>

                      <div className="compliance-track">
                        <span
                          style={{
                            width: `${item.value}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* =================================================
                INSTITUTIONS + ALERTS
            ================================================= */}

            <div className="dashboard-secondary-grid">

              {/* INSTITUTIONS */}

              <article className="dashboard-panel">
                <div className="panel-header">
                  <div>
                    <span className="panel-label">
                      INSTITUTIONAL PERFORMANCE
                    </span>

                    <h2>
                      Organization Comparison
                    </h2>

                    <p>
                      Current language-access compliance
                      by institution.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="panel-action"
                  >
                    Compare →
                  </button>
                </div>

                <div className="institution-table">
                  <div className="institution-table-header">
                    <span>
                      Institution
                    </span>

                    <span>
                      Requests
                    </span>

                    <span>
                      Fulfillment
                    </span>

                    <span>
                      Score
                    </span>
                  </div>

                  {institutions.map((institution) => (
                    <div
                      className="institution-row"
                      key={institution.name}
                    >
                      <div>
                        <strong>
                          {institution.name}
                        </strong>

                        <span>
                          {institution.type}
                        </span>
                      </div>

                      <span>
                        {institution.requests}
                      </span>

                      <span
                        className={
                          institution.scoreClass ===
                          "warning"
                            ? "table-warning"
                            : "table-positive"
                        }
                      >
                        {institution.fulfillment}
                      </span>

                      <strong
                        className={`score-${institution.scoreClass}`}
                      >
                        {institution.score}
                      </strong>
                    </div>
                  ))}
                </div>
              </article>

              {/* ALERTS */}

              <article className="dashboard-panel alerts-panel">
                <div className="panel-header">
                  <div>
                    <span className="panel-label">
                      MONITORING
                    </span>

                    <h2>
                      Alerts
                    </h2>

                    <p>
                      Areas requiring attention.
                    </p>
                  </div>

                  <span className="alert-count">
                    {alerts.length}
                  </span>
                </div>

                <div className="alerts">
                  {alerts.map((alert) => (
                    <div
                      className="alert"
                      key={alert.title}
                    >
                      <span
                        className={`alert-symbol ${alert.type}`}
                      >
                        {alert.symbol}
                      </span>

                      <div>
                        <strong>
                          {alert.title}
                        </strong>

                        <p>
                          {alert.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* =================================================
                SERVICE GAPS
            ================================================= */}

            <article className="dashboard-panel service-gap-panel">
              <div className="panel-header">
                <div>
                  <span className="panel-label">
                    SERVICE GAPS
                  </span>

                  <h2>
                    Where support is most needed
                  </h2>

                  <p>
                    Languages and institutions where demand
                    is currently outpacing fulfillment capacity.
                  </p>
                </div>

                <span className="gap-status">
                  4 areas identified
                </span>
              </div>

              <div className="gap-grid">
                {serviceGaps.map((gap) => (
                  <div
                    className="gap-card"
                    key={gap.title}
                  >
                    <div className="gap-card-top">
                      <span>
                        {gap.title}
                      </span>

                      <strong>
                        {gap.value}
                      </strong>
                    </div>

                    <p>
                      {gap.description}
                    </p>

                    <div
                      className={`gap-meter ${
                        gap.warning
                          ? "warning"
                          : ""
                      }`}
                    >
                      <span
                        style={{
                          width: gap.width,
                        }}
                      />
                    </div>

                    <small>
                      {gap.status}
                    </small>
                  </div>
                ))}
              </div>
            </article>

            {/* =================================================
                AI INSIGHT
            ================================================= */}

            <section className="ai-insight">
              <div className="ai-mark">
                AI
              </div>

              <div className="ai-content">
                <div className="ai-heading">
                  <div>
                    <span className="dashboard-section-label">
                      OPENLEP INTELLIGENCE
                    </span>

                    <h2>
                      AI-Generated Insight
                    </h2>
                  </div>

                  <span className="ai-live">
                    ● Analysis
                  </span>
                </div>

                <p>
                  Language-access demand for Spanish
                  increased by approximately{" "}
                  <strong>24%</strong>{" "}
                  over the last three months while
                  fulfillment capacity remained
                  relatively stable.
                </p>

                <div className="ai-recommendation">
                  <strong>
                    Recommended action
                  </strong>

                  <span>
                    Review interpreter availability at
                    institutions with fulfillment rates
                    below 80%.
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;
