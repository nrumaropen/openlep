import InterpreterHero from "../components/interpreter/InterpreterHero";
import InterpreterKPIs from "../components/interpreter/InterpreterKPIs";
import InterpreterLanguageDemand from "../components/interpreter/InterpreterLanguageDemand";
import InterpreterRequestStatus from "../components/interpreter/InterpreterRequestStatus";
import InterpreterAvailability from "../components/interpreter/InterpreterAvailability";
import InterpreterAlerts from "../components/interpreter/InterpreterAlerts";
import InterpreterServiceGaps from "../components/interpreter/InterpreterServiceGaps";
import InterpreterAIInsight from "../components/interpreter/InterpreterAIInsight";

import ComplianceRulesPanel from "../components/dashboard/ComplianceRulesPanel";


function InterpreterDashboard() {


  const complianceRules = [
    {
      label:
        "Qualified interpreter utilization meets target",
      status:
        "pass",
      citation:
        "Title VI DOJ Guidance §III",
    },

    {
      label:
        "Interpreter response time within operational threshold",
      status:
        "pass",
      citation:
        "Section 1557, 45 CFR §92.201(c)",
    },

    {
      label:
        "High-demand language capacity requires review",
      status:
        "flagged",
      citation:
        "Title VI meaningful access requirement",
    },

    {
      label:
        "Complaint resolution tracking complete",
      status:
        "pass",
      citation:
        "Title VI grievance procedure requirement",
    },
  ];



  return (
    <>

      <main className="interpreter-dashboard">


        <InterpreterHero />


        <section className="interpreter-content">

          <div className="interpreter-container">


            <InterpreterKPIs />


            <div className="interpreter-main-grid">


              <InterpreterLanguageDemand />


              <InterpreterRequestStatus />


            </div>



            <InterpreterAvailability />



            <InterpreterAlerts />



            <InterpreterServiceGaps />



            <ComplianceRulesPanel
              role="Interpreter Services"
              score={91}
              rules={complianceRules}
            />



            <InterpreterAIInsight />


          </div>


        </section>


      </main>



    </>
  );
}


export default InterpreterDashboard;