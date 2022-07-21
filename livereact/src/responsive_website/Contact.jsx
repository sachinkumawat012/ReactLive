import React, { useState } from "react";
import Comman from "./Common";
import web from './images/cont.jpg'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const Contact = () =>{
    const [data,setData] = useState({
        fullname:"",
        email:"",
        phone:"",
        textarea:""
    });
    const inputEvent = (event) => {
        const {name, value} = event.target
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            };
        })
    };
    const formSubmit = (event)=>{
        event.preventDefault();
        alert(`${data.fullname} submited form successfully`);
    };

    return(
        <>
        <Comman
        imgsrc={web} 
        />
        <div className="my-0">
            <h1 className="text-center"> Contact Us</h1>
        </div>
        <div className="container contact-div" >
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
                <label for="exampleFormControlInput0" className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleFormControlInput0" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Your FullName"/>
              </div>
              <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
            </div>
              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput2" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Your Phone Number"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" name="textarea" value={data.textarea} onChange={inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-12">
                    <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
              </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;