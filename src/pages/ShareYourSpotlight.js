import React from 'react';
import { Container, Row, Col, Card, Button,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ShareYourSpotlight = () => {
  
  return (
  <>
  <Container
  fluid
  style={{
    backgroundImage: `url('/shareYourSpotlightBanner.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
  }}
  className="share-spotlight-banner"
>
  <style>
    {`
      @media (max-width: 768px) {
        .share-spotlight-banner {
          height: 60vh !important;
          background-position: top center !important;
        }
      }

      @media (max-width: 480px) {
        .share-spotlight-banner {
          height: 50vh !important;
          background-size: contain !important;
          background-position: center top !important;
          background-repeat: no-repeat !important;
        }
      }
    `}
  </style>
</Container>


  <Container className="py-5">
      <Row className="align-items-center">
        {/* Left - Circular Image */}
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <div
            style={{
              width: "300px",
              height: "380px",
              margin: "0 auto",
              borderRadius: "50% / 30%",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="/shareYour.jpg" // replace with your image in /public
              alt="Spotlight"
              fluid
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </Col>

        {/* Right - Text Content */}
        <Col xs={12} md={6}>
         
          <h3 className="fw-bold mb-3" style={{ color: "#0f3052" }}>
            Hey there!<br/> If you’ve clicked on Share Your Spotlight, buddy, we already know you’ve got <br/> something special up your sleeve!
          </h3>
          <p style={{ color: "#666", fontSize: "1.05rem" }}>
            Do you have a story to share?<br />
            Need a platform to amplify your journey?<br />
            Or know someone whose story deserves more recognition?
          </p>

          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeW3IfgzGfq6p3zpRrd2ltp2URzFy9av5GBV07svhRgmd64jg/viewform">
  <Button
    style={{
      backgroundColor: "white",
      border: "none",
      borderRadius: "8px",
      padding: "10px 24px",
      color: "#0f3052",
    }}
  >
    Submit Your Story
  </Button>
</Link>
        </Col>
      </Row>
    </Container>

    <Container className="py-5">
      <Row className="g-4">
        {/* Card 1 */}
        <Col xs={12} md={6}>
          <div
            style={{
              backgroundColor: "#d8f3dc",
              borderRadius: "16px",
              padding: "25px",
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h5 className="fw-bold mb-2">Not Everyone Makes the Cut</h5>
            <p className="mb-0">
              Only the most compelling, authentic influencers will be chosen to share their journey with the world. Will you be one of them?
            </p>
          </div>
        </Col>

        {/* Card 2 */}
        <Col xs={12} md={6}>
          <div
            style={{
              backgroundColor: "#cce3ff",
              borderRadius: "16px",
              padding: "25px",
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h5 className="fw-bold mb-2">Gain Global Exposure</h5>
            <p className="mb-0">
              By sharing your story, you’re not just getting featured—you’re stepping into a global community of influencers, making connections, and growing your personal brand.
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container
      fluid
      className="py-5 px-3"
      style={{
        backgroundImage: "url('/shareYourStory.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row
        className="justify-content-center align-items-center text-white"
        style={{
          // backgroundColor: "#184d81",
          borderRadius: "20px",
          padding: "40px 20px",
          minHeight: "300px",
        }}
      >
        <Col xs={12} md={6} className="text-center">
          <h2 className="fw-bold" style={{ color: "#ffffff" }}>
            Submit your story now or get in touch with us!
          </h2>
          <p className="my-3" style={{ color: "#ccc", maxWidth: "100%" }}>
            Our executive team will carefully curate your submission and give it the attention it truly deserves
          </p>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeW3IfgzGfq6p3zpRrd2ltp2URzFy9av5GBV07svhRgmd64jg/viewform">
  <Button
    style={{
      backgroundColor: "white",
      border: "none",
      borderRadius: "8px",
      padding: "10px 24px",
      color: "#0f3052",
    }}
  >
    Submit Your Story
  </Button>
</Link>
          
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default ShareYourSpotlight; 