import { languages } from "../../data/dashboard/hospitalData";


function HospitalLanguageDemand() {

  return (

    <section className="dashboard-panel">


      <div className="panel-header">

        <div>

          <span>
            PATIENT LANGUAGE
          </span>

          <h2>
            Top Languages
          </h2>

          <p>
            Languages most frequently requested
            by patients.
          </p>

        </div>

      </div>



      <div className="language-list">


        {languages.map((language) => (

          <div
            className="language-item"
            key={language.name}
          >


            <div className="language-top">

              <strong>
                {language.name}
              </strong>


              <span>
                {language.percentage}%
              </span>


            </div>



            <div className="language-progress">

              <span
                style={{
                  width: `${language.percentage}%`,
                }}
              />

            </div>



            <small>
              {language.patients} patients
            </small>


          </div>

        ))}



      </div>


    </section>

  );

}


export default HospitalLanguageDemand;