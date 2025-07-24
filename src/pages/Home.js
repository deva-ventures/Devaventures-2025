import React, {useEffect, useState, useRef} from 'react';
import "../App.css";
import { Container, Row, Col,Card, Button} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import Header from '../components/Header';
const Home = () => {

  const scrollRef = useRef(null);

   const headingStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 6rem)',
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


  // const videos = [
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
    <div className="bg-light ">
    {/* Header */}


    <Header/>













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
    <main className="text-center mt-5 pt-5 ">
      <p className="text-muted small">Welcome to</p>
      <h1 className="display-1 fw-bold" style={{ color: '#0f3052' }}>Global Influencers Hub</h1>
     </main>
    
  </div>
  <section className="position-relative ">
  <div className="container-fluid px-0 ">
    <img
      src="/robot-layered.png"
      alt="Robot Visual Layered"
      className="img-fluid w-100"
      style={{ objectFit: "cover", height: "100vh" }}
    />
  </div>
</section>

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

   

    <div className="my-5 px-3">
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
</div>


















    <div style={{ backgroundColor: "#f9f9f9", padding: "50px 0", margin: "0", width: "100vw" }}>
      <div style={{ paddingLeft: 30, paddingRight: 30 }}>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            {/* <p className="text-muted fw-semibold mb-2">Winners</p> */}
            <h2 className="fw-bold mb-5" style={{ fontSize: "2.5rem" }}>
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
        <p className="text-muted small mb-2">Collections</p>
        <h1 className="display-5 fw-bold">
          Explore a wide <br /> variety of collections.
        </h1>
      </Col>
    </Row>
  </Container>
</div>

<div className="bg-light py-5 min-vh-100">
  <Container fluid >
    <Row className="justify-content-center" >
      <Col xs={12} md={6} lg={5} className="mb-4" >
        <Card className="h-100 text-white border-0" style={{ backgroundColor: '#1c1c1c' }}>
          <Card.Img
            variant="top"
            src="/pastel2.jpg"
            alt="Newfolk Member"
          />
          <Card.Body>
            <div className="text-muted small mb-1">COLLECTION</div>
            <Card.Title className="text-white fs-5">UX/UI</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6} lg={6} className="mb-4" >
        <Card className="h-100 text-white border-0" style={{ backgroundColor: '#1c1c1c',height:'300px' }}>
          <Card.Img
            variant="top"
            src="/pastel1.jpg"
            alt="Garden Party"
           
          />
          <Card.Body>
            <div className="text-muted small mb-1">COLLECTION</div>
            <Card.Title className="text-white fs-5">Inspiration</Card.Title>
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
            <Card className="h-100 text-white border-0" style={{ backgroundImage: `url('/site1.png')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px' }}>
              <Card.Body className="d-flex flex-column justify-content-between" style={{ height: '350px' }}>
                <div>
                  <p className="text-light small">Share your work</p>
                  <h2 className="fw-bold">Submit your website for<br />visibility and<br />recognition</h2>
                  <Button variant="outline-light" className="mt-3">Submit Website</Button>
                </div>
                <div className="text-end">
                  <small className="text-light">Got questions? Read our FAQs</small>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} md={6}>
            <Card className="h-100 text-white border-0" style={{ backgroundImage: `url('/site2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px' }}>
              <Card.Body className="d-flex flex-column justify-content-between" style={{ height: '550px' }}>
                <div>
                  <p className="text-light small">Be a member</p>
                  <h2 className="fw-bold">Get access to special<br />pro features</h2>
                  <Button variant="outline-light" className="mt-3">Be Pro</Button>
                </div>
                <div className="text-end">
                  <small className="text-light">Got questions? Read our FAQs</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </>
  );
};

export default Home; 