import React, { useState } from "react";
import { Container, Form, Col, Alert } from "react-bootstrap";
import axios from "axios";
import { send } from "emailjs-com";

const ContactSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subject = "Portfolio Email";

    const data = {
      name: firstName + " " + lastName,
      subject,
      email,
      message,
    };

    // await axios.post("/email", data).then((response) => setIsSend(true));
    send(
      "service_nhsmevm",
      "template_0b3zzxb",
      data,
      "user_GcGR77HXtTGcg09CiHbk7"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSend(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    //    <!-- ======= Contact Section ======= -
    <section id="contact" className="contact">
      {/* <Container>
        <h1 className="section-title">Contact</h1>
      </Container> */}
      <Container>
        <div className="contact-form text-left">
          {/* <h3 className="mb-4">Fill all the fields of form</h3> */}
          {isSend && (
            <Alert variant="success">Your Message Successfully Sent!</Alert>
          )}
          <form onSubmit={handleSubmit}>
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
