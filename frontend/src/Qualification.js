import React, { useEffect } from "react";
import { Col, Container, Row, Card, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listQualifications } from "./actions/qualificationsActions";
import Loader from "./components/Loader";

const QualificationSection = () => {
  const dispatch = useDispatch();

  const qualificationList = useSelector((state) => state.qualificationList);
  const {
    loading: qualificationLoading,
    error: qualificationError,
    qualifications,
  } = qualificationList;

  useEffect(() => {
    dispatch(listQualifications());
  }, [dispatch]);
  return (
    // <!-- ======= Facts Section ======= -->
    <section id="qualification" className="qualification">
      <Container>
        <h1 className="section-title">Qualification</h1>
      </Container>
      <Container>
        <Row>
          {qualificationLoading && <Loader />}
          {qualificationError && (
            <Alert variant="danger">{qualificationError}</Alert>
          )}
          {qualifications.map((qualification, idx) => (
            <Col
              md={6}
              className="px-0"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <Card className="box-shadow">
                <Card.Header>
                  <Card.Title>{qualification.institution}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{qualification.summary}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>
                    {qualification.studyType} | {qualification.duration}
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    // <!-- End Facts Section -->
  );
};

export default QualificationSection;
