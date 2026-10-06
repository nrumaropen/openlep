function ComplianceKPIs({
  overallCompliance,
  interpreterFulfillment,
  documentCompliance,
  openGapsCount,
  highPriority,
  serviceEvents
}) {

  return (

    <div className="compliance-kpis">


      <div className="compliance-card">

        <p>
          Overall Compliance
        </p>

        <strong>
          {overallCompliance}%
        </strong>

        <span className="compliance-positive">
          Computed from sample records
        </span>

      </div>



      <div className="compliance-card">

        <p>
          Interpreter Fulfillment
        </p>

        <strong>
          {interpreterFulfillment}%
        </strong>

        <span className="compliance-positive">

          {
            serviceEvents.filter(
              (e) => e.requires_interpreter
            ).length
          }

          {" "}
          interpreter events tracked

        </span>

      </div>




      <div className="compliance-card">

        <p>
          Document Compliance
        </p>

        <strong>
          {documentCompliance}%
        </strong>

        <span
          className={
            documentCompliance < 90
            ? "compliance-warning"
            : "compliance-positive"
          }
        >

          {
            documentCompliance < 90
            ? "Needs attention"
            : "On track"
          }

        </span>

      </div>




      <div className="compliance-card">

        <p>
          Open Compliance Gaps
        </p>

        <strong>
          {openGapsCount}
        </strong>

        <span className="compliance-danger">

          {highPriority} high priority

        </span>

      </div>



    </div>

  );

}


export default ComplianceKPIs;