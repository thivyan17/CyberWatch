import LogUploader from "../components/LogUploader";
import LogTable from "../components/LogTable";

function SecurityLogs({ logs, onLogsUploaded }) {
  return (
    <div className="page-content">
      <div className="page-header">
        <p className="page-label">Log management</p>
        <h1>Security Logs</h1>
        <p>
          Upload, search, filter, and review security events.
        </p>
      </div>

      <LogUploader onLogsUploaded={onLogsUploaded} />
      <LogTable logs={logs} />
    </div>
  );
}

export default SecurityLogs;