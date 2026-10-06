function HospitalDocuments() {

  return (

    <section className="dashboard-panel section-gap">


      <div className="panel-header">


        <div>

          <span>
            VITAL DOCUMENTS
          </span>


          <h2>
            Translated Document Coverage
          </h2>


          <p>
            Coverage of documents requiring language
            assistance for patient access.
          </p>


        </div>



        <div className="panel-total">

          <strong>
            89%
          </strong>

          <span>
            coverage
          </span>

        </div>


      </div>





      <div className="document-progress">


        <div className="document-track">

          <span
            style={{
              width: "89%",
            }}
          />

        </div>





        <div className="document-stats">


          <div>

            <span>
              Documents Requiring Translation
            </span>

            <strong>
              428
            </strong>

          </div>




          <div>

            <span>
              Translated
            </span>

            <strong>
              381
            </strong>

          </div>




          <div>

            <span>
              Pending
            </span>

            <strong className="warning-text">
              47
            </strong>

          </div>




          <div>

            <span>
              Target
            </span>

            <strong>
              95%
            </strong>

          </div>


        </div>


      </div>


    </section>

  );

}


export default HospitalDocuments;