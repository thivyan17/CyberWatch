import { detectThreats } from "../utils/detectThreats";

function ThreatAlerts({ logs }) {
  const threats = detectThreats(logs);

  return (
    <section className="threat-section">
      <div className="section-heading">
        <div>
          <p className="page-label">Detection engine</p>
          <h2>Detected Threats</h2>
        </div>

        <span className="threat-count">
          {threats.length} active threat{threats.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="threat-list">
        {threats.length > 0 ? (
          threats.map((threat) => (
            <article className="threat-alert" key={threat.id}>
              <div>
                <span
                  className={`severity ${threat.severity.toLowerCase()}`}
                >
                  {threat.severity}
                </span>

                <h3>{threat.type}</h3>

                <p>
                  IP address <strong>{threat.ipAddress}</strong> generated{" "}
                  <strong>{threat.attempts}</strong> failed login attempts.
                </p>
              </div>

              <button type="button">Investigate</button>
            </article>
          ))
        ) : (
          <p className="empty-threats">No active threats detected.</p>
        )}
      </div>
    </section>
  );
}

export default ThreatAlerts;