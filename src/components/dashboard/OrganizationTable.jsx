function OrganizationTable({

  organizations = [],
  complianceScores = [],

}) {

  const rows = organizations.map((organization) => {

    const score = complianceScores.find(

      (item) => item.organization_id === organization.id

    );

    return {

      ...organization,

      score,

    };

  });

  return (

    <section 
      id="organizations"
      className="dashboard-panel">

      <div className="panel-header">

        <div>

          <span className="panel-label">

            PARTICIPATING ORGANIZATIONS

          </span>

          <h2>

            Enterprise Performance

          </h2>

          <p>

            Organization-level operational performance,
            language coverage, and compliance monitoring.

          </p>

        </div>

        <button className="table-button">

          View All

        </button>

      </div>

      <div className="organization-table">

        <div className="organization-header">

          <span>

            Organization

          </span>

          <span>

            Type

          </span>

          <span>

            Location

          </span>

          <span>

            Compliance

          </span>

          <span>

            Coverage

          </span>

          <span>

            Response

          </span>

          <span>

            Status

          </span>

        </div>

        {

          rows.map((organization) => {

            const overall =

              organization.score?.overall_score ?? 0;

            const coverage =

              organization.score?.language_coverage ?? 0;

            const response =

              organization.score?.response_time_score ?? 0;

            const status =

              overall >= 90

                ? "Healthy"

                : overall >= 80

                ? "Monitor"

                : "Attention";

            return (

              <article

                key={organization.id}

                className="organization-row"

              >

                <div className="organization-name">

                  <div className="organization-avatar">

                    {

                      organization.name

                        ?.charAt(0)

                        ?.toUpperCase()

                    }

                  </div>

                  <div>

                    <strong>

                      {organization.name}

                    </strong>

                    <small>

                      {organization.organization_type}

                    </small>

                  </div>

                </div>

                <span>

                  {organization.organization_type}

                </span>

                <span>

                  {organization.city},

                  {" "}

                  {organization.state}

                </span>

                <strong className="metric-score">

                  {

                    overall

                      ? `${overall}%`

                      : "--"

                  }

                </strong>

                <strong className="metric-score">

                  {

                    coverage

                      ? `${coverage}%`

                      : "--"

                  }

                </strong>

                <strong className="metric-score">

                  {

                    response

                      ? `${response}%`

                      : "--"

                  }

                </strong>

                <span

                  className={`status-badge ${status.toLowerCase()}`}

                >

                  {status}

                </span>

              </article>

            );

          })

        }

      </div>

      <div className="table-footer">

        <div>

          <strong>

            Enterprise Summary

          </strong>

          <p>

            Organizations continue to maintain strong
            language-access performance with isolated
            operational risks requiring additional
            monitoring.

          </p>

        </div>

        <button>

          Export Organization Report

        </button>

      </div>

    </section>

  );

}

export default OrganizationTable;