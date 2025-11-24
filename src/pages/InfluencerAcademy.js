import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const InfluencerAcademy = () => {
  return (
    <>


<div
      className="storyfluence-banner"
      style={{
        backgroundImage: `url('/masterFluenceBanner.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
        height: "90vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
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
              margin-bottom: -25px !important; /* reduce gap on tablet/mobile */
            }
          }
  
          @media (max-width: 480px) {
            .storyfluence-banner {
              height: 50vh !important;
              min-height: 200px !important;
              background-size: contain !important;
              background-repeat: no-repeat !important;
              background-position: center top !important;
              margin-bottom: -35px !important; /* reduce gap further on small screens */
            }
          }
        `}
      </style>
    </div>


    <div className="bg-light py-5">
  <style>
    {`
      .hero-card {
        border-radius: 15px;
        overflow: hidden;
      }

      @media (max-width: 768px) {
        .hero-card {
          background-size: contain !important;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #000;
          min-height: 320px;
          aspect-ratio: 3 / 4;
          display: flex;
          align-items: stretch;
        }

        .hero-card .card-body {
          flex: 1;
        }

        .first-card-body {
          padding: 0 !important;
          height: auto !important;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }

        .first-card-body a {
          margin: 0 20px 20px 0;
        }

        .second-card {
          height: auto !important;
        }

        .second-card-body {
          height: auto !important;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          padding: 20px !important;
        }

        .second-card-button {
          position: static !important;
          margin-left: auto;
        }
      }
    `}
  </style>
  <Container fluid>
    <Row className="g-4 justify-content-start px-3">
      {/* Card 1 */}
      <Col xs={12} md={6}>
        <Card
          className="h-100 text-white border-0 hero-card"
          style={{
            backgroundImage: `url('/Micro-Influencers.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '15px',
          }}
        >
          <Card.Body
            className="first-card-body"
            style={{
              height: '550px',
              borderRadius: '15px',
              paddingTop: '250px',
              paddingLeft: '45px',
            }}
          >
            <a
              href="/articles/riseOfMicro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline-light"
                style={{
                  width: '120px',
                  height: '38px',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '6px',
                  borderWidth: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                Read More
              </Button>
            </a>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 2 */}
      <Col xs={12} md={6}>
        <Card
          className="h-100 text-white border-0 position-relative second-card hero-card"
          style={{
            backgroundImage: `url('/howInfluencers.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '15px',
            height: '400px',
          }}
        >
          <Card.Body
            className="second-card-body"
            style={{ height: '100%', position: 'relative' }}
          >
            <a
              href="/articles/influencerPowerMoves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline-light"
                className="second-card-button"
                style={{
                  position: 'absolute',
                  top: '280px',
                  right: '70px',
                  padding: '6px 20px',
                  fontSize: '14px',
                  borderRadius: '6px',
                  fontWeight: 500,
                }}
              >
                Read More
              </Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</div>






    <div className="bg-light py-5">
      <style>
        {`
          .feature-card {
            border-radius: 15px;
            overflow: hidden;
          }

          @media (max-width: 768px) {
            .feature-card {
              background-size: contain !important;
              background-position: center;
              background-repeat: no-repeat;
              background-color: #000;
              min-height: 320px;
              aspect-ratio: 3 / 4;
              display: flex;
              align-items: stretch;
            }

            .feature-card .card-body {
              height: auto !important;
              padding: 20px !important;
              display: flex;
              justify-content: flex-end;
              align-items: flex-end;
            }
          }
        `}
      </style>
      <Container fluid>
        <Row className="g-4 justify-content-start px-3">
          {/* Card 3 */}
          <Col xs={12} md={6}>
            <Card
              className="h-100 text-white border-0 feature-card"
              style={{
                backgroundImage: `url('/influencerPower.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-end align-items-center"
                style={{
                  height: '550px',
                  borderRadius: '15px',
                  paddingBottom: '20px',
                }}
              >
                <a
                  href="/articles/howInfluencersAreChanging"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-light">Read More</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 4 */}
          <Col xs={12} md={6}>
            <Card
              className="h-100 text-white border-0 feature-card"
              style={{
                backgroundImage: `url('/bagYourFirst.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-end align-items-center"
                style={{
                  height: '400px',
                  borderRadius: '15px',
                  paddingBottom: '15px',
                }}
              >
                <a
                  href="/articles/bagYourFirstBigBrand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-light">Read More</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>


    
    </>
  );
};

export default InfluencerAcademy; 