import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a final-year Electronics and Communication Engineering student at{" "}
              <b className="purple">IIIT Kottayam</b>, passionate about building
              intelligent software systems and scalable web applications.
              <br />
              <br />

              My primary interests lie in{" "}
              <b className="purple">
                AI Engineering, Large Language Models (LLMs), Retrieval-Augmented
                Generation (RAG), and Full Stack Development
              </b>.
              <br />
              <br />

              I have hands-on experience developing production-ready applications using{" "}
              <b className="purple">
                FastAPI, LangChain, React.js, Node.js, MongoDB, Docker, and Pinecone
              </b>.
              <br />
              <br />

              Recently, I have been focused on building{" "}
              <b className="purple">
              RAG pipelines, vector search systems, AI-powered applications, and
              modern full-stack products
              </b>{" "}
              while following industry-standard deployment and CI/CD practices.
              <br />
              <br />

              Beyond software development, I enjoy solving Data Structures &
              Algorithms problems, participating in hackathons, and continuously
              learning emerging technologies in AI and cloud computing.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded;" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:gaur18nishant@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  title="Email Me"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a              
                  href="https://github.com/nishant1810"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nishant-gaur-555120268/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
