import "../styles/components/navbar.css";
import logoOpenLEP from "../assets/logoopenlep.png";

function Navbar() {
  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a
          href="/openlep/"
          className="logo"
          aria-label="OpenLEP home"
          onClick={handleNavigation}
        >
          <img
            src={logoOpenLEP}
            alt="OpenLEP"
            className="logo-image"
          />
        </a>

        <nav className="nav-links">
          <a href="/openlep/#/about" onClick={handleNavigation}>
            Why openLEP?
          </a>

          <a href="/openlep/#/docs" onClick={handleNavigation}>
            Documentation
          </a>

          <a href="/openlep/#/dashboard" onClick={handleNavigation}>
            Dashboard
          </a>

          <a href="/openlep/#/architecture" onClick={handleNavigation}>
            Framework
          </a>
        </nav>

        <a
          href="/openlep/#/exploredashboard"
          className="nav-button"
          onClick={handleNavigation}
        >
          Explore Dashboard
        </a>
      </div>
    </header>
  );
}

export default Navbar;