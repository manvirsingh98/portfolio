import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    // <!-- ======= Footer ======= -->
    <footer id="footer">
      <Container>
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
