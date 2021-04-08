import React, { useEffect } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listSkills } from "./actions/skillsActions";

import Loader from "./components/Loader";
const SkillSection = () => {
  const dispatch = useDispatch();

  const skillList = useSelector((state) => state.skillList);
  const { loading: skillLoading, error: skillError, skills } = skillList;

  useEffect(() => {
    dispatch(listSkills());
  }, [dispatch]);

  // if (skill.category === "professional") {
  //    professional.push( <div className="professional-skill d-flex ml-2">
  //    <FaUserTie className="mr-3" />
  //    <span>Time management</span>
  //  </div>)

  // }

  return (
    // <!-- ======= Skills Section ======= -->
    <section id="skills" className="skills section-bg">
      <Container>
        <h1 className="section-title">Skills</h1>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            <div className="professional-skills-section">
              <h4
                className="mb-4"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                Professional & Technical Skills
              </h4>
              <p className="my-4" data-aos="fade-right" data-aos-duration="800">
                In case of neccessity, i am confortable with learning new
                languages and working with them to complete the project.
              </p>
              <p className="my-4" data-aos="fade-right" data-aos-duration="800">
                Knowledge in following technologies:
              </p>
              <div
                className="professional-skills d-flex flex-wrap"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                {skillLoading && <Loader />}
                {skillError && <Alert variant="danger">{skillError}</Alert>}
                {skills.map((skill, idx) => {
                  if (skill.category === "professional") {
                    return (
                      <div key={idx} className="professional-skill">
                        <div key={idx} className="skill-box">
                          <i className={`${skill.icon}`} />{" "}
                          <span>{skill.name}</span>
                        </div>
                      </div>
                    );
                  }
                  return true;
                })}
              </div>
              <div
                className="hire-me-btn"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link
                  className="btn btn-md btn-secondary"
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-50}
                >
                  Hire me
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <ul
              className="technical-skills"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {skillLoading && <Loader />}
              {skillError && <Alert variant="danger">{skillError}</Alert>}
              {skills.map((skill, idx) => {
                if (skill.category === "technical") {
                  return (
                    <>
                      <div key={idx} className="skill-box">
                        <div className="skill-icon">
                          {" "}
                          <i className={`${skill.icon}`} />
                        </div>
                        <div className="skill-name">{skill.name}</div>
                      </div>
                    </>
                  );
                }
                return true;
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
    // <!-- End Skills Section -->
  );
};

export default SkillSection;
