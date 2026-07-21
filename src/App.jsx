import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import ThreatChart from "./components/ThreatChart";
import ThreatAlerts from "./components/ThreatAlerts";
import LogUploader from "./components/LogUploader";
import LogTable from "./components/LogTable";
import { securityLogs } from "./data/securityLogs";
import "./App.css";

function App() {
  const [logs, setLogs] = useState(securityLogs);

  function handleLogsUploaded(uploadedLogs) {
    setLogs(uploadedLogs);
  }

  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        <Navbar />
        <SummaryCards logs={logs} />
        <LogUploader onLogsUploaded={handleLogsUploaded} />
        <ThreatChart />
        <ThreatAlerts logs={logs} />
        <LogTable logs={logs} />
      </main>
    </div>
  );
}

export default App;