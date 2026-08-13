import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";
import ExploreDashboard from "./pages/ExploreDashboard";
import Dashboard from "./pages/Dashboard";
import InterpreterDashboard from "./pages/InterpreterDashboard";
import LanguageAccessStandards from "./pages/LanguageAccessStandards";
import HospitalLanguageAccess from "./pages/HospitalLanguageAccess";
import EducationDashboard from "./pages/EducationDashboard";
import Compliance from "./pages/Compliance";
import DMVDashboard from "./pages/DMVDashboard";
import DataEvaluation from "./pages/DataEvaluation";
import Architecture from "./components/Architecture";
import Navbar from "./components/Navbar";

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

      case "/exploredashboard":
        return <ExploreDashboard />;

      case "/interpreter-dashboard":
        return <InterpreterDashboard />;

      case "/hospital-language-access":
        return <HospitalLanguageAccess />;

      case "/education":
        return <EducationDashboard />;

      case "/compliance":
        return <Compliance />;

      case "/dmvdashboard":
        return <DMVDashboard />;

      case "/architecture":
        return <Architecture />;

      case "/language-access-standards":
        return <LanguageAccessStandards />;

      case "/data-evaluation":
        return <DataEvaluation />;

      case "/":
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar />

      <main>
        {renderPage()}
      </main>
    </>
  );
}

export default App;