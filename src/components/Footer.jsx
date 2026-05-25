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
        background: "#f8fbfd",
        color: "#111111",
        paddingTop: "50px",
        paddingBottom: "30px",
        overflowX: "hidden",
      }}
    >
      <Container>

        {/* LOGO */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold text-info"
            style={{
              fontSize: "42px",
              letterSpacing: "1px",
            }}
          >
            MERCURY.
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="d-flex flex-row justify-content-center align-items-start flex-wrap"
          style={{
            gap: "60px",
          }}
        >
          {/* ABOUT */}
          <div className="text-center">
            <h5 className="fw-semibold text-dark mb-3">
              About
            </h5>

            <p
              style={{
                color: "#7b8794",
                fontSize: "15px",
                maxWidth: "250px",
              }}
            >
              Global Software Powerhouse driving
              digital transformation through
              intelligent software solutions.
            </p>
          </div>

          {/* IMPORTANT LINKS */}
          <div className="text-center">
            <h5 className="fw-semibold text-dark mb-3">
              Important Links
            </h5>

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

          {/* CONTACT INFO */}
          <div className="text-center">
            <h5 className="fw-semibold text-dark mb-3">
              Contact Info
            </h5>

            <p
              style={{
                color: "#7b8794",
                fontSize: "15px",
                marginBottom: "5px",
              }}
            >
              Mercury Technology,
              Coimbatore, Tamil Nadu.
            </p>

            <p
              style={{
                color: "#7b8794",
                fontSize: "15px",
              }}
            >
              info@mercurytech.in
            </p>

            {/* SOCIAL ICONS */}
            <div
              className="d-flex justify-content-center gap-3 mt-3"
            >
              <a
                href="https://www.instagram.com/merc_urytechnology?igsh=NGRxY28wYnBnenJk"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#7b8794",
                  fontSize: "20px",
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
                  fontSize: "20px",
                  textDecoration: "none",
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
            marginTop: "35px",
            borderColor: "#dbe4ea",
          }}
        />

        {/* COPYRIGHT */}
        <div
          className="text-center"
          style={{
            color: "#7b8794",
            fontSize: "14px",
          }}
        >
          © 2026 MERCURY TECHNOLOGY.
          All rights reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;