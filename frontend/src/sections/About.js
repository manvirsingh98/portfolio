import React from "react";
//import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import image from "../assets/img/profile-img.jpg";

const About = ({ basics }) => {
  return (
    // <!-- ======= About Section ======= -->
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>{basics && basics.summary}</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src={basics && basics.picture ? basics.picture : image}
              className="img-fluid"
              alt="profile-pic"
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>{basics && basics.label}</h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Birthday:</strong> 1 May 1995
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Website:</strong> {basics && basics.website}
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Phone:</strong> {basics && basics.phone}
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>City:</strong>{" "}
                    {basics &&
                      basics.location.city + ", " + basics.location.countryCode}
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Age:</strong> 30
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Degree:</strong> Master
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Email:</strong> {basics && basics.email}
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
