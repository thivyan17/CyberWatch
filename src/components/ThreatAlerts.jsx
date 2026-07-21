import { useState } from "react";
import { detectThreats } from "../utils/detectThreats";

function ThreatAlerts({ logs }) {
  const threats = detectThreats(logs);
  const [selectedThreat, setSelectedThreat] = useState(null);

  return (
    <>
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

                <button
                  type="button"
                  onClick={() => setSelectedThreat(threat)}
                >
                  Investigate
                </button>
              </article>
            ))
          ) : (
            <p className="empty-threats">No active threats detected.</p>
          )}
        </div>
      </section>

      {selectedThreat && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedThreat(null)}
        >
          <div
            className="threat-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedThreat(null)}
              aria-label="Close threat details"
            >
              ×
            </button>

            <p className="page-label">Incident investigation</p>
            <h2>{selectedThreat.type}</h2>

            <div className="modal-details">
              <div>
                <span>Source IP</span>
                <strong>{selectedThreat.ipAddress}</strong>
              </div>

              <div>
                <span>Failed attempts</span>
                <strong>{selectedThreat.attempts}</strong>
              </div>

              <div>
                <span>Severity</span>
                <strong>{selectedThreat.severity}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedThreat.status}</strong>
              </div>
            </div>

            <div className="recommendation-box">
              <h3>Recommended response</h3>
              <p>
                Block the source IP temporarily, review affected accounts,
                inspect authentication logs, and require password resets where
                suspicious activity is confirmed.
              </p>
            </div>

            <button
              type="button"
              className="modal-action"
              onClick={() => setSelectedThreat(null)}
            >
              Mark as reviewed
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ThreatAlerts;