import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  listProjectDetails,
  updateProject,
} from "../../actions/projectsActions";
import { PROJECT_UPDATE_RESET } from "../../constants/projectsConstants";
const EditProjectForm = ({ history, match }) => {
  const projectId = match.params.id;

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  const projectUpdate = useSelector((state) => state.projectUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = projectUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROJECT_UPDATE_RESET });
      dispatch(listProjectDetails(projectId));
      history.push("/dashboard/projectSection");
    } else {
      if (!project.title || project._id !== projectId) {
        dispatch(listProjectDetails(projectId));
      } else {
        setTitle(project.title);
        setSummary(project.summary);
        setImage(project.image);
        setUrl(project.url);
      }
    }
  }, [dispatch, projectId, history, project, successUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProject({
        _id: projectId,
        title,
        summary,
        image,
        url,
      })
    );
  };

  return (
    <>
      <Container className="formSection">
        <div className="skills">
          <Row>
            <Col md={12}>
              <h1 className="mb-4">Edit Project </h1>
            </Col>
          </Row>
          <Row className="form-outer">
            <Col md={10}>
              <form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formSummary">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Summary"
                    value={summary}
                    name="summary"
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formName">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Image"
                    value={image}
                    name="image"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formName">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter URL"
                    value={url}
                    name="url"
                    onChange={(e) => setUrl(e.target.value)}
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

export default EditProjectForm;
