import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/DailyNews.png";
import emotion from "../../Assets/Projects/BalloonBurst.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/SchemeHub.jpg";
import bitsOfCode from "../../Assets/Projects/SpendWise.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="Food Rescue">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Food Rescue"
              description=" A web platform designed to reduce food waste by connecting food donors, NGOs, and individuals in need. It enables users to list surplus food, find nearby donation centers, and track donations in real time, ensuring efficient food redistribution."
              ghLink="https://github.com/nishant1810/Food-Rescue"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="spendWise">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SpendWise"
              description=" A smart personal finance tracker that helps users manage their expenses effectively. It provides real-time spending insights, customizable budgeting tools, graphical expense analytics, and category-based tracking to promote better financial habits."
              ghLink="https://github.com/nishant1810/SpendWise"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="QuickBite">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="QuickBite"
              description="A Swiggy clone built with React.js and Tailwind CSS, offering a seamless food ordering experience. Features include restaurant listings, real-time menu updates, user authentication, cart management, and a sleek UI for fast and efficient food delivery services."
              ghLink="https://github.com/nishant1810/QuickBite"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="DailyNews">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="DailyNews"
              description="A real-time news aggregator application that fetches and displays the latest headlines from various categories using news APIs. Users can filter news by topics such as technology, sports, business, and entertainment, ensuring they stay informed with an intuitive and responsive interface."
              ghLink="https://github.com/nishant1810/Daily-News"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="SchemeHub">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="SchemeHub"
              description="A centralized government scheme discovery platform that helps users find and apply for relevant schemes based on their eligibility. The platform categorizes schemes by sectors like education, agriculture, and healthcare, making it easier for users to access benefits."
              ghLink="https://github.com/nishant1810/new-sih"
            />
          </Col>

          <Col md={4} className="Balloon Burst">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Balloon Burst"
              description="An interactive Phaser.js game where players burst balloons to score points. The game features smooth animations, increasing difficulty levels, and engaging sound effects, providing an enjoyable and addictive gaming experience."
              ghLink="https://github.com/nishant1810/BalloonBurst"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
