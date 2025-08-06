import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const InfluencerPowerMoves = () => {
  return (
    <div style={{ backgroundColor: '#f6f6f6', padding: '60px 0' }}>
      <Container>
        <h2 className="text-center" style={{ fontWeight: '700', color: '#0f3052' }}>
          Influencer Power Moves: Leveraging Your Influence for Real-World Change
        </h2>
        <p className="text-center" style={{ color: '#4b4b4b', maxWidth: '800px', margin: '20px auto' }}>
          In an era where digital influence shapes opinions, movements, and even policies, influencers have a unique opportunity
          to harness their platforms for social good. The power of social media extends beyond just promoting products or lifestyle trends;
          it holds the potential to create lasting impact in society, advocating for causes that resonate with their audience and driving
          change on a global scale. This article explores how influencers are using their voices to promote social change, champion
          sustainability, and raise awareness about critical issues, providing examples of influencers who are truly making a difference
          and guiding new influencers on how they can do the same.
        </p>

        <Row className="mt-5">
          <Col>
            <h5 style={{ fontWeight: '600', color: '#0f3052' }}>1. Advocating for Social Justice and Equality</h5>
            <p style={{ color: '#4b4b4b' }}>
              Influencers have increasingly been at the forefront of advocating for social justice movements. By utilizing their platforms,
              they are amplifying voices that have historically been marginalized and shining a spotlight on systemic issues that need attention.
            </p>
            <p><strong>Example: Naomi Osaka</strong> Tennis champion and social justice advocate Naomi Osaka has used her platform to raise awareness about
              racial inequality and police brutality. During the 2020 U.S. Open, she wore face masks bearing the names of victims of police violence,
              bringing global attention to the issue. Her actions showed that influencers, particularly those with large global audiences, can
              leverage their reach to challenge societal norms and spark much-needed conversations.
            </p>
            <p><strong>How New Influencers Can Do This:</strong> New influencers can take inspiration from figures like Osaka by speaking out on causes
              they are passionate about. Whether it’s racial equality, LGBTQ+ rights, or mental health awareness, influencers can use their platforms
              to share educational content, host discussions, and engage in activism through partnerships with organizations that are fighting for change.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h5 style={{ fontWeight: '600', color: '#0f3052' }}>2. Promoting Sustainability and the Environment</h5>
            <p style={{ color: '#4b4b4b' }}>
              Sustainability is no longer just a buzzword – it’s a movement. Influencers with a focus on sustainability are encouraging their
              followers to make eco-friendly choices, reduce waste, and be more conscious of their carbon footprints.
            </p>
            <p><strong>Example: Elizabeth Teo</strong> Eco-conscious influencer and content creator Elizabeth Teo promotes sustainable living
              through her blog and social media channels. She advocates for minimalism, upcycling, and buying sustainable products. Her campaigns,
              such as the “Zero Waste” challenge, inspire her audience to rethink their consumption patterns and adopt greener habits.
            </p>
            <p><strong>How New Influencers Can Do This:</strong> Influencers who want to promote sustainability can start by incorporating
              eco-friendly choices into their own lifestyle, from purchasing sustainable fashion to reducing plastic usage. They can collaborate
              with eco-friendly brands and organizations, share tips for reducing waste, and encourage their audience to support local,
              environmentally-conscious businesses.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h5 style={{ fontWeight: '600', color: '#0f3052' }}>3. Raising Awareness for Mental Health</h5>
            <p style={{ color: '#4b4b4b' }}>
              Mental health awareness has become a crucial topic of conversation in recent years, with influencers stepping forward to address
              issues such as anxiety, depression, and the stigma around seeking help. By sharing their personal stories or speaking about mental
              health openly, influencers are helping their followers feel less isolated and more supported.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfluencerPowerMoves;
