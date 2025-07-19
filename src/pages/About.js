import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { aboutContent, faqData } from '../data/mockData';

const About = () => {
  const [activeKey, setActiveKey] = useState('0');

  return (
    <Container className="py-5">
      {/* Title Section */}
      <Row className="text-center mb-4">
        <Col>
          <h1 className="fw-bold display-5">Welcome to <br /> where Influence lives</h1>
          <p className="text-muted mt-3">
            The world’s first dedicated platform that celebrates the life journeys of social media influencers.
          </p>
        </Col>
      </Row>

      {/* Images + Text Section */}
      <Row className="align-items-center my-5">
        <Col xs={12} md={6}>
          <Row>
            <Col xs={12} className="mb-3">
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src="/grid2.jpg" />
              </Card>
            </Col>
            <Col xs={6} className="mb-3">
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src="/grid3.webp" />
              </Card>
            </Col>
            <Col xs={6} className="mb-3">
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src="/grid4.jpg" />
              </Card>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <h4 className="fw-bold">
            Dive into the diverse experiences of social media influencers shaping the online landscape.
          </h4>
          <p className="text-muted mt-2">
            Their journeys showcase resilience, creativity, and innovation, serving as inspiration and valuable lessons for aspiring influencers and businesses.
          </p>
        </Col>
      </Row>

      {/* Feature Boxes */}
      <Row className="my-5">
        <Col md={4} className="mb-4">
          <h5 className="fw-bold"><i className="bi bi-mortarboard-fill me-2"></i>Unlock Your Potential</h5>
          <p className="text-muted">
            Enhance your skills with our <strong>influencer Academy</strong>, offering tailored resources and expert-led workshops.
          </p>
        </Col>
        <Col md={4} className="mb-4">
          <h5 className="fw-bold"><i className="bi bi-graph-up-arrow me-2"></i>Stay Ahead of the Curve</h5>
          <p className="text-muted">
            Gain insights into trending topics and <strong>strategies</strong> to amplify your brand visibility through impactful partnerships.
          </p>
        </Col>
        <Col md={4} className="mb-4">
          <h5 className="fw-bold"><i className="bi bi-handshake me-2"></i>The Bidding Room</h5>
          <p className="text-muted">
            Connect with small businesses, showcasing exciting opportunities, and bid on projects that align with your passions.
          </p>
        </Col>
      </Row>

      {/* Footer Text */}
      <Row className="text-center mt-5">
        <Col>
          <h4 className="fw-bold">Our Thriving Community</h4>
          <p className="text-muted">
            Transform your aspirations into achievements and take the next step in your journey with Global Influencers Hub.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

// Helper function to get feature icons
const getFeatureIcon = (index) => {
  const icons = ['rocket', 'chart-line', 'handshake', 'users'];
  return icons[index] || 'star';
};

export default About; 