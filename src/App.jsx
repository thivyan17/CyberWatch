import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import ThreatAlerts from "./components/ThreatAlerts";
import LogTable from "./components/LogTable";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        <Navbar />
        <SummaryCards />
      </main>
    </div>
  );
}

export default App;