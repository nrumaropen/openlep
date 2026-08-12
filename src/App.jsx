
import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";
import Dashboard from "./dashboard/Dashboard";
import Architecture from "./components/Architecture";

function App() {
  const hash = window.location.hash;

  const route = hash.replace(/^#/, "") || "/";

  if (route === "/about") {
    return <About />;
  }

  if (route === "/docs") {
    return <Docs />;
  }

  if (route === "/contact") {
    return <Contact />;
  }

  if (route === "/dashboard") {
    return <Dashboard />;
  }

  if (route === "/architecture") {
    return <Architecture />;
  }

  return <Home />;
}

export default App;