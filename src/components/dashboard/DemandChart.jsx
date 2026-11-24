import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

function DemandChart({
  requests = [],
  requestStats,
}) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData = Object.values(
    requests.reduce((acc, request) => {
      const date = new Date(request.request_date);
      const month = monthNames[date.getMonth()];

      if (!acc[month]) {
        acc[month] = {
          month,
          requests: 0,
        };
      }

      acc[month].requests += 1;

      return acc;
    }, {})
  )
    .map((item) => ({
      ...item,
      forecast: Math.round(item.requests * 1.11),
    }))
    .sort(
      (a, b) =>
        monthNames.indexOf(a.month) -
        monthNames.indexOf(b.month)
    );

  const forecast =
    chartData.length > 0
      ? chartData[chartData.length - 1].forecast
      : 0;

  return (
    <section
      id="demand"
      className="dashboard-panel"
    >
      <div className="panel-header">
        <div>
          <span className="panel-label">
            DEMAND ANALYTICS
          </span>

          <h2>
            Language Access Demand
          </h2>

          <p>
            Historical interpreter demand,
            projected utilization, and
            enterprise language-access
            performance.
          </p>
        </div>

        <div className="panel-summary">
          <strong>
            {requestStats.total}
          </strong>

          <span>
            Requests This Period
          </span>
        </div>
      </div>

      <div className="chart-metrics">
        <article>
          <span>
            Current Demand
          </span>

          <strong>
            {requestStats.total}
          </strong>

          <small>
            Interpreter Requests
          </small>
        </article>

        <article>
          <span>
            Forecast
          </span>

          <strong>
            {forecast}
          </strong>

          <small>
            Projected Requests (sample)
          </small>
        </article>

        <article>
          <span>
            Fulfilled Requests
          </span>

          <strong>
            {requestStats.fulfillmentRate}%
          </strong>

          <small>
            Successfully Completed
          </small>
        </article>

        <article>
          <span>
            Qualified Interpreters
          </span>

          <strong>
            {requestStats.qualified}
          </strong>

          <small>
            Qualified Interpreter Used
          </small>
        </article>
      </div>

      <div className="chart-container">
        <ResponsiveContainer
          width="100%"
          height={430}
        >
          <AreaChart
            data={chartData}
            margin={{
              top: 25,
              right: 20,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="month" />

            <YAxis
              yAxisId="requests"
              allowDecimals={false}
            />

            <YAxis
              yAxisId="forecast"
              orientation="right"
              allowDecimals={false}
            />

            <Tooltip />

            <Legend />

            <ReferenceLine
              yAxisId="forecast"
              y={forecast}
              stroke="#c79335"
              strokeDasharray="6 6"
              label="Forecast"
            />

            <Area
              yAxisId="requests"
              type="monotone"
              dataKey="requests"
              name="Requests"
              stroke="#3d7352"
              fill="#dfeade"
              strokeWidth={3}
            />

            <Line
              yAxisId="forecast"
              type="monotone"
              dataKey="forecast"
              name="Forecast"
              stroke="#3d7352"
              strokeWidth={3}
              strokeDasharray="8 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-insight">
        <div>
          <span>
            OPENLEP INSIGHT
          </span>

          <p>
            OpenLEP analyzed{" "}
            <strong>
              {requestStats.total}
            </strong>{" "}
            interpreter requests. Overall
            fulfillment reached{" "}
            <strong>
              {requestStats.fulfillmentRate}%
            </strong>
            . Current forecasting indicates
            continued growth in interpreter
            demand based on recent request
            patterns.
          </p>
        </div>

        <button>
          View Full Analysis
        </button>
      </div>
    </section>
  );
}

export default DemandChart;