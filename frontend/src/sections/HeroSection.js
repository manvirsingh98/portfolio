import React from "react";
import Typed from "react-typed";
import bubbleImage from "../assets/img/bubble.png";

const HeroSection = ({ basics }) => {
  return (
    // <!-- ======= Hero Section ======= -->

    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="bubbles">
        <img src={bubbleImage} alt="" />
        <img src={bubbleImage} alt="" />
        <img src={bubbleImage} alt="" />
        <img src={bubbleImage} alt="" />
        <img src={bubbleImage} alt="" />
        <img src={bubbleImage} alt="" />
        <img src={bubbleImage} alt="" />
      </div>
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="col-md-8">
            <h1>{basics && basics.firstName + " " + basics.lastName}</h1>
            <p className="mb-4">
              I'm{" "}
              <Typed
                className="typed"
                strings={
                  basics && basics.keywords.length > 0
                    ? [...basics.keywords]
                    : ["Developer"]
                }
                typeSpeed={90}
                backSpeed={70}
                loop
              ></Typed>
            </p>
            <span>{basics && basics.summary}</span>
            <div className="social-links">
              <a href="#twitter" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#twitter" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#twitter" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#twitter" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#twitter" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Hero -->
  );
};

export default HeroSection;
