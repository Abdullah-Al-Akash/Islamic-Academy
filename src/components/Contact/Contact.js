import React from 'react';
import image from '../images/contact-img.png'
import './Contact.css';

const Contact = () => {
        return (
                <div className="contact-section">
                        <div className="container pt-5">
                                <h1 className="brand-light-color text-center fw-bold">Get In Touch</h1>
                                <p className="text-center">To get every update please submit the form</p>
                                <div className="row pt-5">
                                        <div className="col-lg-6">
                                                <img src={image} className="img-fluid p-3 mx-auto" alt="" />
                                        </div>
                                        <div className="col-lg-6 brand-light-color fw-bold">
                                                <div className="w-75 mx-auto bg-dark p-3 rounded-3">
                                                        <div className="pt-3">
                                                                <label className="form-label">Your Name</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                        <div className="">
                                                                <label className="form-label">Your Email</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label className="form-label">Your Message</label>
                                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                        <div className="d-grid gap-2 pb-4">
                                                                <button type="submit" className="btn brand-btn text-white"><h5>Submit</h5></button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Contact;