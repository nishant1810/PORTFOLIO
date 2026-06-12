import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Nishant Gaur</span> from{" "}
            <span className="purple">Uttar Pradesh, India.{" "}</span>
            I am currently pursing my B.tech in{" "}
            <span className="purple">
              Electronics and Communication Engineering
            </span>{" "} and 
            I am a final-year student at{" "}
            <span className="purple">IIIT Kottayam</span>.
            <br />
            <br />

            My primary interests lie in{" "}
            <span className="purple">
              AI Engineering, Large Language Models (LLMs),
              Retrieval-Augmented Generation (RAG), and Full Stack Development.
            </span>
            <br />
            <br />

            I enjoy building scalable applications using{" "}
            <span className="purple">
              React.js, Next.js, Node.js, FastAPI, MongoDB, LangChain, Pinecone,
              Docker, and modern cloud technologies.
            </span>
            <br />
            <br />

            Recently, I have been focused on developing AI-powered products,
            RAG systems, and production-ready applications while continuously
            improving my Data Structures & Algorithms and problem-solving skills.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI & LLM Applications
            </li>

            <li className="about-activity">
              <ImPointRight /> Solving DSA & LeetCode Problems
            </li>

            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building intelligent solutions that create real-world impact."
          </p>

          <footer className="blockquote-footer">
            Nishant Gaur
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;