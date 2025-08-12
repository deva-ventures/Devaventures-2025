import React from 'react';
import "../App.css";
import { featuredStories, trendingStories } from '../data/mockData';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Container, Row, Col, Card, Button , Carousel} from 'react-bootstrap';
const InfluencerJourneys = () => {

  const people = [
    {
      name: 'Pankaj Dubey',
      des: 'Founder DSPIN | TEDx Speaker | Top 50 Indian Icon | Investor',
      img: '/pankaj.jpg',
      youtube: 'https://youtu.be/RUJ-LV58m9I?si=Fzn9UkQRoXSRt5ZM',
      article: '/articles/pankaj',
    },
    {
      name: 'Pablo Montana',
      des: 'Musician | Latin Artist | Salsa & Bachata Performer | Traveller',
      img: '/pabloTrendin.jpg',
      youtube: 'https://youtu.be/-oq8VYhFcHw?si=FVXr_fPIrhPjG0Ec',
      article: '/articles/pablo',
    },
    {
      name: 'Sweta Desai',
      des: 'Reset, Rebuild, Reign | From Late Starts to Global Fashion Weeks & Full House Shows',
      img: '/swetaTrending.jpg',
      youtube: 'https://youtu.be/va1t7bxevtc?si=kvmnn3vYRFnyYWpp',
      article: '/articles/sweta',
    },
    {
      name: 'Pankaj Dubey',
      des: 'Founder DSPIN | TEDx Speaker | Top 50 Indian Icon | Investor',
      img: '/pankaj.jpg',
      youtube: 'https://youtu.be/RUJ-LV58m9I?si=Fzn9UkQRoXSRt5ZM',
      article: '/articles/pankaj',
    },

    {
      name: 'Indrani Ghose',
      des: 'Voice of Indian Travel | Story Weaver | Blogger | Google Guide | Faces of India',
      img: '/indrani.jpg',
      youtube: 'https://www.youtube.com/watch?si=nP0lILVMAkMdPW3E&v=TwONuh31_6M&feature=youtu.be',
      article: '/articles/indrani',
    },
    {
      name: 'Indrajit Lahiri',
      des: '@foodkaseries Creator | Published Author | Podcaster at @EbongIndrajit | Culinary Storyteller',
      img: '/indrajit.jpg',
      youtube: 'https://www.youtube.com/watch?v=6IGV6sb3FzA',
      article: '/articles/indrajit',
    },

    {
      name: 'Sarina Pani',
      des: 'IFBB Pro Athlete | Coach | Winner – FitFactor India',
      img: '/sarina.jpg',
      youtube: 'https://www.youtube.com/watch?v=iKTxQk0GkpA&feature=youtu.be',
      article: '/articles/sarina',
    },
   
    
    

    {
      name: 'Narender Singh Yadav',
      des: 'Mountaineer | 22x World Record Holder | Real-Life Adventurer | RunForRam Ultramarathon',
      img: '/narendra.jpg',
      youtube: 'https://www.youtube.com/watch?v=wMGq7oVC800',
      article: '/articles/narender',
    },

    

    {
      name: 'Preetha Athrey',
      des: 'Culinary Creator | Marketing Maven | Ex-Twitter Marketing Head',
      img: '/preetha.jpg',
      youtube: 'https://www.youtube.com/watch?v=8kKCfXBX9Es',
      article: '#',
    },
    

    {
      name: 'Sanjay Barai',
      des: 'Teacher | Digital Creator | Relatable Storyteller',
      img: '/sanjay.jpg',
      youtube: 'https://www.youtube.com/watch?v=NjaTmt2XHpc',
      article: '/articles/sanjay',
    },
    

    {
      name: 'Gunjan Dewan',
      des: 'Positive Parenting Coach | Baby-Friendly Recipes | Baby-Led Weaning Expert | Former Data Scientist',
      img: '/gunjan.jpg',
      youtube: 'https://www.youtube.com/watch?v=Qk-KwV_Q6xA&feature=youtu.be',
      article: '/articles/gunjan',
    },
    

    {
      name: 'Pratul Vishera',
      des: 'Vedic Astrologer, TEDx Speaker & Mythologist | Ep 22 | Global Influencer Hub',
      img: '/pratul.jpg',
      youtube: 'https://www.youtube.com/watch?v=OLrppq3rYac',
      article: '#',
    },
   

    {
      name: 'Avinash Sahani',
      des: 'Former Indian Army Special Forces | Fitness Enthusiast | Co-Founder @gearsmith',
      img: '/avinash.jpg',
      youtube: 'https://www.youtube.com/watch?v=2jaO8wt0baQ',
      article: '/articles/avinash',
    },
    {
      name: 'Ragendu K R',
      des: 'IMTC Certified Montessorian | Gentle parenting | BLW & EC',
      img: '/ragendu.jpg',
      youtube: 'https://www.youtube.com/watch?v=hxB6QVdpv-I',
      article: '/articles/ragendu',
    },
    


{
  name: 'Raj Sharma',
  des: 'Comedian | Actor | Host | Co-host of The Treehouse Podcast',
  img: '/raj.jpg',
  youtube: 'https://www.youtube.com/watch?v=hxB6QVdpv-I',
  article: '/articles/raj',
},
{
  name: 'Ragendu K R',
  des: 'IMTC Certified Montessorian | Gentle parenting | BLW & EC',
  img: '/ragendu.jpg',
  youtube: 'https://www.youtube.com/watch?v=hxB6QVdpv-I',
  article: '/articles/ragendu',
},
{
  name: 'Ragendu K R',
  des: 'IMTC Certified Montessorian | Gentle parenting | BLW & EC',
  img: '/ragendu.jpg',
  youtube: 'https://www.youtube.com/watch?v=hxB6QVdpv-I',
  article: '/articles/ragendu',
},
{
  name: 'Ragendu K R',
  des: 'IMTC Certified Montessorian | Gentle parenting | BLW & EC',
  img: '/ragendu.jpg',
  youtube: 'https://www.youtube.com/watch?v=hxB6QVdpv-I',
  article: '/articles/ragendu',
},
{
  name: 'Ragendu K R',
  des: 'IMTC Certified Montessorian | Gentle parenting | BLW & EC',
  img: '/ragendu.jpg',
  youtube: 'https://www.youtube.com/watch?v=hxB6QVdpv-I',
  article: '/articles/ragendu',
},
{
  name: 'Ragendu K R',
  des: 'IMTC Certified Montessorian | Gentle parenting | BLW & EC',
  img: '/ragendu.jpg',
  youtube: 'https://www.youtube.com/watch?v=hxB6QVdpv-I',
  article: '/articles/ragendu',
},









    

  ];

  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  
  const groupedSlides = chunkArray(people, 3);





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

        <Container className="py-5">
      <Carousel
        indicators={false}
        prevIcon={<FaChevronLeft color="#0d6efd" size={24} />}
        nextIcon={<FaChevronRight color="#0d6efd" size={24} />}
      >
        {groupedSlides.map((group, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="g-4">
              {group.map((home, index) => (
                <Col md={4} key={index}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={home.img}
                      style={{ borderRadius: '12px', height: '280px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <div className="text-muted small mb-2">{home.des}</div>
                      <Card.Title className="fw-bold">{home.name}</Card.Title>

                      <div className="d-flex flex-column mt-3 gap-2">
                        <a
                          href={home.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm"
                        >
                          Click here for YouTube
                        </a>
                        <a
                          href={home.article}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          Click here for Article
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
      </div>
    </>
  );
};

export default InfluencerJourneys;
