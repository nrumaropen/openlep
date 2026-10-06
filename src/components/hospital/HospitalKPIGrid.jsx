import { kpis } from "../../data/dashboard/hospitalData";


function HospitalKPIGrid() {

  return (

    <section className="kpi-grid">

      {kpis.map((kpi) => (

        <article
          className={`kpi-card ${kpi.warning ? "kpi-warning" : ""}`}
          key={kpi.label}
        >

          <div className="kpi-header">

            <span>
              {kpi.label}
            </span>

            <span className="kpi-menu">
              •••
            </span>

          </div>


          <strong>
            {kpi.value}
          </strong>


          <svg
            className="kpi-sparkline"
            viewBox="0 0 84 45"
            preserveAspectRatio="none"
          >

            <polyline points={kpi.points} />

          </svg>


          <small className={kpi.good ? "positive" : ""}>
            {kpi.detail}
          </small>


        </article>

      ))}


    </section>

  );

}


export default HospitalKPIGrid;