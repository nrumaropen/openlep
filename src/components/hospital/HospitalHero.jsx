function HospitalHero({ aiOpen, setAIOpen }) {

  return (
    <section className="hospital-hero">

      <div className="hospital-container">

        <div className="hospital-hero-top">

          <div>

            <span className="hospital-eyebrow">
              HOSPITAL LANGUAGE ACCESS
            </span>

            <h1>
              Language Access
              <span> Operations.</span>
            </h1>

            <p>
              Monitor language assistance, interpreter demand,
              service performance, patient language needs,
              and Section 1557 compliance across the hospital.
            </p>

          </div>


          <div className="live-status">
            <span className="live-dot"></span>
            Live operations
          </div>

        </div>


        <div className="dashboard-controls">

          <button>
            Last 30 Days <span>⌄</span>
          </button>

          <button>
            All Departments <span>⌄</span>
          </button>

          <button>
            All Languages <span>⌄</span>
          </button>


          <button
            className="hospital-ai-button"
            onClick={() => setAIOpen(true)}
          >

            <span className="ai-button-icon">
              AI
            </span>

            Ask openLEP

          </button>


          <button className="export-button">
            Export Report
          </button>


        </div>


      </div>



      {aiOpen && (

        <>

          <div
            className="ai-backdrop"
            onClick={() => setAIOpen(false)}
          />


          <div className="ai-assistant">


            <div className="ai-assistant-header">

              <div>

                <span>
                  OPENLEP AI
                </span>

                <h2>
                  Ask OpenLEP
                </h2>

              </div>


              <button
                className="ai-close"
                onClick={() => setAIOpen(false)}
              >
                ×
              </button>


            </div>



            <div className="ai-assistant-body">


              <div className="ai-welcome">

                <div className="ai-welcome-icon">
                  AI
                </div>


                <div>

                  <strong>
                    How can I help?
                  </strong>


                  <p>
                    Ask questions about language access demand,
                    interpreter performance, departments, or compliance.
                  </p>

                </div>


              </div>



              <div className="ai-suggestions">

                <span>
                  Suggested questions
                </span>


                <button>
                  Why is demand increasing?
                </button>

                <button>
                  Show highest-risk departments
                </button>

                <button>
                  Explain our compliance score
                </button>

                <button>
                  Which languages need attention?
                </button>


              </div>


            </div>



            <div className="ai-chat-input">

              <input
                type="text"
                placeholder="Ask about your language access data..."
              />

              <button>
                ↑
              </button>

            </div>


          </div>


        </>

      )}


    </section>
  );
}


export default HospitalHero;