export function detectThreats(logs) {
  const failedLoginGroups = {};

  logs.forEach((log) => {
    if (log.event === "Failed Login") {
      failedLoginGroups[log.ipAddress] =
        (failedLoginGroups[log.ipAddress] || 0) + 1;
    }
  });

  return Object.entries(failedLoginGroups)
    .filter(([, count]) => count >= 3)
    .map(([ipAddress, count], index) => ({
      id: index + 1,
      type: "Possible Brute-Force Attack",
      ipAddress,
      attempts: count,
      severity: count >= 5 ? "Critical" : "High",
      status: "Open",
    }));
}