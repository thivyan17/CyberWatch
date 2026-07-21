function SummaryCards({ logs }) {
  const criticalAlerts = logs.filter(
    (log) => log.severity === "Critical"
  ).length;

  const blockedIPs = new Set(
    logs
      .filter((log) => log.status === "Blocked")
      .map((log) => log.ipAddress)
  ).size;

  const failedLogins = logs.filter(
    (log) => log.event === "Failed Login"
  ).length;

  const riskyEvents = logs.filter(
    (log) =>
      log.severity === "High" ||
      log.severity === "Critical"
  ).length;

  const threatScore =
    logs.length > 0
      ? Math.round((riskyEvents / logs.length) * 100)
      : 0;

  const cards = [
    {
      title: "Critical Alerts",
      value: criticalAlerts,
      description: "Immediate attention required",
    },
    {
      title: "Blocked IPs",
      value: blockedIPs,
      description: "Unique blocked addresses",
    },
    {
      title: "Failed Logins",
      value: failedLogins,
      description: "Possible authentication attacks",
    },
    {
      title: "Threat Score",
      value: `${threatScore}%`,
      description: "Overall environment risk",
    },
  ];

  return (
    <section className="summary-cards">
      {cards.map((card) => (
        <article className="summary-card" key={card.title}>
          <h3>{card.title}</h3>
          <strong>{card.value}</strong>
          <p>{card.description}</p>
        </article>
      ))}
    </section>
  );
}

export default SummaryCards;