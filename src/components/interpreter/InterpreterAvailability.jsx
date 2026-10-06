function InterpreterAvailability () {

    return(
                    <article className="interpreter-panel">

              <div className="interpreter-panel-header">

                <div>
                  <span className="interpreter-panel-label">
                    INTERPRETER AVAILABILITY
                  </span>

                  <h2>
                    Current Service Capacity
                  </h2>

                  <p>
                    Available interpreters compared with current
                    waiting requests.
                  </p>
                </div>

                <span className="interpreter-capacity-badge">
                  Live demonstration
                </span>

              </div>


              <div className="interpreter-availability-table">

                <div className="interpreter-table-header">

                  <span>
                    Language
                  </span>

                  <span>
                    Available
                  </span>

                  <span>
                    Waiting
                  </span>

                  <span>
                    Status
                  </span>

                </div>


                {availability.map((item) => (
                  <div
                    className="interpreter-table-row"
                    key={item.language}
                  >

                    <strong>
                      {item.language}
                    </strong>

                    <span>
                      {item.available}
                    </span>

                    <span>
                      {item.waiting}
                    </span>

                    <span
                      className={`availability-${item.statusClass}`}
                    >
                      {item.status}
                    </span>

                  </div>
                ))}

              </div>

            </article>
    )
}

export default InterpreterAvailability