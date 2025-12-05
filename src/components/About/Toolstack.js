import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiDocker,
  SiLinux,
  SiHeroku,
  SiNetlify,
  SiRender,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDE & Development */}
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>

      {/* Deployment Platforms */}
      <Col xs={4} md={2} className="tech-icons"><SiVercel /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRender /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNetlify /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHeroku /></Col>

      {/* DevOps & Cloud */}
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>
    </Row>
  );
}

export default Toolstack;
