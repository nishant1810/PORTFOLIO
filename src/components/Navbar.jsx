import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.png";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { SiLeetcode } from "react-icons/si";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
        >
          <img
            src={logo}
            alt="Nishant Gaur"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            {/* Home */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            {/* Projects */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* Resume */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* GitHub
            <Nav.Item>
              <Nav.Link
                href="https://github.com/nishant1810"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="social-navbar-icon"
              >
                <AiFillGithub />
              </Nav.Link>
            </Nav.Item>

            {/* LinkedIn */}
            {/* <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/nishant-gaur-555120268/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="social-navbar-icon"
              >
                <FaLinkedinIn />
              </Nav.Link>
            </Nav.Item> */}

            {/* LeetCode */}
            {/* <Nav.Item>
              <Nav.Link
                href="https://leetcode.com/u/Nishant1810/"
                target="_blank"
                rel="noreferrer"
                title="LeetCode"
                className="social-navbar-icon"
              >
                <SiLeetcode />
              </Nav.Link>
            </Nav.Item>  */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;