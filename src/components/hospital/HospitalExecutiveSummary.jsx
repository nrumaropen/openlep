function HospitalExecutiveSummary() {

  return (
    <section className="section-block">

      <div className="section-heading">

        <div>

          <span>
            EXECUTIVE SUMMARY
          </span>

          <h2>
            Operational Highlights
          </h2>

          <p>
            A quick view of the most important language
            access indicators across the hospital.
          </p>

        </div>

      </div>


      <div className="summary-grid">


        <article className="summary-card success">

          <div className="summary-icon">
            ↑
          </div>

          <span>
            BIGGEST IMPROVEMENT
          </span>

          <h3>
            Response Time
          </h3>


          <div className="summary-value-row">

            <strong>
              ↓ 21%
            </strong>

            <span className="summary-status">
              Improving
            </span>

          </div>


          <p>
            Average interpreter response improved by
            2.3 minutes compared with last month.
          </p>

        </article>



        <article className="summary-card warning">

          <div className="summary-icon">
            !
          </div>


          <span>
            HIGHEST OPERATIONAL RISK
          </span>


          <h3>
            Emergency Department
          </h3>


          <div className="summary-value-row">

            <strong>
              82%
            </strong>

            <span className="summary-status risk">
              High Risk
            </span>

          </div>


          <p>
            Evening interpreter demand increased
            significantly during the past 30 days.
          </p>


        </article>




        <article className="summary-card success">

          <div className="summary-icon">
            ✓
          </div>


          <span>
            TOP PERFORMING DEPARTMENT
          </span>


          <h3>
            Maternity
          </h3>


          <strong>
            98%
          </strong>


          <p>
            Highest language access compliance with
            consistently low response times.
          </p>


        </article>




        <article className="summary-card forecast">

          <div className="summary-icon">
            ↗
          </div>


          <span>
            PROJECTED NEXT MONTH
          </span>


          <h3>
            Interpreter Requests
          </h3>


          <strong>
            3,684
          </strong>


          <p>
            Forecast based on recent utilization
            and demand patterns.
          </p>


        </article>


      </div>


    </section>
  );
}


export default HospitalExecutiveSummary;