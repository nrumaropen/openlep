import { useDashboardData } from "../hooks/useDashboardData";
import { getRequestStats } from "../utils/requestStats";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardMain from "../components/dashboard/DashboardMain";
import ExecutiveSummary from "../components/dashboard/ExecutiveSummary";
import KPIGrid from "../components/dashboard/KPIGrid";
import DemandChart from "../components/dashboard/DemandChart";
import CompliancePanel from "../components/dashboard/CompliancePanel";
import OrganizationTable from "../components/dashboard/OrganizationTable";
import RiskPanel from "../components/dashboard/RiskPanel";
import AIInsightPanel from "../components/dashboard/AIInsightPanel";
import ActivityFeed from "../components/dashboard/ActivityFeed";

function Dashboard() {

  const {

    organizations = [],
    requests = [],
    languages = [],
    complianceRules = [],
    complianceScores = [],
    complaints = [],
    loading,
    error,

  } = useDashboardData();

  if (loading) {

    return (

      <main className="dashboard-loading">

        Loading OpenLEP Dashboard...

      </main>

    );

  }

  if (error) {

    return (

      <main className="dashboard-error">

        <h2>

          Dashboard Error

        </h2>

        <p>

          {error}

        </p>

      </main>

    );

  }

  const averageCompliance =

    complianceScores.length > 0

      ? Math.round(

          complianceScores.reduce(

            (total, score) =>

              total + score.overall_score,

            0

          ) / complianceScores.length

        )

      : 0;

  const requestStats = getRequestStats(requests);

  const metrics = [

    {

      label: "Interpreter Requests",

      value: requestStats.total.toLocaleString(),

      detail: "Current reporting period",

      icon: "↗",

      status: "positive",

    },

    {

      label: "Compliance Score",

      value: `${averageCompliance}%`,

      detail: "Enterprise average",

      icon: "✓",

      status: "positive",

    },

    {

      label: "Languages Supported",

      value: languages.length.toString(),

      detail: "Active language services",

      icon: "🌐",

      status: "neutral",

    },

    {

      label: "Organizations",

      value: organizations.length.toString(),

      detail: "Participating institutions",

      icon: "🏢",

      status: "neutral",

    },

  ];

  return (

    <main className="dashboard">

      <DashboardSidebar />

      <section className="dashboard-content">

        <DashboardMain

          organizations={organizations}
          languages={languages}

        />

        <div className="dashboard-container">

          <ExecutiveSummary

            organizations={organizations}
            requests={requests}
            complianceScores={complianceScores}
            requestStats={requestStats}

          />

          <KPIGrid

            metrics={metrics}

          />

          <DemandChart

            requests={requests}
            requestStats={requestStats}

          />

          <CompliancePanel

            complianceScores={complianceScores}
            complianceRules={complianceRules}
            requestStats={requestStats}

          />

          <OrganizationTable

            organizations={organizations}
            complianceScores={complianceScores}

          />

          <RiskPanel

            requests={requests}
            complaints={complaints}

          />

          <AIInsightPanel

            requests={requests}
            organizations={organizations}
            complianceScores={complianceScores}
            requestStats={requestStats}

          />

          <ActivityFeed

            requests={requests}
            complaints={complaints}

          />

        </div>

      </section>

    </main>

  );

}

export default Dashboard;