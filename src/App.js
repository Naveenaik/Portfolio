import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Internship from "./components/Internship";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import { motion, useScroll } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
    <motion.div
        className="fixed top-0 left-0 right-0 h-10 red-500 transform origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Internship/>
      <Skills/>
      <Contact/>
      <Footer/>
      <ScrollToTop />
    </div>
  );
}

export default App;
