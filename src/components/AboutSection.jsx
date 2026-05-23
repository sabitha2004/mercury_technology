import React from "react";
import aboutImage1 from "../assets/about-img-01.avif";
import aboutImage2 from "../assets/about-img-02.avif";
import aboutImage3 from "../assets/about-img-03.avif";
import aboutImage4 from "../assets/about-img-04.avif";

import {
  Container,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div id="about">

    <div
      className=" bg-white text-dark py-5 overflow-hidden"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >

      <Container>

        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
         <h2 className="fw-bold display-5">
            About
          </h2>
        </motion.div>

        {/* Top Section */}

        <Row className="align-items-center g-5">

          {/* Left Content */}

          <Col lg={6}>

            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
            >

              <h2 className="fw-bold mb-4">
                Who We Are
              </h2>

              <p
                className="text-secondary fs-5"
                style={{
                  lineHeight: "1.9",
                }}
              >
                Mercury Technology is a modern
                software company focused on
                building innovative AI-powered
                digital solutions for businesses
                around the world.
              </p>

              <p
                className="text-secondary fs-5 mt-4"
                style={{
                  lineHeight: "1.9",
                }}
              >
                We combine creativity, technology,
                and strategy to create scalable
                applications with premium user
                experiences and future-ready
                solutions.
              </p>

              <div className="d-flex gap-5 mt-5">

                <div>

                  <h1 className="text-info fw-bold">
                    50+
                  </h1>

                  <p className="text-secondary">
                    Projects
                  </p>

                </div>

                <div>

                  <h1 className="text-info fw-bold">
                    20+
                  </h1>

                  <p className="text-secondary">
                    Experts
                  </p>

                </div>

                <div>

                  <h1 className="text-info fw-bold">
                    10+
                  </h1>

                  <p className="text-secondary">
                    Years
                  </p>

                </div>

              </div>

            </motion.div>

          </Col>

          {/* Right Images */}

          <Col lg={6}>

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
            >

              <Row className="g-3">

                <Col xs={6}>

                  <Image
                      src={aboutImage1}
                    fluid
                    className="rounded-4 shadow"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                </Col>

                <Col xs={6} className="pt-5">

                  <Image
                    src={aboutImage2}
                    fluid
                    className="rounded-4 shadow"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                </Col>

                <Col xs={6}>

                  <Image
                    src={aboutImage3}
                    fluid
                    className="rounded-4 shadow"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                </Col>

                <Col xs={6} className="pt-5">

                  <Image
                    src={aboutImage4}
                    fluid
                    className="rounded-4 shadow"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                </Col>

              </Row>

            </motion.div>

          </Col>

        </Row>

      {/* Bottom Cards */}

<Row className="mt-5 g-4">

  {/* Vision */}
  <Col lg={4}>
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card
        className="bg-white text-dark rounded-5 h-100 p-4 border border-info position-relative overflow-hidden"
        style={{
          boxShadow: "0 0 25px rgba(238, 245, 245, 0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            animation: "pulseGlow 6s infinite linear",
          }}
        />

        <Card.Body className="position-relative">
          <h2 className="fw-bold text-info mb-4">
            Our Vision
          </h2>
          <p className="text-secondary fs-5" style={{ lineHeight: "1.9" }}>
            To become a global leader in intelligent digital transformation empowering industries through AI and innovation.
          </p>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>

  {/* Mission */}
  <Col lg={4}>
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        className="bg-white text-secondary border border-info rounded-5 h-100 p-4 overflow-hidden"
        style={{
          boxShadow: "0 10px 30px rgba(161, 165, 165, 0.2)",
        }}
      >
        <Card.Body>
          <h2 className="fw-bold mb-4">
            Our Mission
          </h2>
          <p className="fs-5" style={{ lineHeight: "1.5" }}>
            To craft future-ready experiences by blending creativity, technology, and strategy—driven by purpose, fueled by passion.
          </p>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>

  {/* Innovation */}
  <Col lg={4}>
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Card
        className="bg-white text-dark rounded-5 h-100 p-4 border border-info position-relative overflow-hidden"
        style={{
          boxShadow: "0 0 25px rgba(142, 184, 184, 0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            animation: "pulseGlow 6s infinite alternate",
          }}
        />

        <Card.Body className="position-relative">
          <h2 className="fw-bold text-info mb-4">
            Innovation
          </h2>
          <p className="text-secondary fs-5" style={{ lineHeight: "1.9" }}>
            We constantly push boundaries, harnessing emerging technologies to shape intelligent digital solutions for the future.
          </p>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>

</Row>
      </Container>

    </div>

    </div>
  );
};

export default AboutSection;