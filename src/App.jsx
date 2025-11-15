import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Projects from "./Component/Projects/Projects";
import Certifications from "./Component/Certifications/Certifications";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Certifications/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App