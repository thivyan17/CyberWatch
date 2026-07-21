import SummaryCards from "../components/SummaryCards";
import ThreatChart from "../components/ThreatChart";
import ThreatAlerts from "../components/ThreatAlerts";

function Dashboard({ logs }) {
  return (
    <>
      <SummaryCards logs={logs} />
      <ThreatChart logs={logs} />
      <ThreatAlerts logs={logs} />
    </>
  );
}

export default Dashboard;