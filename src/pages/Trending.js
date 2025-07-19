import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { trendingStories, trendingVideos } from '../data/mockData';

const Trending = () => {
  return (
    <div className="trending-page">
      {/* Hero Section */}
      <section className="trending-hero py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="trending-title">Trending</h1>
              <p className="trending-subtitle">
                Stay updated with the latest stories and videos from the influencer world.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trending Stories */}
      <section className="trending-stories py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Trending Stories</h2>
              <div className="section-divider"></div>
            </Col>
          </Row>
          <Row>
            {trendingStories.map((story) => (
              <Col lg={3} md={6} className="mb-4" key={story.id}>
                <Card className="trending-card h-100">
                  <div className="trending-image-container">
                    <Card.Img 
                      variant="top" 
                      src={story.image} 
                      alt={story.title}
                      className="trending-image"
                    />
                    <div className="trending-overlay">
                      <Button 
                        as={Link} 
                        to={`/story/${story.slug}`} 
                        variant="light" 
                        size="sm"
                      >
                        Read Story
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="trending-title">
                      <Link to={`/story/${story.slug}`} className="trending-link">
                        {story.title}
                      </Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Trending Videos */}
      <section className="trending-videos py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Trending Videos</h2>
              <div className="section-divider"></div>
            </Col>
          </Row>
          <Row>
            {trendingVideos.map((video) => (
              <Col lg={4} md={6} className="mb-4" key={video.id}>
                <Card className="video-card">
                  <div className="video-container">
                    <video 
                      controls 
                      className="trending-video"
                      poster={video.thumbnail}
                    >
                      <source src={video.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <Card.Body>
                    <Card.Title className="video-title">{video.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .trending-hero {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }
        
        .trending-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        .trending-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 1rem;
        }
        
        .section-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #f4891d 0%, #f68b1f 100%);
          margin: 0 auto 2rem;
        }
        
        .trending-card, .video-card {
          border: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        
        .trending-card:hover, .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .trending-image-container {
          position: relative;
          overflow: hidden;
        }
        
        .trending-image {
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .trending-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .trending-card:hover .trending-overlay {
          opacity: 1;
        }
        
        .trending-card:hover .trending-image {
          transform: scale(1.1);
        }
        
        .trending-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 0.5rem;
        }
        
        .trending-link {
          color: #1e3c72;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .trending-link:hover {
          color: #f4891d;
          text-decoration: none;
        }
        
        .video-container {
          position: relative;
          overflow: hidden;
        }
        
        .trending-video {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .video-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 0.5rem;
        }
        
        @media (max-width: 991.98px) {
          .trending-title {
            font-size: 2.5rem;
          }
          
          .trending-subtitle {
            font-size: 1.1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 767.98px) {
          .trending-title {
            font-size: 2rem;
          }
          
          .trending-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Trending; 