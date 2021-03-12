import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  listQualificationDetails,
  updateQualification,
} from "../../actions/qualificationsActions";
import { QUALIFICATION_UPDATE_RESET } from "../../constants/qualificationsConstants";
const EditQualificationForm = ({ history, match }) => {
  const qualificationId = match.params.id;

  const [institution, setInstitution] = useState("");
  const [summary, setSummary] = useState("");
  const [studyType, setStudyType] = useState("");
  const [duration, setDuration] = useState("");

  const dispatch = useDispatch();

  const qualificationDetails = useSelector(
    (state) => state.qualificationDetails
  );
  const { loading, error, qualification } = qualificationDetails;

  const qualificationUpdate = useSelector((state) => state.qualificationUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = qualificationUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: QUALIFICATION_UPDATE_RESET });
      dispatch(listQualificationDetails(qualificationId));
      history.push("/dashboard/qualificationSection");
    } else {
      if (!qualification.institution || qualification._id !== qualificationId) {
        dispatch(listQualificationDetails(qualificationId));
      } else {
        setInstitution(qualification.institution);
        setSummary(qualification.summary);
        setStudyType(qualification.studyType);
        setDuration(qualification.duration);
      }
    }
  }, [dispatch, qualificationId, history, qualification, successUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateQualification({
        _id: qualificationId,
        institution,
        summary,
        studyType,
        duration,
      })
    );
  };

  return (
    <>
      <Container className="formSection">
        <div className="skills">
          <Row>
            <Col md={12}>
              <h1 className="mb-4">Edit Skill </h1>
            </Col>
          </Row>
          <Row className="form-outer">
            <Col md={10}>
              <form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Institution</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter institution"
                    value={institution}
                    name="institution"
                    onChange={(e) => setInstitution(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formName">
                  <Form.Label>Study Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter study type"
                    value={studyType}
                    name="studyType"
                    onChange={(e) => setStudyType(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formName">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter duration"
                    value={duration}
                    name="duration"
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formName">
                  <Form.Label>summary</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter summary"
                    value={summary}
                    name="summary"
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Col>

            {/* ))} */}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default EditQualificationForm;
