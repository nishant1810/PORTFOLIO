import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard({
  title,
  company,
  duration,
  description,
}) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <h6 className="purple">
          {company}
        </h6>

        <p style={{ color: "#b8b8b8" }}>
          {duration}
        </p>

        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;