// import React, { useState } from 'react';
// import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import { navigationData, socialLinks } from '../data/mockData';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Header = () => {
//   const [expanded, setExpanded] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <header className="header">
//       {/* Top Bar with Logo and Social Links */}
     

//       {/* Main Navigation */}
//       <Navbar 
//         bg="primary" 
//         variant="dark" 
//         expand="lg" 
//         className="main-nav"
//         expanded={expanded}
//         onToggle={() => setExpanded(!expanded)}
//       >
//         <Container>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mx-auto">
//               {navigationData.map((item) => (
//                 <Nav.Link 
//                   key={item.id}
//                   as={Link}
//                   to={item.path}
//                   className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
//                   onClick={() => setExpanded(false)}
//                 >
//                   {item.name}
//                 </Nav.Link>
//               ))}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <style jsx>{`
//         .header {
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//         }
        
//         .top-bar {
//           background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
//         }
        
//         .logo {
//           max-height: 50px;
//           width: auto;
//         }
        
//         .social-links {
//           display: flex;
//           justify-content: flex-end;
//           align-items: center;
//         }
        
//         .social-link {
//           color: white;
//           font-size: 18px;
//           transition: color 0.3s ease;
//           text-decoration: none;
//         }
        
//         .social-link:hover {
//           color: #f4891d;
//         }
        
//         .main-nav {
//           background: linear-gradient(135deg,rgb(251, 251, 251) 0%,rgb(255, 255, 255) 100%) !important;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//         }
        
//         .nav-link {
//           color:  #1e3c72 !important;
//           font-weight: 500;
//           padding: 1rem 1.5rem !important;
//           transition: all 0.3s ease;
//           position: relative;
//         }
        
//         .nav-link:hover {
//           color: #1e3c72 !important;
//           background-color: rgba(255,255,255,0.1);
//         }
        
//         .nav-link.active {
//           color: #1e3c72 !important;
//           background-color: rgba(255,255,255,0.2);
//         }
        
//         .nav-link.active::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 30px;
//           height: 3px;
//           background-color: #1e3c72;
//         }
        
//         .navbar-toggler {
//           border: none;
//           padding: 0.25rem 0.5rem;
//         }
        
//         .navbar-toggler:focus {
//           box-shadow: none;
//         }
        
//         @media (max-width: 991.98px) {
//           .social-links {
//             justify-content: center;
//             margin-top: 10px;
//           }
          
//           .nav-link {
//             text-align: center;
//             padding: 0.75rem 1rem !important;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header; 


// export const navigationData = [
//   { id: 1, name: 'Home', path: '/' },
//   { id: 2, name: 'About Us', path: '/about-us' },
//   { id: 3, name: 'Storyfluence', path: '/influencer-journeys' },
//   { id: 4, name: 'Trending', path: '/trending' },
//   { id: 5, name: 'Bidfluence', path: '/bidding' },
//   { id: 6, name: 'Amplify Your Brand', path: '/amplify-your-brand' },
//   { id: 7, name: 'Share Your Spotlight', path: '/share-your-spotlight' },
//   { id: 8, name: 'Masterfluence', path: '/influencer-academy' },
//   { id: 9, name: 'Say Hello', path: '/say-hello' }
// ];












import React from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" className="py-3">
      <Container fluid>
        {/* Logo instead of text */}
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
          <Nav className="me-auto gap-3">
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


