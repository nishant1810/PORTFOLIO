import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import dailyNews from "../../Assets/Projects/DailyNews.png";
import balloonBurst from "../../Assets/Projects/BalloonBurst.png";
import schemeHub from "../../Assets/Projects/SchemeHub.jpg";
import QuickBite from "../../Assets/Projects/QuickBite.png";
import spendWise from "../../Assets/Projects/SpendWise.png";
import cardamon from "../../Assets/Projects/cardamon.png";
import AskIQ from "../../Assets/Projects/AskIQ.png";
import Shrinkyfy from "../../Assets/Projects/Shrinkyfy.png";
import RescueMeal from "../../Assets/Projects/RescueMeal.png";
import cardMatchImg from "../../Assets/Projects/cardMatchImg.png";
import salonServices from "../../Assets/Projects/salonServices.png";

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

          <Col md={4} className="CardamomLeafDiseaseDetection">
            <ProjectCard
              imgPath={cardamon}
              isBlog={false}
              title="Cardamom Leaf Disease Detection"
              description="A deep learning-based system to classify cardamom leaf diseases using CNN and transfer learning models (VGG16/VGG19). Achieved 93.7% accuracy and enabled real-time predictions with Grad-CAM explainability."
              ghLink="https://github.com/nishant1810/Cardamom-Leaf-Disease-Detection"
              DemoLink=""
            />
          </Col>

          <Col md={4} className="RescueMeal">
            <ProjectCard
              imgPath={RescueMeal}
              isBlog={false}
              title="RescueMeal"
              description="A food rescue and donation platform connecting donors with NGOs and individuals. Enables real-time donation tracking, reducing food wastage and helping communities."
              ghLink="https://github.com/nishant1810/RescueMeal"
              DemoLink=""
            />
          </Col>

          <Col md={4} className="AskIQ">
            <ProjectCard
              imgPath={AskIQ}
              isBlog={false}
              title="AskIQ"
              description="An AI-powered chatbot built with React and Vite featuring markdown responses, chat history, copy-to-clipboard, and dark/light mode with an optimized UI."
              ghLink="https://github.com/nishant1810/AskIQ"
              DemoLink=""
            />
          </Col>

          <Col md={4} className="DjangoWebApp">
            <ProjectCard
              imgPath={spendWise}
              isBlog={false}
              title="Django Web App"
              description="A full-stack Django application featuring user authentication, CRUD operations, file uploads, repository management, and responsive UI using Bootstrap."
              ghLink="https://github.com/nishant1810/Django-Web-App"
              DemoLink=""
            />
          </Col>

          <Col md={4} className="QuickBite">
            <ProjectCard
              imgPath={QuickBite}
              isBlog={false}
              title="QuickBite"
              description="A food delivery web platform enabling users to browse restaurants, order meals, and track deliveries in real time with a clean and responsive interface."
              ghLink="https://github.com/nishant1810/QuickBite"
            />
          </Col>

          <Col md={4} className="ExpenseManagementSystem">
            <ProjectCard
              imgPath={spendWise}
              isBlog={false}
              title="Expense Management System"
              description="A personal finance tracking platform offering budgeting features, spending analytics, and real-time transaction categorization with interactive charts."
              ghLink="https://github.com/nishant1810/SpendWise"
              DemoLink=""
            />
          </Col>

          <Col md={4} className="Shrinkyfy">
            <ProjectCard
              imgPath={Shrinkyfy}
              isBlog={false}
              title="Shrinkyfy"
              description="A URL shortener web app with authentication, analytics tracking, and custom short links. Built using React.js with Vite for high performance."
              ghLink="https://github.com/nishant1810/Shrinkify"
              DemoLink=""
            />
          </Col>

          <Col md={4} className="salonServices">
            <ProjectCard
              imgPath={salonServices}
              isBlog={false}
              title="Salon Booking System"
              description="A full-stack platform for salon appointment booking, service scheduling, staff management, and secure JWT-based authentication."
              ghLink="https://github.com/nishant1810/saloonServices.git"
              DemoLink=""
            />
          </Col>

          <Col md={4} className="SchemeHub">
            <ProjectCard
              imgPath={schemeHub}
              isBlog={false}
              title="SchemeHub"
              description="A centralized platform helping users discover government schemes by sector and eligibility criteria for simplified access to public benefits."
              ghLink="https://github.com/nishant1810/new-sih"
              DemoLink=""
            />
          </Col>

          <Col md={4} className="DailyNews">
            <ProjectCard
              imgPath={dailyNews}
              isBlog={false}
              title="DailyNews"
              description="A real-time news aggregator using news APIs offering category-wise filtering like technology, business, and sports with a responsive UI."
              ghLink="https://github.com/nishant1810/Daily-News"
              DemoLink=""
            />
          </Col>

          <Col md={4} className="FlipPair">
            <ProjectCard
              imgPath={cardMatchImg}
              isBlog={false}
              title="FlipPair"
              description="A memory-based card matching game built with Vanilla JavaScript where players flip cards to find matching pairs and finish in the fewest moves."
              ghLink="https://github.com/nishant1810/FlipPair.git"
              DemoLink="https://card-matching-game.vercel.app"
            />
          </Col>

          <Col md={4} className="BalloonBurst">
            <ProjectCard
              imgPath={balloonBurst}
              isBlog={false}
              title="Balloon Burst"
              description="An interactive Phaser.js game where players burst balloons to earn points while difficulty increases progressively with sound and visual effects."
              ghLink="https://github.com/nishant1810/BalloonBurst"
              DemoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
