function HospitalTrendChart() {

  return (

    <section className="dashboard-panel">


      <div className="panel-header">

        <div>

          <span>
            DEMAND TREND
          </span>

          <h2>
            Interpreter Requests
          </h2>

          <p>
            Monthly interpreter request volume and
            projected demand.
          </p>

        </div>


        <div className="panel-total">

          <strong>
            3,426
          </strong>

          <span>
            requests this month
          </span>

        </div>


      </div>



      <div className="trend-summary">


        <div>
          <span>
            Current Month
          </span>

          <strong>
            3,426
          </strong>

          <small>
            Requests
          </small>
        </div>



        <div className="positive">

          <span>
            Growth
          </span>

          <strong>
            +8.4%
          </strong>

          <small>
            vs. June
          </small>

        </div>



        <div>

          <span>
            Forecast
          </span>

          <strong>
            3,684
          </strong>

          <small>
            Next Month
          </small>

        </div>



        <div>

          <span>
            Confidence
          </span>

          <strong>
            92%
          </strong>

          <small>
            AI Prediction
          </small>

        </div>


      </div>





      <div className="trend-chart">


        <div className="chart-labels">

          <span>600</span>
          <span>450</span>
          <span>300</span>
          <span>150</span>
          <span>0</span>

        </div>



        <div className="chart-area">


          <svg
            viewBox="0 0 900 300"
            preserveAspectRatio="none"
          >

            <line x1="0" y1="20" x2="900" y2="20" />
            <line x1="0" y1="85" x2="900" y2="85" />
            <line x1="0" y1="150" x2="900" y2="150" />
            <line x1="0" y1="215" x2="900" y2="215" />
            <line x1="0" y1="280" x2="900" y2="280" />


            <polygon
              className="chart-fill"
              points="
                0,220
                140,190
                280,205
                420,135
                560,155
                700,82
                810,55
                900,42
                900,280
                0,280
              "
            />


            <polyline
              className="actual-line"
              points="
                0,220
                140,190
                280,205
                420,135
                560,155
                700,82
                810,55
              "
            />


            <polyline
              className="forecast-line"
              points="
                810,55
                900,38
              "
            />


            <line
              className="forecast-divider"
              x1="810"
              y1="20"
              x2="810"
              y2="280"
            />


            <circle
              className="chart-point"
              cx="810"
              cy="55"
              r="6"
            />


            <circle
              className="forecast-point"
              cx="900"
              cy="38"
              r="6"
            />


          </svg>





          <div className="chart-months">

            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Forecast</span>

          </div>





          <div className="chart-legend">


            <span>

              <i className="legend-actual"></i>
              Actual

            </span>



            <span>

              <i className="legend-forecast"></i>
              Forecast

            </span>


          </div>


        </div>


      </div>


    </section>

  );

}


export default HospitalTrendChart;