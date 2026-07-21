import { useState } from "react";

function LogTable({ logs }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");

  const filteredLogs = logs.filter((log) => {
    const searchValue = searchTerm.toLowerCase();

    const matchesSearch =
      log.ipAddress.toLowerCase().includes(searchValue) ||
      log.username.toLowerCase().includes(searchValue) ||
      log.event.toLowerCase().includes(searchValue);

    const matchesSeverity =
      severityFilter === "All" || log.severity === severityFilter;

    return matchesSearch && matchesSeverity;
  });

  return (
    <section className="logs-section">
      <div className="section-heading">
        <div>
          <p className="page-label">Live monitoring</p>
          <h2>Recent Security Events</h2>
        </div>

        <div className="filters">
          <input
            type="search"
            placeholder="Search IP, user or event..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            value={severityFilter}
            onChange={(event) => setSeverityFilter(event.target.value)}
          >
            <option value="All">All severities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>IP Address</th>
              <th>Username</th>
              <th>Event</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.timestamp}</td>
                  <td className="ip-address">{log.ipAddress}</td>
                  <td>{log.username}</td>
                  <td>{log.event}</td>
                  <td>
                    <span
                      className={`severity ${log.severity.toLowerCase()}`}
                    >
                      {log.severity}
                    </span>
                  </td>
                  <td>{log.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="empty-state" colSpan="6">
                  No matching security events found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default LogTable;