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

  requests = []

}) {

  const demoData = [

    {

      month: "Jan",

      requests: 8650,

      forecast: null,

      compliance: 79,

    },

    {

      month: "Feb",

      requests: 9020,

      forecast: null,

      compliance: 80,

    },

    {

      month: "Mar",

      requests: 9410,

      forecast: null,

      compliance: 82,

    },

    {

      month: "Apr",

      requests: 9980,

      forecast: null,

      compliance: 84,

    },

    {

      month: "May",

      requests: 10940,

      forecast: null,

      compliance: 86,

    },

    {

      month: "Jun",

      requests: 12486,

      forecast: 12486,

      compliance: 87,

    },

    {

      month: "Jul",

      requests: null,

      forecast: 13780,

      compliance: null,

    },

    {

      month: "Aug",

      requests: null,

      forecast: 14520,

      compliance: null,

    }

  ];

  const chartData =

    requests.length > 0

      ? requests

      : demoData;

  return (

    <section 
      id="demand"
      className="dashboard-panel">

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
            projected utilization, and enterprise
            compliance performance.

          </p>

        </div>

        <div className="panel-summary">

          <strong>

            12,486

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

            12,486

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

            13,780

          </strong>

          <small>

            Next 30 Days

          </small>

        </article>

        <article>

          <span>

            Compliance

          </span>

          <strong>

            87%

          </strong>

          <small>

            Current Performance

          </small>

        </article>

        <article>

          <span>

            Confidence

          </span>

          <strong>

            91%

          </strong>

          <small>

            AI Prediction

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

            <CartesianGrid

              strokeDasharray="4 4"

            />

            <XAxis

              dataKey="month"

            />

            <YAxis

              yAxisId="requests"

              domain={[8000, 15000]}

            />

            <YAxis

              yAxisId="compliance"

              orientation="right"

              domain={[70, 100]}

            />

            <Tooltip />

            <Legend />

            <ReferenceLine

              yAxisId="compliance"

              y={85}

              stroke="#c79335"

              strokeDasharray="6 6"

              label="Target"

            />

            <Area

              yAxisId="requests"

              type="monotone"

              dataKey="requests"

              name="Actual Requests"

              stroke="#3d7352"

              fill="#dfeade"

              strokeWidth={3}

            />

            <Line

              yAxisId="requests"

              type="monotone"

              dataKey="forecast"

              name="Forecast"

              stroke="#3d7352"

              strokeWidth={3}

              strokeDasharray="8 5"

            />

            <Line

              yAxisId="compliance"

              type="monotone"

              dataKey="compliance"

              name="Compliance"

              stroke="#8b9388"

              strokeWidth={3}

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

            Interpreter demand continues to increase
            while compliance performance remains
            stable. Current forecasting models predict
            an additional 11% increase in demand over
            the next reporting period.

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