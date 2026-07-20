function Navbar() {
  return (
    <header className="navbar">
      <div>
        <p className="page-label">Security overview</p>
        <h1>Security Operations Center</h1>
      </div>

      <div className="system-status">
        <span className="status-dot"></span>
        System operational
      </div>
    </header>
  );
}

export default Navbar;