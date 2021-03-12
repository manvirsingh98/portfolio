import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio, updatePortfolio } from "../../actions/portfolioActions";
import { PORTFOLIO_UPDATE_RESET } from "../../constants/portfolioConstants";
import { listServices } from "../../actions/servicesActions";
import { getSocialProfiles } from "../../actions/socialProfilesActions";

import AdminCard from "../AdminCard";
import Loader from "../../components/Loader";
const AdminAboutSection = ({ location }) => {
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutSummary, setAboutSummary] = useState("");

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

  //Get services
  const serviceList = useSelector((state) => state.serviceList);
  const {
    loading: loadingServices,
    error: errorServices,
    services,
  } = serviceList;

  //Get Social Profiles
  const socialProfilesList = useSelector((state) => state.socialProfilesList);
  const {
    loading: loadingsocialProfiles,
    error: errorsocialProfiles,
    socialProfiles,
  } = socialProfilesList;

  //use effect
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PORTFOLIO_UPDATE_RESET });
      dispatch(getPortfolio());
    } else {
      if (!portfolio.position && !portfolio.summary) {
        dispatch(getPortfolio());
      } else {
        setAboutTitle(portfolio.aboutTitle);
        setAboutSummary(portfolio.aboutSummary);
        dispatch(listServices());
        dispatch(getSocialProfiles());
      }
    }
  }, [dispatch, portfolio.aboutTitle, portfolio.aboutSummary, successUpdate]);

  const handleUpdateAbout = (e) => {
    e.preventDefault();
    dispatch(
      updatePortfolio({
        aboutTitle,
        aboutSummary,
      })
    );
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h3>About Section</h3>
        </Col>
      </Row>
      <Row className="msg">
        <Col md={12}>
          {loadingUpdate && <h1>loading.....</h1>}
          {errorUpdate && <h1>{errorUpdate}</h1>}
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={12}>
          {loading && <Loader />}
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleUpdateAbout}>
            <Form.Group controlId="formName">
              <Form.Label>About Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter aboutTitle"
                value={aboutTitle}
                name="aboutTitle"
                onChange={(e) => setAboutTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formSummary">
              <Form.Label>About Summary</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter About Summary "
                value={aboutSummary}
                name="aboutSummary"
                onChange={(e) => setAboutSummary(e.target.value)}
              />
            </Form.Group>

            <Button className="btn btn-primary my-3" type="submit">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
      <Row className="">
        {loadingServices && <h1>Loading.....</h1>}
        {errorServices && <h1>Error.....</h1>}
        <Col md={12}>
          <h3 className="section-title py-5">Services</h3>
        </Col>
        {loadingServices && <Loader />}
        {errorServices && <Alert variant="danger">{errorServices}</Alert>}
        {services &&
          services.map((service, idx) => (
            <Col md={4} key={service._id}>
              <AdminCard
                data={service}
                path={`${location.pathname}/services/${service._id}`}
              />
            </Col>
          ))}
      </Row>
      <Row>
        <Col md={12}>
          <h3 className="py-5">Social Profiles</h3>
        </Col>
        {loadingsocialProfiles && <Loader />}
        {errorsocialProfiles && (
          <Alert variant="danger">{errorsocialProfiles}</Alert>
        )}
        {socialProfiles &&
          socialProfiles.map((socialProfile, idx) => (
            <Col md={4} key={socialProfile._id}>
              <AdminCard
                data={socialProfile}
                path={`${location.pathname}/socialProfiles/${socialProfile._id}`}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AdminAboutSection;
