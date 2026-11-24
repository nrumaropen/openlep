export function getRequestStats(requests = []) {

  const total = requests.length;

  const fulfilled = requests.filter(
    (request) => request.fulfilled
  ).length;

  const qualified = requests.filter(
    (request) => request.qualified_interpreter
  ).length;

  return {

    total,

    fulfilled,

    qualified,

    fulfillmentRate:
      total > 0
        ? Math.round((fulfilled / total) * 100)
        : 0,

    qualifiedRate:
      total > 0
        ? Math.round((qualified / total) * 100)
        : 0,

  };

}