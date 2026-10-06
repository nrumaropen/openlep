function InterpreterKPIs() {

    return(
                    <div className="interpreter-kpis">

              {metrics.map((metric) => (
                <article
                  className="interpreter-kpi"
                  key={metric.label}
                >

                  <div className="interpreter-kpi-label">
                    {metric.label}
                  </div>

                  <strong>
                    {metric.value}

                    {metric.unit && (
                      <small>
                        {metric.unit}
                      </small>
                    )}
                  </strong>

                  <div
                    className={`interpreter-kpi-change ${metric.type}`}
                  >
                    <span>
                      {metric.change}
                    </span>

                    <span>
                      {metric.description}
                    </span>
                  </div>

                </article>
              ))}

            </div>

    )
}

export default InterpreterKPIs