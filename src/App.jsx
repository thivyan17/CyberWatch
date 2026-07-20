import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>🛡️ CyberWatch</h2>

        <ul>
          <li>📊 Dashboard</li>
          <li>📄 Security Logs</li>
          <li>🚨 Incidents</li>
          <li>📈 Reports</li>
          <li>⚙️ Settings</li>
        </ul>
      </aside>

      <main className="content">
        <header className="navbar">
          <h1>Security Operations Center</h1>
        </header>

        <section className="dashboard">
          <div className="card">
            <h3>Critical Alerts</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Blocked IPs</h3>
            <p>38</p>
          </div>

          <div className="card">
            <h3>Failed Logins</h3>
            <p>107</p>
          </div>

          <div className="card">
            <h3>Threat Score</h3>
            <p>82%</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
