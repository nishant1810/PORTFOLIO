import React from "react";
import { Col, Row } from "react-bootstrap";

import { CgCPlusPlus } from "react-icons/cg";
import { 
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, 
  DiPython, DiGit, DiJava 
} from "react-icons/di";

import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiBootstrap,
  SiVuedotjs,
  SiSqlite,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiDocker,
  SiLinux
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVuedotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSqlite /></Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>

      {/* Machine Learning & AI */}
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiOpencv /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNumpy /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPandas /></Col>

    </Row>
  );
}

export default Techstack;
