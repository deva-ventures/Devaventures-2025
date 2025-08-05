import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { trendingStories, trendingVideos } from '../data/mockData';

const Trending = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f0" }}>
    {/* Hero Section */}
    <div
      style={{
        backgroundImage: "url('/aboutUs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        color: "white",
        position: "relative",
      }}
    >
      <Container className="h-100 d-flex flex-column justify-content-center">
        <Row>
          {/* <Col md={7}>
            <h1 className="fw-bold display-5">
            Beyond the Scroll. Into the Soul.
            </h1>
            <p className="mt-3">
            This is where real impact begins — not in noise, but in truth.
            </p>
            <Button variant="light" className="mt-2">
              Перейти к бронированию
            </Button>
          </Col> */}

          {/* <Col md={5} className="d-none d-md-block">
            <Card style={{ width: "18rem", position: "absolute", bottom: "40px", right: "40px" }}>
              <Card.Img variant="top" src="/card-promo.jpg" />
              <Card.Body>
                <Card.Text>Жилье со скидкой 15% по промокоду FOREST</Card.Text>
                <Button variant="outline-dark" size="sm">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>


{/* Popular Homes Section */}
<Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 >These aren’t just viral clips — they’re the truths behind the triumphs.</h4>
        <p >This is where real impact begins — not in noise, but in truth.</p>
      </div>
      <Row className="g-4">
        {[{
          name: 'jkfnkas lkemfl', price: '5.500 р/сут.', guests: '1 – 4 чел.', beds: '2 спальных места', img: '/pastel1.jpeg'
        }, {
          name: 'wsefh jwenfjk', price: '12.000 р/сут.', guests: '2 – 6 чел.', beds: '4 спальных места', img: '/pastel1.jpeg'
        }, {
          name: 'efwnkj jkkkws', price: '17.000 р/сут.', guests: '5 – 12 чел.', beds: '6 спальных мест', img: '/pastel1.jpeg'
        }].map((home, index) => (
          <Col md={4} key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={home.img} style={{ borderRadius: '12px' }} />
              <Card.Body>
                <div className="d-flex justify-content-between text-muted small mb-2">
                  <span>{home.guests}</span>
                  <span>{home.beds}</span>
                </div>
                <Card.Title>{home.name}</Card.Title>
                <Card.Text className="text-end fw-bold">{home.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>











    {/* About Section */}
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h2 className="fw-light">Raw. Honest. Unforgettable.</h2>
        </Col>
        <Col md={6}>
          <p>
          Beyond every reel is a real story — and that’s what you’ll find here.
          </p>
          <p>
          The quiet struggles. The bold leaps. The unseen chapters that shaped the spotlight.
Beyond every reel is a real story — and that’s what you’ll find here.

          </p>
          {/* <a href="#" className="text-decoration-underline">Читать подробнее →</a> */}
        </Col>
      </Row>
    </Container>

    {/* Why Choose Us Section */}
    <div
      style={{
        backgroundImage: "url('/formBackground.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "60px 0",
      }}
    >
      <Container>
        <h3 className="fw-light">Beyond the Scroll. Into the Soul.</h3>
        <div className="d-flex flex-wrap gap-3 mt-3">
          {['Комфортные условия', 'Персонализированный сервис', 'Экологичные материалы', 'Быстрое бронирование', 'Уединенное расположение'].map((item, idx) => (
            <span key={idx} className="bg-light text-dark px-3 py-2 rounded-pill small">
              {item}
            </span>
          ))}
        </div>
      </Container>
    </div>

    

   
  </div>
  );
};

export default Trending; 