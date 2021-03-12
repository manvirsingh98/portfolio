import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  listSocialProfileDetails,
  updateSocialProfile,
} from "../../actions/socialProfilesActions";
import { SOCIAL_PROFILE_UPDATE_RESET } from "../../constants/socialProfilesConstants";
const EditSocialProfileForm = ({ history, match }) => {
  const socialProfileId = match.params.id;

  const [network, setNetwork] = useState("");
  const [url, setUrl] = useState("");
  const [icon, setIcon] = useState("");

  const dispatch = useDispatch();

  const socialProfileDetails = useSelector(
    (state) => state.socialProfileDetails
  );
  const { loading, error, socialProfile } = socialProfileDetails;

  const socialProfileUpdate = useSelector((state) => state.socialProfileUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = socialProfileUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SOCIAL_PROFILE_UPDATE_RESET });
      dispatch(listSocialProfileDetails(socialProfileId));
      history.push("/dashboard/aboutSection");
    } else {
      if (!socialProfile.network || socialProfile._id !== socialProfileId) {
        dispatch(listSocialProfileDetails(socialProfileId));
      } else {
        setNetwork(socialProfile.network);
        setUrl(socialProfile.url);
        setIcon(socialProfile.icon);
      }
    }
  }, [dispatch, socialProfileId, history, socialProfile, successUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateSocialProfile({
        _id: socialProfileId,
        network,
        url,
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
              <h1 className="mb-4">Edit Social Profile </h1>
            </Col>
          </Row>
          <Row className="form-outer">
            <Col md={10}>
              <form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Network</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter network"
                    value={network}
                    name="network"
                    onChange={(e) => setNetwork(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formSummary">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter URL"
                    value={url}
                    name="url"
                    onChange={(e) => setUrl(e.target.value)}
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

export default EditSocialProfileForm;
