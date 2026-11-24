function OrganizationTable({

  organizations = [],
  complianceScores = [],

}) {

  const rows = organizations.map((organization) => {

    const score = complianceScores.find(

      (item) =>

        Number(item.organization_id) === Number(organization.id)

    );

    return {

      ...organization,

      overallScore: score?.overall_score ?? 0,
      languageCoverage: score?.language_coverage ?? 0,
      responseTime: score?.response_time_score ?? 0,

    };

  });

  return (

    <section
      id="organizations"
      className="dashboard-panel"
    >

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

          <span>Organization</span>
          <span>Type</span>
          <span>Location</span>
          <span>Compliance</span>
          <span>Coverage</span>
          <span>Response</span>
          <span>Status</span>

        </div>

        {rows.map((organization) => {

          const status =

            organization.overallScore >= 90
              ? "Healthy"
              : organization.overallScore >= 80
              ? "Monitor"
              : "Attention";

          return (

            <article
              key={organization.id}
              className="organization-row"
            >

              <div className="organization-name">

                <div className="organization-avatar">

                  {organization.name?.charAt(0)?.toUpperCase()}

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

                {organization.city}, {organization.state}

              </span>

              <strong className="metric-score">

                {organization.overallScore}%

              </strong>

              <strong className="metric-score">

                {organization.languageCoverage}%

              </strong>

              <strong className="metric-score">

                {organization.responseTime}%

              </strong>

              <span
                className={`status-badge ${status.toLowerCase()}`}
              >

                {status}

              </span>

            </article>

          );

        })}

      </div>

      <div className="table-footer">

        <div>

          <strong>

            Enterprise Summary

          </strong>

          <p>

            Summary of language-access performance across participating sample institutions.

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