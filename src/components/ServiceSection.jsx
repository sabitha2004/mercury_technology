import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaRobot, FaNetworkWired, FaPaintBrush, FaCloud } from "react-icons/fa";

const ServiceSection = () => {

  const services = [
    { icon: <FaLaptopCode size={40} className="text-info mb-3" />, title: "Web Development", desc: "Crafting high-performance, responsive websites that deliver exceptional user experiences." },
    { icon: <FaMobileAlt size={40} className="text-info mb-3" />, title: "Mobile Solutions", desc: "Developing intuitive iOS and Android applications that engage and delight users." },
    { icon: <FaRobot size={40} className="text-info mb-3" />, title: "AI & Automation", desc: "Leveraging artificial intelligence to streamline operations and drive intelligent growth." },
    { icon: <FaNetworkWired size={40} className="text-info mb-3" />, title: "IoT Systems", desc: "Connecting devices and data to create smart, integrated environments for the future." },
    { icon: <FaPaintBrush size={40} className="text-info mb-3" />, title: "UI/UX Design", desc: "Designing beautiful, user-centric interfaces that blend aesthetics with functionality." },
    { icon: <FaCloud size={40} className="text-info mb-3" />, title: "Cloud Infrastructure", desc: "Building scalable, secure cloud environments that empower your digital transformation." },
  ];

  return (
    <div id="services">
    <div className="py-5 text-dark bg-white">
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold display-5">
            Our <span className="text-info">Services</span>
          </h2>
          <p className="text-secondary mt-3 fs-5">
            We offer comprehensive technology solutions tailored to your business needs, driven by innovation.
          </p>
        </motion.div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div
                  className="p-4 h-100 rounded-4 position-relative text-center service-card"
                  style={{
                    background: "white",
                    border: "4px solid rgba(0,255,255,0.15)",
                    overflow: "hidden",
                  }}
                >
                  {/* Icon */}
                  {service.icon}

                  {/* Title */}
                  <h5 className="fw-bold text-info mb-3">{service.title}</h5>

                  {/* Description */}
                  <p className="text-secondary" style={{ lineHeight: "1.8" }}>{service.desc}</p>

                  {/* Learn More */}
                  <div className="mt-4 text-info fw-semibold d-flex justify-content-center gap-2" style={{ cursor: "pointer" }}>
                    Learn More <span>→</span>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default ServiceSection;