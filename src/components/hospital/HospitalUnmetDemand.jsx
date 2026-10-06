function HospitalUnmetDemand() {

  return (

    <section className="dashboard-panel">


      <div className="panel-header">

        <div>

          <span>
            UNMET DEMAND
          </span>

          <h2>
            Unfulfilled Requests
          </h2>

          <p>
            Requests that were not fulfilled within
            the reporting period.
          </p>

        </div>

      </div>




      <div className="metric-highlight danger">

        <strong>
          137
        </strong>

        <span>
          unfulfilled requests
        </span>

        <small>
          4.0% of total demand
        </small>

      </div>




      <div className="mini-stat-grid">


        <div>

          <span>
            Primary Reason
          </span>

          <strong>
            Interpreter unavailable
          </strong>

        </div>



        <div>

          <span>
            Monthly Change
          </span>

          <strong className="negative">
            ↑ 12%
          </strong>

        </div>


      </div>


    </section>

  );

}


export default HospitalUnmetDemand;