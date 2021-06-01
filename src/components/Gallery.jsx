import React from "react";
import ReactPlayer from 'react-player';
import video1 from "../videos/Video1.mp4";
import video2 from "../videos/Video2.mp4";
import video3 from "../videos/Video3.mp4";
import video4 from "../videos/Video4.mp4";
import video5 from "../videos/Video5.mp4";
import video6 from "../videos/Video6.mp4";
import video7 from "../videos/Video7.mp4";
import { Carousel} from "react-bootstrap";

function Gallery() {
  return <div style={{textAlign:"center"}}>
  <h1 className="CardHeading">Gallery</h1>


<Carousel>
  <Carousel.Item interval={2000}>
  <ReactPlayer 
      url={video1}
      controls
      playing="true"
      onReady
      width="100%"
      height="500px"
      style={{margin:"auto"}}
      
    />
  </Carousel.Item>

  <Carousel.Item interval={2000}>
  <ReactPlayer 
      url={video2}
      controls
      playing="true"
       width="100%"
      height="500px"
      style={{margin:"auto"}}
     
    />
  </Carousel.Item>
  


  <Carousel.Item>
  <ReactPlayer 
      url={video3}
      controls
      playing="true"
       width="100%"
      height="500px"
      style={{margin:"auto"}}
     
    />
  </Carousel.Item>
  

  <Carousel.Item>
  <ReactPlayer 
      url={video4}
      controls
       width="100%"
      height="500px"
      style={{margin:"auto"}}
      
    />
  </Carousel.Item>
  


   <Carousel.Item>
  <ReactPlayer 
      url={video5}
      controls
       width="100%"
      height="500px"
      style={{margin:"auto"}}
      
    />
  </Carousel.Item>
  


   <Carousel.Item>
  <ReactPlayer 
      url={video6}
      controls
       width="100%"
      height="500px"
      style={{margin:"auto"}}
      
    />
  </Carousel.Item>
  


   <Carousel.Item>
  <ReactPlayer 
      url={video7}
      controls
       width="100%"
      height="500px"
      style={{margin:"auto"}}
    />
  </Carousel.Item>
  
</Carousel>


  </div>
}

export default Gallery;