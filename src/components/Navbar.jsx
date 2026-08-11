function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">
          OpenLEP
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/docs">Documentation</a>
          <a href="#architecture">Architecture</a>
        </nav>

        <a href="/docs" className="nav-button">
          Explore OpenLEP
        </a>
      </div>
    </header>
  );
}

export default Navbar;