function DMVRegionalDemand() {
  const regions = [
    {
      name: "North",
      customers: "742",
      level: "medium",
    },
    {
      name: "West",
      customers: "691",
      level: "medium",
    },
    {
      name: "Central",
      customers: "1,284",
      level: "high",
    },
    {
      name: "East",
      customers: "963",
      level: "high",
    },
    {
      name: "South",
      customers: "606",
      level: "low",
    },
  ];

  return (
    <section className="dmv-panel">

      <div className="dmv-panel-header">
        <div>
          <span>FIELD OFFICE NETWORK</span>
          <h2>Regional Demand</h2>
        </div>
      </div>


      <div className="dmv-map">

        <div className="dmv-map-area">

          {regions.map((region) => (
            <div
              key={region.name}
              className={`dmv-region dmv-region-${region.name.toLowerCase()}`}
            >

              <strong>
                {region.name}
              </strong>

              <span>
                {region.customers}
              </span>

            </div>
          ))}

        </div>

      </div>


      <div className="dmv-map-legend">

        <span>
          <i className="low"></i>
          Low
        </span>

        <span>
          <i className="medium"></i>
          Moderate
        </span>

        <span>
          <i className="high"></i>
          High
        </span>

      </div>

    </section>
  );
}

export default DMVRegionalDemand;