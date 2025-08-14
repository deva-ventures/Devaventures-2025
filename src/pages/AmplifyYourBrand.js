import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
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
    className="mobile-full-width"
    style={{
      backgroundColor: "#2b2b26",
      color: "white",
      padding: "50px 40px",
      width: "33.333%",
      float: "left",
      position: "relative", // position relative to allow shifting
      top: "-50px", // move it 50px up
      zIndex: 2, // ensure it appears above other elements if needed
    }}
  >
    <h5
      className="fw-bold mb-4"
      style={{ fontSize: "18px", letterSpacing: "1px" }}
    >
      Why Advertise on Global Influencers Hub?
    </h5>
    <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
      Stand Out Where It Matters Most.
      Global Influencers Hub isn’t just a website—it’s a movement. As a
      high-traffic platform celebrating social media influencers, we bring
      together influencers, their fans, and brands ready to make an impact.
      Here’s why you’ll want to join us:
    </p>
    <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
      Unrivaled Reach: Engage with a diverse and growing audience of millions
      worldwide. Influencer-Driven Traffic: Our audience isn’t just big—it’s
      engaged, curious, and loyal.
      Brand Credibility: Associate with a premium platform known for authentic
      and inspiring content.
      Customizable Campaigns: We craft ad experiences that work for your brand
      and goals.
    </p>
  </div>

  {/* Right Side White Section */}
  <div
    className="mobile-remove-margin"
    style={{
      marginLeft: "33.333%",
      backgroundColor: "white",
      padding: "60px 80px",
    }}
  >
    <Container fluid>
      <Row>
        <Col md={4} className="mb-4 mb-md-0">
          <h5>Advertising Opportunities</h5>
          <p
            style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: 0 }}
          >
            Whether you’re looking to boost brand visibility or drive
            conversions, we’ve got you covered:
          </p>
          <p>
           <b>Homepage Features:</b>  Be the first thing our audience sees with
            premium banner placements.<br/>
            <b>Sponsored Stories:</b> Let us tell your brand’s story alongside the
            journeys of top influencers.<br/>
            <b>Video Ads:</b> Embed your videos into influencer interviews, reels, or
            story highlights.
          </p>
        </Col>
        <Col md={4} className="mb-4 mb-md-0">
          <p
            style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: 0 }}
          >
            Newsletter Spotlights: Get direct access to our highly engaged
            subscriber base.
            Social Media Campaigns: Collaborate with us to amplify your message
            across our platforms.
            Event Sponsorships: Stand out by sponsoring influencer meetups,
            launch parties, or virtual webinars.
          </p>
        </Col>
      </Row>
    </Container>
  </div>

  {/* Responsive Styles */}
  <style>
    {`
      @media (max-width: 767px) {
        .mobile-full-width {
          width: 100% !important;
          float: none !important;
          top: 0 !important;
          padding: 30px 20px !important;
        }
        .mobile-remove-margin {
          margin-left: 0 !important;
          padding: 30px 20px !important;
        }
      }
    `}
  </style>
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
            style={{ fontSize: "25px", letterSpacing: "1px",color:"#0f3052" }}
          >
            Who Should Advertise?
          </h5>
          <p style={{ fontSize: "18px", lineHeight: "1.6",fontWeight:"bold" }}>
            Our platform is perfect for:
          </p>
          <ul style={{ fontSize: "14px", lineHeight: "1.6" }}>
  <li><b>Brands:</b> Looking to connect with influencers and trend-savvy audiences.</li>
  <li><b>Agencies:</b> Wanting premium placement for their clients in a targeted, high-traffic environment.</li>
  <li><b>Startups:</b> Eager to build awareness and grow within the influencer ecosystem.</li>
  <li><b>Creators and Tools:</b> Promoting influencer-focused services, apps, or products.</li>
</ul>

        </Col>

        {/* Right Image Section */}
        <Col xs={12} md={4} className="px-0">
          <div
            className="mobile-fix-image"
            style={{
              height: "700px",
              width: "100%",
              backgroundImage: `url('/amplifyImage.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0",
              position: "relative",
              zIndex: "2",
              marginTop: "-70px",
              boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
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
          className="mobile-fix-banner"
          style={{
            position: "relative",
            width: "100%",
            height: "80vh",
            backgroundImage: "url('/formBanner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "5%",
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

  {/* Responsive Fix */}
  <style>
    {`
      @media (max-width: 767px) {
        .mobile-fix-image {
          height: 300px !important;
          margin-top: 0 !important;
        }
        .mobile-fix-banner {
          top: 0 !important;
          height: 300px !important;
          padding-left: 10% !important;
          justify-content: center !important;
        }
        .mobile-fix-banner div {
          max-width: 90% !important;
        }
      }
    `}
  </style>
  </>
  );
};

export default AmplifyYourBrand; 