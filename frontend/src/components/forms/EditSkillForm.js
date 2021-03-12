import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listSkillDetails, updateSkill } from "../../actions/skillsActions";
import { SKILL_UPDATE_RESET } from "../../constants/skillsConstants";
const EditSkillForm = ({ history, match }) => {
  const skillId = match.params.id;

  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [icon, setIcon] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const skillDetails = useSelector((state) => state.skillDetails);
  const { loading, error, skill } = skillDetails;

  const skillUpdate = useSelector((state) => state.skillUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = skillUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SKILL_UPDATE_RESET });
      dispatch(listSkillDetails(skillId));
      history.push("/dashboard/skillSection");
    } else {
      if (!skill.name || skill._id !== skillId) {
        dispatch(listSkillDetails(skillId));
      } else {
        setName(skill.name);
        setValue(skill.value);
        setIcon(skill.icon);
        setCategory(skill.category);
      }
    }
  }, [dispatch, skillId, history, skill, successUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, value, icon, category);
    dispatch(
      updateSkill({
        _id: skillId,
        name,
        value,
        icon,
        category,
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
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter label"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                {value && (
                  <Form.Group controlId="formSummary">
                    <Form.Label>Value</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Value"
                      value={value}
                      name="value"
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </Form.Group>
                )}

                <Form.Group controlId="form.category">
                  <Form.Label>Example select</Form.Label>
                  <Form.Control
                    as="select"
                    value={category}
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">choose...</option>

                    <option value="professional">Professional</option>
                    <option value="technical">Technical</option>
                  </Form.Control>
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

export default EditSkillForm;
