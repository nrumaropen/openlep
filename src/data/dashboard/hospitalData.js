export const kpis = [
    {
      label: "Patients Requiring Access",
      value: "1,842",
      detail: "↑ 8.4% this month",
      trend: "up",
      points: "0,42 12,38 24,40 36,28 48,31 60,18 72,20 84,8",
    },
    {
      label: "Interpreter Requests",
      value: "3,426",
      detail: "↑ 8.4% this month",
      trend: "up",
      points: "0,40 12,36 24,39 36,25 48,30 60,19 72,13 84,6",
    },
    {
      label: "Fulfillment Rate",
      value: "96%",
      detail: "↑ 2.1% this month",
      trend: "up",
      good: true,
      points: "0,34 12,32 24,35 36,28 48,29 60,20 72,22 84,12",
    },
    {
      label: "Average Response",
      value: "8.4 min",
      detail: "↓ 21% this month",
      trend: "down",
      good: true,
      points: "0,12 12,18 24,14 36,25 48,20 60,30 72,25 84,36",
    },
    {
      label: "Qualified Interpreter Usage",
      value: "98.2%",
      detail: "Target ≥95%",
      good: true,
      points: "0,30 12,28 24,25 36,27 48,20 60,21 72,15 84,12",
    },
    {
      label: "Section 1557 Compliance",
      value: "91%",
      detail: "2 areas require attention",
      warning: true,
      points: "0,25 12,22 24,28 36,24 48,20 60,23 72,18 84,20",
    },
];

export const departments = [
    { name: "Emergency Department", requests: 842, change: "+14.2%", level: "high" },
    { name: "ICU", requests: 416, change: "+6.8%", level: "high" },
    { name: "Maternity", requests: 286, change: "-2.1%", level: "medium" },
    { name: "Oncology", requests: 241, change: "+3.4%", level: "medium" },
    { name: "Outpatient", requests: 198, change: "-1.2%", level: "low" },
];

export const regionalLanguageData = [
  {
    area: "Dallas",
    language: "Spanish",
    demand: 82,
    x: 56,
    y: 42,
  },
  {
    area: "Fort Worth",
    language: "Spanish",
    demand: 76,
    x: 34,
    y: 58,
  },
  {
    area: "Arlington",
    language: "Spanish",
    demand: 71,
    x: 45,
    y: 52,
  },
  {
    area: "Irving",
    language: "Spanish",
    demand: 68,
    x: 51,
    y: 50,
  },
  {
    area: "Mesquite",
    language: "Spanish",
    demand: 64,
    x: 65,
    y: 48,
  },
  {
    area: "Collin County",
    language: "Vietnamese",
    demand: 52,
    x: 67,
    y: 27,
  },
  {
    area: "Denton County",
    language: "Spanish",
    demand: 48,
    x: 49,
    y: 20,
  },
];

export const languages = [
    { name: "Spanish", percentage: 54, patients: "1,001" },
    { name: "Vietnamese", percentage: 18, patients: "332" },
    { name: "Arabic", percentage: 12, patients: "221" },
    { name: "Mandarin", percentage: 8, patients: "147" },
    { name: "Other", percentage: 8, patients: "141" },
];

export const coverage = [
    { language: "Spanish", coverage: 99, status: "good" },
    { language: "Vietnamese", coverage: 96, status: "good" },
    { language: "Arabic", coverage: 91, status: "warning" },
    { language: "Mandarin", coverage: 87, status: "warning" },
    { language: "Other", coverage: 78, status: "danger" },
];

export const compliance = [
    {
      label: "Qualified Interpreter Provided",
      value: "98%",
      status: "good",
    },
    {
      label: "Timely Language Assistance",
      value: "96%",
      status: "good",
    },
    {
      label: "Patient Preference Documented",
      value: "92%",
      status: "warning",
    },
    {
      label: "Interpreter Documentation Complete",
      value: "95%",
      status: "good",
    },
    {
      label: "Vital Document Coverage",
      value: "89%",
      status: "warning",
    },
    {
      label: "Complaint Resolution",
      value: "97%",
      status: "good",
    },
];