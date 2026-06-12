import React from "react";
import { Col, Row } from "react-bootstrap";

import { CgCPlusPlus } from "react-icons/cg";

import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiBootstrap,
  SiVuedotjs,
  SiSqlite,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiDocker,
  SiLinux,
  SiFastapi,
  SiGithubactions,
  SiFlutter,
} from "react-icons/si";

function Techstack() {
  const skills = [
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },

    { icon: <DiReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiVuedotjs />, name: "Vue.js" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },

    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiFastapi />, name: "FastAPI" },

    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiSqlite />, name: "SQLite" },

    { icon: <DiGit />, name: "Git" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiFlutter />, name: "Flutter" },

    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col
          xs={4}
          md={2}
          key={index}
          className="tech-icons"
        >
          {skill.icon}
          <span className="tech-tooltip">
            {skill.name}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;