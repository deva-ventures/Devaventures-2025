import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const InfluencerAcademy = () => {
  return (
    <>
   <div className="bg-light py-5">
      <Container fluid>
        <Row className="g-4 justify-content-start px-3">
          {/* Card 1 */}
          
          {/* <Col xs={12} md={6}>
  <Card
    className="h-100 text-white border-0"
    style={{
      backgroundImage: `url('/Micro-Influencers.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '15px',
    }}
  >
    <Card.Body
      className="d-flex justify-content-center"
      style={{
        height: '550px',
        borderRadius: '15px',
        paddingTop: '250px',
        paddingRight: '3px' // adjust this value to match subheadline position
      }}
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
          backgroundColor: 'rgba(255, 255, 255, 0.05)', // subtle background as seen in image
        }}
      >
        Read More
      </Button>
    </Card.Body>
  </Card>
</Col> */}

<Col xs={12} md={6}>
  <Card
    className="h-100 text-white border-0"
    style={{
      backgroundImage: `url('/Micro-Influencers.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '15px',
    }}
  >
    <Card.Body
      style={{
        height: '550px',
        borderRadius: '15px',
        paddingTop: '250px',   // vertical alignment with subheadline
        paddingLeft: '45px',   // horizontal alignment with subheadline text
      }}
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
    </Card.Body>
  </Card>
</Col>




      {/* Card 2 */}
      <Col xs={12} md={6}>
  <Card
    className="h-100 text-white border-0 position-relative"
    style={{
      backgroundImage: `url('/howInfluencers.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '15px',
      height: '400px',
    }}
  >
    <Card.Body style={{ height: '100%', position: 'relative' }}>
      <Button
        variant="outline-light"
        style={{
          position: 'absolute',
          top: '280px',   // distance from top
          right: '70px',   // distance from left
          padding: '6px 20px',
          fontSize: '14px',
          borderRadius: '6px',
          fontWeight: 500,
        }}
      >
        Read More
      </Button>
    </Card.Body>
  </Card>
</Col>


        </Row>
      </Container>
    </div>

    <div className="bg-light py-5">
      <Container fluid>
        <Row className="g-4 justify-content-start px-3">
          {/* Card 1 */}
          
<Col xs={12} md={6}>
  <Card
    className="h-100 text-white border-0"
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
        paddingBottom: '40px', 
      }}
    >
      <Button variant="outline-light">Read More</Button>
    </Card.Body>
  </Card>
</Col>
      {/* Card 2 */}
          <Col xs={12} md={6}>
            <Card className="h-100 text-white border-0" style={{ backgroundImage: `url('/bagYourFirst.png')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px' }}>
            <Card.Body
      className="d-flex flex-column justify-content-end align-items-center"
      style={{
        height: '400px',
        borderRadius: '15px',
        paddingBottom: '40px', 
       
      }}
    >
      <Button variant="outline-light" >Read More</Button>
    </Card.Body >
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default InfluencerAcademy; 