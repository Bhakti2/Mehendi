import React from 'react';
import { ReactVideo } from "reactjs-media";

function Gallery() {
  return (
    <ReactVideo
    src="https://www.example.com/url_to_video.mp4"
    poster="https://www.example.com/poster.png"
    primaryColor="red"
    // other props
/>
  );
};

export default Gallery;