import React from "react";
import Img7 from "../Images/image7.jpeg";
import Img3 from "../Images/img3 (2).jpeg";
import Img6 from "../Images/imag6.jpeg";
import Bg from "../Images/bg.png"
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

function BackgroounfImage() {
  return (
    <div style={{ 
      backgroundImage: `url(${Bg})` 
    }}>
      <Container>
        <Row xs={1} lg={2}>
          <Col  className="BackgroundHeading">
            <p>Get Mehndi Artist</p>
            <p>for your wedding Functions</p>
            <Button className="MainButton" variant="secondary" size="lg">
              Book Now
            </Button>
          </Col>
          <Col>
            <Carousel>
            
              <Carousel.Item interval={2000}>
                <img
                  className="d-block bgImage"
                  src={Img7}
                  alt="First slide"
                />
              </Carousel.Item>
              

              
              <Carousel.Item interval={2000}>
                <img
                  className="d-block bgImage"
                  src={Img6}
                  alt="Second slide"
                />
              </Carousel.Item>
             
            
              <Carousel.Item>
                <img
                  className="d-block bgImage"
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
