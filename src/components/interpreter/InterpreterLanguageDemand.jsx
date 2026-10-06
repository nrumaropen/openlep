function InterpreterLanguageDemand() {

    return (
        
            <div className="interpreter-main-grid">

              {/* LANGUAGE DEMAND */}

              <article className="interpreter-panel">

                <div className="interpreter-panel-header">

                  <div>
                    <span className="interpreter-panel-label">
                      LANGUAGE DEMAND
                    </span>

                    <h2>
                      Interpreter Requests
                    </h2>

                    <p>
                      Requests by language during the selected
                      reporting period.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="interpreter-panel-action"
                  >
                    View details →
                  </button>

                </div>


                <div className="interpreter-language-chart">

                  {languages.map((item) => (
                    <div
                      className="interpreter-language-row"
                      key={item.language}
                    >

                      <div className="interpreter-language-name">
                        <span className="interpreter-language-dot" />

                        <span>
                          {item.language}
                        </span>
                      </div>

                      <div className="interpreter-demand-bar">
                        <span
                          style={{
                            width: item.width,
                          }}
                        />
                      </div>

                      <strong>
                        {item.requests}
                      </strong>

                      <small>
                        {item.percentage}
                      </small>

                    </div>
                  ))}

                </div>


                <div className="interpreter-chart-footer">

                  <span>
                    Total interpreter requests
                  </span>

                  <strong>
                    8,742
                  </strong>

                </div>

              </article>


              {/* REQUEST STATUS */}

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

                  {requestStatus.map((item) => (
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
                            width: `${item.value}%`,
                          }}
                        />
                      </div>

                    </div>
                  ))}

                </div>

              </article>

            </div>
    )
}

export default InterpreterLanguageDemand