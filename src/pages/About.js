
import React from 'react';
import { Container, Row, Col, Image,Accordion } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <>
    <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
      
<main className="text-center">
  <style>
    {`
      @media (max-width: 576px) {
        .gi-heading {
          font-size: 2.5rem !important;
          letter-spacing: -1.5px !important;
        }
      }
    `}
  </style>

  
  <h1
    className="display-1 fw-bold gi-heading"
    style={{ color: '#0f3052', letterSpacing: '-5.05px' }}
  >
    About Us
  </h1>
</main> 
    </div>
    <Container
      fluid
      className=" d-flex align-items-center justify-content-center"
      style={{  paddingBottom: '100px', }}
    >
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={28} className="text-center">
          <Image
            src="/aboutUs.jpg"
            alt="www sculpture"
            fluid
            style={{
              borderRadius: '20px',
              maxHeight: '90vh',
              width: '100%',
              objectFit: 'cover',
              boxShadow: '0 0 20px rgba(255,255,255,0.1)',
            }}
          />
        </Col>
      </Row>
    </Container>

    <Container fluid className="bg-light py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h2 className="fw-bold text-center mb-4" style={{color: '#0f3052'}}>
          Dive into the diverse experiences of social media influencers shaping the online landscape. 
          </h2>

          <p className="fs-4 text-center">
          Their journeys showcase resilience, creativity, and innovation, serving as inspiration and valuable lessons for aspiring influencers and businesses.{' '}
            
          </p>
        </Col>
      </Row>
    </Container>
    <Container fluid className="py-5 bg-light">
      <Row className="align-items-center justify-content-center">
        {/* Text Column */}
        <Col xs={12} md={6} className="mb-4 mb-md-0">
        <style>
    {`
      @media (max-width: 576px) {
        .gi-heading {
          font-size: 2.5rem !important;
          letter-spacing: -1.5px !important;
        }
      }
    `}
  </style>
          <h1 className="fw-bold display-5 mb-4" style={{ color: '#0f3052' ,letterSpacing: '-3px'}}>Unlock Your Potential</h1>
          <p className="fs-5 text-secondary">
          Unlock Your Potential
          Enhance your skills with our Influencer Academy, offering tailored resources and expert-led workshops.
          </p>
          
        </Col>

        {/* Image Column */}
        <Col xs={12} md={5}>
          <Image
            src="/potential.jpg"
            alt="Jury"
            fluid
            rounded
            style={{ borderRadius: '1rem' }}
          />
        </Col>
      </Row>
    </Container>
    <Container fluid className="py-5 bg-light">
      <Row className="align-items-center justify-content-center">

 {/* Image Column */}
 <Col xs={12} md={5}>
          <Image
            src="/partnerships.jpg"
            alt="Jury"
            fluid
            rounded
            style={{ borderRadius: '1rem' }}
          />
        </Col>
        {/* Text Column */}
        <Col xs={12} md={6} className="mb-4 mb-md-0">
        <style>
    {`
      @media (max-width: 576px) {
        .gi-heading {
          font-size: 2.5rem !important;
          letter-spacing: -1.5px !important;
        }
      }
    `}
  </style>
          <h2 className="fw-bold display-5 mb-4" style={{ color: '#0f3052',letterSpacing: '-3px' }}>Stay Ahead of the Curve</h2>
          <p className="fs-5 text-secondary">
          Gain insights into trending topics and strategies to amplify your brand visibility through impactful partnerships.
          </p>
          
        </Col>

       
      </Row>
    </Container>
    <Container fluid className="py-5 bg-light">
      <Row className="align-items-center justify-content-center">
        {/* Text Column */}
        <Col xs={12} md={6} className="mb-4 mb-md-0">
        <style>
    {`
      @media (max-width: 576px) {
        .gi-heading {
          font-size: 2.5rem !important;
          letter-spacing: -1.5px !important;
        }
      }
    `}
  </style>
          <h2 className="fw-bold display-5 mb-4" style={{ color: '#0f3052',letterSpacing: '-3px' }}>The Bidding Room</h2>
          <p className="fs-5 text-secondary">
          Connect with small businesses showcasing exciting opportunities, and bid on projects that align with your passions.
          </p>
          
        </Col>

        {/* Image Column */}
        <Col xs={12} md={5}>
          <Image
            src="/bidding.jpg"
            alt="Jury"
            fluid
            rounded
            style={{ borderRadius: '1rem' }}
          />
        </Col>
      </Row>
    </Container>
    <Container fluid className="py-5 bg-light">
      <Row className="align-items-center justify-content-center">

{/* Image Column */}
<Col xs={12} md={5}>
          <Image
            src="/community.jpg"
            alt="Jury"
            fluid
            rounded
            style={{ borderRadius: '1rem' }}
          />
        </Col>

        {/* Text Column */}
        <Col xs={12} md={6} className="mb-4 mb-md-0">
        <style>
    {`
      @media (max-width: 576px) {
        .gi-heading {
          font-size: 2.5rem !important;
          letter-spacing: -1.5px !important;
        }
      }
    `}
  </style>
          <h2 className="fw-bold display-5 mb-4" style={{ color: '#0f3052' ,letterSpacing: '-3px'}}>Our Thriving Community</h2>
          <p className="fs-5 text-secondary">
          Transform your aspirations into achievements and take the next step in your journey with Global Influencers Hub.
          </p>
          
        </Col>

        
      </Row>
    </Container>
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: '#0f3052' }}>Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" className="shadow-sm rounded">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>How Can I Harness the Power of Influencing?</strong>
          </Accordion.Header>
          <Accordion.Body className="text-secondary">
            Discover how to leverage social media platforms effectively by engaging with our comprehensive resources in the Influencer Academy. You’ll gain valuable insights to enhance your online presence and captivate your audience.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
         <Accordion.Header><strong>What Unique Insights Can I Gain from Influencer Stories?</strong></Accordion.Header>
          <Accordion.Body>Each influencer journey at Global Influencers Hub uncovers life lessons and strategies that can provide you with inspiration and practical guidance to navigate your own path in the influencer landscape.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
        <Accordion.Header><strong> How Can I Collaborate with Influencers to Boost My Brand?</strong></Accordion.Header>
          <Accordion.Body>Engage with our amplifying tools and strategies to connect with influencers who align with your brand values. You’ll learn actionable steps to enhance visibility and create meaningful partnerships.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
        <Accordion.Header> <strong>How Do I Participate in The Bidding Room?</strong></Accordion.Header>
          <Accordion.Body>The Bidding Room is your marketplace for collaborating with small businesses. Easily browse available gigs that resonate with your brand, submit your bids, and foster creative partnerships that benefit both parties.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
        <Accordion.Header><strong>What Should I Expect from the Influencer Academy?</strong></Accordion.Header>
          <Accordion.Body>Expect expert-led workshops, practical resources, and community support that will cultivate your skills and empower you to thrive as an influencer in a competitive market.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
         <Accordion.Header><strong>How Can I Maximize Engagement with My Audience?</strong></Accordion.Header>
          <Accordion.Body>Prioritize authentic storytelling and community building within your content. Engage regularly with your audience and explore unique ways to connect, fostering loyalty and increasing interaction.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
        <Accordion.Header> <strong>How can I share my story?</strong></Accordion.Header>
          <Accordion.Body>Your story. Your Stage. Your moment. Click on Share Your Spotlight and fill in the required information. Our team will get in touch with you.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    </>
    
  );
};

export default AboutSection;