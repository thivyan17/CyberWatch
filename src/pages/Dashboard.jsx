import SummaryCards from "../components/SummaryCards";
import LogUploader from "../components/LogUploader";
import ThreatChart from "../components/ThreatChart";
import ThreatAlerts from "../components/ThreatAlerts";
import LogTable from "../components/LogTable";

function Dashboard({ logs, onLogsUploaded }) {
  return (
    <>
      <SummaryCards logs={logs} />

      <LogUploader
        onLogsUploaded={onLogsUploaded}
      />

      <ThreatChart logs={logs} />

      <ThreatAlerts logs={logs} />

      <LogTable logs={logs} />
    </>
  );
}

export default Dashboard;