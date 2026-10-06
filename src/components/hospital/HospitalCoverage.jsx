import { coverage } from "../../data/dashboard/hospitalData";


function HospitalCoverage() {

  return (

    <section className="dashboard-panel">


      <div className="panel-header">

        <div>

          <span>
            LANGUAGE COVERAGE
          </span>


          <h2>
            Service Availability
          </h2>


          <p>
            Ability to fulfill language demand
            across major patient languages.
          </p>


        </div>

      </div>




      <div className="coverage-list">


        {coverage.map((item) => (

          <div
            className="coverage-row"
            key={item.language}
          >


            <div>

              <strong>
                {item.language}
              </strong>


              <small>
                {item.coverage}% coverage
              </small>


            </div>




            <div className="coverage-bar">

              <span

                className={item.status}

                style={{
                  width: `${item.coverage}%`,
                }}

              />

            </div>




            <span
              className={`status-badge ${item.status}`}
            >

              {
                item.status === "good"
                  ? "Covered"
                  : item.status === "warning"
                    ? "Watch"
                    : "Risk"
              }

            </span>



          </div>

        ))}


      </div>


    </section>

  );

}


export default HospitalCoverage;