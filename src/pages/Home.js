import React, {useEffect, useState, useRef} from 'react';
import "../App.css";
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowRight, BsGeoAltFill } from 'react-icons/bs';
const Home = () => {

  const scrollRef = useRef(null);


  const videoStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    display: 'block',
    margin: 'auto',
  };

  const wrapperStyle = {
    backgroundColor: '#f9f9f9',
    padding: '60px 15px', // 15px padding for mobile responsiveness
    textAlign: 'center',
  };
   const headingStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 6rem)',
    letterSpacing: '-5.05px',
    fontWeight: 'bold',
    letterSpacing: '-1px',
    color: '#0f3052'
  };

  const courses = [
    {
      title: "Influencers Academy: Elevate Your Influence, Own the Spotlight",
      instructor: "Where Future Influencers Learn to Lead",
      image: "/grid1.png", 
    },
    {
      title: "Influencer Journey — Where Story Meets Strength",
      instructor: "Creators. Changemakers. Their Stories, Unfiltered",
      image: "/grid2.png",
    },
    {
      title: "Share Your Spotlight - Be Seen by the World. Be the Next Icon",
      instructor: "Turn your journey into inspiration",
      image: "/grid3.png",
    },
    {
      title: "Learn Figma from 0 to 100 (10 Courses)",
      instructor: "Mirko Santangelo",
      image: "/grid4.png",
    },
  ];
  
  

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
    display: 'block',
  };

  const sites = [
    {
      title: "Bright Biotech",
      agency: "Lyon & Lyon",
      image: "/site1.png", // Put this image in /public folder
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Font_Awesome_5_regular_circle.svg/2048px-Font_Awesome_5_regular_circle.svg.png", // Replace with actual logo/icon
    },
    {
      title: "/nk.studio",
      agency: "/nk.studio INT",
      image: "/site2.jpg",
      logo: "https://seeklogo.com/images/N/nk-studio-logo-08A05F2AE3-seeklogo.com.png",
    },
    {
      title: "Robot",
      agency: "Malvah PRO",
      image: "/site3.jpg",
      logo: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    {
      title: "Bright Biotech",
      agency: "Lyon & Lyon",
      image: "/site1.png", // Put this image in /public folder
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Font_Awesome_5_regular_circle.svg/2048px-Font_Awesome_5_regular_circle.svg.png", // Replace with actual logo/icon
    },
    {
      title: "/nk.studio",
      agency: "/nk.studio INT",
      image: "/site2.jpg",
      logo: "https://seeklogo.com/images/N/nk-studio-logo-08A05F2AE3-seeklogo.com.png",
    },
    {
      title: "Robot",
      agency: "Malvah PRO",
      image: "/site3.jpg",
      logo: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
  ];


  const images = [
    { src: 'f1.png', link: 'https://example.com/page1' },
    { src: '/f2.png', link: 'https://example.com/page2' },
    { src: '/f3.png', link: 'https://example.com/page3' },
    { src: '/f1.png', link: 'https://example.com/page4' },
    { src: '/f2.png', link: 'https://example.com/page5' },
    { src: '/f3.png', link: 'https://example.com/page6' },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };


  
  //   { src: '/video1.mp4', link: 'https://example.com/1' },
  //   { src: '/video2.mp4', link: 'https://example.com/2' },
  //   { src: '/video3.mp4', link: 'https://example.com/3' },
  //   { src: '/video1.mp4', link: 'https://example.com/4' },
  //   { src: '/video2.mp4', link: 'https://example.com/5' },
  //   { src: '/video3.mp4', link: 'https://example.com/3' },
  //   { src: '/video1.mp4', link: 'https://example.com/1' },
  //   { src: '/video2.mp4', link: 'https://example.com/2' },
  //   { src: '/video3.mp4', link: 'https://example.com/3' },
  //   { src: '/video1.mp4', link: 'https://example.com/1' },
  //   { src: '/video2.mp4', link: 'https://example.com/2' },
  //   { src: '/video3.mp4', link: 'https://example.com/3' },
  // ];
  const videos = [
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
    
  ];

  const berlinImages = [
    '/f2.png',
    '/f3.png',
    '/f1.png',
  ];
  
  const viennaImages = [
    '/f1.png',
    '/f3.png',
    '/f2.png',
  ];



  // const videoStyle = {
  //   // position: 'fixed',
  //   top: 0,
  //   left: 0,
  //   minWidth: '100%',
  //   minHeight: '50%',
  //   objectFit: 'cover',
  //   zIndex: -1,
  // };
  
  


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


  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>

    


  













    {/* <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-bottom sticky-top">
      <div className="d-flex align-items-center gap-4">
        <span className="fs-4 fw-bold">W.</span>
        <nav className="d-none d-md-flex gap-3 text-muted">
          <a href="#" className="text-decoration-none text-dark">Explore</a>
          <a href="#" className="text-decoration-none text-dark">Directory</a>
          <a href="#" className="text-decoration-none text-dark">
            Academy <span className="badge bg-dark text-white text-uppercase">New</span>
          </a>
          <a href="#" className="text-decoration-none text-dark">Jobs</a>
          <a href="#" className="text-decoration-none text-dark">Market</a>
        </nav>
      </div>

      <div className="flex-grow-1 mx-4">
        <input type="text" className="form-control" placeholder="Search by Inspiration" />
      </div>

      <div className="d-flex align-items-center gap-3">
        <a href="#" className="text-decoration-none text-dark">Log in</a>
        <a href="#" className="text-decoration-none text-dark">Sign Up</a>
        <button className="btn btn-dark btn-sm">Be Pro</button>
        <button className="btn btn-outline-secondary btn-sm">Submit Website</button>
      </div>
    </header> */}

    

    {/* Main Content */}
    {/* <main className="text-center mt-5 pt-5 ">
      <p className="text-muted small">Welcome to</p>
      <h1 className="display-1 fw-bold" style={{ color: '#0f3052',letterSpacing: '-5.05px' }}>Global Influencers Hub</h1>
     </main> */}
  <div style={wrapperStyle}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
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
        <p className="text-muted fs-5">
          Vote for the latest websites on <br /> awwwards
        </p>
      </Container>
    </section>
    <Container fluid className="py-5 px-3">
      <Row className="g-3 justify-content-center">
        {/* Static Large Card - Prague */}
        <Col xs={12} lg={6}>
          <Card className="text-white h-100" style={{
            borderRadius: '20px',
            backgroundImage: `url('/f1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            minHeight: '400px',
            overflow: 'hidden',
            
          }}>
            <Card.Body className="d-flex flex-column justify-content-between h-100 p-4"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
              }}>
              
              
              
            </Card.Body>
          </Card>
        </Col>

        {/* Carousel Card - Berlin */}
        <Col xs={12} md={6} lg={3}>
          <Carousel controls={true} indicators={false} fade interval={4000}>
            {berlinImages.map((src, idx) => (
              <Carousel.Item key={idx}>
                <Card className="text-white h-100" style={{
                  borderRadius: '20px',
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                  overflow: 'hidden',
                }}>
                  
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Carousel Card - Vienna */}
        <Col xs={12} md={6} lg={3}>
          <Carousel controls={true} indicators={false} fade interval={4000}>
            {viennaImages.map((src, idx) => (
              <Carousel.Item key={idx}>
                <Card className="text-white h-100" style={{
                  borderRadius: '20px',
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                  overflow: 'hidden',
                }}>
                  
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>

    {/* <div className="my-5 px-3">
  <Carousel
    responsive={responsive}
    infinite
    autoPlay
    autoPlaySpeed={3000}
    keyBoardControl
    transitionDuration={500}
    containerClass="carousel-container"
    itemClass="carousel-item-padding-40-px"
  >
    {images.map((img, index) => (
      <div key={index} className="p-2">
        <a href={img.link} target="_blank" rel="noopener noreferrer">
          <img
            src={img.src}
            alt={`Slide ${index}`}
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          />
        </a>
      </div>
    ))}
  </Carousel>
</div> */}


















    <div style={{ backgroundColor: "#f9f9f9", padding: "50px 0", margin: "0", width: "100vw" }}>
      <div style={{ paddingLeft: 30, paddingRight: 30 }}>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            {/* <p className="text-muted fw-semibold mb-2">Winners</p> */}
            <h2 className="fw-bold mb-5" style={{ fontSize: "2.5rem",color: '#0f3052' }}> 
              Trending
            </h2>
          </div>

          {/* <Row className="g-4" style={{ marginLeft: 0, marginRight: 0 }}>
            {sites.map((site, idx) => (
              <Col key={idx} xs={12} sm={6} md={4}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Img
                    variant="top"
                    src={site.image}
                    style={{
                      borderRadius: "20px",
                      height: "450px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body className="px-0">
                    <h5 className="fw-semibold mb-1">{site.title}</h5>
                    <div className="d-flex align-items-center gap-2 text-muted">
                      <Image
                        src={site.logo}
                        roundedCircle
                        width={20}
                        height={20}
                        alt="logo"
                      />
                      <small>{site.agency}</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}

<Container fluid className="py-5 bg-light">
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          padding: '10px 20px',
          scrollBehavior: 'smooth',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
        }}
      >
        {videos.map((src, index) => (
          <div
            key={index}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              overflow: 'hidden',
              flex: '0 0 auto',
              transform: `rotate(${index % 2 === 0 ? '-5deg' : '5deg'})`,
              border: '4px solid white',
            }}
          >
            <video
              src={src}
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
          </div>
        ))}
      </div>
    </Container>
        </Container>
      </div>
    </div>



    <div style={{ background: '#f8f9fa', padding: '40px 0', margin: 0, width: '100vw' }}>
  <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
      <h2 className="mb-5 fw-bold" style={{ fontSize: '2.5rem',color: '#0f3052' }}>
       Your Journey <br /> To Influence.
      </h2>
    </div>
    <Row xs={1} sm={2} md={2} lg={4} className="g-4" style={{ marginLeft: 0, marginRight: 0, paddingLeft: '50px', paddingRight: '50px' }}>
      {courses.map((course, idx) => (
        <Col key={idx}>
          <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
            <Card.Img
              variant="top"
              src={course.image}
              style={{
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
                height: '320px',
                objectFit: 'cover'
              }}
            />
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
       
        <h1 className="display-5 fw-bold" style={{color: '#0f3052'}}>
      Master <br/> Fluence
        </h1>
      </Col>
    </Row>
  </Container>
</div>

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

export default Home; 