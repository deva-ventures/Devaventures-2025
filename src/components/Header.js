import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // add bg after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar
    expand="lg"
    className={`py-3 ${scrolled ? "bg-light shadow-sm" : "bg-transparent"}`}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 9999,
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    }}
  >
    <Container fluid className="px-5">
      {/* Logo */}
      <Navbar.Brand href="#">
        <img
          src="/giHubLogo.png"
          alt="Global Influencers Hub"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        {/* LEFT SIDE MENU */}
        <Nav className="me-auto gap-3 ms-5">
  <Nav.Link href="/" style={{ color: "rgb(255, 255, 255)" }}>Home</Nav.Link>
  <Nav.Link href="/about-us" style={{ color: "rgb(255, 255, 255)" }}>About Us</Nav.Link>
  <Nav.Link href="/influencer-journeys" style={{ color: "rgb(255, 255, 255)" }}>Storyfluence</Nav.Link>
  <Nav.Link href="/trending" style={{ color: "rgb(255, 255, 255)" }}>Trending</Nav.Link>
  <Nav.Link href="/bidding" style={{ color: "rgb(255, 255, 255)" }}>Bidfluence</Nav.Link>
  <Nav.Link href="/amplify-your-brand" style={{ color: "rgb(255, 255, 255)" }}>Amplify Your Brand</Nav.Link>
  <Nav.Link href="/share-your-spotlight" style={{ color: "rgb(255, 255, 255)" }}>Share Your Spotlight</Nav.Link>
  <Nav.Link href="/influencer-academy" style={{ color: "rgb(255, 255, 255)" }}>Masterfluence</Nav.Link>
</Nav>

        {/* RIGHT SIDE BUTTON */}
        <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
          <a
            href="/say-hello"
            className="btn btn-outline-light px-3" // changed button to white border
          >
            Say Hello
          </a>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  
  
  );
};

export default Header;
