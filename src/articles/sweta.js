import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Sweta = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">From Pistachios to Paris: Sweta Desai’s Bold Leap from Silence to Style</h1>
          <p className="lead text-center mb-5">
            You know her as Pistachio by Sweta, but behind the graceful Instagram reels, global fashion weeks, and sleek satin drapes, is a woman who rebuilt her life from scratch at 35.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={{ span: 10, offset: 1 }}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <p><strong>Devika Majumder:</strong> Hi, Sweta. Welcome to Global Influencers Hub.</p>
              <p><strong>Sweta Desai:</strong> Hi! Thank you so much. It’s a pleasure to be here.</p>
              <p><strong>Devika:</strong> We’re so excited to dive into your journey... So tell us… what was little Sweta like?</p>
              <p><strong>Sweta:</strong> Sweta as a child... wow, that feels like ages ago! But if I try to remember, I was really naughty!</p>
              <p><strong>Devika:</strong> That’s wonderful! Naughty and nice, I hope?</p>
              <p><strong>Sweta:</strong> Oh yes, definitely nice too. But honestly, I was also very studious. A bit of both, I guess.</p>
              <p><strong>Devika:</strong> That’s a fun mix! Now tell me, who played the biggest role in shaping your early life?</p>
              <p><strong>Sweta:</strong> My mom — definitely. She’s always been my foundation...</p>
              
              <p className="mt-4"><em>[Full interview continues below with alternating Q&A. The complete version includes academic background, fashion journey, Instagram strategy, and her take on fashion, identity, and personal growth.]</em></p>

              <hr className="my-4" />

              <p><strong>Devika:</strong> What’s the one achievement you’re most proud of?</p>
              <p><strong>Sweta:</strong> Walking international ramps — Paris, Milan, London Fashion Week — has been a dream come true.</p>

              <p><strong>Devika:</strong> If your life was a book, what would you title it?</p>
              <p><strong>Sweta:</strong> Be Yourself. Be honest. Be honest to yourself.</p>

              <p><strong>Devika:</strong> Sweta, this has been such a wonderful conversation.</p>
              <p><strong>Sweta:</strong> Same here. I truly enjoyed it.</p>

              <p><strong>Devika:</strong> Before we end, can you share a few words about our platform — Global Influencer Hub?</p>
              <p><strong>Sweta:</strong> Honestly — I loved talking to you. In just a short time, you helped me revisit my entire journey — from childhood to now. You and your team are doing such commendable work.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Sweta;
