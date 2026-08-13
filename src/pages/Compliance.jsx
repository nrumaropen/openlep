import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import complianceData from "../data/complianceData.json";

// Turns raw records into the KPI numbers the dashboard shows.
// Swap complianceData.json for a real API/DB call later — the shape
// (serviceEvents, documentationRecords, staffTraining, complaints)
// mirrors the ERD tables in Exhibit 18, so the shape shouldn't need to change.
function computeMetrics(data) {
  const { serviceEvents, documentationRecords, staffTraining, complaints } = data;

  const interpreterEvents = serviceEvents.filter((e) => e.requires_interpreter);
  const interpreterFulfillment = interpreterEvents.length
    ? Math.round(
        (interpreterEvents.filter((e) => e.completed_flag).length /
          interpreterEvents.length) *
          100
      )
    : 0;

  const documentCompliance = documentationRecords.length
    ? Math.round(
        (documentationRecords.filter((d) => d.documented_flag).length /
          documentationRecords.length) *
          100
      )
    : 0;

  const staffTrainingRate = staffTraining.length
    ? Math.round(
        (staffTraining.filter((s) => s.trained_flag).length /
          staffTraining.length) *
          100
      )
    : 0;

  const translatedMaterialsRate = documentCompliance; // same underlying signal in this sample set

  const overallCompliance = Math.round(
    (interpreterFulfillment + documentCompliance + staffTrainingRate) / 3
  );

  const openGaps = complaints.filter((c) => c.status === "open");
  const gapsBySeverity = {
    high: openGaps.filter((c) => c.severity === "high").length,
    medium: openGaps.filter((c) => c.severity === "medium").length,
    low: openGaps.filter((c) => c.severity === "low").length,
  };

  return {
    overallCompliance,
    interpreterFulfillment,
    documentCompliance,
    staffTrainingRate,
    translatedMaterialsRate,
    openGapsCount: openGaps.length,
    gapsBySeverity,
  };
}

function Compliance() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    // Loaded from local JSON for now; swap for fetch("/api/compliance") later.
    setMetrics(computeMetrics(complianceData));
  }, []);

  if (!metrics) {
    return (
      <main className="compliance-dashboard">
        <div className="compliance-container">
          <p>Loading compliance data…</p>
        </div>
      </main>
    );
  }

  const {
    overallCompliance,
    interpreterFulfillment,
    documentCompliance,
    staffTrainingRate,
    translatedMaterialsRate,
    openGapsCount,
    gapsBySeverity,
  } = metrics;

  const projectedCompliance = Math.min(
    100,
    overallCompliance + gapsBySeverity.high
  );

  return (
    <>
      <main className="compliance-dashboard">

        {/* HERO */}
        <section className="compliance-hero">
          <div className="compliance-container">
            <p className="compliance-eyebrow">
              LANGUAGE ACCESS COMPLIANCE
            </p>

            <h1>
              Language Access
              <span> Compliance Dashboard.</span>
            </h1>

            <p>
              Monitor language access requirements, interpreter utilization,
              service gaps, documentation, and compliance performance across
              your organization.
            </p>

            <div className="compliance-status">
              <span></span>
              Compliance monitoring active — sample dataset
            </div>
          </div>
        </section>

        {/* DASHBOARD */}
        <section className="compliance-section">
          <div className="compliance-container">

            {/* KPI CARDS */}
            <div className="compliance-kpis">

              <div className="compliance-card">
                <p>Overall Compliance</p>
                <strong>{overallCompliance}%</strong>
                <span className="compliance-positive">
                  Computed from sample records
                </span>
              </div>

              <div className="compliance-card">
                <p>Interpreter Fulfillment</p>
                <strong>{interpreterFulfillment}%</strong>
                <span className="compliance-positive">
                  {complianceData.serviceEvents.filter((e) => e.requires_interpreter).length} interpreter events tracked
                </span>
              </div>

              <div className="compliance-card">
                <p>Document Compliance</p>
                <strong>{documentCompliance}%</strong>
                <span className={documentCompliance < 90 ? "compliance-warning" : "compliance-positive"}>
                  {documentCompliance < 90 ? "Needs attention" : "On track"}
                </span>
              </div>

              <div className="compliance-card">
                <p>Open Compliance Gaps</p>
                <strong>{openGapsCount}</strong>
                <span className="compliance-danger">
                  {gapsBySeverity.high} high priority
                </span>
              </div>

            </div>

            {/* COMPLIANCE OVERVIEW */}
            <section className="compliance-panel">
              <div className="compliance-panel-heading">
                <div>
                  <span>PERFORMANCE</span>
                  <h2>Compliance Overview</h2>
                </div>

                <div className="compliance-score">
                  <strong>{overallCompliance}%</strong>
                  <small>Overall</small>
                </div>
              </div>

              <div className="compliance-metrics">

                <div className="compliance-metric">
                  <div>
                    <span>Interpreter Access</span>
                    <strong>{interpreterFulfillment}%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: `${interpreterFulfillment}%` }}></span>
                  </div>
                </div>

                <div className="compliance-metric">
                  <div>
                    <span>Translated Materials</span>
                    <strong>{translatedMaterialsRate}%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: `${translatedMaterialsRate}%` }}></span>
                  </div>
                </div>

                <div className="compliance-metric">
                  <div>
                    <span>Staff Training</span>
                    <strong>{staffTrainingRate}%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: `${staffTrainingRate}%` }}></span>
                  </div>
                </div>

                <div className="compliance-metric">
                  <div>
                    <span>Documentation</span>
                    <strong>{documentCompliance}%</strong>
                  </div>

                  <div className="compliance-track">
                    <span style={{ width: `${documentCompliance}%` }}></span>
                  </div>
                </div>

              </div>
            </section>

            {/* OPEN GAPS */}
            <section className="compliance-panel">

              <div className="compliance-panel-heading">
                <div>
                  <span>RISK MONITORING</span>
                  <h2>Open Compliance Gaps</h2>
                </div>

                <div className="compliance-gap-count">
                  {openGapsCount} open
                </div>
              </div>

              <div className="compliance-gap-grid">

                <div className="compliance-gap-card high">
                  <div className="compliance-gap-top">
                    <span>HIGH</span>
                    <strong>{String(gapsBySeverity.high).padStart(2, "0")}</strong>
                  </div>

                  <h3>Language Access Complaints</h3>

                  <p>
                    Open complaints tied directly to interpreter or language
                    access service failures.
                  </p>
                </div>

                <div className="compliance-gap-card medium">
                  <div className="compliance-gap-top">
                    <span>MEDIUM</span>
                    <strong>{String(gapsBySeverity.medium).padStart(2, "0")}</strong>
                  </div>

                  <h3>Documentation Gaps</h3>

                  <p>
                    Open complaints related to missing or incomplete
                    documentation of language access services.
                  </p>
                </div>

                <div className="compliance-gap-card low">
                  <div className="compliance-gap-top">
                    <span>LOW</span>
                    <strong>{String(gapsBySeverity.low).padStart(2, "0")}</strong>
                  </div>

                  <h3>Training Updates</h3>

                  <p>
                    Staff members approaching required language access
                    training renewal.
                  </p>
                </div>

              </div>
            </section>

            {/* ACTIONS */}
            <section className="compliance-action">

              <div className="compliance-action-icon">
                !
              </div>

              <div>
                <span>RECOMMENDED ACTION</span>

                <h2>
                  Address {gapsBySeverity.high} high-priority language access
                  {gapsBySeverity.high === 1 ? " gap" : " gaps"} before the next review.
                </h2>

                <p>
                  Resolving current high-priority gaps could raise overall
                  compliance from {overallCompliance}% to approximately{" "}
                  {projectedCompliance}%.
                </p>
              </div>

            </section>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Compliance;
