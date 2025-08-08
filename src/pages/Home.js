import React, {useEffect, useState, useRef} from 'react';
import "../App.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Home = () => {

  const scrollRef = useRef(null);


  const wrapperStyle = {
    backgroundColor: '#f9f9f9',
    padding: '60px 15px',
    textAlign: 'center',
  };
  
  const videoStyle = {
    width: '100%',            // Full width of the column
    maxWidth: '3400px',       // Increase max width (adjust as needed)
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    display: 'block',
    margin: '0 auto',
  };
   const headingStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 6rem)',
    letterSpacing: '-5.05px',
    fontWeight: 'bold',
    color: '#0f3052'
  };

  const courses = [
    {
      title: "Influencers Academy: Elevate Your Influence, Own the Spotlight",
      instructor: "Where Future Influencers Learn to Lead",
      image: "/grid1.png",
      link: "/influencer-academy"
    },
    {
      title: "Influencer Journey — Where Story Meets Strength",
      instructor: "Creators. Changemakers. Their Stories, Unfiltered",
      image: "/grid2.png",
      link: "/influencer-journeys"
    },
    {
      title: "Share Your Spotlight - Be Seen by the World. Be the Next Icon",
      instructor: "Turn your journey into inspiration",
      image: "/grid3.png",
      link: "/share-your-spotlight"
    },
    {
      title: "Bidding Room- Only the boldest brands and the most ambitious influencers will know.",
      instructor: "Bid, win, and collaborate",
      image: "/grid4.png",
      link: "/bidding"
    }
  ];
  


  
  
  const videosWithLinks = [
    { src: '/video1.mp4', link: 'https://www.instagram.com/reel/DLFbcnKv8Gf/?igsh=MWYzbGtrZDZkbzM0eA==' },
    { src: '/video2.mp4', link: 'https://www.instagram.com/reel/DLUy-lNNUU-/?igsh=MW9vamJjdnUwZnU3NQ==' },
    { src: '/video3.mp4', link: 'https://www.instagram.com/reel/DKeyGY9vgaV/?igsh=NHg2ZnhhanAwb3Zq' },
    { src: '/preetha.mp4', link: 'https://www.instagram.com/reel/DITrHUdvmAU/?igsh=M2MyYnQ2b3F0ZXcy' },
  ];

  


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollPosition += 1;
        scrollContainer.scrollLeft = scrollPosition;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollPosition = 0;
        }
      }
    };

    const interval = setInterval(scrollStep, 20);
    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    {
      image: '/sweta.png',
      
      link: '/articles/sweta',
    },
    {
      image: '/sohum.png',
     
      link: '/articles/sohum',
    },
    {
      image: '/neole.png',
      
      link: '/articles/neole',
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= carouselItems.length ? 0 : prevIndex + 1
    );
  };

  const visibleItems = carouselItems.slice(currentIndex, currentIndex + 2);


  return (
    <>

    {/* Main Content */}
    <main className="text-center mt-5 pt-5">
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

  <p className="text-muted small">Welcome to</p>
  <h1
    className="display-1 fw-bold gi-heading"
    style={{ color: '#0f3052', letterSpacing: '-5.05px' }}
  >
    Global Influencers Hub
  </h1>
</main> 
  <div style={wrapperStyle}>
  <Container fluid>
    <Row className="justify-content-center">
    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
  <video autoPlay muted loop playsInline style={videoStyle}>
    <source src="/landingVideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</Col>
    </Row>
      </Container>
    </div>
 

<section className="py-5 bg-light text-center">
      <Container>
        <small className="text-muted d-block mb-2">Latest</small>
        <h1  style={headingStyle } className="mb-3">
         Featured Story
          
        </h1>
        
      </Container>
    </section>
    

    
    <Container fluid className="py-5">
  <Row className="align-items-stretch">
    {/* LEFT SIDE STATIC CARD */}
    <Col lg={6} md={12} className="mb-4">
  <a
    href="/articles/pablo" // Replace with your desired link
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <Card
      className="text-white border-0 h-100"
      style={{
        height: '100%',
        borderRadius: '20px',
        backgroundImage: `url('/pabloMontana.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
    </Card>
  </a>
</Col>

    {/* RIGHT SIDE CAROUSEL */}
    <Col lg={6} md={12} className="d-flex align-items-center">
      <div className="d-flex align-items-center w-100">
        {/* LEFT ARROW */}
        <Button
          variant="light"
          onClick={handlePrev}
          className="me-2"
          style={{
            height: '40px',
            width: '40px',
            borderRadius: '50%',
            zIndex: 1,
          }}
        >
          <FaChevronLeft />
        </Button>

        {/* CARDS */}
        <div className="d-flex gap-3 w-100">
          {visibleItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
            >
              <Card
                className="text-white border-0"
                style={{
                  height: '300px',
                  borderRadius: '20px',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-end p-3">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <span
                    style={{
                      backgroundColor: '#ffffffaa',
                      color: '#000',
                      fontSize: '12px',
                      padding: '3px 8px',
                      borderRadius: '12px',
                      width: 'fit-content',
                    }}
                  >
                    {item.role}
                  </span>
                </Card.Body>
              </Card>
            </a>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <Button
          variant="light"
          onClick={handleNext}
          className="ms-2"
          style={{
            height: '40px',
            width: '40px',
            borderRadius: '50%',
            zIndex: 1,
          }}
        >
          <FaChevronRight />
        </Button>
      </div>
    </Col>
  </Row>
</Container>







    <div style={{ backgroundColor: "#f9f9f9", padding: "50px 0", margin: "0", width: "100vw" }}>
      <div style={{ paddingLeft: 30, paddingRight: 30 }}>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            {/* <p className="text-muted fw-semibold mb-2">Winners</p> */}
            <h2 className="fw-bold mb-5" style={{ fontSize: "2.5rem",color: '#0f3052', letterSpacing: '-3.05px', }}> 
              Trending
            </h2>
          </div>

          <Container fluid className="py-5 bg-light">
  <div
    ref={scrollRef}
    style={{
      display: 'flex',
      gap: '20px',
      overflowX: 'auto',
      padding: '10px 20px',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch', // Enables momentum scrolling on iOS
      maskImage:
        'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
      maxWidth: '100%',
    }}
  >
    {videosWithLinks.map((video, index) => (
      <a
        key={index}
        href={video.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          minWidth: '250px', // Make width responsive
          width: '80vw', // Responsive width for mobile
          maxWidth: '400px',
          height: '80vw',
          maxHeight: '400px',
          borderRadius: '50%',
          overflow: 'hidden',
          flex: '0 0 auto',
          transform: `rotate(${index % 2 === 0 ? '-5deg' : '5deg'})`,
          border: '4px solid white',
          display: 'block',
          textDecoration: 'none',
        }}
      >
        <video
          src={video.src}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            transform: `rotate(${index % 2 === 0 ? '5deg' : '-5deg'})`,
          }}
        />
      </a>
    ))}
  </div>
</Container>

        </Container>
      </div>
    </div>



    <div style={{ background: '#f8f9fa', padding: '40px 0', margin: 0, width: '100vw' }}>
  <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
      <h2 className="mb-5 fw-bold" style={{ fontSize: '2.5rem',color: '#0f3052',letterSpacing: '-3.05px' }}>
       Your Journey To Influence.
      </h2>
    </div>
    <Row xs={1} sm={2} md={2} lg={4} className="g-4" style={{ marginLeft: 0, marginRight: 0, paddingLeft: '50px', paddingRight: '50px' }}>
  {courses.map((course, idx) => (
    <Col key={idx}>
      <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
        <a href={course.link} target="_blank" rel="noopener noreferrer">
          <Card.Img
            variant="top"
            src={course.image}
            style={{
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
              height: '320px',
              objectFit: 'cover',
              cursor: 'pointer'
            }}
          />
        </a>
        <Card.Body>
          <Card.Title style={{ fontSize: '1rem' }}>{course.title}</Card.Title>
          <div className="text-muted" style={{ fontSize: '0.875rem' }}>
            {course.instructor}
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
  </Container>
</div>

<div className="collections-section bg-light" style={{ padding: '40px 0' }}>
  <Container fluid style={{ paddingLeft: 50, paddingRight: 50 }}>
    <Row style={{ marginLeft: 0, marginRight: 0 }}>
      <Col md={8} sm={12} style={{ paddingLeft: '20px' }}>
       
        <h1 className="display-5 fw-bold" style={{color: '#0f3052',letterSpacing: '-3.05px'}}>
      Master  Fluence
        </h1>
      </Col>
    </Row>
  </Container>
</div>

<div className="bg-light py-5">
  <style>{`
    @media (max-width: 768px) {
      .responsive-card-fix {
        height: 550px !important;
      }
      .responsive-button-fix {
        top: 380px !important;
        right: 20px !important;
      }
    }
  `}</style>

  <Container fluid>
    <Row className="g-4 justify-content-start px-3">
      {/* Card 1 */}
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
    className="h-100 text-white border-0 position-relative responsive-card-fix"
    style={{
      backgroundImage: `url('/howInfluencers.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '15px',
      height: '400px',
    }}
  >
    <Card.Body
      className="d-flex flex-column justify-content-end"
      style={{
        height: '100%',
        position: 'relative',
        padding: '1rem',
      }}
    >
      {/* Text */}
      <div>
        <h5 style={{ fontWeight: 'bold' }}>
          HOW INFLUENCERS ARE CHANGING THE WAY WE SHOP
        </h5>
        <p>
          The Revolution of Shopping has always evolved, but in the age of social media it’s happening faster than ever.
        </p>
      </div>

      {/* Button */}
      <a
        href="/articles/influencerPowerMoves"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 d-block"
      >
        <Button
          variant="outline-light"
          className="responsive-button-fix d-block d-md-none"
          style={{
            padding: '6px 20px',
            fontSize: '14px',
            borderRadius: '6px',
            fontWeight: 500,
            width: 'fit-content',
          }}
        >
          Read More
        </Button>
      </a>

      {/* This button shows only on md+ screens */}
      <a
        href="/articles/influencerPowerMoves"
        target="_blank"
        rel="noopener noreferrer"
        className="d-none d-md-block"
      >
        <Button
          variant="outline-light"
          className="responsive-button-fix"
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
      <Container fluid>
        <Row className="g-4 justify-content-start px-3">
          {/* Card 3 */}
          
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
<a href="/articles/howInfluencersAreChanging" target="_blank" rel="noopener noreferrer"> <Button variant="outline-light">Read More</Button></a>
     
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
<a href="/articles/bagYourFirstBigBrand" target="_blank" rel="noopener noreferrer"> <Button variant="outline-light" >Read More</Button></a>
      
    </Card.Body >
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </>
  );
};

export default Home; 