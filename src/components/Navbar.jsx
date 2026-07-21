import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/security-logs": "Security Logs",
    "/incidents": "Incidents",
    "/reports": "Reports",
    "/settings": "Settings",
  };

  const pageDescriptions = {
    "/": "Monitor security activity and active threats.",
    "/security-logs": "Upload, search, and review security events.",
    "/incidents": "Investigate and manage detected threats.",
    "/reports": "Generate and export security reports.",
    "/settings": "Manage application preferences.",
  };

  const title = pageTitles[location.pathname] || "CyberWatch";
  const description =
    pageDescriptions[location.pathname] || "Security Operations Center";

  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="system-status">
        <span className="status-dot"></span>
        <span>System operational</span>
      </div>
    </header>
  );
}

export default Navbar;