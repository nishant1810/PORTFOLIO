import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
}) {
  return (
    <Card className="project-card-view h-100">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={title}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        <Card.Text
          style={{
            textAlign: "justify",
            flexGrow: 1,
          }}
        >
          {description}
        </Card.Text>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> &nbsp; GitHub
          </Button>

          {demoLink && (
            <Button
              variant="success"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;