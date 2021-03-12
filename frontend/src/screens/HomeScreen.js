import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import About from "../About";
import Hero from "../Hero";
import Qualification from "../Qualification";
import Skill from "../Skill";
import Experience from "../Experience";
import Work from "../Work";
import Footer from "../components/Footer";
import Contact from "../Contact";

const HomeScreen = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomeScreen;
