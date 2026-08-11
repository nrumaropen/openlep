function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            OpenLEP
          </a>

          <p>
            Open Language Access Compliance Infrastructure.
          </p>
        </div>

        <div className="footer-links">
          <a href="#problem">Problem</a>
          <a href="#components">Components</a>
          <a href="#architecture">Architecture</a>
          <a href="#documentation">Documentation</a>
        </div>

        <div className="footer-bottom">
          <p>OpenLEP — Open Language Access Compliance Infrastructure</p>
          <p>Open-source framework</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;