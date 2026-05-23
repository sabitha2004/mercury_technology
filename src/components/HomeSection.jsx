import React from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <div id="home">
    <div
      className="bg-white text-dark min-vh-100 d-flex align-items-center overflow-hidden"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >

      <Container>

        <Row className="justify-content-center text-center">

          {/* Content */}

          <Col
            lg={9}
            className="px-lg-5 px-3"
          >

            {/* Animated Heading */}

            <motion.h1
              className="fw-bold lh-1"
              style={{
                fontSize: "clamp(55px, 9vw, 110px)",
              }}
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              Transforming <br />

              <span className="text-info">
                Ideas Into Reality
              </span>

            </motion.h1>

            {/* Animated Paragraph */}

            <motion.p
              className="text-secondary fs-5 mt-4 mx-auto px-lg-5 px-2"
              style={{
                maxWidth: "850px",
                lineHeight: "1.9",
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
            >
              We build modern AI-driven applications
              and premium digital solutions for
              startups and businesses with powerful
              user experiences and innovative
              technologies.
            </motion.p>

            {/* Animated Buttons */}

            <motion.div
              className="d-flex flex-wrap justify-content-center gap-3 mt-5"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
            >

              <Button
                variant="info"
                className="rounded-pill px-5 py-3 fw-semibold border-0"
                style={{
                  fontSize: "17px",
                }}
              >
                Explore Our Work →
              </Button>

              <Button
                variant="outline-dark"
                className="rounded-pill px-5 py-3 fw-semibold"
                style={{
                  fontSize: "17px",
                }}
              >
                Get In Touch
              </Button>

            </motion.div>

          </Col>

        </Row>

      </Container>

    </div>
    </div>
  );
};

export default HomeSection;