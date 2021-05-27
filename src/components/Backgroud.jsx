import React from "react";
import BackgroudImage from "../Images/BackgroundImage.jpeg";
import Img3 from "../Images/img3 (2).jpeg";
import Img6 from "../Images/imag6.jpeg";
import Bg from "../Images/bg.png"
import video from "../videos/video.mp4";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

function BackgroounfImage() {
  return (
    <div style={{ 
      backgroundImage: `url(${Bg})` 
    }}>
      <Container>
        <Row>
          <Col className="BackgroundHeading">
            <p>Get Mehndi Artist</p>
            <p>for your wedding Day</p>
            <Button className="MainButton" variant="secondary" size="lg">
              Book Now
            </Button>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100 bgImage"
                  src={BackgroudImage}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100 bgImage"
                  src={Img6}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 bgImage"
                  src={Img3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BackgroounfImage;
