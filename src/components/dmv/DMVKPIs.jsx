function DMVKPIs (){

    return(
            <div className="dmv-kpis">

              <div className="dmv-kpi">
                <span>Customers Today</span>
                <strong>4,286</strong>
                <small className="positive">↑ 8.4% vs. daily average</small>
              </div>

              <div className="dmv-kpi">
                <span>Average Wait Time</span>
                <strong>18 min</strong>
                <small className="positive">↓ 4 min this week</small>
              </div>

              <div className="dmv-kpi">
                <span>Transactions Completed</span>
                <strong>3,942</strong>
                <small>92% completion rate</small>
              </div>

              <div className="dmv-kpi">
                <span>Offices Online</span>
                <strong>24 / 26</strong>
                <small className="warning">2 offices limited</small>
              </div>

            </div>
    )
}

export default DMVKPIs;