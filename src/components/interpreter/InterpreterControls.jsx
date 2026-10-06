function InterpreterControls() {

    return(
                    <div className="interpreter-controls">

              <div className="interpreter-control">
                <label htmlFor="interpreter-period">
                  Reporting Period
                </label>

                <select
                  id="interpreter-period"
                  defaultValue="30"
                >
                  <option value="7">
                    Last 7 Days
                  </option>

                  <option value="30">
                    Last 30 Days
                  </option>

                  <option value="90">
                    Last 90 Days
                  </option>

                  <option value="365">
                    Last 12 Months
                  </option>
                </select>
              </div>


              <div className="interpreter-control">
                <label htmlFor="interpreter-mode">
                  Service Type
                </label>

                <select
                  id="interpreter-mode"
                  defaultValue="all"
                >
                  <option value="all">
                    All Services
                  </option>

                  <option value="onsite">
                    On-site
                  </option>

                  <option value="remote">
                    Remote / Video
                  </option>

                  <option value="phone">
                    Telephone
                  </option>
                </select>
              </div>


              <div className="interpreter-control">
                <label htmlFor="interpreter-language">
                  Language
                </label>

                <select
                  id="interpreter-language"
                  defaultValue="all"
                >
                  <option value="all">
                    All Languages
                  </option>

                  <option value="spanish">
                    Spanish
                  </option>

                  <option value="chinese">
                    Chinese
                  </option>

                  <option value="vietnamese">
                    Vietnamese
                  </option>

                  <option value="arabic">
                    Arabic
                  </option>
                </select>
              </div>


              <button
                type="button"
                className="interpreter-filter-button"
              >
                Apply Filters
              </button>

            </div>
    )
}

export default InterpreterControls