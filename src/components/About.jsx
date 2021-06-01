import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bg from "../Images/bg.png";
import Artist from "../Images/Artist.jpeg";

function About(){
    return <div>
        <h1 className="CardHeading">About Artist</h1>
        <Container>
            <Row xs={1} lg={2}>
                <Col>
               
                   <img className="BgImageArtist" src={Bg} alt="backgroundImage"/>
                   <img className="ImageArtist" src={Artist} alt="ArtistImage" />
                </Col>
                <Col>
                    <p style={{margin:" 23% 0% 0% 15%"}}>
                        Hii there, MySelf Bhargavi Parmar and I'm Professional Mehenedi Artist and bla bla...
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
}

export default About;