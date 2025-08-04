import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';

const AmplifyYourBrand = () => {
  const backgroundStyle = {
    backgroundImage: `url('/aboutUs.jpg')`, // Make sure image is in public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    width: '100vw',
  };
  return (
    <>
    <Container fluid style={backgroundStyle}>
      </Container>
    <div style={{ width: "100%", backgroundColor: "#f8f9fa" }}>
    {/* Dark Left Box */}
    <div
  style={{
    backgroundColor: "#2b2b26",
    color: "white",
    padding: "50px 40px",
    width: "33.333%",
    float: "left",
    position: "relative",        // position relative to allow shifting
    top: "-50px",                // move it 50px up
    zIndex: 2,                   // ensure it appears above other elements if needed
  }}
>
  <h5 className="fw-bold mb-4" style={{ fontSize: "18px", letterSpacing: "1px" }}>
    WINTER GETAWAY
  </h5>
  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
    Ut efficitur a urna sed mattis. Integer auctor maximus neque sed
    lacinia. Praesent eget velit ullamcorper, tincidunt eros vel,
    pellentesque felis.
  </p>
  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
    Donec vehicula, augue et sollicitudin mollis, diam quam pellentesque
    dui, eu luctus nisi urna ac leo. Praesent eget mauris convallis,
    consequat quam non, mollis neque. Phasellus ut erat mi.
  </p>
</div>

    {/* Right Side White Section */}
    <div style={{ marginLeft: "33.333%", backgroundColor: "white", padding: "60px 80px" }}>
      <Container fluid>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: 0 }}>
              Donec ut risus vitae diam efficitur fermentum. Quisque urna urna,
              mollis sit amet eleifend nec, maximus vel dolor. Nulla malesuada
              nunc a felis commodo pulvinar vulputate nec ligula.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: 0 }}>
              Integer a tincidunt sapien, sit amet sodales massa convallis eget.
              Vivamus a maximus est, vel feugiat neque.
            </p>
          </Col>
         
        </Row>
      </Container>
    </div>
  </div>

  <div style={{ backgroundColor: "#fff", padding: "80px 0" }}>
      <Container fluid className="px-5">
        <Row className="align-items-center">
          {/* Left Text Section */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
            style={{ paddingRight: "60px" }}
          >
            <h5
              className="fw-bold mb-4"
              style={{ fontSize: "18px", letterSpacing: "1px" }}
            >
              WHERE YOU’LL STAY
            </h5>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Curabitur lobortis quis massa quis facilisis. Proin et ipsum
              dapibus, pulvinar enim vel, scelerisque diam. Ut blandit sem vel
              sem tempor fringilla. Duis eros quam, condimentum vitae
              sollicitudin eu, tempor vitae risus. Morbi auctor volutpat
              lacinia.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Praesent ultricies dolor dui, condimentum lobortis urna tempus
              sed.
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Donec arcu lacus, aliquam ac sollicitudin eget, pharetra quis
              urna.Curabitur lobortis quis massa quis facilisis. Proin et ipsum
              dapibus, pulvinar enim vel, scelerisque diam. Ut blandit sem vel
              sem tempor fringilla. Duis eros quam, condimentum vitae
              sollicitudin eu, tempor vitae risus. Morbi auctor volutpat
              lacinia.Curabitur lobortis quis massa quis facilisis. Proin et ipsum
            
              lacinia.
            </p>
            
            <p
              className="mt-3"
              style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "1px" }}
            >
              DISCOVER MORE →
            </p>
          </Col>

          {/* Right Image Section */}
          <Col xs={12} md={4} className="px-0">
  <div
    style={{
      height: "700px",
      width: "100%",
      backgroundImage: `url('/pastel1.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "0",
      position: "relative",
      zIndex: "2",
      marginTop: "-70px", // 👈 Controls how much it overlaps
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)", // optional: adds some visual depth
    }}
  ></div>
</Col>
        </Row>
      </Container>
    </div>

    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "80vh",
              backgroundImage: "url('/grid3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: "5%",
              top:'-250px'
            }}
          >
            <div
              style={{
                maxWidth: "360px",
                color: "#fff",
                textAlign: "left",
              }}
            >
              <h5 className="fw-bold mb-3" style={{ fontSize: "20px", letterSpacing: "1px" }}>
                FILL OUT THE FORM
              </h5>
              <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                Reserve your spot today and take the first step toward unmatched visibility and engagement!
              </p>
              <Button
                style={{
                  backgroundColor: "#0f3052",
                  border: "none",
                  marginTop: "10px",
                }}
              >
                Discover More
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default AmplifyYourBrand; 