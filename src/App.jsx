import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

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
    <MainLayout>
      <Routes>
        <Route
          path="/"
          element={<Dashboard logs={logs} />}
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
    </MainLayout>
  );
}

export default App;