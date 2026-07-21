import { useState } from "react";

function LogUploader({ onLogsUploaded }) {
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");

  function handleFileUpload(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setMessage("Please upload a CSV file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (loadEvent) => {
      try {
        const text = loadEvent.target.result;
        const rows = text.trim().split("\n");

        if (rows.length < 2) {
          throw new Error("The CSV file does not contain log records.");
        }

        const headers = rows[0]
          .split(",")
          .map((header) => header.trim().toLowerCase());

        const requiredHeaders = [
          "timestamp",
          "ipaddress",
          "username",
          "event",
          "severity",
          "status",
        ];

        const hasRequiredHeaders = requiredHeaders.every((header) =>
          headers.includes(header)
        );

        if (!hasRequiredHeaders) {
          throw new Error(
            "CSV headers must include timestamp, ipAddress, username, event, severity and status."
          );
        }

        const parsedLogs = rows.slice(1).map((row, index) => {
          const values = row.split(",").map((value) => value.trim());

          const log = {};

          headers.forEach((header, headerIndex) => {
            log[header] = values[headerIndex] || "";
          });

          return {
            id: Date.now() + index,
            timestamp: log.timestamp,
            ipAddress: log.ipaddress,
            username: log.username,
            event: log.event,
            severity: log.severity,
            status: log.status,
          };
        });

        onLogsUploaded(parsedLogs);
        setFileName(file.name);
        setMessage(`${parsedLogs.length} log records imported successfully.`);
      } catch (error) {
        setMessage(error.message);
      }
    };

    reader.onerror = () => {
      setMessage("Unable to read the selected file.");
    };

    reader.readAsText(file);
  }

  return (
    <section className="upload-section">
      <div>
        <p className="page-label">Log ingestion</p>
        <h2>Upload Security Logs</h2>
        <p className="upload-description">
          Import a CSV file to analyse login activity and detect threats.
        </p>
      </div>

      <div className="upload-controls">
        <label className="upload-button">
          Select CSV file
          <input
            type="file"
            accept=".csv,text/csv"
            onChange={handleFileUpload}
          />
        </label>

        {fileName && <span className="file-name">{fileName}</span>}
      </div>

      {message && <p className="upload-message">{message}</p>}
    </section>
  );
}

export default LogUploader;