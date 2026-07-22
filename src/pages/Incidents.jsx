import { useState } from "react";
import { detectThreats } from "../utils/detectThreats";

function Incidents({ logs }) {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const incidents = detectThreats(logs);

  return (
    <div className="incidents-page">
      <section className="incident-summary">
        <div>
          <p className="page-label">Incident management</p>
          <h2>Active Incidents</h2>
          <p className="incident-description">
            Review, investigate, and respond to detected security threats.
          </p>
        </div>

        <div className="incident-total">
          <strong>{incidents.length}</strong>
          <span>Open incidents</span>
        </div>
      </section>

      <section className="incident-grid">
        {incidents.length > 0 ? (
          incidents.map((incident) => (
            <article className="incident-card" key={incident.id}>
              <div className="incident-card-header">
                <span
                  className={`severity ${incident.severity.toLowerCase()}`}
                >
                  {incident.severity}
                </span>

                <span className="incident-status">{incident.status}</span>
              </div>

              <h3>{incident.type}</h3>

              <p>
                Repeated failed login attempts were detected from{" "}
                <strong>{incident.ipAddress}</strong>.
              </p>

              <div className="incident-details">
                <div>
                  <span>Source IP</span>
                  <strong>{incident.ipAddress}</strong>
                </div>

                <div>
                  <span>Attempts</span>
                  <strong>{incident.attempts}</strong>
                </div>

                <div>
                  <span>Assigned to</span>
                  <strong>Admin User</strong>
                </div>
              </div>

              <button
                type="button"
                className="incident-button"
                onClick={() => setSelectedIncident(incident)}
              >
                Investigate Incident
              </button>
            </article>
          ))
        ) : (
          <div className="no-incidents">
            <div className="no-incidents-icon">✓</div>
            <h3>No active incidents</h3>
            <p>No security threats currently require investigation.</p>
          </div>
        )}
      </section>

      {selectedIncident && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedIncident(null)}
        >
          <div
            className="threat-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedIncident(null)}
              aria-label="Close incident details"
            >
              ×
            </button>

            <p className="page-label">Incident investigation</p>
            <h2>{selectedIncident.type}</h2>

            <div className="modal-details">
              <div>
                <span>Source IP</span>
                <strong>{selectedIncident.ipAddress}</strong>
              </div>

              <div>
                <span>Failed attempts</span>
                <strong>{selectedIncident.attempts}</strong>
              </div>

              <div>
                <span>Severity</span>
                <strong>{selectedIncident.severity}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedIncident.status}</strong>
              </div>
            </div>

            <div className="recommendation-box">
              <h3>Recommended response</h3>
              <p>
                Temporarily block the source IP, inspect affected accounts,
                review authentication activity, and reset passwords if
                suspicious access is confirmed.
              </p>
            </div>

            <button
              type="button"
              className="modal-action"
              onClick={() => setSelectedIncident(null)}
            >
              Mark as reviewed
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Incidents;