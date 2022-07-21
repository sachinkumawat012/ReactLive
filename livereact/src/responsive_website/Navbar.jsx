import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './style.css'
import { Link, useLocation } from "react-router-dom";

const Navbar = () =>{

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return(
        <React.Fragment>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Khojo.Com</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className={ splitLocation[1]=== "" ? "active" : "nav-item"}>
                <Link  className="nav-link" to="/">Home</Link>
              </li>
              <li className={ splitLocation[1]=== "service" ? "active" : "nav-item"}>
                <Link className="nav-link" to="/service">Service</Link>
              </li>
              <li className={ splitLocation[1]=== "about" ? "active" : "nav-item"}>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className={ splitLocation[1]=== "contact" ? "active" : "nav-item"}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
        </div>
        </div>
        </React.Fragment>
    );
};

export default Navbar;