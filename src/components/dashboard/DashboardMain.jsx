import { useState } from "react";

function DashboardMain({

  organizations = [],
  languages = [],

}) {

  const [assistantOpen, setAssistantOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [filters, setFilters] = useState({

    period: "30",
    organization: "all",
    language: "all",

  });

  const updateFilter = (field) => (event) => {

    setFilters((previous) => ({

      ...previous,

      [field]: event.target.value,

    }));

  };

  const handleSend = () => {

    if (!message.trim()) return;

    console.log(message);

    setMessage("");

  };

  const useSuggestion = (text) => {

    setMessage(text);

  };

  return (

    <>

      <section className="dashboard-main">

        <div className="dashboard-container">

          <div className="dashboard-header">

            <div className="dashboard-title">

              <span className="dashboard-eyebrow">

                OPENLEP ENTERPRISE PLATFORM

              </span>

              <h1>

                Language Access Dashboard

              </h1>

              <p>

                Enterprise monitoring platform for Title VI,
                Section 1557, and public-sector language
                access compliance. Analyze interpreter
                demand, monitor operational performance,
                identify compliance risks, and support
                data-driven decision making across
                participating organizations.

              </p>

            </div>

            <div className="dashboard-status-card">

              <div className="status-row">

                <span className="status-dot" />

                <strong>

                  Live Database

                </strong>

              </div>

              <span>

                Connected to OpenLEP cloud infrastructure

              </span>

            </div>

          </div>

          <div className="dashboard-toolbar">

            <div className="toolbar-group">

              <label>

                Reporting Period

              </label>

              <select

                value={filters.period}

                onChange={updateFilter("period")}

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

            <div className="toolbar-group">

              <label>

                Organization

              </label>

              <select

                value={filters.organization}

                onChange={updateFilter("organization")}

              >

                <option value="all">

                  All Organizations

                </option>

                {organizations.map((organization) => (

                  <option

                    key={organization.id}

                    value={organization.id}

                  >

                    {organization.name}

                  </option>

                ))}

              </select>

            </div>

            <div className="toolbar-group">

              <label>

                Language

              </label>

              <select

                value={filters.language}

                onChange={updateFilter("language")}

              >

                <option value="all">

                  All Languages

                </option>

                {languages.map((language) => (

                  <option

                    key={language.id}

                    value={language.id}

                  >

                    {language.name}

                  </option>

                ))}

              </select>

            </div>

            <div className="toolbar-actions">

              <button

                className="assistant-button"

                onClick={() => setAssistantOpen(true)}

              >

                <span>

                  AI

                </span>

                Ask OpenLEP

              </button>

              <button

                className="export-button"

              >

                Export Dashboard

              </button>

            </div>

          </div>

          <div className="dashboard-highlights">

            <article className="highlight-card">

              <span>

                Active Organizations

              </span>

              <strong>

                {organizations.length}

              </strong>

              <small>

                Connected to OpenLEP

              </small>

            </article>

            <article className="highlight-card">

              <span>

                Languages

              </span>

              <strong>

                {languages.length}

              </strong>

              <small>

                Currently monitored

              </small>

            </article>

            <article className="highlight-card">

              <span>

                Compliance Status

              </span>

              <strong>

                Stable

              </strong>

              <small>

                Continuous monitoring active

              </small>

            </article>

            <article className="highlight-card">

              <span>

                AI Monitoring

              </span>

              <strong>

                Enabled

              </strong>

              <small>

                Forecast engine online

              </small>

            </article>

          </div>

        </div>

      </section>      {assistantOpen && (

        <>

          <div

            className="assistant-backdrop"

            onClick={() => setAssistantOpen(false)}

          />

          <aside

            className="assistant-panel"

            onClick={(event) => event.stopPropagation()}

          >

            <header className="assistant-header">

              <div>

                <span>

                  OPENLEP AI

                </span>

                <h2>

                  Ask OpenLEP

                </h2>

                <p>

                  Ask questions about language demand,
                  compliance performance, interpreter
                  utilization, participating organizations,
                  and operational trends.

                </p>

              </div>

              <button

                className="assistant-close"

                onClick={() => setAssistantOpen(false)}

              >

                &times;

              </button>

            </header>

            <div className="assistant-body">

              <div className="assistant-introduction">

                <div className="assistant-avatar">

                  AI

                </div>

                <div>

                  <strong>

                    Enterprise Language Access Intelligence

                  </strong>

                  <p>

                    OpenLEP analyzes language access
                    performance, identifies emerging
                    compliance risks, and generates
                    operational recommendations using
                    current organizational data.

                  </p>

                </div>

              </div>

              <div className="assistant-suggestions">

                <span>

                  Suggested Questions

                </span>

                <button

                  onClick={() =>

                    useSuggestion(

                      "Summarize current compliance performance."

                    )

                  }

                >

                  Summarize current compliance performance.

                </button>

                <button

                  onClick={() =>

                    useSuggestion(

                      "Which organizations require immediate attention?"

                    )

                  }

                >

                  Which organizations require immediate attention?

                </button>

                <button

                  onClick={() =>

                    useSuggestion(

                      "Which languages have the highest demand?"

                    )

                  }

                >

                  Which languages have the highest demand?

                </button>

                <button

                  onClick={() =>

                    useSuggestion(

                      "Explain the overall compliance score."

                    )

                  }

                >

                  Explain the overall compliance score.

                </button>

                <button

                  onClick={() =>

                    useSuggestion(

                      "Recommend operational priorities for the next month."

                    )

                  }

                >

                  Recommend operational priorities for the next month.

                </button>

                <button

                  onClick={() =>

                    useSuggestion(

                      "Generate an executive summary."

                    )

                  }

                >

                  Generate an executive summary.

                </button>

              </div>

            </div>

            <footer className="assistant-footer">

              <input

                type="text"

                value={message}

                placeholder="Ask OpenLEP..."

                onChange={(event) =>

                  setMessage(event.target.value)

                }

                onKeyDown={(event) => {

                  if (event.key === "Enter") {

                    handleSend();

                  }

                }}

              />

              <button

                onClick={handleSend}

              >

                Send

              </button>

            </footer>

          </aside>

        </>

      )}

    </>

  );

}

export default DashboardMain;