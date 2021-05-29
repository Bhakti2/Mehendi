import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bridal from "../Images/Bridal.jpeg";
import Babyshower from "../Images/Babyshower.jpeg";
import Engagment from "../Images/Engagment.jpeg";
import Theme2 from "../Images/THeme (2).jpeg";

function Service() {
  return (
    <div>
      <h1 className="CardHeading">Service</h1>
      <div style={{backgroundColor:"#fffbdf"}}>
      <Container>
        <Row xs={1} md={2} lg={4}>
          <Col>
            <div className="cardContainor">
              <div className="upper">
                <img src={Bridal} className="cardImage" alt="BridalImage" />
              </div>
              <div className="lower">
                <h2>Bridal Mehendi</h2>
                <p>Derscription</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="cardContainor">
              <div className="upper">
                <img src={Babyshower} className="cardImage" alt="BridalImage" />
              </div>
              <div className="lower">
                <h2>Babyshower Mehendi</h2>
                <p>Derscription</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="cardContainor">
              <div className="upper">
                <img src={Engagment} className="cardImage" alt="BridalImage" />
              </div>
              <div className="lower">
                <h2>Engagment Mehendi</h2>
                <p>Derscription</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="cardContainor">
              <div className="upper">
                <img src={Theme2} className="cardImage" alt="BridalImage" />
              </div>
              <div className="lower">
                <h2>Theme Mehendi</h2>
                <p>Derscription</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default Service;
