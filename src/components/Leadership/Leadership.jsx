import React from "react";
import { Container } from "react-bootstrap";

function Leadership() {
  return (
    <Container fluid className="project-section">
      <Container>

        <h1 className="project-heading">
          Leadership & <strong className="purple">Achievements</strong>
        </h1>

        <div className="timeline">

          {/* Leadership Position */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Lead Organizer</h3>
              <h5 className="purple">
                Classical Cultural Club, IIIT Kottayam
              </h5>
              <span>Sep 2024 – Nov 2025</span>

              <p>
                Led and coordinated a 60+ member cultural team by managing
                rehearsals, task delegation, event planning, and logistics,
                ensuring the successful execution of multiple large-scale
                institutional cultural programs.
              </p>
            </div>
          </div>

          {/* SIH */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Smart India Hackathon 2024</h3>
              <h5 className="purple">Team Member</h5>
              <span>2024</span>

              <p>
                Selected among the top teams in the SIH 2024 Internal
                Hackathon for developing SchemeHub, a platform that
                simplifies government scheme discovery and eligibility
                matching for citizens.
              </p>
            </div>
          </div>

          {/* Hackzilla */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Hackzilla Hackathon</h3>
              <h5 className="purple">HealthTech Track</h5>
              <span>2024</span>

              <p>
                Developed and presented a HealthTech solution focused on
                addressing real-world healthcare challenges. Collaborated
                with a team and competed among 200+ participants during
                the hackathon.
              </p>
            </div>
          </div>

          {/* Competitive Programming */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Competitive Programming</h3>
              <h5 className="purple">LeetCode & GeeksforGeeks</h5>
              <span>2024 – Present</span>

              <p>
                Solved 300+ DSA problems on LeetCode and GeeksforGeeks,
                strengthening expertise in data structures, algorithms,
                problem-solving, and analytical thinking.
              </p>
            </div>
          </div>

        </div>

      </Container>
    </Container>
  );
}

export default Leadership;