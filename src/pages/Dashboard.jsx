import { useDashboardData } from "../hooks/useDashboardData";

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

  const metrics = [

    {
      label: "Interpreter Requests",
      value: "12,486",
      detail: "Current reporting period",
    },

    {
      label: "Compliance Score",
      value: "87%",
      detail: "Enterprise average",
    },

    {
      label: "Languages Supported",
      value: "47",
      detail: "Active language services",
    },

    {
      label: "Organizations",
      value: organizations.length || "--",
      detail: "Participating institutions",
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

          <ExecutiveSummary />

          <KPIGrid
            metrics={metrics}
          />

          <DemandChart
            requests={requests}
          />

          <CompliancePanel
            complianceScores={complianceScores}
            complianceRules={complianceRules}
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