import React, {useEffect, useState, useRef} from 'react';
import "../App.css";
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {

  const scrollRef = useRef(null);
  const isMobile = window.innerWidth <= 768; // mobile check

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
  };


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
      title: "Masterfluence: Elevate Your Influence, Own the Spotlight",
      instructor: "Where Future Influencers Learn to Lead",
      image: "/grid1.png",
      link: "/influencer-academy"
    },
    {
      title: "Storyfluence — Where Story Meets Strength",
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
      title: "Bidfluence- Only the boldest brands and the most ambitious influencers will know.",
      instructor: "Bid, win, and collaborate",
      image: "/grid4.png",
      link: "/bidding"
    }
  ];
  
  const videosWithLinks = [
    { src: '/swetaTeaser.mp4', link: 'https://www.instagram.com/pistachiobysweta?igsh=MW5peTB3N2h6ajJw' },
    { src: '/sohumTeaser.mp4', link: 'https://www.instagram.com/sohumdeb?igsh=MW82Mng4eGE5c3Budw==' },
    { src: '/rajTeaser.mp4', link: 'https://www.instagram.com/comedianraj?igsh=eDRqYzk5cmxubnZ0' },
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


  const leftCarouselItems = [
    {
      img: "/preetha.png",
      link: "/articles/preetha",
    },
    {
      img: "/harish.png",
      link: "/articles/harish",
    },
    {
      img: "/niranjan.png",
      link: "/articles/niranjan",
    },
    
  ];

  const rightCards = [
    {
      img: "/sweta.png",
      link: "/articles/sweta",
    },
    {
      img: "/pankaj.png",
      link: "/articles/pankaj",
    },
    {
      img: "/neole.png",
      link: "/articles/neole",
    },
    {
      img: "/harish.png",
      link: "/articles/harish",
    },
    
  ];





  return (
    <>

    {/* Main Content */}
   
    <div
  style={{
    position: "relative",
    width: "100%",
    height: "100vh", // full screen height
    overflow: "hidden",
  }}
>
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      transform: "translate(-50%, -50%)",
      objectFit: "cover", // default (desktop view)
      zIndex: 1,
      pointerEvents: "none",
    }}
    className="responsive-video"
  >
    <source src="/websitevideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <style>
    {`
      @media (max-width: 768px) {
        .responsive-video {
          object-fit: contain !important;  /* Show full video on tablets & mobile */
          background-color: black;        /* Add black bars if aspect ratio differs */
        }
      }
    `}
  </style>
</div>







 

<section className="py-5 bg-light text-center">
      <Container>
        <small className="text-muted d-block mb-2">Latest</small>
        <h1  style={headingStyle } className="mb-3">
         Featured Story
          
        </h1>
        
      </Container>
    </section>
    

    
    <Container fluid className="p-3">
  <Row>
    {/* LEFT SIDE - Carousel */}
    <Col xs={12} md={8} className="mb-3"> {/* width increased earlier to remove padding */}
      <Carousel indicators={false}>
        {leftCarouselItems.map((item, idx) => (
          <Carousel.Item key={idx}>
            <a href={item.link} style={{ display: "block" }}>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "4px",
                }}
              >
                <img
                  className="w-100"
                  src={item.img}
                  alt={item.title}
                  style={{
                    objectFit: "cover",
                    aspectRatio: "19 / 7", // shorter height but still responsive
                  }}
                />
              </div>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>

    {/* RIGHT SIDE - 2×2 GRID */}
    <Col xs={12} md={4}>
      <Row className="g-3">
        {rightCards.map((card, idx) => (
          <Col xs={6} key={idx}>
            <a href={card.link} style={{ textDecoration: "none" }}>
              <Card className="border-0">
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "4px",
                  }}
                >
                  <Card.Img
                    src={card.img}
                    alt={card.title}
                    style={{
                      objectFit: "cover",
                      aspectRatio: "20 / 15", // keeps consistent height for cards
                      width: "100%",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "8px",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                      borderRadius: "0 0 4px 4px",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "0.9rem",
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
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
 {/* Desktop / Tablet View - Scrollable */}
 {!isMobile && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            padding: "10px 20px",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            maxWidth: "100%",
          }}
        >
          {videosWithLinks.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minWidth: "250px",
                width: "80vw",
                maxWidth: "400px",
                height: "80vw",
                maxHeight: "400px",
                borderRadius: "50%",
                overflow: "hidden",
                flex: "0 0 auto",
                transform: `rotate(${index % 2 === 0 ? "-5deg" : "5deg"})`,
                border: "4px solid white",
                display: "block",
                textDecoration: "none",
              }}
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  transform: `rotate(${index % 2 === 0 ? "5deg" : "-5deg"})`,
                }}
              />
            </a>
          ))}
        </div>
      )}

      {/* Mobile View - Carousel */}
      {isMobile && (
        <Slider {...sliderSettings}>
          {videosWithLinks.map((video, index) => (
            <div key={index}>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "80vw",
                  maxWidth: "350px",
                  height: "80vw",
                  maxHeight: "350px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto",
                  display: "block",
                  border: "4px solid white",
                  transform: `rotate(${index % 2 === 0 ? "-5deg" : "5deg"})`,
                }}
              >
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    transform: `rotate(${index % 2 === 0 ? "5deg" : "-5deg"})`,
                  }}
                />
              </a>
            </div>
          ))}
        </Slider>
      )}
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
      Masterfluence
        </h1>
      </Col>
    </Row>
  </Container>
</div>


<div className="bg-light py-5">
  <style>
    {`
      @media (max-width: 768px) {
        .first-card-body {
          padding: 0 !important;
          height: 350px !important;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
        .first-card-body a {
          margin: 0 20px 20px 0; /* button spacing bottom-right */
        }
        .second-card {
          height: 350px !important;
        }
        .second-card-button {
          top: auto !important;
          bottom: 20px !important;
          right: 20px !important;
        }
      }
    `}
  </style>

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
            className="first-card-body"
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
          className="h-100 text-white border-0 position-relative second-card"
          style={{
            backgroundImage: `url('/howInfluencers.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '15px',
            height: '400px',
          }}
        >
          <Card.Body style={{ height: '100%', position: 'relative' }}>
            <a
              href="/articles/influencerPowerMoves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline-light"
                className="second-card-button"
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