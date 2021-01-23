import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Alert } from "react-bootstrap";

import Loader from "react-loader-spinner";
import AOS from "aos";
import "aos/dist/aos.css";

import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "../actions/portfolioActions";
import About from "../sections/About";
import HeroSection from "../sections/HeroSection";
import FactSection from "../sections/FactSection";
import SkillSection from "../sections/SkillSection";
import ResumeSection from "../sections/ResumeSection";
import ServiceSection from "../sections/ServiceSection";
import TestimonialSection from "../sections/TestimonialSection";
import ContactFormSection from "../sections/ContactFormSection";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const portfolioInfo = useSelector((state) => state.portfolioInfo);
  const { loading, error, portfolio } = portfolioInfo;

  useEffect(() => {
    AOS.init();
    dispatch(getPortfolio());
    // Back to top button
  }, [dispatch]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      {loading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      <HeroSection />
      <main id="main">
        <About />
        <FactSection />
        <SkillSection />
        <ResumeSection />
        <ServiceSection />
        <TestimonialSection />
        <ContactFormSection />
      </main>
      <Footer />

      <Link to="home" onClick={scrollToTop} className="back-to-top">
        <i className="bx bx-up-arrow-alt"></i>
      </Link>
      <div id="preloader"></div>
    </>
  );
};

export default HomeScreen;
