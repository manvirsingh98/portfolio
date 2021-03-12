import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  listExperienceDetails,
  updateExperience,
} from "../../actions/experiencesActions";
import { EXPERIENCE_UPDATE_RESET } from "../../constants/experiencesConstants";
const EditExperienceForm = ({ history, match }) => {
  const experienceId = match.params.id;

  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [duties, setDuties] = useState([{ duty: "" }]);

  const [usedTechnologies, setUsedTechnologies] = useState([
    { name: "", icon: "" },
  ]);
  // handle input change
  const handleUsedTechnologiesChange = (e, index) => {
    const { name, value } = e.target;
    const usedTechnology = [...usedTechnologies];
    usedTechnology[index][name] = value;
    setUsedTechnologies(usedTechnology);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const usedTechnology = [...usedTechnologies];
    usedTechnology.splice(index, 1);
    setUsedTechnologies(usedTechnology);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setUsedTechnologies([...usedTechnologies, { name: "", icon: "" }]);
  };

  // handle input change
  const handleDutiesChange = (e, index) => {
    const { name, value } = e.target;
    const duty = [...duties];
    duty[index][name] = value;
    setDuties(duty);
  };

  // handle click event of the Remove button
  const handleDutyRemoveClick = (index) => {
    const duty = [...duties];
    duty.splice(index, 1);
    setDuties(duty);
  };

  // handle click event of the Add button
  const handleDutyAddClick = () => {
    setDuties([...duties, { duty: "" }]);
  };

  const dispatch = useDispatch();

  const experienceDetails = useSelector((state) => state.experienceDetails);
  const { loading, error, experience } = experienceDetails;

  const experienceUpdate = useSelector((state) => state.experienceUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = experienceUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: EXPERIENCE_UPDATE_RESET });
      dispatch(listExperienceDetails(experienceId));
      history.push("/dashboard/experienceSection");
    } else {
      if (!experience.companyName || experience._id !== experienceId) {
        dispatch(listExperienceDetails(experienceId));
      } else {
        setCompanyName(experience.companyName);
        setPosition(experience.position);
        setStartDate(experience.startDate);
        setEndDate(experience.endDate);
        setCategory(experience.category);
        setUsedTechnologies(experience.usedTechnologies);
        setDuties(experience.duties);
      }
    }
  }, [dispatch, experienceId, history, experience, successUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      companyName,
      position,
      startDate,
      endDate,
      category,
      usedTechnologies,
      duties,
    };
    console.log(data);
    dispatch(
      updateExperience({
        _id: experienceId,
        companyName,
        position,
        startDate,
        endDate,
        category,
        usedTechnologies,
        duties,
      })
    );
  };

  return (
    <>
      <Container className="formSection">
        <div className="services">
          <Row>
            <Col md={12}>
              <h1 className="mb-4">Edit Experience </h1>
            </Col>
          </Row>
          <Row className="form-outer">
            <Col md={10}>
              <form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter CompanyName"
                    name="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formSummary">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter position"
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formName">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter startDate"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formName">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter endDate"
                    name="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">choose...</option>
                    <option value="professional">professional</option>
                    <option value="internship">internship</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Used Technology</Form.Label>

                  {usedTechnologies.map((x, i) => {
                    return (
                      <div key={i}>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          name="name"
                          value={x.name}
                          onChange={(e) => handleUsedTechnologiesChange(e, i)}
                          className="mb-2"
                        />
                        <Form.Control
                          type="text"
                          placeholder="Enter icon"
                          name="icon"
                          value={x.icon}
                          onChange={(e) => handleUsedTechnologiesChange(e, i)}
                          className="mb-2"
                        />

                        <div className="btn-box">
                          {usedTechnologies.length !== 1 && (
                            <button
                              className="btn btn-sm btn-danger mr-2 my-3"
                              onClick={() => handleRemoveClick(i)}
                            >
                              <AiOutlineDelete />
                            </button>
                          )}
                          {usedTechnologies.length - 1 === i && (
                            <button
                              className="btn btn-sm btn-info my-3"
                              onClick={handleAddClick}
                            >
                              <AiOutlinePlus />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Duties</Form.Label>
                  {duties.map((x, i) => {
                    return (
                      <div key={i}>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          name="duty"
                          value={x.duty}
                          onChange={(e) => handleDutiesChange(e, i)}
                          className="mb-2"
                        />

                        <div className="btn-box">
                          {duties.length !== 1 && (
                            <button
                              className="btn btn-sm btn-danger mr-2 my-3"
                              onClick={() => handleDutyRemoveClick(i)}
                            >
                              <AiOutlineDelete />
                            </button>
                          )}
                          {duties.length - 1 === i && (
                            <button
                              className="btn btn-sm btn-info my-3"
                              onClick={handleDutyAddClick}
                            >
                              <AiOutlinePlus />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
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

export default EditExperienceForm;
