import React from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" className="py-3">
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
        {/* LEFT SIDE MENU with margin to separate from logo */}
        <Nav className="me-auto gap-3 ms-5">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about-us">About Us</Nav.Link>
          <Nav.Link href="/influencer-journeys">Storyfluence</Nav.Link>
          <Nav.Link href="/trending">Trending</Nav.Link>
          <Nav.Link href="/bidding">Bidfluence</Nav.Link>
          <Nav.Link href="/amplify-your-brand">Amplify Your Brand</Nav.Link>
          <Nav.Link href="/share-your-spotlight">Share Your Spotlight</Nav.Link>
          <Nav.Link href="/influencer-academy">Masterfluence</Nav.Link>
        </Nav>
  
        {/* RIGHT SIDE BUTTON */}
        <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
          <a href="/say-hello" className="btn btn-outline-dark px-3">Say Hello</a>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  
  );
};

export default Header;
