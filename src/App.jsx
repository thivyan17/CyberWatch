import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import SecurityLogs from "./pages/SecurityLogs";
import Incidents from "./pages/Incidents";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
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

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard logs={logs} />
            }
          />

          <Route
            path="/security-logs"
            element={
              <SecurityLogs
                logs={logs}
                onLogsUploaded={handleLogsUploaded}
              />
            }
          />

          <Route
            path="/incidents"
            element={<Incidents />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;