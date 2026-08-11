import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Components from "../components/Components";
import Architecture from "../components/Architecture";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Components />
        <Architecture />
        <Documentation />
      </main>

      <Footer />
    </>
  );
}

export default Home;