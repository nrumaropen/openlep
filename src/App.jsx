
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";
import Dashboard from "./dashboard/Dashboard";
import Architecture from "./components/Architecture";

function App() {
  const [path] = useState(window.location.pathname);

  if (path === "/openlep/about") {
    return <About />;
  }

  if (path === "/openlep/docs") {
    return <Docs />;
  }

  if (path === "/openlep/contact") {
    return <Contact />;
  }

  if (path === "/openlep/dashboard") {
    return <Dashboard />;
  }

  if (path === "/openlep/architecture") {
    return <Architecture />;
  }

  return <Home />;
}

export default App;
