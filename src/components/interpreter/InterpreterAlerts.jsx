function InterpreterAlerts() {

    return(
                    <div className="interpreter-alert-grid">

              <article className="interpreter-panel">

                <div className="interpreter-panel-header">

                  <div>
                    <span className="interpreter-panel-label">
                      MONITORING
                    </span>

                    <h2>
                      Service Alerts
                    </h2>

                    <p>
                      Interpreter capacity and service issues
                      requiring attention.
                    </p>
                  </div>

                  <span className="interpreter-alert-count">
                    {alerts.length}
                  </span>

                </div>


                <div className="interpreter-alerts">

                  {alerts.map((alert) => (
                    <div
                      className="interpreter-alert"
                      key={alert.title}
                    >

                      <span
                        className={`interpreter-alert-symbol ${alert.type}`}
                      >
                        {alert.symbol}
                      </span>

                      <div>

                        <strong>
                          {alert.title}
                        </strong>

                        <p>
                          {alert.description}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </article>

            </div>

    )
}

export default InterpreterAlerts