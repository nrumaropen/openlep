import ComplianceHero from "../components/compliance/ComplianceHero";
import ComplianceKPIs from "../components/compliance/ComplianceKPIs";
import ComplianceOverview from "../components/compliance/ComplianceOverview";
import ComplianceGaps from "../components/compliance/ComplianceGaps";
import ComplianceAction from "../components/compliance/ComplianceAction";

import complianceData from "../data/complianceData.json";
import { computeMetrics } from "../data/complianceMetrics";

function Compliance() {
  const metrics = computeMetrics(complianceData);

  return (
    <main className="compliance-dashboard">

      <ComplianceHero />

      <section className="compliance-section">

        <div className="compliance-container">

          <ComplianceKPIs
            {...metrics}
            serviceEvents={complianceData.serviceEvents}
          />

          <ComplianceOverview
            {...metrics}
          />

          <ComplianceGaps
            {...metrics}
          />

          <ComplianceAction
            {...metrics}
          />

        </div>

      </section>

    </main>
  );
}

export default Compliance;