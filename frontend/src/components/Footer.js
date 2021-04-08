import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactSection from "../Contact";

const Footer = () => {
  return (
    // <!-- ======= Footer ======= -->
    <footer className="footer">
      <Container>
        <Row className="py-3">
          <Col md={6}>
            <div className="rights mt-5">
              <a href="/" class="active navbar-brand mb-3">
                Manvir Portfolio
              </a>
              {/* <p>
                Some example text to build on the card make up the bulk of the
                card's content.Some example text to build on the card make up
                the bulk of the card's content. Some example text to build on
                the card make up the bulk of the card's content.Some example
                text to build on the card make up the bulk of the card's
                content.
              </p> */}
              <h6>This website building Stack: </h6>
              <ul className="pl-4 mt-3">
                <li>React</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>Mongo DB</li>
                <li>SASS</li>
                <li>Redux for state management</li>
                <li>AOS package for scrol animations</li>
              </ul>
            </div>
            <h3>
              Click here to send me{" "}
              <a href="mailto:er.manvirsingh98@gmail.com">email</a>
            </h3>
          </Col>
          <Col md={6}>
            <div className="rights">
              <ContactSection />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="rights py-3 text-center">
              Manvir @ All Right Reserved
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    // <!-- End Footer -->
  );
};

export default Footer;
