const cards = [
  {
    title: "Critical Alerts",
    value: 12,
    description: "Immediate attention required",
  },
  {
    title: "Blocked IPs",
    value: 38,
    description: "Automatically prevented",
  },
  {
    title: "Failed Logins",
    value: 107,
    description: "Possible authentication attacks",
  },
  {
    title: "Threat Score",
    value: "82%",
    description: "Overall environment risk",
  },
];

function SummaryCards() {
  return (
    <section className="dashboard">
      {cards.map((card) => (
        <article className="card" key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.value}</p>
          <span>{card.description}</span>
        </article>
      ))}
    </section>
  );
}

export default SummaryCards;