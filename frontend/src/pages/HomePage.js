import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ImgGenerator from "../components/ImgGenerator";

function HomePage() {
  const { token } = useSelector((state) => state.user);

  return (
    <section className="custom-section d-flex justify-content-center">
      <Container className="px-5 text-center">
        <Row>
          <Col data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300">
            <h1
              className="display-5 fw-bold my-3"
              style={{ textShadow: "0px 10px 10px blue" }}
            >
              Welcome to GAN
            </h1>
          </Col>
        </Row>

        {token ? (
         
          <ImgGenerator />
        ) : (
          <h4 className="my-3">
            Please <Link to={"/auth/user-login"} style={{color:'blue'}}>Login</Link> to get started
          </h4>
        )}
<Row className="d-flex justify-content-center mt-5 fw-bold" >
  <Col md={5}>
  <p>
          "Transform Words into Art: Create Stunning Images from Text" Unleash
          your creativity with GAN. Turn your ideas, quotes, or
          messages into beautiful images with just a few clicks. Our intuitive
          text-to-image generator empowers you to design visuals that speak
          volumes.
        </p>
  </Col>
</Row>
        
      </Container>
    </section>
  );
}

export default HomePage;
