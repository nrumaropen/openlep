import HospitalHero from "../components/hospital/HospitalHero";
import HospitalKPIGrid from "../components/hospital/HospitalKPIGrid";
import HospitalExecutiveSummary from "../components/hospital/HospitalExecutiveSummary";
import HospitalTrendChart from "../components/hospital/HospitalTrendChart";
import RegionalLanguageMap from "../components/hospital/RegionalLanguageMap";
import HospitalDepartments from "../components/hospital/HospitalDepartments";
import HospitalServiceLevel from "../components/hospital/HospitalServiceLevel";
import HospitalLanguageDemand from "../components/hospital/HospitalLanguageDemand";
import HospitalCoverage from "../components/hospital/HospitalCoverage";
import HospitalServiceUtilization from "../components/hospital/HospitalServiceUtilization";
import HospitalUnmetDemand from "../components/hospital/HospitalUnmetDemand";
import HospitalComplaints from "../components/hospital/HospitalComplaints";
import HospitalCompliance from "../components/hospital/HospitalCompliance";
import HospitalDocuments from "../components/hospital/HospitalDocuments";
import HospitalAIInsight from "../components/hospital/HospitalAIInsight";
import HospitalActivityFeed from "../components/hospital/HospitalActivityFeed";


function HospitalLanguageAccess() {

  return (

    <>

      <main className="hospital-dashboard">


        <HospitalHero />

        <HospitalKPIGrid />

        <HospitalExecutiveSummary />

        <HospitalTrendChart />

        <RegionalLanguageMap />


        <div className="two-column section-gap">

          <HospitalDepartments />

          <HospitalServiceLevel />

        </div>



        <div className="two-column section-gap">

          <HospitalLanguageDemand />

          <HospitalCoverage />

        </div>



        <HospitalServiceUtilization />



        <div className="two-column section-gap">

          <HospitalUnmetDemand />

          <HospitalComplaints />

        </div>



        <HospitalCompliance />

        <HospitalDocuments />

        <HospitalAIInsight />

        <HospitalActivityFeed />


      </main>


    </>

  );

}


export default HospitalLanguageAccess;