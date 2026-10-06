

import DMVHero from "../components/dmv/DMVHero";
import DMVKPIs from "../components/dmv/DMVKPIs";
import DMVTraffic from "../components/dmv/DMVTraffic";
import DMVServiceMix from "../components/dmv/DMVServiceMix";
import DMVRegionalDemand from "../components/dmv/DMVRegionalDemand";
import DMVOfficePerformance from "../components/dmv/DMVOfficePerformance";
import DMVCapacity from "../components/dmv/DMVCapacity";
import DMVLanguageAccess from "../components/dmv/DMVLanguageAccess";
import DMVExecutiveAlert from "../components/dmv/DMVExecutiveAlert";


function DMVDashboard() {

  return (
    <>
      <main className="dmv-dashboard">

        <DMVHero />


        <section className="dmv-section">

          <div className="dmv-container">

            <DMVKPIs />


            <div className="dmv-grid dmv-grid-main">

              <DMVTraffic />

              <DMVServiceMix />

            </div>



            <div className="dmv-grid">

              <DMVRegionalDemand />

              <DMVOfficePerformance />

            </div>



            <DMVCapacity />


            <DMVLanguageAccess />


            <DMVExecutiveAlert />


          </div>

        </section>


      </main>

    </>
  );

}


export default DMVDashboard;