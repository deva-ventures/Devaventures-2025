import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { navigationData, socialLinks } from '../data/mockData';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      {/* Top Bar with Logo and Social Links */}
      <div className="top-bar bg-dark text-white py-2">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Link to="/" className="navbar-brand">
                <img 
                  src="https://globalinfluencershub.com/wp-content/uploads/2025/01/PNG-01-300x101.png" 
                  alt="Global Influencers Hub" 
                  height="50"
                  className="logo"
                />
              </Link>
            </Col>
            <Col md={6} className="text-end">
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a 
                    key={social.id}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link me-3"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar 
        bg="primary" 
        variant="dark" 
        expand="lg" 
        className="main-nav"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navigationData.map((item) => (
                <Nav.Link 
                  key={item.id}
                  as={Link}
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setExpanded(false)}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .top-bar {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        }
        
        .logo {
          max-height: 50px;
          width: auto;
        }
        
        .social-links {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        
        .social-link {
          color: white;
          font-size: 18px;
          transition: color 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          color: #f4891d;
        }
        
        .main-nav {
          background: linear-gradient(135deg, #f4891d 0%, #f68b1f 100%) !important;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .nav-link {
          color: white !important;
          font-weight: 500;
          padding: 1rem 1.5rem !important;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #1e3c72 !important;
          background-color: rgba(255,255,255,0.1);
        }
        
        .nav-link.active {
          color: #1e3c72 !important;
          background-color: rgba(255,255,255,0.2);
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background-color: #1e3c72;
        }
        
        .navbar-toggler {
          border: none;
          padding: 0.25rem 0.5rem;
        }
        
        .navbar-toggler:focus {
          box-shadow: none;
        }
        
        @media (max-width: 991.98px) {
          .social-links {
            justify-content: center;
            margin-top: 10px;
          }
          
          .nav-link {
            text-align: center;
            padding: 0.75rem 1rem !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header; 