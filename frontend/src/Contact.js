import React from "react";
import { Container, Form, Col } from "react-bootstrap";

const ContactSection = () => {
  return (
    //    <!-- ======= Contact Section ======= -
    <section id="contact" className="contact">
      <Container>
        <h1 className="section-title">Contact</h1>
      </Container>
      <Container>
        <div className="contact-form">
          <h3 className="mb-4">Fill all the fields of form</h3>
          <form>
            <Form.Row>
              <Form.Group as={Col} controlId="formName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  // onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  // onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  // onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter message"
                  name="message"
                  // onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <div className="text-center mt-4">
              <button className="btn btn-md btn-secondary px-5">Send</button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
