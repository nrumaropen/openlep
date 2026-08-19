

function ComplianceRulesPanel({
  score,
  rules,
  role,
}) {
  return (
    <section className="compliance-rules-panel">

      <div className="compliance-rules-header">

        <div>
          <span className="compliance-rules-label">
            COMPLIANCE
          </span>

          <h2>
            {role} Compliance
          </h2>

          <p>
            Section 1557 / Title VI operational compliance assessment
          </p>
        </div>


        <div className="compliance-score">

          <strong>
            {score}%
          </strong>

          <span>
            Compliance Score
          </span>

        </div>

      </div>


      <div className="compliance-rules-list">

        {rules.map((rule) => (

          <div
            className={`compliance-rule ${rule.status}`}
            key={rule.label}
          >

            <div className="compliance-rule-status">

              {rule.status === "pass" && "✓"}

              {rule.status === "fail" && "✕"}

              {rule.status === "flagged" && "!"}

            </div>


            <div className="compliance-rule-content">

              <strong>
                {rule.label}
              </strong>

              <span>
                {rule.citation}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


export default ComplianceRulesPanel;