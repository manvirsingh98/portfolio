import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminCard = ({ data, cardType, path }) => {
  if (cardType === "experience") {
    const {
      companyName,
      startDate,
      endDate,
      position,
      category,
      usedTechnologies,
      duties,
    } = data;
    return (
      <Card>
        <Card.Header
          className={`text-capitalize ${
            category === "professional" ? "bg-primary" : "bg-info"
          }`}
        >
          {category}
        </Card.Header>
        <Card.Header>
          <span>{companyName}</span>
          <Card.Text>
            {position} | {startDate + " - " + endDate}
          </Card.Text>
        </Card.Header>
        <Card.Header>
          <p>Used Technologies:</p>
          <ol className="pl-4">
            {usedTechnologies.map((usedTechnologie, idx) => (
              <li key={idx}>
                {usedTechnologie.name} | {usedTechnologie.icon}
              </li>
            ))}
          </ol>
        </Card.Header>
        <Card.Header>
          <p>Duties:</p>
          <ol className="pl-4">
            {duties.map((duty, idx) => (
              <li key={idx}>{duty.duty}</li>
            ))}
          </ol>
        </Card.Header>
        <Card.Body>
          <Link
            className={`btn px-4 py-1 mt-3 ${
              category === "professional" ? "btn-primary" : "btn-info"
            }`}
            to={path}
          >
            Edit
          </Link>
        </Card.Body>
      </Card>
    );
  } else if (cardType === "skill") {
    const { name, icon, value, category } = data;
    return (
      <Card>
        <Card.Header
          className={`text-capitalize ${
            category === "technical" ? "bg-primary" : "bg-info"
          }`}
        >
          {category}
        </Card.Header>
        <Card.Header>
          <span>{name}</span>
          <Card.Text>
            {icon} {value && "| " + value}
          </Card.Text>
        </Card.Header>

        <Card.Body>
          <Link
            className={`btn px-4 py-1 mt-3 ${
              category === "technical" ? "btn-primary" : "btn-info"
            }`}
            to={path}
          >
            Edit
          </Link>
        </Card.Body>
      </Card>
    );
  } else if (cardType === "qualification") {
    const { institution, summary, studyType, duration } = data;
    return (
      <Card>
        <Card.Header>{institution}</Card.Header>
        <Card.Body>
          <Card.Text>{summary}</Card.Text>
          <Card.Text>{studyType}</Card.Text>
          <Card.Text>{duration}</Card.Text>
          <Link className="btn btn-primary px-4 py-1 mt-3" to={path}>
            Edit
          </Link>
        </Card.Body>
      </Card>
    );
  } else if (cardType === "project") {
    const { title, summary, image, url, technologies } = data;
    return (
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{summary}</Card.Text>
          <Card.Text>{image}</Card.Text>
          <Card.Text>{url}</Card.Text>
          <ul>
            {technologies.map((technology, idx) => (
              <li key={idx}>{technology}</li>
            ))}
          </ul>
          <Link className="btn btn-primary px-4 py-1 mt-3" to={path}>
            Edit
          </Link>
        </Card.Body>
      </Card>
    );
  } else {
    const { name, description, icon, url, network } = data;
    return (
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Text>{network}</Card.Text>
          <Card.Text>{icon}</Card.Text>
          <Card.Text>{url}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Link className="btn btn-primary px-4 py-1 mt-3" to={path}>
            Edit
          </Link>
        </Card.Body>
      </Card>
    );
  }
};

export default AdminCard;
