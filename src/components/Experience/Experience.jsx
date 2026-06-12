import React from "react";
import { Container } from "react-bootstrap";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>

        <p style={{ color: "white", textAlign: "center" }}>
          Professional internship experience and achievements.
        </p>

        <div className="timeline">

          {/* Site Guru */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Full Stack Developer Intern</h3>
              <h5 className="purple">Site Guru Pvt. Ltd.</h5>
              <span>Apr 2025 – Jul 2025</span>

              <ul className="experience-list">
                <li>Delivered 5+ full-stack modules across 3+ enterprise projects.</li>

                <li>
                  Designed and developed scalable frontend and backend features and
                  integrated REST APIs.
                </li>

                <li>
                  Optimized SQL queries and database indexing, reducing API response
                  latency by 30%.
                </li>

                <li>
                  Collaborated with cross-functional teams to resolve 15+ production
                  issues.
                </li>

                <li>
                  Participated in code reviews, database design, and feature
                  enhancements.
                </li>
              </ul>
            </div>
          </div>

          {/* ADM TutorX */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Frontend Developer Intern</h3>
              <h5 className="purple">ADM TutorX</h5>
              <span>Oct 2024 – Dec 2024</span>

              <ul className="experience-list">
                <li>
                  Built 10+ reusable React.js and Tailwind CSS components for
                  educational dashboard applications.
                </li>

                <li>
                  Integrated REST APIs for real-time data visualization and user
                  interactions.
                </li>

                <li>
                  Reduced code duplication by 30% through component refactoring and
                  modular architecture practices.
                </li>

                <li>
                  Improved maintainability by creating reusable UI components and
                  structured code patterns.
                </li>

                <li>
                  Identified and fixed UI and API issues, ensuring responsive and
                  cross-browser compatible applications.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </Container>
    </Container>
  );
}

export default Experience;