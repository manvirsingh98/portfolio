import React, { useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listQualifications } from "../../actions/qualificationsActions";

import AdminCard from "../AdminCard";
import Loader from "../../components/Loader";

const AdminQualificationsSection = ({ location }) => {
  //Dispatch
  const dispatch = useDispatch();

  //Get skills
  const qualificationList = useSelector((state) => state.qualificationList);
  const {
    loading: loadingqualifications,
    error: errorqualifications,
    qualifications,
  } = qualificationList;

  //use effect
  useEffect(() => {
    dispatch(listQualifications());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h3>Qualification Section</h3>
        </Col>
      </Row>
      <Row className="">
        {loadingqualifications && <Loader />}
        {errorqualifications && (
          <Alert variant="danger">{errorqualifications}</Alert>
        )}
        {qualifications &&
          qualifications.map((qualification, idx) => (
            <Col md={6} key={qualification._id}>
              <AdminCard
                key={qualification._id}
                data={qualification}
                cardType="qualification"
                path={`${location.pathname}/${qualification._id}`}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AdminQualificationsSection;
