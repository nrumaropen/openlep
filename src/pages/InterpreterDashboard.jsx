import Footer from "../components/Footer";
import ComplianceRulesPanel from "../components/ComplianceRulesPanel";

function InterpreterDashboard() {
  const metrics = [
    {
      label: "Interpreter Requests",
      value: "8,742",
      change: "↑ 12.8%",
      description: "vs previous period",
      type: "positive",
    },
    {
      label: "Fulfillment Rate",
      value: "91.4%",
      change: "↑ 3.8%",
      description: "requests fulfilled",
      type: "positive",
    },
    {
      label: "Avg. Response",
      value: "18.6",
      unit: "min",
      change: "↓ 6.4%",
      description: "faster response",
      type: "positive",
    },
    {
      label: "Unmet Requests (Period Total)",
      value: "764",
      change: "↑ 8.1%",
      description: "unfulfilled requests during reporting period",
      type: "negative",
    },
    {
      label: "Active Languages",
      value: "47",
      change: "Languages",
      description: "with current demand",
      type: "neutral",
    },
    {
      label: "Interpreter Utilization",
      value: "84%",
      change: "↑ 5.2%",
      description: "available capacity used",
      type: "positive",
    },
  ];

  const languages = [
    {
      language: "Spanish",
      requests: "3,284",
      percentage: "37.6%",
      width: "88%",
    },
    {
      language: "Chinese",
      requests: "1,842",
      percentage: "21.1%",
      width: "62%",
    },
    {
      language: "Vietnamese",
      requests: "1,126",
      percentage: "12.9%",
      width: "43%",
    },
    {
      language: "Arabic",
      requests: "864",
      percentage: "9.9%",
      width: "32%",
    },
    {
      language: "Other",
      requests: "1,626",
      percentage: "18.5%",
      width: "52%",
    },
  ];

  const requestStatus = [
    {
      label: "Fulfilled",
      value: 91,
    },
    {
      label: "Pending",
      value: 6,
    },
    {
      label: "Unmet (Current Snapshot)",
      value: 3,
    },
  ];

  const availability = [
    {
      language: "Spanish",
      available: "42",
      waiting: "8",
      status: "Available",
      statusClass: "good",
    },
    {
      language: "Chinese",
      available: "18",
      waiting: "4",
      status: "Available",
      statusClass: "good",
    },
    {
      language: "Vietnamese",
      available: "7",
      waiting: "9",
      status: "Capacity pressure",
      statusClass: "warning",
    },
    {
      language: "Arabic",
      available: "5",
      waiting: "11",
      status: "High demand",
      statusClass: "danger",
    },
  ];

  const alerts = [
    {
      type: "warning",
      symbol: "!",
      title: "Vietnamese capacity pressure",
      description:
        "Waiting requests increased 18% during the selected period.",
    },
    {
      type: "danger",
      symbol: "!",
      title: "Arabic requests exceeding capacity",
      description:
        "11 requests are currently waiting for interpreter assignment.",
    },
    {
      type: "success",
      symbol: "✓",
      title: "Spanish fulfillment improved",
      description:
        "Fulfillment increased from 87% to 94% this quarter.",
    },
  ];

  const serviceGaps = [
    {
      title: "Arabic",
      value: "11",
      description:
        "Requests currently waiting for interpreter assignment.",
      width: "82%",
      status: "High demand",
      warning: true,
    },
    {
      title: "Vietnamese",
      value: "9",
      description:
        "Requests waiting compared with available interpreters.",
      width: "68%",
      status: "Capacity pressure",
      warning: true,
    },
    {
      title: "Response Time",
      value: "18.6m",
      description:
        "Average time from request to interpreter assignment.",
      width: "61%",
      status: "Improving",
    },
    {
      title: "Utilization",
      value: "84%",
      description:
        "Current interpreter capacity being utilized.",
      width: "84%",
      status: "Healthy utilization",
    },
  ];

  const complianceRules = [
    {
      label: "Qualified interpreter utilization meets target",
      status: "pass",
      citation: "Title VI DOJ Guidance §III",
    },
    {
      label: "Interpreter response time within operational threshold",
      status: "pass",
      citation: "Section 1557, 45 CFR §92.201(c)",
    },
    {
      label: "High-demand language capacity requires review",
      status: "flagged",
      citation: "Title VI meaningful access requirement",
    },
    {
      label: "Complaint resolution tracking complete",
      status: "pass",
      citation: "Title VI grievance procedure requirement",
    },
  ];

  return (
    <>
      <main className="interpreter-dashboard">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="interpreter-hero">
          <div className="interpreter-container">

            <div className="interpreter-hero-top">

              <div className="interpreter-hero-content">

                <span className="interpreter-eyebrow">
                  OPENLEP DEMONSTRATION
                </span>

                <h1>
                  <span>Interpreter</span>{" "}
                  Services
                </h1>

                <p>
                  Monitor interpreter demand, service availability,
                  request fulfillment, response times, and emerging
                  language-access capacity gaps.
                </p>

              </div>

              <div className="interpreter-status">
                <span className="status-dot" />
                <span>Demonstration Data</span>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <section className="interpreter-content">
          <div className="interpreter-container">

            {/* =================================================
                OVERVIEW
            ================================================= */}

            <div className="interpreter-section-intro">

              <div>
                <span className="interpreter-section-label">
                  INTERPRETER OPERATIONS
                </span>

                <h2>
                  Service Overview
                </h2>

                <p>
                  Explore how interpreter service activity can be
                  monitored across languages, institutions, and
                  reporting periods.
                </p>
              </div>

            </div>


            {/* =================================================
                CONTROLS
            ================================================= */}

            <div className="interpreter-controls">

              <div className="interpreter-control">
                <label htmlFor="interpreter-period">
                  Reporting Period
                </label>

                <select
                  id="interpreter-period"
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


              <div className="interpreter-control">
                <label htmlFor="interpreter-mode">
                  Service Type
                </label>

                <select
                  id="interpreter-mode"
                  defaultValue="all"
                >
                  <option value="all">
                    All Services
                  </option>

                  <option value="onsite">
                    On-site
                  </option>

                  <option value="remote">
                    Remote / Video
                  </option>

                  <option value="phone">
                    Telephone
                  </option>
                </select>
              </div>


              <div className="interpreter-control">
                <label htmlFor="interpreter-language">
                  Language
                </label>

                <select
                  id="interpreter-language"
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
                className="interpreter-filter-button"
              >
                Apply Filters
              </button>

            </div>


            {/* =================================================
                KPI CARDS
            ================================================= */}

            <div className="interpreter-kpis">

              {metrics.map((metric) => (
                <article
                  className="interpreter-kpi"
                  key={metric.label}
                >

                  <div className="interpreter-kpi-label">
                    {metric.label}
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
                    className={`interpreter-kpi-change ${metric.type}`}
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
                LANGUAGE DEMAND + REQUEST STATUS
            ================================================= */}

            <div className="interpreter-main-grid">

              {/* LANGUAGE DEMAND */}

              <article className="interpreter-panel">

                <div className="interpreter-panel-header">

                  <div>
                    <span className="interpreter-panel-label">
                      LANGUAGE DEMAND
                    </span>

                    <h2>
                      Interpreter Requests
                    </h2>

                    <p>
                      Requests by language during the selected
                      reporting period.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="interpreter-panel-action"
                  >
                    View details →
                  </button>

                </div>


                <div className="interpreter-language-chart">

                  {languages.map((item) => (
                    <div
                      className="interpreter-language-row"
                      key={item.language}
                    >

                      <div className="interpreter-language-name">
                        <span className="interpreter-language-dot" />

                        <span>
                          {item.language}
                        </span>
                      </div>

                      <div className="interpreter-demand-bar">
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


                <div className="interpreter-chart-footer">

                  <span>
                    Total interpreter requests
                  </span>

                  <strong>
                    8,742
                  </strong>

                </div>

              </article>


              {/* REQUEST STATUS */}

              <article className="interpreter-panel">

                <div className="interpreter-panel-header">

                  <div>
                    <span className="interpreter-panel-label">
                      REQUEST STATUS
                    </span>

                    <h2>
                      Fulfillment
                    </h2>

                    <p>
                      Current operational snapshot of request status.
                    </p>
                  </div>

                </div>


                <div className="interpreter-status-score">

                  <div className="interpreter-score-ring">

                    <div>
                      <strong>
                        91%
                      </strong>

                      <span>
                        Fulfilled
                      </span>
                    </div>

                  </div>

                </div>


                <div className="interpreter-status-items">

                  {requestStatus.map((item) => (
                    <div
                      className="interpreter-status-item"
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

                      <div className="interpreter-status-track">
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
                AVAILABILITY
            ================================================= */}

            <article className="interpreter-panel">

              <div className="interpreter-panel-header">

                <div>
                  <span className="interpreter-panel-label">
                    INTERPRETER AVAILABILITY
                  </span>

                  <h2>
                    Current Service Capacity
                  </h2>

                  <p>
                    Available interpreters compared with current
                    waiting requests.
                  </p>
                </div>

                <span className="interpreter-capacity-badge">
                  Live demonstration
                </span>

              </div>


              <div className="interpreter-availability-table">

                <div className="interpreter-table-header">

                  <span>
                    Language
                  </span>

                  <span>
                    Available
                  </span>

                  <span>
                    Waiting
                  </span>

                  <span>
                    Status
                  </span>

                </div>


                {availability.map((item) => (
                  <div
                    className="interpreter-table-row"
                    key={item.language}
                  >

                    <strong>
                      {item.language}
                    </strong>

                    <span>
                      {item.available}
                    </span>

                    <span>
                      {item.waiting}
                    </span>

                    <span
                      className={`availability-${item.statusClass}`}
                    >
                      {item.status}
                    </span>

                  </div>
                ))}

              </div>

            </article>


            {/* =================================================
                ALERTS
            ================================================= */}

            <div className="interpreter-alert-grid">

              <article className="interpreter-panel">

                <div className="interpreter-panel-header">

                  <div>
                    <span className="interpreter-panel-label">
                      MONITORING
                    </span>

                    <h2>
                      Service Alerts
                    </h2>

                    <p>
                      Interpreter capacity and service issues
                      requiring attention.
                    </p>
                  </div>

                  <span className="interpreter-alert-count">
                    {alerts.length}
                  </span>

                </div>


                <div className="interpreter-alerts">

                  {alerts.map((alert) => (
                    <div
                      className="interpreter-alert"
                      key={alert.title}
                    >

                      <span
                        className={`interpreter-alert-symbol ${alert.type}`}
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

            <article className="interpreter-panel interpreter-gap-panel">

              <div className="interpreter-panel-header">

                <div>
                  <span className="interpreter-panel-label">
                    SERVICE GAPS
                  </span>

                  <h2>
                    Where interpreter support is most needed
                  </h2>

                  <p>
                    Languages and operational indicators where
                    demand is placing pressure on service capacity.
                  </p>
                </div>

                <span className="interpreter-gap-status">
                  4 areas identified
                </span>

              </div>


              <div className="interpreter-gap-grid">

                {serviceGaps.map((gap) => (
                  <div
                    className="interpreter-gap-card"
                    key={gap.title}
                  >

                    <div className="interpreter-gap-top">

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
                      className={`interpreter-gap-meter ${
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

          {/* =====================================================
              COMPLIANCE RULES ENGINE
          ===================================================== */}

          <ComplianceRulesPanel
            role="Interpreter Services"
            score={91}
            rules={complianceRules}
          />


            {/* =================================================
                AI INSIGHT
            ================================================= */}

            <section className="interpreter-ai">

              <div className="interpreter-ai-mark">
                AI
              </div>

              <div className="interpreter-ai-content">

                <div className="interpreter-ai-heading">

                  <div>
                    <span className="interpreter-section-label">
                      OPENLEP INTELLIGENCE
                    </span>

                    <h2>
                      AI-Generated Insight
                    </h2>
                  </div>

                  <span className="interpreter-ai-live">
                    ● Analysis
                  </span>

                </div>


                <p>
                  Interpreter demand for{" "}
                  <strong>Arabic and Vietnamese</strong>{" "}
                  is currently placing the greatest pressure
                  on available service capacity. Waiting
                  requests are increasing while interpreter
                  availability remains limited.
                </p>


                <div className="interpreter-recommendation">

                  <strong>
                    Recommended action
                  </strong>

                  <span>
                    Review interpreter availability during
                    peak demand periods and prioritize
                    capacity planning for high-demand languages.
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

export default InterpreterDashboard;