import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { featuredStories, trendingStories } from '../data/mockData';

const InfluencerJourneys = () => {
  const allStories = [...featuredStories, ...trendingStories];

  return (
    <div className="influencer-journeys-page">
      {/* Hero Section */}
      <section className="journeys-hero py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="journeys-title">Influencer Journeys</h1>
              <p className="journeys-subtitle">
                Discover the inspiring stories of social media influencers who have transformed their passions into powerful platforms for change and connection.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Journeys */}
      <section className="featured-journeys py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Featured Journeys</h2>
              <div className="section-divider"></div>
            </Col>
          </Row>
          <Row>
            {featuredStories.map((story) => (
              <Col lg={4} md={6} className="mb-4" key={story.id}>
                <Card className="journey-card h-100">
                  <div className="journey-image-container">
                    <Card.Img 
                      variant="top" 
                      src={story.image} 
                      alt={story.title}
                      className="journey-image"
                    />
                    <div className="journey-overlay">
                      <Button 
                        as={Link} 
                        to={`/story/${story.slug}`} 
                        variant="light" 
                        size="sm"
                      >
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="journey-title">
                      <Link to={`/story/${story.slug}`} className="journey-link">
                        {story.title}
                      </Link>
                    </Card.Title>
                    <Card.Text className="journey-excerpt">
                      {story.excerpt}
                    </Card.Text>
                    <div className="journey-meta">
                      <span className="journey-category">Featured Story</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* All Journeys */}
      <section className="all-journeys py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title">All Journeys</h2>
              <div className="section-divider"></div>
            </Col>
          </Row>
          <Row>
            {allStories.map((story) => (
              <Col lg={4} md={6} className="mb-4" key={story.id}>
                <Card className="journey-card h-100">
                  <div className="journey-image-container">
                    <Card.Img 
                      variant="top" 
                      src={story.image} 
                      alt={story.title}
                      className="journey-image"
                    />
                    <div className="journey-overlay">
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
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="journey-title">
                      <Link to={`/story/${story.slug}`} className="journey-link">
                        {story.title}
                      </Link>
                    </Card.Title>
                    <Card.Text className="journey-excerpt">
                      {story.excerpt || 'Discover the inspiring journey of this influencer...'}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="cta-title">Share Your Journey</h2>
              <p className="cta-description">
                Have an inspiring story to tell? Join our community of influencers and share your journey with the world.
              </p>
              <div className="cta-buttons">
                <Button 
                  as={Link} 
                  to="/share-your-spotlight" 
                  variant="primary" 
                  size="lg" 
                  className="me-3"
                >
                  Share Your Story
                </Button>
                <Button 
                  as={Link} 
                  to="/influencer-academy" 
                  variant="outline-primary" 
                  size="lg"
                >
                  Join Academy
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .journeys-hero {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }
        
        .journeys-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        .journeys-subtitle {
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
        
        .journey-card {
          border: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }
        
        .journey-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .journey-image-container {
          position: relative;
          overflow: hidden;
        }
        
        .journey-image {
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .journey-overlay {
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
        
        .journey-card:hover .journey-overlay {
          opacity: 1;
        }
        
        .journey-card:hover .journey-image {
          transform: scale(1.1);
        }
        
        .journey-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 0.5rem;
        }
        
        .journey-link {
          color: #1e3c72;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .journey-link:hover {
          color: #f4891d;
          text-decoration: none;
        }
        
        .journey-excerpt {
          color: #666;
          font-size: 0.9rem;
          flex-grow: 1;
          line-height: 1.5;
        }
        
        .journey-meta {
          margin-top: auto;
        }
        
        .journey-category {
          background: linear-gradient(135deg, #f4891d 0%, #f68b1f 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .cta-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 1rem;
        }
        
        .cta-description {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #f4891d 0%, #f68b1f 100%);
          border: none;
          padding: 0.75rem 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #e67e1a 0%, #e57a1a 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(244, 137, 29, 0.3);
        }
        
        .btn-outline-primary {
          border: 2px solid #1e3c72;
          color: #1e3c72;
          padding: 0.75rem 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-outline-primary:hover {
          background: #1e3c72;
          color: white;
          transform: translateY(-2px);
        }
        
        @media (max-width: 991.98px) {
          .journeys-title {
            font-size: 2.5rem;
          }
          
          .journeys-subtitle {
            font-size: 1.1rem;
          }
          
          .section-title, .cta-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 767.98px) {
          .journeys-title {
            font-size: 2rem;
          }
          
          .journeys-subtitle {
            font-size: 1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default InfluencerJourneys; 