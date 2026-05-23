import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar expand="lg" fixed="top" className="bg-white py-3 shadow-sm">
        <Container>
          {/* Logo */}
          <Navbar.Brand
            className="fw-bold text-dark"
            style={{
              fontSize: "28px",
              letterSpacing: "1px",
            }}
          >
            MERCURY <span className="text-info">TECHNOLOGY</span>
          </Navbar.Brand>

          {/* Toggle */}
          <Navbar.Toggle
            aria-controls="navbar"
            className="bg-light border-0 ms-auto"
            style={{
              marginTop: "-40px",
              marginRight: "10px",
            }}
          />

          {/* Links */}
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link
                href="#home"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#about"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#services"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
              >
                Services
              </Nav.Link>

              <Nav.Link
                href="#solutions"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
              >
                Solutions
              </Nav.Link>

              <Nav.Link
                href="#contact"
                className="text-dark mx-3 fw-semibold"
                style={{ fontSize: "18px" }}
              >
                Contact
              </Nav.Link>

              <Button
                variant="info"
                className="ms-lg-4 mt-3 mt-lg-0 rounded-pill px-4 py-2 fw-semibold border-0"
                style={{ fontSize: "17px" }}
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
