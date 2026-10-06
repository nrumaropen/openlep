function HospitalServiceUtilization() {

  return (

    <section className="dashboard-panel section-gap">


      <div className="panel-header">

        <div>

          <span>
            SERVICE UTILIZATION
          </span>


          <h2>
            Interpretation Methods
          </h2>


          <p>
            How patients receive language assistance.
          </p>


        </div>

      </div>




      <div className="service-grid">


        <div className="service-card">


          <div className="service-circle phone">
            43%
          </div>


          <div>

            <strong>
              Phone
            </strong>

            <span>
              1,462 requests
            </span>

            <small>
              6 min average
            </small>

          </div>


        </div>





        <div className="service-card">


          <div className="service-circle video">
            35%
          </div>


          <div>

            <strong>
              Video
            </strong>

            <span>
              1,208 requests
            </span>

            <small>
              9 min average
            </small>

          </div>


        </div>





        <div className="service-card">


          <div className="service-circle inperson">
            22%
          </div>


          <div>

            <strong>
              In-person
            </strong>

            <span>
              756 requests
            </span>

            <small>
              14 min average
            </small>

          </div>


        </div>


      </div>


    </section>

  );

}


export default HospitalServiceUtilization;