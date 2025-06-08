import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dailyNews from "../../Assets/Projects/DailyNews.png";
import balloonBurst from "../../Assets/Projects/BalloonBurst.png";
import schemeHub from "../../Assets/Projects/SchemeHub.jpg";
import QuickBite from "../../Assets/Projects/QuickBite.png";
import spendWise from "../../Assets/Projects/SpendWise.png";
import AskIQ from "../../Assets/Projects/AskIQ.png";
import Shrinkyfy from "../../Assets/Projects/Shrinkyfy.png";
import FoodDonation from "../../Assets/Projects/FoodDonation.png";

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
          <Col md={4} className="QuickBite">
            <ProjectCard
              imgPath={QuickBite}
              isBlog={false}
              title="Quick Bite"
              description=" A web platform designed for seamless food ordering, connecting users with nearby restaurants and delivery services. QuickBite enables users to browse menus, place orders, and track deliveries in real time for a smooth and efficient experience."
              ghLink="https://github.com/nishant1810/QuickBite"
            />
          </Col>

          <Col md={4} className="Expense Management System">
            <ProjectCard
              imgPath={spendWise}
              isBlog={false}
              title="Expense Management System"
              description=" A smart personal finance tracker that helps users manage their expenses effectively. It provides real-time spending insights, customizable budgeting tools, graphical expense analytics, and category-based tracking to promote better financial habits."
              ghLink="https://github.com/nishant1810/SpendWise"
            />
          </Col>

          <Col md={4} className="AskIQ">
            <ProjectCard
              imgPath={AskIQ}
              isBlog={false}
              title="AskIQ"
              description="A AskIQ built with React.js and Tailwind CSS, offering a seamless food ordering experience. Features include restaurant listings, real-time menu updates, user authentication, cart management, and a sleek UI for fast and efficient food delivery services."
              ghLink="https://github.com/nishant1810/AskIQ"             
            />
          </Col>

          <Col md={4} className="Shrinkyfy">
            <ProjectCard
              imgPath={Shrinkyfy}
              isBlog={false}
              title="Shrinkyfy"
              description="A Shrinkyfy web app with user authentication, link analytics, and custom short URLs. Built using React.js with Vite for a fast, responsive UI and smooth user experience."
              ghLink="https://github.com/nishant1810/Shrinkify"             
            />
          </Col>

          <Col md={4} className="Food Donation">
            <ProjectCard
              imgPath={FoodDonation}
              isBlog={false}
              title="Food Donation"
              description=" A web platform designed to reduce food waste by connecting food donors, NGOs, and individuals in need. It enables users to list surplus food, find nearby donation centers, and track donations in real time, ensuring efficient food redistribution."
              ghLink="https://github.com/nishant1810/Food-Rescue"
            />
          </Col>

          <Col md={4} className="SchemeHub">
            <ProjectCard
              imgPath={schemeHub}
              isBlog={false}
              title="SchemeHub"
              description="A centralized government scheme discovery platform that helps users find and apply for relevant schemes based on their eligibility. The platform categorizes schemes by sectors like education, agriculture, and healthcare, making it easier for users to access benefits."
              ghLink="https://github.com/nishant1810/new-sih"
            />
          </Col>

          <Col md={4} className="DailyNews">
            <ProjectCard
              imgPath={dailyNews}
              isBlog={false}
              title="DailyNews"
              description="A real-time news aggregator application that fetches and displays the latest headlines from various categories using news APIs. Users can filter news by topics such as technology, sports, business, and entertainment, ensuring they stay informed with an intuitive and responsive interface."
              ghLink="https://github.com/nishant1810/Daily-News"
            />
          </Col>

          <Col md={4} className="Balloon Burst">
            <ProjectCard
              imgPath={balloonBurst}
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
