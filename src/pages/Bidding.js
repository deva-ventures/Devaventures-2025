import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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
        <Button
  style={{
    backgroundColor: 'white',
    border: 'none',
    marginBottom: '20px',
    color: '#0f3052', // <-- added this
  }}
>
  CLICK HERE TO SECURE YOUR SPOT
</Button>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              style={{
                backgroundColor: '#243D6F',
                padding: '30px',
                width: '120px',
                borderRadius: '5px',
                color: 'white',
              }}
            >
              <h2 style={{ fontSize: '36px', margin: 0 }}>{value.toString().padStart(2, '0')}</h2>
              <p style={{ margin: 0 }}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const backgroundStyle = {
    backgroundImage: `url('/aboutUs.jpg')`, // Make sure image is in public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
  };

  const sectionStyle = {
    backgroundColor: '#0f3052', 
    color: 'white',
    // padding: '60px 0',
    fontFamily: 'Georgia, serif',
  };

  const textBlockStyle = {
    paddingRight: '40px',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    color: '#ccc',
    fontSize: '0.95rem',
    lineHeight: '1.6',
  };

  const overlayImageStyle = {
    width: '100%',
    height:"300px",
  marginLeft:"100px",
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
    <Container fluid style={backgroundStyle}>
      </Container>
    <div style={sectionStyle}>
      <Container fluid>
        <Row className="align-items-center">
          {/* LEFT TEXT BLOCK */}
          <Col md={5} className="px-5 mb-4 mb-md-0">
            <div style={textBlockStyle}>
              <h1 style={headingStyle}>What Happens in The Bidding Room?</h1>
              <p style={subheadingStyle}>
              Only the boldest brands and the most ambitious influencers will know. <br />
                This isn’t just another marketplace—this is a battleground for creativity, innovation, and opportunity.
              </p>
              <p style={paragraphStyle}>
              For Small Businesses: List your gigs, set your terms, and watch influencers compete to amplify your brand like never before.<br/>
              For Influencers: Don’t just wait for opportunities—seize them. Bid, win, and collaborate with brands that resonate with your personal brand.
              </p>
            </div>
          </Col>

          {/* MIDDLE OVERLAPPING IMAGE */}
          <Col md={2} className="d-flex justify-content-center mb-4 mb-md-0">
            <img
              src="/grid1.jpg"
              alt="Overlay"
              style={overlayImageStyle}
            />
          </Col>

          {/* RIGHT FULL IMAGE */}
          <Col md={5}>
            <img
              src="/pastel1.jpg"
              alt="Right Full"
              style={rightImageStyle}
            />
          </Col>
        </Row>
      </Container>
    </div>
  
    <div style={{ backgroundColor: 'white', // dark background
    color: 'white',
    // padding: '60px 0',
    fontFamily: 'Georgia, serif',}}>
      <Container fluid>
        <Row className="align-items-center">
          {/* RIGHT FULL IMAGE */}
          <Col md={5}>
            <img
              src="/grid1.jpg"
              alt="Right Full"
              style={rightImageStyle}
            />
          </Col>

          {/* MIDDLE OVERLAPPING IMAGE */}
          <Col md={2} className="d-flex justify-content-center mb-4 mb-md-0">
            <img
              src="/pastel1.jpg"
              alt="Overlay"
              style={{
                width: '100%',
                height: "300px",
                marginRight: "150px",
                maxWidth: '250px',
                zIndex: 2,
                position: 'relative'
              }}
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