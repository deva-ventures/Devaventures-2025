import React from 'react';
import { Container, Row, Col, Card, Button , Carousel} from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Trending = () => {

  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const videoStories = [
    {
      title: 'Sweta Desai',
      subtitle: 'Watch the full story',
      video: '/swetaTeaser.mp4',
    },
    {
      title: 'Sohum Deb',
      subtitle: 'Watch the full story',
      video: '/sohumTeaser.mp4',
    },
    {
      title: 'Raj Sharma',
      subtitle: 'Watch the full story',
      video: '/rajTeaser.mp4',
    },
    {
      title: 'Sweta Desai',
      subtitle: 'Watch the full story',
      video: '/swetaTeaser.mp4',
    },
    
  ];

  const videoSlides = chunkArray(videoStories, 3);
  return (
    <div style={{ backgroundColor: "#f5f5f0" }}>
    <div
      className="storyfluence-banner"
      style={{
        backgroundImage: `url('/trendingBanner.png')`,
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
      <style>
        {`
          .video-carousel .carousel-item {
            padding: 10px 0;
          }

          .video-carousel .carousel-control-prev,
          .video-carousel .carousel-control-next {
            width: auto;
          }

          .carousel-control-btn {
            background: rgba(0,0,0,0.6);
            color: #fff;
            padding: 8px 12px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @media (max-width: 576px) {
            .video-carousel .carousel-item {
              padding: 0;
            }
          }
        `}
      </style>
      <Carousel
        className="video-carousel"
        interval={null}
        indicators={false}
        prevIcon={
          <span className="carousel-control-btn" aria-hidden="true">
            <FaChevronLeft />
          </span>
        }
        nextIcon={
          <span className="carousel-control-btn" aria-hidden="true">
            <FaChevronRight />
          </span>
        }
      >
        {videoSlides.map((slide, idx) => (
          <Carousel.Item key={`video-slide-${idx}`}>
            <Row className="g-4" style={{ marginTop: "20px" }}>
              {slide.map((story, cardIdx) => (
                <Col xs={12} sm={6} lg={4} key={`video-card-${idx}-${cardIdx}`}>
                  <Card className="h-100 border-0 shadow-sm">
                    <video
                      src={story.video}
                      controls
                      className="w-100"
                      style={{
                        borderRadius: "12px",
                        height: "auto",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold">{story.title}</Card.Title>
                      <div className="text-muted small mb-2">
                        {story.subtitle}
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
            The quiet struggles. The bold leaps. The unseen chapters that shaped
            the spotlight. Beyond every reel is a real story — and that’s what
            you’ll find here.
          </p>
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
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      overflow: "hidden",
    }}
  >
    <img
      src="/formBackground.png"
      alt="Background"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain", // ensures full image is visible
      }}
    />
  </div>
</a>

  </div>
  
  );
};

export default Trending; 