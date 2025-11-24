import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Bidding = () => {

  const CountdownTimer = () => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-09-23T22:20:20');
      const now = new Date();
      const difference = targetDate - now;
  
      let timeLeft = {};
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="text-center ">
       <Link to="https://docs.google.com/forms/d/e/1FAIpQLScOvJrsMaU_-Jwd37VCvXa-93zuEnNb3un5mC2x0n1NgbfvzQ/viewform">
  <Button
    style={{
      backgroundColor: 'white',
      border: 'none',
      marginBottom: '20px',
      color: '#0f3052',
    }}
  >
    CLICK HERE TO SECURE YOUR SPOT
  </Button>
</Link>
<div
  className="countdown-timer"
  style={{
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    padding: '10px',
  }}
>
  {Object.entries(timeLeft).map(([unit, value]) => (
    <div
      key={unit}
      style={{
        backgroundColor: '#243D6F',
        padding: '20px 10px',
        minWidth: '100px',
        borderRadius: '5px',
        color: 'white',
        display: 'inline-block',
        textAlign: 'center',
        flex: '0 0 auto',
      }}
    >
      <h2 style={{ fontSize: '24px', margin: 0 }}>{value.toString().padStart(2, '0')}</h2>
      <p style={{ margin: 0 }}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
    </div>
  ))}
</div>

      </div>
    );
  };
  
  const backgroundStyle = {
    backgroundImage: `url('/biddingBanner.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
  };

  const sectionStyle = {
    backgroundColor: 'black', 
    color: 'white',
    
  };

  const textBlockStyle = {
    paddingRight: '40px',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
  };

  const subheadingStyle = {
    fontSize: '1rem',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    color: '#ccc',
    fontSize: '1rem',
    lineHeight: '1.6',
  };

  const overlayImageStyle = {
    width: '100%',
    height:"300px",
    marginLeft:"300px",
    maxWidth: '250px',
    zIndex: 2,
    position: 'relative'
  };

  const rightImageStyle = {
    width: '100%',
    // height: '100%',
    objectFit: 'cover',
    borderRadius: '0',
  };
  return (
    <>
    <style>
      {`
        .bidding-hero {
          width: 100%;
        }

        .bidding-section-row {
          row-gap: 2rem;
        }

        .bidding-text-col {
          padding-left: 2rem !important;
          padding-right: 2.5rem !important;
        }

        .bidding-heading {
          font-size: 3rem;
          font-weight: bold;
        }

        .bidding-subheading {
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .bidding-paragraph {
          color: #ccc;
          font-size: 1rem;
          line-height: 1.6;
        }

        .right-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
        }

        .overlay-image,
        .overlay-image-alt {
          width: 100%;
          height: 300px;
          max-width: 250px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 992px) {
          .bidding-text-col {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .bidding-hero {
            min-height: 60vh;
            height: auto;
            background-size: contain !important;
            background-position: top center !important;
            padding-top: 2rem;
            padding-bottom: 2rem;
            background-color: #000;
          }

          .bidding-section-row {
            text-align: center;
          }

          .bidding-text-col {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .bidding-heading {
            font-size: 2rem;
            line-height: 1.2;
          }

          .bidding-subheading,
          .bidding-paragraph {
            font-size: 0.95rem;
          }

          .overlay-image,
          .overlay-image-alt {
            height: auto;
            max-width: 70%;
            margin: 0 !important;
          }

          .right-hero-img {
            height: auto;
            object-fit: contain;
          }

          .countdown-timer {
            justify-content: flex-start;
          }
        }
      `}
    </style>
    <Container fluid className="bidding-hero" style={backgroundStyle}>
      </Container>
    <div style={sectionStyle}>
      <Container fluid>
        <Row className="align-items-center bidding-section-row">
          {/* LEFT TEXT BLOCK */}
          <Col md={5} className="px-5 mb-4 mb-md-0 bidding-text-col">
            <div style={textBlockStyle}>
              <h1 className="bidding-heading" style={headingStyle}>What Happens in The Bidding Room?</h1>
              <p className="bidding-subheading" style={subheadingStyle}>
              Only the boldest brands and the most ambitious influencers will know. <br />
                This isn’t just another marketplace—this is a battleground for creativity, innovation, and opportunity.
              </p>
              <p className="bidding-paragraph" style={paragraphStyle}>
              <b>For Small Businesses:</b> List your gigs, set your terms, and watch influencers compete to amplify your brand like never before.<br/>
            <b> For Influencers:</b>  Don’t just wait for opportunities—seize them. Bid, win, and collaborate with brands that resonate with your personal brand.
              </p>
            </div>
          </Col>

          {/* MIDDLE OVERLAPPING IMAGE */}
          <Col md={2} className="d-flex justify-content-center mb-4 mb-md-0">
            <img
              src="/grid1.jpeg"
              alt="Overlay"
              style={overlayImageStyle}
              className="overlay-image"
            />
          </Col>

          {/* RIGHT FULL IMAGE */}
          <Col md={5}>
            <img
              src="/pastel1.jpeg"
              alt="Right Full"
              style={rightImageStyle}
              className="right-hero-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  
    <div style={{ backgroundColor: 'white', color: 'white'}}>
      <Container fluid>
        <Row className="align-items-center bidding-section-row">
          {/* RIGHT FULL IMAGE */}
          <Col md={5}>
            <img
              src="/white1.jpg"
              alt="Right Full"
              style={rightImageStyle}
              className="right-hero-img"
            />
          </Col>

          {/* MIDDLE OVERLAPPING IMAGE */}
          <Col md={2} className="d-flex justify-content-center mb-4 mb-md-0">
            <img
              src="/black2.jpeg"
              alt="Overlay"
              style={{
                width: '100%',
                height: "300px",
                marginRight: "350px",
                maxWidth: '250px',
                zIndex: 2,
                position: 'relative'
              }}
              className="overlay-image-alt"
            />
          </Col>

          {/* TIMER ON THE RIGHT SIDE */}
          <Col md={5} className="mt-5 mt-md-0">
            <CountdownTimer />
          </Col>
        </Row>
      </Container>
    </div>
    
    
  </>
  );
};

export default Bidding; 