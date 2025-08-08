import React from 'react';
import "../App.css";
import { Row, Col } from 'react-bootstrap';
import { featuredStories, trendingStories } from '../data/mockData';
import { Carousel, Card } from 'react-bootstrap';
const InfluencerJourneys = () => {
  const allStories = [...featuredStories, ...trendingStories];
  const groupedStories = [];
  for (let i = 0; i < trendingStories.length; i += 3) {
    groupedStories.push(trendingStories.slice(i, i + 3));
  }
  return (
    <>
    <style>{`
        @media (max-width: 768px) {
          .storyfluence-banner {
            height: 60vh !important;
            background-position: top !important;
            padding: 15px !important;
          }
        }

        @media (max-width: 480px) {
          .storyfluence-banner {
            height: 50vh !important;
            background-position: top !important;
            padding: 10px !important;
          }
        }
      `}</style>
  <div
        className="storyfluence-banner"
        style={{
          backgroundImage: `url('/storyFluenceBanner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          height: "90vh",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        
      </div>
<div className="px-3 py-5">
  <style>
    {`
      @media (max-width: 767.98px) {
        .carousel .col-12 {
          max-width: 100% !important;
          flex: 0 0 100% !important;
          display: flex;
          justify-content: center;
          padding-bottom: 20px;
        }

        .carousel .card {
          width: 90% !important;
          height: auto !important;
        }

        h4.fw-bold {
          margin-left: 0 !important;
          text-align: center;
        }
      }

      /* Change carousel arrow color to blue */
      .carousel-control-prev-icon,
      .carousel-control-next-icon {
        filter: invert(33%) sepia(100%) saturate(3000%) hue-rotate(200deg);
      }
    `}
  </style>

  <h4 className="fw-bold mb-4" style={{ marginLeft: "230px", color: "#0f3052" }}>
    Articles
  </h4>

  <Carousel indicators={false} controls={true} interval={5000}>
    {groupedStories.map((group, index) => (
      <Carousel.Item key={index}>
        <Row
          className="justify-content-center"
          style={{
            marginLeft: "0",
            marginRight: "0",
            padding: "15px",
            gap: "0px",
          }}
        >
          {group.map((story) => (
            <Col
              key={story.id}
              xs={12}
              md={4}
              lg={3}
              style={{
                paddingLeft: "0",
                paddingRight: "0",
                margin: "0",
                maxWidth: "33.33%",
              }}
            >
              <Card
                className="text-white"
                style={{
                  height: "650px",
                  width: "400px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${story.image})`,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div
                  className="d-flex flex-column justify-content-end h-100 p-3"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                  }}
                >
                  <h5 style={{ fontWeight: "600" }}>{story.title}</h5>
                  <a
                    href={`${story.slug}`}
                    className="text-white mt-2"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "0.9rem",
                    }}
                  >
                    Read More ↗
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    ))}
  </Carousel>
</div>




  </>
  );
};

export default InfluencerJourneys;
