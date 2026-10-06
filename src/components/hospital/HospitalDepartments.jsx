import { departments } from "../../data/dashboard/hospitalData";


function HospitalDepartments() {

  return (
    <section className="dashboard-panel">

      <div className="panel-header">
        <div>
          <span>
            DEPARTMENT DEMAND
          </span>
          <h2>
            Hospital Activity
          </h2>
          <p>
            Interpreter demand by clinical area.
          </p>
        </div>
      </div>

      <div className="department-list">
        {departments.map((department, index) => (
          <div
            className="department-row"
            key={department.name}
          >
            <div className="department-info">
              <span className="department-rank">
                0{index + 1}
              </span>
              <div>
                <strong>
                  {department.name}
                </strong>
                <small>
                  {department.requests} requests
                </small>
              </div>
            </div>

            <div className="department-bar-wrap">
              <div className="department-bar">
                <span
                  style={{
                    width: `${(department.requests / 842) * 100}%`,
                  }}
                />
              </div>
            </div>

            <span
              className={`department-change ${
                department.change.startsWith("-")
                  ? "negative"
                  : "positive"
              }`}
            >
              {department.change}
            </span>

          </div>
        ))}
      </div>
    </section>
  );
}


export default HospitalDepartments;