import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceForm = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f5f9ff, #eef4ff)",
        minHeight: "100vh",
        padding: "80px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container style={{ maxWidth: "650px" }}>
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            background: "#ffffff",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          }}
        >
          <Row className="g-0">
            {/* LEFT SIDE */}
            <Col lg={5}>
              <div
                style={{
                  background: "linear-gradient(135deg, #0d6efd, #5ea2ff)",
                  height: "100%",
                  padding: "50px 35px",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h2 className="fw-bold mb-4">Service Request</h2>

                <p
                  style={{
                    lineHeight: "1.9",
                    opacity: 0.9,
                  }}
                >
                  Tell us about your project and our team will connect with you
                  to build something amazing.
                </p>

                <div className="mt-5">
                  <div className="mb-4">
                    <h6 className="fw-bold">Email</h6>

                    <p className="mb-0">info@mercurytech.in</p>
                  </div>

                  <div>
                    <h6 className="fw-bold">Location</h6>

                    <p className="mb-0">Thanjavur, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </Col>

            {/* RIGHT SIDE FORM */}
            <Col lg={7}>
              <div
                style={{
                  padding: "45px 35px",
                }}
              >
                <h3 className="fw-bold text-dark mb-2">Fill the Form</h3>

                <p className="text-secondary mb-4">
                  Our experts will contact you shortly.
                </p>

                <Form>
                  {/* Full Name */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold text-dark">
                      Full Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "1px solid #dbe5f0",
                        background: "#f8fbff",
                      }}
                    />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold text-dark">
                      Email Address
                    </Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "1px solid #dbe5f0",
                        background: "#f8fbff",
                      }}
                    />
                  </Form.Group>

                  {/* Address */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold text-dark">
                      Address
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your address"
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "1px solid #dbe5f0",
                        background: "#f8fbff",
                      }}
                    />
                  </Form.Group>

                  {/* Reason */}
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold text-dark">
                      Why do you need our service?
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Tell us about your project..."
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "1px solid #dbe5f0",
                        background: "#f8fbff",
                      }}
                    />
                  </Form.Group>

                  {/* BUTTONS */}
                  <div className="d-flex gap-3">
                    {/* Back Button */}
                    <Button
                      onClick={() => {
                        navigate("/");

                        setTimeout(() => {
                          document
                            .getElementById("services")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                      className="fw-bold"
                      style={{
                        background: "#84acf0",
                        color: "#000",
                        border: "none",
                        padding: "15px 24px",
                        borderRadius: "14px",
                        fontSize: "16px",
                        flex: "1",
                      }}
                    >
                      Back
                    </Button>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="fw-bold"
                      style={{
                        background: "linear-gradient(135deg, #0d6efd, #5ea2ff)",
                        color: "#000",
                        border: "none",
                        padding: "15px",
                        borderRadius: "14px",
                        fontSize: "17px",
                        boxShadow: "0 8px 20px rgba(13,110,253,0.25)",
                        flex: "2",
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default ServiceForm;
