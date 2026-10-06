function DMVServiceMix() {

  const services = [
    {
      name: "Driver License",
      percentage: 38,
    },
    {
      name: "Vehicle Registration",
      percentage: 29,
    },
    {
      name: "Identification Card",
      percentage: 17,
    },
    {
      name: "Permits & Testing",
      percentage: 11,
    },
    {
      name: "Other Services",
      percentage: 5,
    },
  ];


  return (
    <section className="dmv-panel">

      <div className="dmv-panel-header">

        <div>
          <span>SERVICE MIX</span>
          <h2>
            Today's Transactions
          </h2>
        </div>

      </div>


      <div className="dmv-service-list">

        {services.map((service) => (

          <div
            className="dmv-service"
            key={service.name}
          >

            <div>

              <span>
                {service.name}
              </span>

              <strong>
                {service.percentage}%
              </strong>

            </div>


            <div className="dmv-progress">

              <span
                style={{
                  width: `${service.percentage}%`,
                }}
              />

            </div>


          </div>

        ))}

      </div>


    </section>
  );
}


export default DMVServiceMix;