import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishant Gaur </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently pursing Btech from IIIT Kottayam, Kerala.
            <br />
            I have a strong interest in software development, particularly in full-stack web developer.
            <br />
            Actively enhancing DSA skills on LeetCode, with a focus on problem-solving
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nishant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
