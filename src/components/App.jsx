import React from 'react';
import Header from "./Header";
import BackgroounfImage from "./Backgroud";
import Service from "../components/Service";
import Gallery from "../components/Gallery";
import About from "../components/About";

function App(){
    return <div >
        <Header />
        <BackgroounfImage />
        <Service />
        <Gallery />
        <About />
    </div> 
}

export default App;