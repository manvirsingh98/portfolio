import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  listServiceDetails,
  updateService,
} from "../../actions/servicesActions";
import { SERVICE_UPDATE_RESET } from "../../constants/servicesConstants";
const EditServiceForm = ({ history, match }) => {
  const serviceId = match.params.id;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const dispatch = useDispatch();

  const serviceDetails = useSelector((state) => state.serviceDetails);
  const { loading, error, service } = serviceDetails;

  const serviceUpdate = useSelector((state) => state.serviceUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = serviceUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SERVICE_UPDATE_RESET });
      dispatch(listServiceDetails(serviceId));
      history.push("/dashboard/aboutSection");
    } else {
      if (!service.name || service._id !== serviceId) {
        dispatch(listServiceDetails(serviceId));
      } else {
        setName(service.name);
        setDescription(service.description);
        setIcon(service.icon);
      }
    }
  }, [dispatch, serviceId, history, service, successUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, description, icon);
    dispatch(
      updateService({
        _id: serviceId,
        name,
        description,
        icon,
      })
    );
  };

  return (
    <>
      <Container className="formSection">
        <div className="services">
          <Row>
            <Col md={12}>
              <h1 className="mb-4">Edit Service </h1>
            </Col>
          </Row>
          <Row className="form-outer">
            <Col md={10}>
              <form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter label"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formSummary">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Description"
                    value={description}
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formName">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Icon"
                    value={icon}
                    name="icon"
                    onChange={(e) => setIcon(e.target.value)}
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

export default EditServiceForm;
