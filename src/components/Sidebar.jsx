import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>🛡️</span>
        <h2>CyberWatch</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>📊</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/security-logs"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>📄</span>
          Security Logs
        </NavLink>

        <NavLink
          to="/incidents"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>🚨</span>
          Incidents
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>📈</span>
          Reports
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span>⚙️</span>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;