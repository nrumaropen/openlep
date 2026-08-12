import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";
import Dashboard from "./dashboard/Dashboard";
import Architecture from "./components/Architecture";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="/openlep/" className="logo">
          OpenLEP
        </a>

        <nav className="nav-links">
          <a href="/openlep/">Home</a>
          <a href="/openlep/#/about">About</a>
          <a href="/openlep/#/docs">Documentation</a>
          <a href="/openlep/#/dashboard">Dashboard</a>
          <a href="/openlep/#/architecture">Architecture</a>
        </nav>

        <a
          href="/openlep/#/dashboard"
          className="nav-button"
        >
          Explore Dashboard
        </a>
      </div>
    </header>
  );
}

function App() {
  const [route, setRoute] = useState(
    window.location.hash.replace(/^#/, "") || "/"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(
        window.location.hash.replace(/^#/, "") || "/"
      );
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case "/about":
        return <About />;

      case "/docs":
        return <Docs />;

      case "/contact":
        return <Contact />;

      case "/dashboard":
        return <Dashboard />;

      case "/architecture":
        return <Architecture />;

      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar />

      <main>{renderPage()}</main>
    </>
  );
}

export default App;