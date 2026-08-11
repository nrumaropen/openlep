import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

function App() {
  const [path] = useState(window.location.pathname);

  if (path === "/about") {
    return <About />;
  }

  if (path === "/docs") {
    return <Docs />;
  }

  if (path === "/contact") {
    return <Contact />;
  }

  return <Home />;
}

export default App;