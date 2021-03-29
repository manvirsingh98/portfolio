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
              className="content px-0"
              md={4}
              key={idx}
              data-aos="flip-left"
              data-aos-duration="800"
            >
              <div className="project">
                <div class="content-overlay"></div>

                <img src={project.image} />

                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">{project.title}</h3>
                  <p class="content-text">{project.summary}</p>
                  <a href={project.url}>Click to see website</a>
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
