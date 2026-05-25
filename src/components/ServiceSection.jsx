import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* Images */
import service1 from "../assets/service-img-01.jpg";
import service2 from "../assets/service-img-02.png";
import service3 from "../assets/service-img-03.jpeg";
import service4 from "../assets/service-img-04.jpg";
import service5 from "../assets/service-img-05.jpeg";
import service6 from "../assets/service-img-06.jpeg";

const ServiceSection = () => {

  const navigate = useNavigate();

  const services = [
    {
      image: service1,
      title: "Web Development",
      desc: "Crafting high-performance, responsive websites that deliver exceptional user experiences.",
    },
    {
      image: service2,
      title: "Mobile Solutions",
      desc: "Developing intuitive iOS and Android applications that engage and delight users.",
    },
    {
      image: service3,
      title: "AI & Automation",
      desc: "Leveraging artificial intelligence to streamline operations and drive intelligent growth.",
    },
    {
      image: service4,
      title: "IoT Systems",
      desc: "Connecting devices and data to create smart, integrated environments for the future.",
    },
    {
      image: service5,
      title: "UI/UX Design",
      desc: "Designing beautiful, user-centric interfaces that blend aesthetics with functionality.",
    },
    {
      image: service6,
      title: "Cloud Infrastructure",
      desc: "Building scalable, secure cloud environments that empower your digital transformation.",
    },
  ];

  return (

    <div id="services">

      <div className="py-5 bg-white">

        <Container>

          {/* Heading */}
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

              We offer comprehensive technology solutions tailored to your
              business needs, driven by innovation.

            </p>

          </motion.div>

          {/* Cards */}
          <Row className="g-4">

            {services.map((service, index) => (

              <Col lg={4} md={6} key={index}>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                >

                  {/* Card */}
                  <div
                    className="position-relative overflow-hidden rounded-5"
                    style={{
                      height: "450px",
                      cursor: "pointer",
                    }}
                  >

                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        transition: "0.6s",
                      }}
                    />

                    {/* Dark Overlay */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.2))",
                      }}
                    ></div>

                    {/* Content */}
                    <div
                      className="position-absolute bottom-0 start-0 p-4 text-white"
                      style={{
                        zIndex: 2,
                      }}
                    >

                      <h4 className="fw-bold mb-3">

                        {service.title}

                      </h4>

                      <p
                        style={{
                          lineHeight: "1.8",
                          color: "#d1d1d1",
                        }}
                      >

                        {service.desc}

                      </p>

                      {/* Learn More */}
                      <div
                        className="mt-4 fw-semibold d-flex align-items-center gap-2"
                        style={{
                          color: "#00d9ff",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/service-form")}
                      >

                        Learn More
                      </div>
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