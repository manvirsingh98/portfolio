import React, { useEffect } from "react";
import { Col, Container, Row, Card, CardDeck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "./actions/servicesActions";
import { getSocialProfiles } from "./actions/socialProfilesActions";

import Loader from "./components/Loader";

const About = () => {
  const dispatch = useDispatch();

  const portfolioInfo = useSelector((state) => state.portfolioInfo);
  const { loading, error, portfolio } = portfolioInfo;

  const serviceList = useSelector((state) => state.serviceList);
  const {
    loading: serviceLoading,
    error: serviceError,
    services,
  } = serviceList;

  const socialProfilesList = useSelector((state) => state.socialProfilesList);
  const {
    loading: socialProfilesLoading,
    error: socialProfilesError,
    socialProfiles,
  } = socialProfilesList;

  useEffect(() => {
    dispatch(listServices());
    dispatch(getSocialProfiles());
  }, [dispatch]);

  //create dynamic row with 2 items
  let rowContents = [];
  const contents = services.reduce((acc, s, i) => {
    rowContents.push(
      <Card>
        <Card.Body>
          <Card.Title>{s.name}</Card.Title>
          <Card.Text>{s.description}</Card.Text>
        </Card.Body>
      </Card>
    );
    if (i % 4 === 1) {
      acc.push(<CardDeck>{rowContents}</CardDeck>);
      rowContents = [];
    }
    return acc;
  }, []);
  contents.push(<CardDeck>{rowContents}</CardDeck>);

  return (
    // <!-- ======= About Section ======= -->
    <section id="about" className="about">
      <Container>
        <h1 className="section-title">About</h1>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            {serviceLoading && <Loader />}
            {serviceError && <h4>{serviceError}</h4>}
            <div
              className="services"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {contents}
            </div>
          </Col>
          <Col md={6}>
            {loading && <Loader />}
            {error && <h4>{error}</h4>}
            <div className="about-me pt-3 pl-5">
              <div
                className="about-me-title mb-5"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 data-aos="fade-right" data-aos-duration="1000">
                  {portfolio && portfolio.aboutTitle}
                </h3>
              </div>
              <div
                className="about-me-desc mb-5"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p>{portfolio && portfolio.aboutSummary}</p>
              </div>
              <div
                className="social-profiles"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {socialProfilesLoading && <Loader />}
                {socialProfilesError && <h4>{socialProfilesError}</h4>}
                {socialProfiles.map((socialProfile, idx) => (
                  <div className="social-profile-icon" key={idx}>
                    <i className={` ${socialProfile.icon}`} />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
