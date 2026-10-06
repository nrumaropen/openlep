function HospitalServiceLevel() {

  return (

    <section className="dashboard-panel">


      <div className="panel-header">

        <div>

          <span>
            SERVICE LEVEL
          </span>

          <h2>
            Interpreter Performance
          </h2>

          <p>
            Current performance against hospital targets.
          </p>

        </div>

      </div>


      <div className="sla-list">

        <div className="sla-item">
          <div>
            <span>
              Fulfillment Rate
            </span>
            <strong>
              96%
            </strong>
          </div>
          <div className="progress">
            <span
              style={{
                width: "96%",
              }}
            />
          </div>
          <small>
            Target ≥95%
          </small>
        </div>


        <div className="sla-item">

          <div>
            <span>
              Qualified Interpreter Usage
            </span>
            <strong>
              98.2%
            </strong>
          </div>


          <div className="progress">
            <span
              style={{
                width: "98.2%",
              }}
            />
          </div>


          <small>
            Target ≥95%
          </small>
        </div>

        <div className="sla-item">

          <div>

            <span>
              Average Response
            </span>


            <strong>
              8.4 min
            </strong>
          </div>
          <div className="response-scale">

            <span
              style={{
                width: "84%",
              }}
            />

            <i></i>

          </div>
          <small>
            Target under 10 minutes
          </small>
        </div>

      </div>
    </section>
  );

}


export default HospitalServiceLevel;