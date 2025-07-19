import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ShareYourSpotlight = () => {
  return (
    <div className="share-spotlight-page">
      <section className="spotlight-hero py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="spotlight-title">Share Your Spotlight</h1>
              <p className="spotlight-subtitle">
                Your story. Your Stage. Your moment. Share your journey with the world.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="spotlight-content py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <Card className="coming-soon-card">
                <Card.Body className="p-5">
                  <h2 className="coming-soon-title">Coming Soon</h2>
                  <p className="coming-soon-text">
                    Share Your Spotlight feature is under development. Soon you'll be able to 
                    submit your story and get featured on our platform.
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
        .spotlight-hero {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }
        
        .spotlight-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        .spotlight-subtitle {
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

export default ShareYourSpotlight; 