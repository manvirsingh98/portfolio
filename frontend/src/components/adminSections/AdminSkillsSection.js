import React, { useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listSkills } from "../../actions/skillsActions";

import AdminCard from "../AdminCard";
import Loader from "../../components/Loader";

const AdminSkillsSection = ({ location }) => {
  //Dispatch
  const dispatch = useDispatch();

  //Get skills
  const skillList = useSelector((state) => state.skillList);
  const { loading: loadingskills, error: errorskills, skills } = skillList;

  //use effect
  useEffect(() => {
    dispatch(listSkills());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h3>Skills Section</h3>
        </Col>
      </Row>
      <Row className="">
        {loadingskills && <Loader />}
        {errorskills && <Alert variant="danger">{errorskills}</Alert>}
        {skills &&
          skills.map((skill, idx) => (
            <Col md={3} key={skill._id}>
              <AdminCard
                key={skill._id}
                data={skill}
                cardType="skill"
                path={`${location.pathname}/${skill._id}`}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AdminSkillsSection;
