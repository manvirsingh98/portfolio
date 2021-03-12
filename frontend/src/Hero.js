import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "./actions/portfolioActions";

const HeroSection = () => {
  const dispatch = useDispatch();

  const portfolioInfo = useSelector((state) => state.portfolioInfo);
  const { loading, error, portfolio } = portfolioInfo;

  useEffect(() => {
    dispatch(getPortfolio());
  }, [dispatch]);

  return (
    // <!-- ======= Hero Section ======= -->
    <div id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>
              {portfolio && portfolio.position}
              <span
                style={{ color: "#29a19c", fontFamily: "Potta One, cursive" }}
              >
                Web Developer
              </span>
            </h1>
            <p className="my-4 mr-5">{portfolio && portfolio.summary}</p>
            <div className="cta-btns">
              <button className="btn btn-md btn-secondary mr-4">
                Download my resume
              </button>
              <button className="btn btn-md btn-secondary mr-4">
                See my work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- End Hero -->
  );
};

export default HeroSection;