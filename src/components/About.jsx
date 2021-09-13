import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bg from "../Images/bg.png";
import Artist from "../Images/Artist.jpeg";

function About(){
    return <div id="About">
        <h1 className="CardHeading">About Artist</h1>
        <Container style={{padding:"2%"}}>
            <Row xs={1} lg={2}>
                <Col>
               
                   <img className="BgImageArtist" src={Bg} alt="backgroundImage"/>
                   <img className="ImageArtist" src={Artist} alt="ArtistImage" />
                </Col>
                <Col>
                    <p style={{margin:" 8% 0% 0% 15%"}}>
                        Hii there, MySelf Bhargavi Parmar and I'm Professional Mehenedi Artist and have 5+ year of expriance.
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
}

export default About;