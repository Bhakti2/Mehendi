import React from 'react';
import Header from "./Header";
import BackgroounfImage from "./Backgroud";
import Service from "../components/Service";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";

function App(){
    return <div >
        <Header />
        <BackgroounfImage />
        <Service  />
        <Gallery />
        <About />
        <Contact />
    </div> 
}

export default App;