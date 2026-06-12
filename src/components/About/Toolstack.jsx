import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiDocker,
  SiAmazonaws,
  SiGithubactions,
  SiLinux,
  SiNetlify,
  SiRender,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    {
      icon: <SiVisualstudiocode />,
      name: "VS Code",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
    {
      icon: <SiVercel />,
      name: "Vercel",
    },
    {
      icon: <SiRender />,
      name: "Render",
    },
    {
      icon: <SiNetlify />,
      name: "Netlify",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiLinux />,
      name: "Linux",
    },
    {
      icon: <SiGithubactions />,
      name: "GitHub Actions",
    },
    {
      icon: <SiAmazonaws />,
      name: "AWS",
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          key={index}
          className="tech-icons"
        >
          {tool.icon}
          <span className="tech-tooltip">
            {tool.name}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;