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
import RescueMeal from "../../Assets/Projects/RescueMeal.png";

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

          <Col md={4} className="SaloonService">
  <ProjectCard
    imgPath={spendWise}
    isBlog={false}
    title="Saloon Service"
    description="An intuitive salon management system that allows users to book appointments, manage services, track staff schedules, and provide customer feedback for a seamless salon experience."
    ghLink="https://github.com/nishant1810/saloonServices"
    DemoLink=""
  />
</Col>

<Col md={4} className="DjangoWebApp">
  <ProjectCard
    imgPath={spendWise}
    isBlog={false}
    title="Django Web App"
    description="A web application built with Django that demonstrates full-stack capabilities including user authentication, CRUD operations, and dynamic content management for real-world use cases."
    ghLink="https://github.com/nishant1810/Django-Web-App"
    DemoLink=""
  />
</Col>


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
              DemoLink=""
            />
          </Col>

          <Col md={4} className="AskIQ">
            <ProjectCard
              imgPath={AskIQ}
              isBlog={false}
              title="AskIQ"
              description="AskIQ is a smart AI-powered chat app built with React and Vite, offering fast and responsive user interaction. It features markdown support, chat history, dark/light mode, and a clean, mobile-friendly UI."
              ghLink="https://github.com/nishant1810/AskIQ"  
              DemoLink=""                       
            />
          </Col>

          <Col md={4} className="Shrinkyfy">
            <ProjectCard
              imgPath={Shrinkyfy}
              isBlog={false}
              title="Shrinkyfy"
              description="A Shrinkyfy web app with user authentication, link analytics, and custom short URLs. Built using React.js with Vite for a fast, responsive UI and smooth user experience."
              ghLink="https://github.com/nishant1810/Shrinkify" 
              DemoLink=""             
            />
          </Col>

          <Col md={4} className="RescueMeal">
            <ProjectCard
              imgPath={RescueMeal}
              isBlog={false}
              title="RescueMeal"
              description=" A web platform designed to reduce food waste by connecting food donors, NGOs, and individuals in need. It enables users to list surplus food, find nearby donation centers, and track donations in real time, ensuring efficient food redistribution."
              ghLink="https://github.com/nishant1810/Food-Rescue"
              DemoLink="" 
            />
          </Col>

          <Col md={4} className="SchemeHub">
            <ProjectCard
              imgPath={schemeHub}
              isBlog={false}
              title="SchemeHub"
              description="A centralized government scheme discovery platform that helps users find and apply for relevant schemes based on their eligibility. The platform categorizes schemes by sectors like education, agriculture, and healthcare, making it easier for users to access benefits."
              ghLink="https://github.com/nishant1810/new-sih"
              DemoLink="" 
            />
          </Col>

          <Col md={4} className="DailyNews">
            <ProjectCard
              imgPath={dailyNews}
              isBlog={false}
              title="DailyNews"
              description="A real-time news aggregator application that fetches and displays the latest headlines from various categories using news APIs. Users can filter news by topics such as technology, sports, business, and entertainment, ensuring they stay informed with an intuitive and responsive interface."
              ghLink="https://github.com/nishant1810/Daily-News"
              DemoLink="" 
            />
          </Col>

          <Col md={4} className="Balloon Burst">
            <ProjectCard
              imgPath={balloonBurst}
              isBlog={false}
              title="Balloon Burst"
              description="An interactive Phaser.js game where players burst balloons to score points. The game features smooth animations, increasing difficulty levels, and engaging sound effects, providing an enjoyable and addictive gaming experience."
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
