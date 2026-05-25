import React from "react";
import {
  Container,
  Form,
  Button,
} from "react-bootstrap";

import {
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#f8fbfd",
        color: "#111111",
        paddingTop: "50px",
        paddingBottom: "30px",
      }}
    >
      <Container>
        {/* MAIN DIV */}
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-2">

          {/* BRAND */}
          <div style={{ maxWidth: "250px" }}>
            <h2
              className="fw-bold text-info mb-2"
              style={{
                fontSize: "42px",
                letterSpacing: "1px",
              }}
            >
              MERCURY.
            </h2>

            <h4 className="fw-semibold text-dark mb-2">
              About Us
            </h4>

            <p
              style={{
                color: "#7b8794",
                fontSize: "15px",
              }}
            >
              Global Software Powerhouse driving digital
              transformation through strategic innovation
              and intelligent software solutions.
            </p>
          </div>

          {/* CONTACT */}
          <div style={{ maxWidth: "250px" }}>
            <h4 className="fw-semibold text-dark mb-2">
              Contact Info
            </h4>

            <div
              style={{
                color: "#7b8794",
                fontSize: "15px",
              }}
            >
              <p>
                Address : Mercury Technology,
                Thanjavur, Tamil Nadu.
              </p>
              <p>
                Email : info@mercurytech.in
              </p>
            </div>
          </div>

          {/* LINKS */}
          <div style={{ minWidth: "180px" }}>
            <h4 className="fw-semibold text-dark mb-2">
              Important Link
            </h4>

            <div className="d-flex flex-column gap-2">
              {[
                "Home",
                "About",
                "Services",
                "Solutions",
                "Contact",
              ].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "#7b8794",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div style={{ maxWidth: "320px" }}>
            <h4 className="fw-semibold text-dark mb-2">
              Newsletter
            </h4>

            <p
              style={{
                color: "#7b8794",
                fontSize: "15px",
              }}
            >
              Subscribe to get the latest updates,
              services, and technology news.
            </p>

            {/* INPUT */}
            <div
              className="d-flex align-items-center mt-4"
              style={{
                background: "#ffffff",
                borderRadius: "50px",
                overflow: "hidden",
                border: "1px solid #dbe4ea",
              }}
            >
              <Form.Control
                type="email"
                placeholder="Email Address"
                style={{
                  border: "none",
                  boxShadow: "none",
                  padding: "14px 20px",
                  fontSize: "14px",
                }}
              />

              <Button
                style={{
                  width: "60px",
                  height: "50px",
                  border: "none",
                  borderRadius: "50px",
                  background:
                    "linear-gradient(135deg, #00c6ff, #0072ff)",
                }}
              >
                <FaPaperPlane />
              </Button>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <hr
          style={{
            marginTop: "60px",
            borderColor: "#dbe4ea",
          }}
        />

        {/* BOTTOM */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div
            style={{
              color: "#7b8794",
              fontSize: "14px",
            }}
          >
            © 2026 MERCURY TECHNOLOGY. All rights reserved.
          </div>

          {/* SOCIAL ICONS */}
          <div className="d-flex gap-4 mt-3 mt-md-0">
            <a
              href="https://www.instagram.com/merc_urytechnology?igsh=NGRxY28wYnBnenJk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#7b8794",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/mercury-technology-9a2771409/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#7b8794",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;