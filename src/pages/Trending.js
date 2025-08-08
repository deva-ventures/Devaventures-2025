import React from 'react';
import { Container, Row, Col, Card, Button , Carousel} from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Trending = () => {

  const people = [
    {
      name: 'Pankaj Dubey',
      des: 'Founder DSPIN | TEDx Speaker | Top 50 Indian Icon | Investor',
      img: '/pankaj.jpg',
      youtube: 'https://youtu.be/RUJ-LV58m9I?si=Fzn9UkQRoXSRt5ZM',
      article: '/articles/pankaj',
    },
    {
      name: 'Pablo Montana',
      des: 'Musician | Latin Artist | Salsa & Bachata Performer | Traveller',
      img: '/pabloTrendin.jpg',
      youtube: 'https://youtu.be/-oq8VYhFcHw?si=FVXr_fPIrhPjG0Ec',
      article: '/articles/pablo',
    },
    {
      name: 'Sweta Desai',
      des: 'Reset, Rebuild, Reign | From Late Starts to Global Fashion Weeks & Full House Shows',
      img: '/swetaTrending.jpg',
      youtube: 'https://youtu.be/va1t7bxevtc?si=kvmnn3vYRFnyYWpp',
      article: '/articles/sweta',
    },
    {
      name: 'Pankaj Dubey',
      des: 'Founder DSPIN | TEDx Speaker | Top 50 Indian Icon | Investor',
      img: '/pankaj.jpg',
      youtube: 'https://youtu.be/RUJ-LV58m9I?si=Fzn9UkQRoXSRt5ZM',
      article: '/articles/pankaj',
    },
  ];
  
  // Group items into chunks of 3 for each slide
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  
  const groupedSlides = chunkArray(people, 3);
  return (
    <div style={{ backgroundColor: "#f5f5f0" }}>
    {/* Hero Section */}
    {/* <div
      style={{
        backgroundImage: "url('/trendingBanner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        color: "white",
        position: "relative",
      }}
    >
      
    </div> */}

<div
  className="storyfluence-banner"
  style={{
    backgroundImage: `url('/trendingBanner.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '400px',
    height: '90vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
  }}
>
  
  </div>




{/* Popular Homes Section */}
<Container className="py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h4 className="mb-2 mb-md-0">
          These aren’t just viral clips — they’re the truths behind the triumphs.
        </h4>
        <p className="mb-0">
          This is where real impact begins — not in noise, but in truth.
        </p>
      </div>

      <Carousel
        indicators={false}
        prevIcon={<FaChevronLeft color="#0d6efd" size={24} />}
        nextIcon={<FaChevronRight color="#0d6efd" size={24} />}
      >
        {groupedSlides.map((group, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="g-4">
              {group.map((home, index) => (
                <Col md={4} key={index}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={home.img}
                      style={{ borderRadius: '12px', height: '280px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <div className="text-muted small mb-2">{home.des}</div>
                      <Card.Title className="fw-bold">{home.name}</Card.Title>

                      <div className="d-flex flex-column mt-3 gap-2">
                        <a
                          href={home.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm"
                        >
                          Click here for YouTube
                        </a>
                        <a
                          href={home.article}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          Click here for Article
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>










    {/* About Section */}
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h2 className="fw-light">Raw. Honest. Unforgettable.</h2>
        </Col>
        <Col md={6}>
          <p>
          Beyond every reel is a real story — and that’s what you’ll find here.
          </p>
          <p>
          The quiet struggles. The bold leaps. The unseen chapters that shaped the spotlight.
Beyond every reel is a real story — and that’s what you’ll find here.

          </p>
          {/* <a href="#" className="text-decoration-underline">Читать подробнее →</a> */}
        </Col>
      </Row>
    </Container>

    {/* Why Choose Us Section */}
    <a
  href="https://youtu.be/xRje6s3CKR0?si=_pLFshrjog-z-SJ7"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <div
    style={{
      backgroundImage: "url('/formBackground.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "400px",
      padding: "60px 0",
      cursor: "pointer",
    }}
  >
    {/* Optional content inside the clickable area */}
  </div>
</a>
    

   
  </div>
  );
};

export default Trending; 