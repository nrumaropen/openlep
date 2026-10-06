function InterpreterRequestStatus() {


  const requestStatus = [
    {
      label: "Fulfilled",
      value: 91,
    },

    {
      label: "Pending",
      value: 6,
    },

    {
      label: "Unmet (Current Snapshot)",
      value: 3,
    },
  ];



  return (
    <article className="interpreter-panel">


      <div className="interpreter-panel-header">

        <div>

          <span className="interpreter-panel-label">
            REQUEST STATUS
          </span>


          <h2>
            Fulfillment
          </h2>


          <p>
            Current operational snapshot of request status.
          </p>

        </div>

      </div>



      <div className="interpreter-status-score">

        <div className="interpreter-score-ring">

          <div>

            <strong>
              91%
            </strong>


            <span>
              Fulfilled
            </span>

          </div>

        </div>

      </div>



      <div className="interpreter-status-items">


        {requestStatus.map((item)=>(
          
          <div
            className="interpreter-status-item"
            key={item.label}
          >

            <div>

              <span>
                {item.label}
              </span>


              <strong>
                {item.value}%
              </strong>

            </div>



            <div className="interpreter-status-track">

              <span
                style={{
                  width:`${item.value}%`
                }}
              />

            </div>


          </div>

        ))}


      </div>



    </article>
  );
}


export default InterpreterRequestStatus;