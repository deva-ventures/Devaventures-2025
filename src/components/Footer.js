// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { navigationData, socialLinks, contactInfo } from '../data/mockData';

// const Footer = () => {
//   return (
//     <footer className="footer bg-dark text-white py-5">
//       <Container>
//         <Row>
//           {/* Company Info */}
//           <Col lg={4} md={6} className="mb-4">
//             <h2 className="footer-heading mb-3">GLOBAL INFLUENCERS HUB</h2>
//             <div className="footer-divider mb-3"></div>
//             <p className="footer-description">
//               Global Influencers Hub is a media platform showcasing the life journeys of social media influencers. 
//               Dive into the influencer world through inspiring stories and trending topics.
//             </p>
//           </Col>

//           {/* Useful Links */}
//           <Col lg={4} md={6} className="mb-4">
//             <h2 className="footer-heading mb-3">USEFUL LINKS</h2>
//             <div className="footer-divider mb-3"></div>
//             <div className="footer-links">
//               {navigationData.map((item) => (
//                 <div key={item.id} className="footer-link-item">
//                   <Link to={item.path} className="footer-link">
//                     {item.name}
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </Col>

//           {/* Contact Information */}
//           <Col lg={4} md={12} className="mb-4">
//             <h2 className="footer-heading mb-3">CONTACT</h2>
//             <div className="footer-divider mb-3"></div>
//             <div className="contact-info">
//               {/* USA Office */}
//               <div className="contact-item mb-3">
//                 <div className="contact-icon">
//                   <i className="fas fa-map-marker-alt"></i>
//                 </div>
//                 <div className="contact-text">
//                   <strong>USA HEADQUARTERS:</strong><br />
//                   {contactInfo.usa.address}
//                 </div>
//               </div>

//               <div className="contact-item mb-3">
//                 <div className="contact-icon">
//                   <i className="fas fa-map-marker-alt"></i>
//                 </div>
//                 <div className="contact-text">
//                   <strong>INDIA OFFICE:</strong><br />
//                   {contactInfo.india.address}
//                 </div>
//               </div>

//               <div className="contact-item mb-3">
//                 <div className="contact-icon">
//                   <i className="fab fa-whatsapp"></i>
//                 </div>
//                 <div className="contact-text">
//                   {contactInfo.usa.phone1} (USA)
//                 </div>
//               </div>

//               <div className="contact-item mb-3">
//                 <div className="contact-icon">
//                   <i className="fas fa-phone-alt"></i>
//                 </div>
//                 <div className="contact-text">
//                   {contactInfo.usa.phone2} (USA)
//                 </div>
//               </div>

//               <div className="contact-item mb-3">
//                 <div className="contact-icon">
//                   <i className="fas fa-phone-alt"></i>
//                 </div>
//                 <div className="contact-text">
//                   {contactInfo.india.phone} (INDIA)
//                 </div>
//               </div>

//               <div className="contact-item mb-3">
//                 <div className="contact-icon">
//                   <i className="fas fa-mail-bulk"></i>
//                 </div>
//                 <div className="contact-text">
//                   <a href={`mailto:${contactInfo.usa.email}`} className="footer-link">
//                     {contactInfo.usa.email}
//                   </a>
//                 </div>
//               </div>

//               <div className="contact-item mb-3">
//                 <div className="contact-icon">
//                   <i className="fas fa-mail-bulk"></i>
//                 </div>
//                 <div className="contact-text">
//                   <a href={`mailto:${contactInfo.india.email}`} className="footer-link">
//                     {contactInfo.india.email}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>

//         {/* Bottom Bar */}
//         <Row>
//           <Col xs={12}>
//             <div className="footer-bottom text-center pt-4 border-top border-secondary">
//               <p className="mb-0">
//                 © {new Date().getFullYear()} Global Influencers Hub. All rights reserved.
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       <style jsx>{`
//         .footer {
//           background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
//         }
        
//         .footer-heading {
//           font-size: 1.5rem;
//           font-weight: 600;
//           color: #f4891d;
//           margin-bottom: 1rem;
//         }
        
//         .footer-divider {
//           width: 60px;
//           height: 3px;
//           background-color: #f4891d;
//         }
        
//         .footer-description {
//           line-height: 1.6;
//           color: #e0e0e0;
//         }
        
//         .footer-links {
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//         }
        
//         .footer-link-item {
//           margin-bottom: 0.5rem;
//         }
        
//         .footer-link {
//           color: #e0e0e0;
//           text-decoration: none;
//           transition: color 0.3s ease;
//           font-weight: 500;
//         }
        
//         .footer-link:hover {
//           color: #f4891d;
//           text-decoration: none;
//         }
        
//         .contact-info {
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//         }
        
//         .contact-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 0.75rem;
//         }
        
//         .contact-icon {
//           color: #f4891d;
//           font-size: 1.1rem;
//           min-width: 20px;
//           margin-top: 0.2rem;
//         }
        
//         .contact-text {
//           color: #e0e0e0;
//           line-height: 1.4;
//           font-size: 0.9rem;
//         }
        
//         .contact-text strong {
//           color: #f4891d;
//         }
        
//         .footer-bottom {
//           border-top: 1px solid rgba(255,255,255,0.1);
//         }
        
//         .footer-bottom p {
//           color: #b0b0b0;
//           font-size: 0.9rem;
//         }
        
//         @media (max-width: 767.98px) {
//           .footer-heading {
//             font-size: 1.3rem;
//           }
          
//           .contact-item {
//             gap: 0.5rem;
//           }
          
//           .contact-text {
//             font-size: 0.85rem;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer; 


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <style>
      {`
        @media (max-width: 767px) {
          .footer-col {
            margin-bottom: 1.5rem;
          }
          .footer-icon {
            font-size: 1rem;
            margin-right: 0.5rem;
          }
        }

        .footer-icon {
          font-size: 1.2rem;
        }

        .footer-link {
          padding: 0.25rem 0;
          color: #000;
          display: block;
          text-decoration: none;
        }

        .footer-link:hover {
          color: #0f3052;
        }

        .footer-title {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
      `}
    </style>

    <footer className="bg-light pt-5 pb-3">
      <Container fluid className="px-4 px-md-5">
        {/* Top Section */}
        <Row className="mb-4">
          {/* Column 1 - Logo */}
          <Col xs={12} md={1} className="footer-col">
            <img
              src="/giHubLogo.png"
              alt="Global Influencers Hub"
              height="40"
              className="d-inline-block align-top"
            />
          </Col>

          {/* Column 2 */}
          <Col xs={6} md={1} className="footer-col">
            <Nav.Link as={Link} to="/" className="footer-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="footer-link">About Us</Nav.Link>
            <Nav.Link as={Link} to="/influencer-journeys" className="footer-link">Storyfluence</Nav.Link>
          </Col>

          {/* Column 3 */}
          <Col xs={6} md={1} className="footer-col">
            <Nav.Link as={Link} to="/trending" className="footer-link">Trending</Nav.Link>
            <Nav.Link as={Link} to="/bidding" className="footer-link">Bidfluence</Nav.Link>
            <Nav.Link as={Link} to="/amplify-your-brand" className="footer-link">Amplify Your Brand</Nav.Link>
          </Col>

          {/* Column 4 */}
          <Col xs={6} md={1} className="footer-col">
            <Nav.Link as={Link} to="/share-your-spotlight" className="footer-link">Share Your Spotlight</Nav.Link>
            <Nav.Link as={Link} to="/influencer-academy" className="footer-link">Influencer Academy</Nav.Link>
            <Nav.Link as={Link} to="/say-hello" className="footer-link">Say Hello</Nav.Link>
          </Col>

          {/* Column 5 - USA Address */}
          <Col xs={6} md={2} className="footer-col">
            <p className="footer-title">
              {/* <i className="bi bi-geo-alt-fill footer-icon text-primary"></i> */}
              USA Headquarters:
            </p>
            <p className="ms-6">
              5802 Grosvenor Lane
              Bethesda,<br/> MD 20814
            </p>
          </Col>

          {/* Column 6 - INDIA Address */}
          <Col xs={6} md={2} className="footer-col">
            <p className="footer-title">
              {/* <i className="bi bi-geo-alt-fill footer-icon text-primary"></i> */}
              INDIA Office:
            </p>
            <p className="ms-6">
              PS Qube, Room No 608 & 609, 6th floor,<br />
              Street No. 1111, Newtown,<br />
              Kolkata, West Bengal 700156
            </p>
          </Col>

          {/* Column 7 - Phone Numbers */}
          <Col xs={6} md={2} className="footer-col">
            <p>
              <i className="bi bi-telephone-fill footer-icon text-success"></i>
              <strong>+1 (415) 941-1910</strong> (USA)
            </p>
            <p>
              <i className="bi bi-telephone-fill footer-icon text-success"></i>
              <strong>+1 (301) 442-6047</strong> (USA)
            </p>
            <p>
              <i className="bi bi-telephone-fill footer-icon text-success"></i>
              <strong>+91-9674908532</strong> (INDIA)
            </p>
          </Col>

          {/* Column 8 - Emails */}
          <Col xs={6} md={2} className="footer-col">
            <p>
              <i className="bi bi-envelope-fill footer-icon text-danger"></i>
              hello@globalinfluencershub.com
            </p>
            <p>
              <i className="bi bi-envelope-fill footer-icon text-danger"></i>
              globalinfluencerhub@gmail.com
            </p>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="my-4 border-top border-1 border-muted" />

        {/* Bottom Section */}
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={6} className="text-muted small mb-2 mb-md-0">
            {/* Optional: Add © 2025 Global Influencers Hub */}
          </Col>
          <Col xs={12} md="auto" className="text-muted small mb-2 mb-md-0 d-flex align-items-center gap-3">
            <strong className="text-dark me-2">Connect:</strong>

            <a href="https://www.instagram.com/accounts/login/?next=%2Fglobal_influencershub%2F&source=omni_redirect" target="_blank" rel="noopener noreferrer" className="text-muted fs-5">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@globalinfluencershub" target="_blank" rel="noopener noreferrer" className="text-muted fs-5">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://www.facebook.com/globalinfluencersclub?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-muted fs-5">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/globalinfluencershub/" target="_blank" rel="noopener noreferrer" className="text-muted fs-5">
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  
  );
};

export default Footer;
