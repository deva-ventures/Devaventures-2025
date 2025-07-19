import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const InfluencerAcademy = () => {
  return (
    <div className="academy-page">
      <section className="academy-hero py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="academy-title">Influencer Academy</h1>
              <p className="academy-subtitle">
                Enhance your skills with our comprehensive resources and expert-led workshops.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="academy-content py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <Card className="coming-soon-card">
                <Card.Body className="p-5">
                  <h2 className="coming-soon-title">Coming Soon</h2>
                  <p className="coming-soon-text">
                    The Influencer Academy is under development. Soon you'll have access to 
                    expert-led workshops, practical resources, and community support.
                  </p>
                  <Button variant="primary" size="lg">
                    Get Notified
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .academy-hero {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }
        
        .academy-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        .academy-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .coming-soon-card {
          border: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-radius: 15px;
        }
        
        .coming-soon-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 1rem;
        }
        
        .coming-soon-text {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #f4891d 0%, #f68b1f 100%);
          border: none;
          padding: 0.75rem 2rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default InfluencerAcademy; 