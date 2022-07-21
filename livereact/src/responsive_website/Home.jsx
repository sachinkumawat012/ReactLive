import React from "react";
import './style.css'
import web from './images/khojo1.png'
import Comman from "./Common";

const Home = () =>{
    return(
            <Comman  
                imgsrc={web} 
                visit="/service"
                btnname="Get Started"/>
        )
}

export default Home;