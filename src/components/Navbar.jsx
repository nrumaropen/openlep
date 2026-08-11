function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">
          OpenLEP
        </a>

        <nav className="nav-links">
          <a href="#problem">Problem</a>
          <a href="#components">Components</a>
          <a href="#architecture">Architecture</a>
          <a href="#documentation">Documentation</a>
        </nav>

        <a href="#documentation" className="nav-button">
          Explore OpenLEP
        </a>
      </div>
    </header>
  );
}

export default Navbar;