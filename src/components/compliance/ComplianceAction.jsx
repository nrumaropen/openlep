function ComplianceAction() {

    return (
    
            <section className="compliance-action">

              <div className="compliance-action-icon">
                !
              </div>

              <div>
                <span>RECOMMENDED ACTION</span>

                <h2>
                  Address {gapsBySeverity.high} high-priority language access
                  {gapsBySeverity.high === 1 ? " gap" : " gaps"} before the next review.
                </h2>

                <p>
                  Resolving current high-priority gaps could raise overall
                  compliance from {overallCompliance}% to approximately{" "}
                  {projectedCompliance}%.
                </p>
              </div>

            </section>
    )
}

export default ComplianceAction;