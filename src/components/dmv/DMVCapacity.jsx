function DMVCapacity() {

    return (
                    <section className="dmv-panel">

              <div className="dmv-panel-header">
                <div>
                  <span>CAPACITY</span>
                  <h2>Counter & Staffing Utilization</h2>
                </div>

                <span className="dmv-capacity-badge">
                  86% utilized
                </span>
              </div>

              <div className="dmv-capacity-grid">

                <div className="dmv-capacity-card">
                  <div>
                    <span>Customer Service Counters</span>
                    <strong>86%</strong>
                  </div>

                  <div className="dmv-capacity-track">
                    <span style={{ width: "86%" }}></span>
                  </div>

                  <small>
                    74 of 86 counters active
                  </small>
                </div>


                <div className="dmv-capacity-card">
                  <div>
                    <span>Testing Staff</span>
                    <strong>79%</strong>
                  </div>

                  <div className="dmv-capacity-track">
                    <span style={{ width: "79%" }}></span>
                  </div>

                  <small>
                    38 of 48 positions staffed
                  </small>
                </div>


                <div className="dmv-capacity-card">
                  <div>
                    <span>Appointment Capacity</span>
                    <strong>91%</strong>
                  </div>

                  <div className="dmv-capacity-track">
                    <span style={{ width: "91%" }}></span>
                  </div>

                  <small>
                    1,184 appointments scheduled
                  </small>
                </div>

              </div>

            </section>
    )
}

export default DMVCapacity