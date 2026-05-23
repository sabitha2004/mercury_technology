import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#fff",
        color: "#111111",
        paddingTop: "70px",
        paddingBottom: "30px",
        borderTop: "1px solid rgba(0,255,255,0.15)",
      }}
    >
      <Container>
        <Row className="g-4">
          {/* BRAND */}
          <Col lg={4}>
            <h3 className="fw-bold text-info">MERCURY TECHNOLOGY</h3>

            <p className="text-secondary mt-3" style={{ lineHeight: "1.8" }}>
              Global Software Powerhouse <br />
              Driving digital transformation through strategic innovation and
              intelligent software solutions. We build the infrastructure for
              the next generation of business.
            </p>
          </Col>

          {/* PLATFORM */}
          <Col lg={2}>
            <h5 className="fw-bold text-white mb-3">Platform</h5>
            <ul className="list-unstyled">
              {["Home", "About", "Services", "Solutions", "Support"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="text-secondary mb-2 footer-link"
                    style={{ cursor: "pointer" }}
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Col>

          {/* HELP */}
          <Col lg={3}>
            <h5 className="fw-bold text-white mb-3">Help Center</h5>
            <ul className="list-unstyled">
              <li className="text-secondary mb-2 footer-link">
                Terms & Service
              </li>
              <li className="text-secondary mb-2 footer-link">
                Privacy Policy
              </li>
              <li className="text-secondary mb-2 footer-link">Contact</li>
            </ul>
          </Col>

          {/* CONNECT */}
          <Col lg={3}>
            <h5 className="fw-bold text-white mb-3">Connect</h5>

            <div
              style={{
                padding: "18px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,255,255,0.15)",
                boxShadow: "0 0 20px rgba(0,255,255,0.05)",
              }}
            >
              <a
                href="https://www.instagram.com/merc_urytechnology?igsh=NGRxY28wYnBnenJk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary mb-2 footer-link d-block"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/mercury-technology-9a2771409/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary mb-2 footer-link d-block"
              >
                LinkedIn
              </a>

              <div className="text-info fw-semibold mt-3">
                MERCURY TECHNOLOGY OPERATIONS
              </div>
            </div>
          </Col>
        </Row>

        {/* BOTTOM LINE */}
        <hr
          style={{ marginTop: "50px", borderColor: "rgba(0,255,255,0.15)" }}
        />

        <div className="text-center text-secondary small">
          © 2026 MERCURY TECHNOLOGY. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
