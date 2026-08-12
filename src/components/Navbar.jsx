
function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="/openlep/" className="logo">
          OpenLEP
        </a>

        <nav className="nav-links">
          <a href="/openlep/">Home</a>
          <a href="/openlep/about">About</a>
          <a href="/openlep/docs">Documentation</a>
          <a href="/openlep/dashboard">Dashboard</a>
          <a href="/openlep/architecture">Architecture</a>
        </nav>

        <a href="/openlep/dashboard" className="nav-button">
          Explore Dashboard
        </a>
      </div>
    </header>
  );
}

export default Navbar;

