import React, { useEffect } from "react";
import { Container, Row, Card, Alert, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "./actions/projectsActions";
import Loader from "./components/Loader";

const WorkSection = () => {
  const dispatch = useDispatch();

  const projectList = useSelector((state) => state.projectList);
  const {
    loading: projectLoading,
    error: projectError,
    projects,
  } = projectList;

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    // <!-- ======= Services Section ======= -->
    <section id="work" className="work">
      <Container>
        <h1 className="section-title">Work</h1>
      </Container>
      <Container>
        <Row>
          {projectLoading && <Loader />}
          {projectError && <Alert variant="danger">{projectError}</Alert>}
          {projects.map((project, idx) => (
            <Col
              className="px-0"
              md={4}
              key={idx}
              data-aos="flip-left"
              data-aos-duration="800"
            >
              <div className="project">
                <img src={project.image} />

                {/* <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.summary}</Card.Text>
                </Card.Body> */}
                <div className="project-details">
                  <h4>{project.title}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    // <!-- End Services Section -->
  );
};

export default WorkSection;
