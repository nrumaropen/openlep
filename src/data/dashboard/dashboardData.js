// src/data/dashboard/dashboardData.js

export const dashboardData = {
  metrics: [
    {
      label: "Total Requests",
      value: "12,486",
      detail: "↑ 14.2%"
    },
    {
      label: "Fulfillment Rate",
      value: "91.4%",
      detail: "↑ 3.8%"
    },
    {
      label: "Languages",
      value: "47",
      detail: "Across institutions"
    }
  ],

  languageDemand: [
    {
      language: "Spanish",
      requests: 4820,
      percentage: 38.6,
      width: 88
    },
    {
      language: "Chinese",
      requests: 3120,
      percentage: 25.0,
      width: 65
    }
  ],

  alerts: [
    {
      time: "11:42",
      type: "critical",
      title: "Spanish demand increased",
      description: "Requests increased 24% over the last three months.",
      status: "Attention"
    }
  ],

  organizations: [
    {
      name: "Institution A",
      requests: 3842,
      fulfillment: 96.2,
      score: 94
    }
  ],

  serviceGaps: [
    ...
  ],

  complianceRules: [
    ...
  ]
};