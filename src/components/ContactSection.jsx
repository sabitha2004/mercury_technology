import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div id="contact">
      <div className="py-5 bg-white text-white">
        <Container>
          {/* Heading */}
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold text-dark display-5">
              Send Us a <span className="text-info">Message</span>
            </h2>
            <p className="text-secondary mt-3">
              Let's build something extraordinary together
            </p>
          </motion.div>

          <Row className="g-5">
            {/* LEFT FORM */}
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        className="bg-white text-dark border-secondary p-3"
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        className="bg-white text-dark border-secondary p-3"
                      />
                    </Col>
                  </Row>

                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="bg-white text-dark border-secondary p-3 mt-3"
                  />

                  <Form.Select className="bg-white text-dark border-secondary p-3 mt-3">
                    <option>Service of Interest</option>
                    <option>Web Development</option>
                    <option>Mobile Apps</option>
                    <option>AI & Automation</option>
                    <option>Cloud Solutions</option>
                  </Form.Select>

                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="bg-white text-dark border-secondary p-3 mt-3"
                  />

                  <Button
                    type="submit"
                    className="mt-4 px-4 py-2 fw-bold"
                    style={{
                      background: "#00e5ff",
                      border: "none",
                      color: "#000",
                    }}
                  >
                    Send Message
                  </Button>
                </Form>
              </motion.div>
            </Col>

            {/* RIGHT INFO */}
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-4 bg-white rounded-4 border border-secondary text-dark">
                  <h5 className="text-info fw-bold mb-2">Contact Info</h5>

                  <p className="text-secondary mb-2">info@mercurytech.in</p>

                  <h6 className="text-info mt-2">Office Location</h6>

                  <p className="text-secondary mb-3">Coimbatore, Tamil Nadu</p>

                  {/* GOOGLE MAP */}
                  <iframe
                    title="Coimbatore Location"
                    src="https://www.google.com/maps?q=Coimbatore,TamilNadu&output=embed"
                    width="100%"
                    height="190"
                    style={{
                      border: "0",
                      borderRadius: "15px",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactSection;
