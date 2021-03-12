import React, { useEffect } from "react";
import { Col, Container, Row, Card, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listExperiences } from "./actions/experiencesActions";
import Loader from "./components/Loader";
const Experience = () => {
  const dispatch = useDispatch();

  const experienceList = useSelector((state) => state.experienceList);
  const {
    loading: experienceLoading,
    error: experienceError,
    experiences,
  } = experienceList;

  useEffect(() => {
    dispatch(listExperiences());
  }, [dispatch]);
  return (
    // <!-- ======= Resume Section ======= -->
    <section id="experience" className="experience">
      <Container>
        <h1 className="section-title">Experience</h1>
      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <h4 className="mb-4">Professional Experience</h4>
          </Col>
        </Row>
        <Row>
          {experienceLoading && <Loader />}
          {experienceError && <Alert variant="danger">{experienceError}</Alert>}
          {experiences.map((experience, idx) => {
            if (experience.category === "professional") {
              return (
                <Col
                  key={idx}
                  md={6}
                  className="px-0"
                  data-aos="zoom-out-right"
                  data-aos-duration="800"
                >
                  <Card className="box-shadow">
                    <Card.Header>
                      <Card.Title>{experience.companyName}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Subtitle className="mb-4 mt-2">
                        {experience.position} | {experience.startDate} -{" "}
                        {experience.endDate}
                      </Card.Subtitle>

                      <ul className="ml-4 mb-0">
                        {experience.duties.map((duty, idx) => (
                          <li key={idx}>{duty.duty}</li>
                        ))}
                      </ul>
                      <hr />

                      <ul className="technology-box">
                        {/* <h5 className="mb-4">Technologies: </h5> */}
                        {experience.usedTechnologies.map(
                          (usedTechnology, idx) => (
                            <li key={idx} className="technology">
                              {usedTechnology.name}
                            </li>
                          )
                        )}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
            return true;
          })}
        </Row>
        <Row>
          <Col md={12}>
            <h4 className="mb-4 mt-5">Internship Experience</h4>
          </Col>
        </Row>
        <Row>
          {experienceLoading && <Loader />}
          {experienceError && <Alert variant="danger">{experienceError}</Alert>}
          {experiences.map((experience, idx) => {
            if (experience.category === "internship") {
              return (
                <Col
                  key={idx}
                  md={6}
                  className="px-0"
                  data-aos="zoom-out-right"
                  data-aos-duration="800"
                >
                  <Card className="box-shadow">
                    <Card.Header>
                      <Card.Title>{experience.companyName}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Subtitle className="mb-4 mt-2">
                        {experience.position} | {experience.startDate} -{" "}
                        {experience.endDate}
                      </Card.Subtitle>

                      <ul className="ml-4 mb-0">
                        {experience.duties.map((duty, idx) => (
                          <li key={idx}>{duty.duty}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
            return true;
          })}
        </Row>
      </Container>
    </section>
    // <!-- End Resume Section -->
  );
};

export default Experience;
