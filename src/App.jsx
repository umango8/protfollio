import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import "./index.css"
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
        <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
