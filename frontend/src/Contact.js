import React, { useState } from "react";
import { Container, Form, Col } from "react-bootstrap";

const ContactSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     firstName,
  //     lastName,
  //     email,
  //     message,
  //   };

  //   console.log(data);
  // };

  return (
    //    <!-- ======= Contact Section ======= -
    <section id="contact" className="contact">
      {/* <Container>
        <h1 className="section-title">Contact</h1>
      </Container> */}
      <Container>
        <div className="contact-form text-left">
          {/* <h3 className="mb-4">Fill all the fields of form</h3> */}
          <form>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <div className="text-left mt-4">
                <button className="btn btn-md btn-secondary px-5">Send</button>
              </div>
            </Form.Group>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
