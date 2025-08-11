import React from 'react';
import "../App.css";
import { featuredStories, trendingStories } from '../data/mockData';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const InfluencerJourneys = () => {
  const navigate = useNavigate();

  // Custom arrow components
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          right: "-35px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          color: "#007bff",
          fontSize: "28px",
          zIndex: 2,
        }}
      >
        <FaChevronRight />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          left: "-35px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          color: "#007bff",
          fontSize: "28px",
          zIndex: 2,
        }}
      >
        <FaChevronLeft />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      ></div>

      <div className="px-3 py-5">
        <h4
          className="fw-bold mb-4"
          style={{ marginLeft: "230px", color: "#0f3052" }}
        >
          Articles
        </h4>

        <div style={{ padding: "20px 0" }}>
          <Slider {...settings}>
            {trendingStories.map((story) => (
              <div
                key={story.id}
                style={{
                  padding: "0 20px", // gap between cards
                  boxSizing: "border-box",
                  width: "85%",
                }}
              >
                <div
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    height: "420px", // increased card height
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    style={{
                      width: "100%",
                      height: "270px", // taller image
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "15px", flex: 1 }}>
                    <h5 style={{ fontSize: "16px", margin: "0 0 8px" }}>
                      {story.title}
                    </h5>
                    <a
                      href={story.slug}
                      style={{
                        display: "inline-block",
                        marginTop: "auto",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default InfluencerJourneys;
