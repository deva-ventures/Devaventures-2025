import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { contactInfo } from '../data/mockData';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
    {/* <Container fluid className="py-5 bg-light text-center mt-5">
  <small className="text-muted d-block mb-2">Get in touch</small>
  <h1 className="fw-bold display-1" style={{ color: "#0f3052" }}>
    CONTACT US
  </h1>
</Container> */}
<div
  className="storyfluence-banner"
  style={{
    backgroundImage: `url('/contactBanner.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "400px",
    height: "100vh",
    color: "white",
    display: "flex",
    alignItems: "flex-start", // push content down from the top
    justifyContent: "center",
    textAlign: "center",
    padding: "80px 20px 20px", // 👈 added top padding (80px)
    position: "relative",
  }}
>
  <style>
    {`
      @media (max-width: 768px) {
        .storyfluence-banner {
          height: 60vh !important;
          min-height: 250px !important;
          background-position: top center !important;
          margin-bottom: -25px !important;
          padding-top: 60px !important; /* 👈 smaller top padding on tablet */
        }
      }

      @media (max-width: 480px) {
        .storyfluence-banner {
          height: 50vh !important;
          min-height: 200px !important;
          background-size: contain !important;
          background-repeat: no-repeat !important;
          background-position: center top !important;
          margin-bottom: -35px !important;
          padding-top: 40px !important; /* 👈 smaller top padding on mobile */
        }
      }
    `}
  </style>
</div>

  <Container fluid className="py-5 bg-light">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Row>
            {/* Left side: Updated content */}
            <Col md={6} className="mb-4">
              <h4 className="fw-bold mb-3" style={{color:"#0f3052"}}>Get In Touch To Get The Ball Rolling</h4>
              <p className="text-muted mb-2">
                <strong style={{color:"#0f3052"}}>USA Headquarters:</strong> 5802 Grosvenor Lane, Bethesda, MD 20814
              </p>
              <p className="text-muted mb-2">
                <strong style={{color:"#0f3052"}}>INDIA Office:</strong> PS Qube, Room No 608 & 609, 6th Floor, Street No. 1111, Newtown, Kolkata, West Bengal 700156
              </p>
              <p className="text-muted mb-2" style={{color:"#0f3052"}}>
                <strong style={{color:"#0f3052"}}>Phone:</strong><br />
                +1 (415) 941-1910 (USA)<br />
                +1 (301) 442-6047 (USA)<br />
                +91-9674908532 (INDIA)
              </p>
              <p className="text-muted mb-2">
                <strong style={{color:"#0f3052"}}>Email:</strong> hello@globalinfluencershub.com
              </p>
            </Col>

            {/* Right side form */}
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="text-muted small">NAME (*)</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="text-muted small">E-MAIL (*)</Form.Label>
                  <Form.Control type="email" placeholder="you@example.com" />
                </Form.Group>

               

               

                <Form.Group className="mb-3" controlId="formComment">
                  <Form.Label className="text-muted small">COMMENT (*)</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>

                

                <Button
  style={{ backgroundColor: '#0f3052', border: 'none' }}
  type="submit"
  className="px-4 py-2"
>
  SEND MESSAGE
</Button>

               
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Contact; 