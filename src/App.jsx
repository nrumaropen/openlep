import { useEffect, useState } from "react";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

import Dashboard from "./pages/Dashboard";
import ExploreDashboard from "./pages/ExploreDashboard";
import InterpreterDashboard from "./pages/InterpreterDashboard";
import HospitalLanguageAccess from "./pages/HospitalLanguageAccess";
import EducationDashboard from "./pages/EducationDashboard";
import DMVDashboard from "./pages/DMVDashboard";

import LanguageAccessStandards from "./pages/LanguageAccessStandards";
import DataEvaluation from "./pages/DataEvaluation";

const routes = {
  "/": Home,

  "/about": About,
  "/docs": Docs,
  "/contact": Contact,

  "/dashboard": Dashboard,
  "/exploredashboard": ExploreDashboard,
  "/interpreter-dashboard": InterpreterDashboard,
  "/hospital-language-access": HospitalLanguageAccess,
  "/education": EducationDashboard,
  "/dmvdashboard": DMVDashboard,
  "/language-access-standards": LanguageAccessStandards,
  "/data-evaluation": DataEvaluation,
};

function App() {
  const [route, setRoute] = useState(
    window.location.hash.replace(/^#/, "") || "/"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.replace(/^#/, "") || "/");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const CurrentPage = routes[route] || Home;

  return (
    <>
      <Navbar />

      <main>
        <CurrentPage />
      </main>

      <Footer />
    </>
  );
}

export default App;