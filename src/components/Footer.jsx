import React from "react";
import { Container } from "react-bootstrap";

import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, #f8fbfd 0%, #e0e2e6 100%)",
        paddingTop: "70px",
        paddingBottom: "25px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* BLUR EFFECT */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(0,180,255,0.08)",
          borderRadius: "50%",
          top: "-120px",
          right: "-100px",
          filter: "blur(80px)",
        }}
      />

      <Container style={{ position: "relative", zIndex: 2 }}>
        {/* TOP */}
        <div
          className="d-flex flex-column flex-lg-row justify-content-between align-items-center"
          style={{
            gap: "50px",
          }}
        >
          {/* LEFT */}
          <div className="text-center text-lg-start">
            <h1
              className="fw-bold text-dark"
            style={{
              fontSize: "20px",
              letterSpacing: "1px",
            }}
          >
            MERCURY <span className="text-info">TECHNOLOGY</span>
            </h1>

            <p
              style={{
                color: "#6b7280",
                maxWidth: "420px",
                fontSize: "15px",
                lineHeight: "1.9",
                marginTop: "15px",
              }}
            >
              Building innovative digital experiences
              with modern technology solutions for
              businesses worldwide.
            </p>
          </div>

          {/* CENTER LINKS */}
          <div className="text-center">
            <h5
              className="fw-semibold mb-4"
              style={{
                color: "#111827",
              }}
            >
              Navigation
            </h5>

            <div
              className="d-flex flex-column gap-3"
            >
              {[
                "Home",
                "Services",
                "Solutions",
                "Contact",
              ].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "#6b7280",
                    textDecoration: "none",
                    fontSize: "15px",
                    transition: "0.3s",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center text-lg-start">
            <h5
              className="fw-semibold mb-4"
              style={{
                color: "#111827",
              }}
            >
              Contact
            </h5>

            <p
              style={{
                color: "#6b7280",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Coimbatore, Tamil Nadu
            </p>

            <p
              style={{
                color: "#6b7280",
                fontSize: "15px",
                marginBottom: "20px",
              }}
            >
              info@mercurytech.in
            </p>

            {/* SOCIAL */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <a
                href="https://www.instagram.com/merc_urytechnology?igsh=NGRxY28wYnBnenJk"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#111827",
                  textDecoration: "none",
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.08)",
                }}
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/mercury-technology-9a2771409/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#111827",
                  textDecoration: "none",
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.08)",
                }}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* LINE */}
        <hr
          style={{
            marginTop: "50px",
            marginBottom: "20px",
            borderColor: "#dbe4ea",
          }}
        />

        {/* BOTTOM */}
        <div
          className="text-center"
          style={{
            color: "#9ca3af",
            fontSize: "14px",
            letterSpacing: "0.5px",
          }}
        >
          © 2024 MERCURY TECHNOLOGY.
          Crafted with innovation.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;