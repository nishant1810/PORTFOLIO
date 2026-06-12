import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import dailyNews from "../../Assets/Projects/DailyNews.png";
import balloonBurst from "../../Assets/Projects/BalloonBurst.png";
import schemeHub from "../../Assets/Projects/SchemeHub.jpg";
import QuickBite from "../../Assets/Projects/QuickBite.png";
import spendWise from "../../Assets/Projects/SpendWise.png";
import DjangoWebApp from "../../Assets/Projects/DjangoWebApp.png"
import MedRag from "../../Assets/Projects/MedRag.png";
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

          <Col md={4} className="MedRag">
            <ProjectCard
              imgPath={MedRag}
              isBlog={false}
              title="MedRag"
              description="AI-powered medical assistant using LangChain, FastAPI, Pinecone and Retrieval-Augmented Generation (RAG) to provide accurate, context-aware healthcare responses."
              ghLink="https://github.com/nishant1810/MedRAG.git"
              demoLink="https://medrag-hbal.onrender.com/docs"
            />
          </Col>  

          <Col md={4} className="RescueMeal">
            <ProjectCard
              imgPath={RescueMeal}
              isBlog={false}
              title="RescueMeal"
              description="Food rescue and donation platform connecting donors, NGOs and beneficiaries with real-time donation tracking to reduce food wastage."
              ghLink="https://github.com/nishant1810/RescueMeal"
              demoLink="https://rescue-meal.vercel.app/"
            />
          </Col>

          <Col md={4} className="AskIQ">
            <ProjectCard
              imgPath={AskIQ}
              isBlog={false}
              title="AskIQ"
              description="AI-powered chatbot built with React and Vite featuring markdown support, chat history, copy-to-clipboard and dark/light mode."
              ghLink="https://github.com/nishant1810/AskIQ"
              demoLink="https://ask-iq.vercel.app"
            />
          </Col>

          <Col md={4} className="CardamomLeafDiseaseDetection">
            <ProjectCard
              imgPath={cardamon}
              isBlog={false}
              title="LeafGuard"
              description="AI-based plant disease detection system using CNN, VGG16 and VGG19 models achieving 93.7% accuracy with Grad-CAM explainability."
              ghLink="https://github.com/nishant1810/LeafGuard.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="DjangoWebApp">
            <ProjectCard
              imgPath={DjangoWebApp}
              isBlog={false}
              title="Django Web App"
              description="A full-stack Django application featuring user authentication, CRUD operations, file uploads, repository management, and responsive UI using Bootstrap."
              ghLink="https://github.com/nishant1810/Django-Web-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="QuickBite">
            <ProjectCard
              imgPath={QuickBite}
              isBlog={false}
              title="QuickBite"
              description="A food delivery web platform enabling users to browse restaurants, order meals, and track deliveries in real time with a clean and responsive interface."
              ghLink="https://github.com/nishant1810/QuickBite"
              demoLink="https://quick-bite-77fnd2fdp-nishant18s-projects-b9a8ab29.vercel.app"
            />
          </Col>

          <Col md={4} className="ExpenseManagementSystem">
            <ProjectCard
              imgPath={spendWise}
              isBlog={false}
              title="Expense Management System"
              description="A personal finance tracking platform offering budgeting features, spending analytics, and real-time transaction categorization with interactive charts."
              ghLink="https://github.com/nishant1810/SpendWise"
              demoLink="https://expense-tracker-app-three-beryl.vercel.app/"
            />
          </Col>

          <Col md={4} className="Shrinkyfy">
            <ProjectCard
              imgPath={Shrinkyfy}
              isBlog={false}
              title="Shrinkyfy"
              description="URL shortening platform with authentication, analytics tracking and custom short links built using modern web technologies."
              ghLink="https://github.com/nishant1810/Shrinkify"
              demoLink="https://shrinkify-mx9dwqbzt-nishant18s-projects-b9a8ab29.vercel.app"
            />
          </Col>

          <Col md={4} className="DailyNews">
            <ProjectCard
              imgPath={dailyNews}
              isBlog={false}
              title="DailyNews"
              description="A real-time news aggregator using news APIs offering category-wise filtering like technology, business, and sports with a responsive UI."
              ghLink="https://github.com/nishant1810/Daily-News"
              demoLink="https://daily-news1.onrender.com/"
            />
          </Col>

          {/* <Col md={4} className="salonServices">
            <ProjectCard
              imgPath={salonServices}
              isBlog={false}
              title="Salon Booking System"
              description="A full-stack platform for salon appointment booking, service scheduling, staff management, and secure JWT-based authentication."
              ghLink="https://github.com/nishant1810/saloonServices.git"
              demoLink=""
            />
          </Col> */}

          {/* <Col md={4} className="SchemeHub">
            <ProjectCard
              imgPath={schemeHub}
              isBlog={false}
              title="SchemeHub"
              description="Centralized platform helping citizens discover government schemes based on eligibility, sector and personalized recommendations."
              ghLink="https://github.com/nishant1810/new-sih"
              demoLink=""
            />
          </Col> */}


          {/* <Col md={4} className="FlipPair">
            <ProjectCard
              imgPath={cardMatchImg}
              isBlog={false}
              title="FlipPair"
              description="A memory-based card matching game built with Vanilla JavaScript where players flip cards to find matching pairs and finish in the fewest moves."
              ghLink="https://github.com/nishant1810/FlipPair.git"
              demoLink="https://card-matching-game.vercel.app"
            />
          </Col> */}

          {/* <Col md={4} className="BalloonBurst">
            <ProjectCard
              imgPath={balloonBurst}
              isBlog={false}
              title="Balloon Burst"
              description="An interactive Phaser.js game where players burst balloons to earn points while difficulty increases progressively with sound and visual effects."
              ghLink="https://github.com/nishant1810/BalloonBurst"
              demoLink="https://vercel.com/nishant18s-projects-b9a8ab29/balloon-burst/xw113bYW7N6jn1RX7TFJZQAct2Ty"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
