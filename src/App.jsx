import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";
import LanguageAccessStandards from "./pages/LanguageAccessStandards";
import Compliance from "./pages/Compliance";
import DataEvaluation from "./pages/DataEvaluation";
import Dashboard from "./pages/Dashboard";
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

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {

      window.removeEventListener(
        "hashchange",
        handleHashChange
      );

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

      case "/language-access-standards":
        return <LanguageAccessStandards />;

      case "/compliance-infrastructure":
        return <Compliance />;

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
