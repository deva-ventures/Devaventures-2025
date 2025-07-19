import React, { useState, useEffect } from 'react';
import "../App.css";
import { Container, Row, Col,Card, Button} from 'react-bootstrap';
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const headingStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 6rem)',
    fontWeight: 'bold',
    letterSpacing: '-1px',
  };

  const courses = [
    {
      title: "Learn UI Design with Figma from Scratch",
      instructor: "Daniele Buffa",
      score: "4.9/5",
      image: "/grid1.jpg", // Replace with your actual path or public folder
    },
    {
      title: "Nordic Design Intensive Course: Complete Branding",
      instructor: "Hmmm Creative Studio",
      score: "5/5",
      image: "/grid2.jpg",
    },
    {
      title: "Innovative Web Design in Figma: A Step-by-Step Process",
      instructor: "Louis Paquet",
      score: "5/5",
      image: "/grid3.webp",
    },
    {
      title: "Learn Figma from 0 to 100 (10 Courses)",
      instructor: "Mirko Santangelo",
      score: "5/5",
      image: "/grid4.jpg",
    },
  ];
  

  return (
    <>
    <div className="bg-light ">
    {/* Header */}
    <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-bottom sticky-top">
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
    </header>

    {/* SOTD Box */}
    <div className="position-absolute top-0 start-0 m-4 border p-2 rounded bg-white text-center small">
      <div className="text-muted">SOTD</div>
      <div className="fw-bold fs-5">7.42</div>
      <div className="text-muted">/10</div>
    </div>

    {/* Main Content */}
    <main className="text-center mt-5 pt-5 ">
      <p className="text-muted small">Site of the Day - Jul 16, 2025</p>
      <h1 className="display-1 fw-bold">ROBOT</h1>

     
    </main>
    
  </div>
  <section className="position-relative ">
  <div className="container-fluid px-0 ">
    <img
      src="/robot-layered.jpg"
      alt="Robot Visual Layered"
      className="img-fluid w-100"
      style={{ objectFit: "cover", height: "100vh" }}
    />
  </div>
</section>

<section className="py-5 bg-light text-center">
      <Container>
        <small className="text-muted d-block mb-2">Latest</small>
        <h1 style={headingStyle} className="mb-3">
          NOMINEES
          
        </h1>
        <p className="text-muted fs-5">
          Vote for the latest websites on <br /> awwwards
        </p>
      </Container>
    </section>

    <section className="bg-light py-5">
      <Container fluid>
        {/* Top 3 Images */}
        <Row className="g-4 px-3">
          <Col xs={12} md={4}>
            <img
              src="/68753a223515a578350963.png"
              alt="MetaMask Banner"
              className="img-fluid w-100"
              style={{ borderRadius: '15px', padding: '10px', background: '#fff' }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="/68640a8e36911382168227.jpg"
              alt="Symphony Poster"
              className="img-fluid w-100"
              style={{ borderRadius: '15px', padding: '10px', background: '#fff' }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="/686264200de10782688314.jpg"
              alt="Earbuds Aether"
              className="img-fluid w-100"
              style={{ borderRadius: '15px', padding: '10px', background: '#fff' }}
            />
          </Col>
        </Row>

        
      </Container>
    </section>


<section className="bg-light py-5">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-8">
        <p className="text-uppercase text-muted small mb-1">Elements</p>
        <h2 className="display-5 fw-bold lh-sm">
          See the highlights <br /> of this website.
        </h2>
      </div>
    </div>
  </div>
</section>
<section className="bg-light py-5">
  <div className="container-fluid">
    <div className="row gy-4 gx-4"> {/* Added gap between columns */}
    
      {/* Left: Video */}
      <div className="col-12 col-md-6">
        <div className="position-relative p-2 bg-dark rounded-4 overflow-hidden shadow-sm">
          <video
            src="/new-balance-preview.mp4"
            className="w-100 h-100"
            autoPlay
            muted
            loop
            playsInline
            style={{
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
          {/* Optional overlay text/logo */}
          <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-between text-white px-3 py-2 small text-uppercase">
            <div><span className="text-danger">●</span> Work</div>
            <div style={{ fontFamily: "'Orbitron', sans-serif" }}>ROBOT</div>
            <div>Menu</div>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="col-12 col-md-6">
        <div className="position-relative p-2 bg-dark rounded-4 overflow-hidden shadow-sm">
          <img
            src="/new-balance-poster.jpg"
            alt="New Balance Visual"
            className="img-fluid w-100 h-100"
            style={{
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-light py-5">
  <div className="container-fluid">
    <div className="row gy-4 gx-4"> {/* Added gap between columns */}
    
      {/* Left: Video */}
      <div className="col-12 col-md-6">
        <div className="position-relative p-2 bg-dark rounded-4 overflow-hidden shadow-sm">
          <video
            src="/new-balance-preview.mp4"
            className="w-100 h-100"
            autoPlay
            muted
            loop
            playsInline
            style={{
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
          {/* Optional overlay text/logo */}
          <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-between text-white px-3 py-2 small text-uppercase">
            <div><span className="text-danger">●</span> Work</div>
            <div style={{ fontFamily: "'Orbitron', sans-serif" }}>ROBOT</div>
            <div>Menu</div>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="col-12 col-md-6">
        <div className="position-relative p-2 bg-dark rounded-4 overflow-hidden shadow-sm">
          <img
            src="/new-balance-poster.jpg"
            alt="New Balance Visual"
            className="img-fluid w-100 h-100"
            style={{
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </div>
      </div>

    </div>
  </div>
</section>


<div style={{ background: '#f8f9fa', padding: '40px 0' }}>
      <Container>
        <h2 className="mb-5 fw-bold" style={{ fontSize: '2.5rem' }}>
          Learn from the <br /> best instructors.
        </h2>
        <Row xs={1} sm={2} md={2} lg={4} className="g-8">
          {courses.map((course, idx) => (
            <Col key={idx}>
              <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                <Card.Img
                  variant="top"
                  src={course.image}
                  style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px', height: '320px',  objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1rem' }}>{course.title}</Card.Title>
                  <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                    <strong>Instructor:</strong> {course.instructor}
                  </div>
                  <div className="mt-3">
                    <strong>Score</strong> <span>{course.score}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

    <div className="collections-section bg-light">
      <Container>
        <Row>
          <Col md={8} sm={12}>
            <p className="text-muted small mb-2">Collections</p>
            <h1 className="display-5 fw-bold">
              Explore a wide <br /> variety of collections.
            </h1>
          </Col>
        </Row>
      </Container>
    </div>


    <div className="bg-light py-5 min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5} className="mb-4">
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

          <Col xs={12} md={6} lg={5} className="mb-4">
            <Card className="h-100 text-white border-0" style={{ backgroundColor: '#1c1c1c' }}>
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
  </>
  );
};

export default Home; 