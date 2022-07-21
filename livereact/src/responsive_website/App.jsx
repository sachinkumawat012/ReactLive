import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () =>{
    return(
        <React.Fragment>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
        <Footer/>
        </React.Fragment>
    )
}

export default App;


// <div className="container-fluid nav_bg">
//             <div className="row">
//                 <div className="col-10 mx-auto">
//                 </div>
//             </div>
//         </div>