import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AmplifyYourBrand = () => {
  const backgroundStyle = {
    backgroundImage: `url('/amplifyYourBrandBanner.png')`, // Make sure image is in public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    width: '100vw',
  };
  return (
    <>
    <Container fluid style={backgroundStyle}>
      </Container>
    <div style={{ width: "100%", backgroundColor: "#f8f9fa" }}>
    {/* Dark Left Box */}
    <div
  style={{
    backgroundColor: "#2b2b26",
    color: "white",
    padding: "50px 40px",
    width: "33.333%",
    float: "left",
    position: "relative",        // position relative to allow shifting
    top: "-50px",                // move it 50px up
    zIndex: 2,                   // ensure it appears above other elements if needed
  }}
>
  <h5 className="fw-bold mb-4" style={{ fontSize: "18px", letterSpacing: "1px" }}>
  Why Advertise on Global Influencers Hub?
  </h5>
  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
  Stand Out Where It Matters Most.
Global Influencers Hub isn’t just a website—it’s a movement. As a high-traffic platform celebrating social
media influencers, we bring together influencers, their fans, and brands ready to make an impact. Here’s why you’ll want to join us:
  </p>
  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
  Unrivaled Reach: Engage with a diverse and growing audience of millions worldwide.
Influencer-Driven Traffic: Our audience isn’t just big—it’s engaged, curious, and loyal.
Brand Credibility: Associate with a premium platform known for authentic and inspiring content.
Customizable Campaigns: We craft ad experiences that work for your brand and goals.
  </p>
</div>

    {/* Right Side White Section */}
    <div style={{ marginLeft: "33.333%", backgroundColor: "white", padding: "60px 80px" }}>
      <Container fluid>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
          <h5>Advertising Opportunities</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: 0 }}>
            Whether you’re looking to boost brand visibility or drive conversions, we’ve got you covered:
            </p>
            <p>Homepage Features: Be the first thing our audience sees with premium banner placements.
Sponsored Stories: Let us tell your brand’s story alongside the journeys of top influencers.
Video Ads: Embed your videos into influencer interviews, reels, or story highlights.</p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: 0 }}>
            Newsletter Spotlights: Get direct access to our highly engaged subscriber base.
Social Media Campaigns: Collaborate with us to amplify your message across our platforms.
Event Sponsorships: Stand out by sponsoring influencer meetups, launch parties, or virtual webinars.
            </p>
          </Col>
         
        </Row>
      </Container>
    </div>
  </div>

  <div style={{ backgroundColor: "#fff", padding: "80px 0" }}>
      <Container fluid className="px-5">
        <Row className="align-items-center">
          {/* Left Text Section */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
            style={{ paddingRight: "60px" }}
          >
            <h5
              className="fw-bold mb-4"
              style={{ fontSize: "18px", letterSpacing: "1px" }}
            >
              Who Should Advertise?
            </h5>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Our platform is perfect for:
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Brands: Looking to connect with influencers and trend-savvy audiences.
Agencies: Wanting premium placement for their clients in a targeted, high-traffic environment.
Startups: Eager to build awareness and grow within the influencer ecosystem.
Creators and Tools: Promoting influencer-focused services, apps, or products.
            </p>
            
        
          </Col>

          {/* Right Image Section */}
          <Col xs={12} md={4} className="px-0">
  <div
    style={{
      height: "700px",
      width: "100%",
      backgroundImage: `url('/amplifyImage.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "0",
      position: "relative",
      zIndex: "2",
      marginTop: "-70px", // 👈 Controls how much it overlaps
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)", // optional: adds some visual depth
    }}
  ></div>
</Col>
        </Row>
      </Container>
    </div>

    <Container fluid className="p-0">
  <Row className="m-0">
    <Col xs={12} className="p-0">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "80vh",
          backgroundImage: "url('/formBanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // 👈 shift text to left
          paddingLeft: "5%", // 👈 add padding on the left instead of right
          top: "-250px",
        }}
      >
        <div
          style={{
            maxWidth: "360px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h5
            className="fw-bold mb-3"
            style={{ fontSize: "20px", letterSpacing: "1px" }}
          >
            FILL OUT THE FORM
          </h5>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Reserve your spot today and take the first step toward unmatched
            visibility and engagement!
          </p>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLScOvJrsMaU_-Jwd37VCvXa-93zuEnNb3un5mC2x0n1NgbfvzQ/viewform">
  <Button
    style={{
      backgroundColor: "#0f3052",
      border: "none",
      marginTop: "10px",
    }}
  >
    Discover More
  </Button>
</Link>
        </div>
      </div>
    </Col>
  </Row>
</Container>

  </>
  );
};

export default AmplifyYourBrand; 