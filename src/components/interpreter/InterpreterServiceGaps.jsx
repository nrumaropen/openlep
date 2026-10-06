function InterpreterServiceGaps() {

    return(
        
        <article className="interpreter-panel interpreter-gap-panel">
        
                      <div className="interpreter-panel-header">
        
                        <div>
                          <span className="interpreter-panel-label">
                            SERVICE GAPS
                          </span>
        
                          <h2>
                            Where interpreter support is most needed
                          </h2>
        
                          <p>
                            Languages and operational indicators where
                            demand is placing pressure on service capacity.
                          </p>
                        </div>
        
                        <span className="interpreter-gap-status">
                          4 areas identified
                        </span>
        
                      </div>
        
        
                      <div className="interpreter-gap-grid">
        
                        {serviceGaps.map((gap) => (
                          <div
                            className="interpreter-gap-card"
                            key={gap.title}
                          >
        
                            <div className="interpreter-gap-top">
        
                              <span>
                                {gap.title}
                              </span>
        
                              <strong>
                                {gap.value}
                              </strong>
        
                            </div>
        
                            <p>
                              {gap.description}
                            </p>
        
                            <div
                              className={`interpreter-gap-meter ${
                                gap.warning
                                  ? "warning"
                                  : ""
                              }`}
                            >
                              <span
                                style={{
                                  width: gap.width,
                                }}
                              />
                            </div>
        
                            <small>
                              {gap.status}
                            </small>
        
                          </div>
                        ))}
        
                      </div>
        
        </article>
    )
}

export default InterpreterServiceGaps