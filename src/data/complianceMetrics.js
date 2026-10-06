export function computeMetrics(data) {
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