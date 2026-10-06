
const cities = [
  {
    name: "Dallas",
    requests: "842 requests",
    level: "high",
    position: { left: "58%", top: "39%" },
  },
  {
    name: "Arlington",
    requests: "714 requests",
    level: "high",
    position: { left: "46%", top: "45%" },
  },
  {
    name: "Fort Worth",
    requests: "676 requests",
    level: "high",
    position: { left: "35%", top: "48%" },
  },
  {
    name: "Irving",
    requests: "421 requests",
    level: "medium",
    position: { left: "52%", top: "32%" },
  },
  {
    name: "Mesquite",
    requests: "318 requests",
    level: "medium",
    position: { left: "67%", top: "43%" },
  },
];


const regionalLanguages = [
  {
    name: "Spanish",
    level: "High",
    width: "88%",
  },
  {
    name: "Vietnamese",
    level: "Moderate",
    width: "52%",
  },
  {
    name: "Arabic",
    level: "Moderate",
    width: "38%",
  },
  {
    name: "Chinese",
    level: "Lower",
    width: "31%",
  },
];


function RegionalLanguageMap() {

  return (

    <section className="dashboard-panel regional-language-panel">


      {/* HEADER */}

      <div className="panel-header">

        <div>

          <span>
            LANGUAGE ACCESS GEOGRAPHY
          </span>

          <h2>
            DFW Regional Language Demand
          </h2>

          <p>
            Geographic view of language-access needs across
            the Dallas–Fort Worth region surrounding the hospital.
          </p>

        </div>


        <div className="map-controls">

          <button>
            Spanish <span>⌄</span>
          </button>

          <button>
            Demand <span>⌄</span>
          </button>

        </div>

      </div>




      <div className="regional-map-layout">



        {/* MAP */}

        <div className="dfw-map">


          <div className="map-region-title">
            TEXAS · DFW REGION
          </div>



          <svg
            className="texas-map"
            viewBox="0 0 700 520"
            aria-label="Texas map showing Dallas Fort Worth regional language demand"
          >

            <path
              className="texas-outline"
              d="
                M82 72
                L238 72
                L238 96
                L310 96
                L310 125
                L390 125
                L390 150
                L475 150
                L475 184
                L548 184
                L548 222
                L594 222
                L594 285
                L618 285
                L618 346
                L590 346
                L590 390
                L552 390
                L552 425
                L500 425
                L500 455
                L438 455
                L438 475
                L372 475
                L372 450
                L315 450
                L315 420
                L270 420
                L270 388
                L220 388
                L220 350
                L175 350
                L175 310
                L140 310
                L140 265
                L110 265
                L110 220
                L88 220
                L88 175
                L65 175
                L65 125
                L82 125
                Z
              "
            />


            <ellipse
              className="dfw-region"
              cx="410"
              cy="220"
              rx="105"
              ry="75"
            />


          </svg>





          {/* CITY MARKERS */}

          {cities.map((city) => (

            <div
              key={city.name}
              className={`map-point ${city.level}`}
              style={city.position}
            >

              <span></span>

              <div>

                <strong>
                  {city.name}
                </strong>

                <small>
                  {city.requests}
                </small>

              </div>

            </div>

          ))}




          {/* LEGEND */}

          <div className="map-legend">

            <span>
              <i className="legend-dot high"></i>
              High demand
            </span>


            <span>
              <i className="legend-dot medium"></i>
              Moderate
            </span>


            <span>
              <i className="legend-dot low"></i>
              Lower
            </span>

          </div>


        </div>






        {/* SUMMARY */}

        <div className="regional-language-summary">


          <div className="regional-summary-header">

            <span>
              REGIONAL OVERVIEW
            </span>

            <strong>
              DFW
            </strong>

          </div>




          <div className="regional-stat">

            <span>
              Primary language need
            </span>

            <strong>
              Spanish
            </strong>

            <small>
              Highest regional demand
            </small>

          </div>




          <div className="regional-stat">

            <span>
              High-demand areas
            </span>

            <strong>
              3
            </strong>

            <small>
              Require closer monitoring
            </small>

          </div>




          <div className="regional-stat">

            <span>
              Coverage risk
            </span>

            <strong className="warning">
              Moderate
            </strong>

            <small>
              Based on regional demand patterns
            </small>

          </div>





          <div className="regional-languages">


            {regionalLanguages.map((language) => (

              <div
                className="regional-language-row"
                key={language.name}
              >

                <div>

                  <strong>
                    {language.name}
                  </strong>

                  <span>
                    {language.level}
                  </span>

                </div>


                <div className="regional-bar">

                  <span
                    style={{
                      width: language.width,
                    }}
                  />

                </div>


              </div>

            ))}


          </div>





          <div className="map-source">

            <span>
              DATA CONTEXT
            </span>

            <p>
              Regional language patterns are informed by
              American Community Survey language-use data.
            </p>

          </div>



        </div>



      </div>


    </section>

  );

}


export default RegionalLanguageMap;