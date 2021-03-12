import React, { useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "../../actions/projectsActions";

import AdminCard from "../AdminCard";
import Loader from "../../components/Loader";

const AdminProjectsSection = ({ location }) => {
  //Dispatch
  const dispatch = useDispatch();

  //Get projects
  const projectList = useSelector((state) => state.projectList);
  const {
    loading: loadingprojects,
    error: errorprojects,
    projects,
  } = projectList;

  //use effect
  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h3>Projects Section</h3>
        </Col>
      </Row>
      <Row className="">
        {loadingprojects && <Loader />}
        {errorprojects && <Alert variant="danger">{errorprojects}</Alert>}
        {projects &&
          projects.map((project, idx) => (
            <Col md={6} key={project._id}>
              <AdminCard
                key={project._id}
                data={project}
                cardType="project"
                path={`${location.pathname}/${project._id}`}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AdminProjectsSection;
