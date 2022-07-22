import React from "react";
import web from './images/serv.jpg'
import Comman from "./Common";
import Card from "./Card";
import Sdata from "./Sdata";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"


const Service = () =>{
    return(
        <>
        <Comman
        imgsrc={web} 
        />
        <div className="my-5">
            <h1 className="text-center"> Our Services</h1>
        </div>
        <div className="container-fluid mb-5 ">
            <div className="row">
                        {Sdata.map((val, index) =>{
                              return(<Card key={index} imgsrc = {val.imsrc} title = {val.title} />)})
                        }
                    </div>
                </div>

        </>
);
};

export default Service;