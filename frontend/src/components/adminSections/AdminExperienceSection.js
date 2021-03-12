import React, { useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listExperiences } from "../../actions/experiencesActions";

import AdminCard from "../AdminCard";
import Loader from "../Loader";
const AdminExperienceSection = ({ location }) => {
  //Dispatch
  const dispatch = useDispatch();

  //Get services
  const experienceList = useSelector((state) => state.experienceList);
  const {
    loading: loadingexperiences,
    error: errorexperiences,
    experiences,
  } = experienceList;

  //use effect
  useEffect(() => {
    dispatch(listExperiences());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h3>Experience Section</h3>
        </Col>
      </Row>
      <Row className="">
        {loadingexperiences && <Loader />}
        {errorexperiences && <Alert variant="danger">{errorexperiences}</Alert>}
        {experiences &&
          experiences.map((experience, idx) => (
            <Col md={6} key={experience._id}>
              <AdminCard
                data={experience}
                cardType="experience"
                path={`${location.pathname}/${experience._id}`}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AdminExperienceSection;
