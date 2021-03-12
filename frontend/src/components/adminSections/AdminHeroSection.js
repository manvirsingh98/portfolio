import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio, updatePortfolio } from "../../actions/portfolioActions";
import { PORTFOLIO_UPDATE_RESET } from "../../constants/portfolioConstants";
const AdminHeroSection = () => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [position, setPosition] = useState("");
  const [resumePath, setResumePath] = useState("");

  //Dispatch
  const dispatch = useDispatch();

  //Get PortfolioInfo
  const portfolioInfo = useSelector((state) => state.portfolioInfo);
  const { loading, error, portfolio } = portfolioInfo;

  //Get Portfolio Update
  const portfolioUpdate = useSelector((state) => state.portfolioUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = portfolioUpdate;

  //use effect
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PORTFOLIO_UPDATE_RESET });
      dispatch(getPortfolio());
    } else {
      if (!portfolio.name && !portfolio.position) {
        dispatch(getPortfolio());
      } else {
        setName(portfolio.name);
        setSummary(portfolio.summary);
        setPosition(portfolio.position);
        setResumePath(portfolio.resumePath);
      }
    }
  }, [dispatch, portfolio.name, portfolio.position, successUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updatePortfolio({
        name,
        summary,
        position,
        resumePath,
      })
    );
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md={12}>
            <h3>Hero Banner Section</h3>
          </Col>
        </Row>
        <Row className="form-outer my-5">
          <Col md={12}>
            <form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter label"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Summary</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Summary"
                  name="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter position"
                  name="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Resume Path</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter resumePath"
                  name="resumePath"
                  value={resumePath}
                  onChange={(e) => setResumePath(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminHeroSection;
