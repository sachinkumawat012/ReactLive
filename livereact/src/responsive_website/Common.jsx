import React from "react";
import './style.css'
import { Link, useLocation } from "react-router-dom";

const Comman = (props) =>{

    const location = useLocation();

    return(
        <section id='header' className="d-flex align-items-center">

            <div className="container-fluid ">
             <div className="row">
                <div className="col-10 mx-auto">
                <div className="row my-1">
                    <div className="col-md-6 my-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Find your intrest with <strong className="brand_name">Khojo.com</strong></h1>
                            <h4 className="my-3">
                            We are always ready to help you 🤗
                            </h4>
                            <div className="mt-3">
                            { location.pathname === `/` ? (<Link to={props.visit} className="anchor">{props.btnname}</Link>) : null} 
                            </div>
                    </div>
                    <div className="col-lg-6  order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="An image"/>
                    </div>
                    </div>
                </div>
             </div>
            </div>
        </section>
        )
}

export default Comman;