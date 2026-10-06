function HospitalComplaints() {

  return (

    <section className="dashboard-panel">


      <div className="panel-header">

        <div>

          <span>
            COMPLAINTS
          </span>

          <h2>
            Language Access Complaints
          </h2>

          <p>
            Current complaint resolution performance.
          </p>

        </div>

      </div>




      <div className="complaint-grid">


        <div>

          <strong>
            8
          </strong>

          <span>
            Open
          </span>

        </div>



        <div>

          <strong>
            42
          </strong>

          <span>
            Resolved
          </span>

        </div>




        <div>

          <strong>
            95%
          </strong>

          <span>
            Resolution Rate
          </span>

        </div>




        <div>

          <strong>
            2.4
          </strong>

          <span>
            Avg. Days
          </span>

        </div>


      </div>


    </section>

  );

}


export default HospitalComplaints;