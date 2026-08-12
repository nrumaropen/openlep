import "../styles/components/navbar.css";
import logoOpenLEP from "../assets/logoopenlep.png";


function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a
        href="/openlep/"
        className="logo"
        aria-label="OpenLEP home"
      >
        <img
          src={logoOpenLEP}
          alt="OpenLEP"
          className="logo-image"
        />
      </a> 

        <nav className="nav-links">
          <a href="/openlep/#/about">Why openLEP?</a>
          <a href="/openlep/#/docs">Documentation</a>
          <a href="/openlep/#/dashboard">Dashboard</a>
          <a href="/openlep/#/architecture">Architecture</a>
        </nav>

        <a href="/openlep/#/dashboard" className="nav-button">
          Explore Dashboard
        </a>
      </div>
    </header>
  );
}

export default Navbar;

