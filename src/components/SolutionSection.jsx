import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import img1 from "../assets/solution-img-01.avif";
import img2 from "../assets/solution-img-02.avif";
import img3 from "../assets/solution-img-03.jpg";
import img4 from "../assets/solution-img-04.jpg";

const solutions = [
  {
    title: "INDUSTRIAL INTELLIGENCE",
    name: "Mercury Capture",
    desc: "Advanced data acquisition systems for industrial intelligence. Sensor-driven platforms for deep operational visibility.",
    points: [
      "Real-time data streaming",
      "Edge computing capabilities",
      "Seamless ERP integration",
    ],
    img: img1,
    reverse: false,
  },
  {
    title: "LOGISTICS & TRANSPORT",
    name: "Mercury Fleet",
    desc: "AI-powered fleet management to optimize routes, reduce fuel usage, and improve safety.",
    points: [
      "Route optimization AI",
      "Fuel & Maintenance tracking",
      "Driver behavior analytics",
    ],
    img: img2,
    reverse: true,
  },
  {
    title: "VEHICLE DIAGNOSTICS",
    name: "Mercury Telematics",
    desc: "Deep vehicle diagnostics and performance monitoring for smart mobility systems.",
    points: [
      "Engine health monitoring",
      "Live GPS tracking",
      "Incident reconstruction",
    ],
    img: img3,
    reverse: false,
  },
  {
    title: "SMART AGRICULTURE",
    name: "Mercury Agri",
    desc: "IoT-powered smart farming solutions for precision agriculture and automation.",
    points: [
      "Soil moisture sensing",
      "Automated irrigation",
      "Crop health monitoring",
    ],
    img: img4,
    reverse: true,
  },
];

const SolutionsSection = () => {
  return (
    <div id="solutions">
    <div className="py-5 bg-white text-dark">
      <Container>

        {/* Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold display-5 text-dark">
            Smart <span className="text-info">Solutions</span>
          </h2>
          <p className="text-secondary fs-5 mt-3">
            Reshaping industries with automation, AI, and cutting-edge innovation.
          </p>
        </motion.div>

        {/* Sections */}
        {solutions.map((item, index) => (
          <Row
            key={index}
            className={`align-items-center mb-5 g-5 ${
              item.reverse ? "flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="img-fluid rounded-4 shadow"
                  style={{
                    height: "380px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </Col>

            {/* CONTENT */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: item.reverse ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >

                <h6 className="text-info fw-bold">{item.title}</h6>
                <h3 className="fw-bold mb-3">{item.name}</h3>

                <p className="text-secondary mb-3" style={{ lineHeight: "1.8" }}>
                  {item.desc}
                </p>

                <ul className="text-secondary">
                  {item.points.map((p, i) => (
                    <li key={i} className="mb-2">• {p}</li>
                  ))}
                </ul>

                <div className="mt-4 text-info fw-semibold" style={{ cursor: "pointer" }}>
                  Learn More →
                </div>

              </motion.div>
            </Col>

          </Row>
        ))}

      </Container>
    </div>
    </div>
  );
};

export default SolutionsSection;