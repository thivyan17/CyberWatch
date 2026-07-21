import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    path: "/",
    label: "Dashboard",
    icon: "▦",
    end: true,
  },
  {
    path: "/security-logs",
    label: "Security Logs",
    icon: "▤",
  },
  {
    path: "/incidents",
    label: "Incidents",
    icon: "⚠",
  },
  {
    path: "/reports",
    label: "Reports",
    icon: "▥",
  },
  {
    path: "/settings",
    label: "Settings",
    icon: "⚙",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">C</div>

        <div>
          <h2>CyberWatch</h2>
          <span>Security Platform</span>
        </div>
      </div>

      <p className="navigation-label">Workspace</p>

      <nav className="sidebar-nav">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-avatar">A</div>

        <div>
          <strong>Admin User</strong>
          <span>Security Analyst</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;