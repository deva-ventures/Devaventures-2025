import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AmplifyYourBrand = () => {
  return (
    <div className="amplify-page">
      <section className="amplify-hero py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="amplify-title">Amplify Your Brand</h1>
              <p className="amplify-subtitle">
                Discover strategies and tools to enhance your brand visibility through impactful partnerships.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="amplify-content py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <Card className="coming-soon-card">
                <Card.Body className="p-5">
                  <h2 className="coming-soon-title">Coming Soon</h2>
                  <p className="coming-soon-text">
                    Amplify Your Brand section is under development. Soon you'll have access to 
                    comprehensive tools and strategies to boost your brand's visibility.
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
        .amplify-hero {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }
        
        .amplify-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        .amplify-subtitle {
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

export default AmplifyYourBrand; 