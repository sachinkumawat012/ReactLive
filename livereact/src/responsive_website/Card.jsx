import React from "react";
import { Link } from "react-router-dom";

const Card = (props) =>{
    return(
        <>
        <div>
            <div className="col-md-4 col-10 mx-auto">
            <div className="card">
            <img src={props.imgsrc} className="card-img-top image" alt="cards images"/>
            <div className="card-body">
                <h5 className="card-title font-width-bold">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to='' className="btn btn-primary">Go somewhere</Link>
            </div>
            </div>
            </div>
            </div>
        </>
);
};

export default Card;