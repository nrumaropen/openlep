import { compliance } from "../../data/dashboard/hospitalData";


function HospitalCompliance() {

  return (

    <section className="compliance-panel section-gap">


      <div className="compliance-overview">


        <div>

          <span>
            LEGAL COMPLIANCE
          </span>


          <h2>
            Section 1557 Compliance
          </h2>


          <p>
            Rules-based evaluation of language access,
            interpreter qualification, documentation,
            timeliness, and translated materials.
          </p>


        </div>




        <div className="compliance-score">

          <strong>
            91%
          </strong>

          <span>
            Compliant
          </span>

        </div>


      </div>





      <div className="compliance-indicators">


        {compliance.map((item) => (

          <div
            className="compliance-row"
            key={item.label}
          >

            <span>
              {item.label}
            </span>


            <strong className={item.status}>
              {item.value}
            </strong>


          </div>

        ))}


      </div>





      <div className="risk-matrix">


        <div className="risk-heading">

          <div>

            <span>
              RISK ASSESSMENT
            </span>

            <h3>
              Current Operational Risk
            </h3>

          </div>


          <strong>
            2 areas require attention
          </strong>

        </div>





        <div className="risk-grid">


          <div>
            <span>
              Qualified Interpreter
            </span>

            <strong className="low">
              Low Risk
            </strong>
          </div>


          <div>
            <span>
              Response Time
            </span>

            <strong className="medium">
              Medium Risk
            </strong>
          </div>


          <div>
            <span>
              Vital Documents
            </span>

            <strong className="high">
              High Risk
            </strong>
          </div>


          <div>
            <span>
              Documentation
            </span>

            <strong className="low">
              Low Risk
            </strong>
          </div>


          <div>
            <span>
              Complaint Resolution
            </span>

            <strong className="low">
              Low Risk
            </strong>
          </div>


        </div>


      </div>


    </section>

  );

}


export default HospitalCompliance;