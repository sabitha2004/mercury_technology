import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {/* NAVBAR */}
      <Navbar
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
        expanded={expanded}
        className="py-2 shadow-sm"
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand
            className="fw-bold text-dark"
            style={{
              fontSize: "20px",
              letterSpacing: "1px",
            }}
          >
            MERCURY <span className="text-info">TECHNOLOGY</span>
          </Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle
            aria-controls="navbar"
            className=" ms-auto border-0 shadow-none p-1"
            onClick={() => setExpanded(expanded ? false : true)}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                width: "24px",
                height: "24px",
                filter: "brightness(0)",
              }}
            ></span>
          </Navbar.Toggle>

          {/* Links */}
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link
                href="#home"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#about"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
                onClick={() => setExpanded(false)}
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#services"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
                onClick={() => setExpanded(false)}
              >
                Services
              </Nav.Link>

              <Nav.Link
                href="#solutions"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
                onClick={() => setExpanded(false)}
              >
                Solutions
              </Nav.Link>

              <Nav.Link
                href="#contact"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>

              <Button
                variant="info"
                className="ms-lg-4 mt-3 mt-lg-0 rounded-pill px-4 py-2 fw-semibold border-0"
                style={{ fontSize: "17px" }}
                href="#contact"
                onClick={() => setExpanded(false)}
              >
                Get Started
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* IMPORTANT: spacing fix for fixed navbar */}
      <div style={{ height: "80px" }} />
    </>
  );
};

export default CustomNavbar;
