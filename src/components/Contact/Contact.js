import React from 'react';
import image from '../images/contact-img.png'
import './Contact.css';

const Contact = () => {
        return (
                <div className="contact-section">
                        <div className="container">
                                <h1 className="brand-light-color text-center fw-bold">Get In Touch</h1>
                                <p className="text-center">To get every update please submit the form</p>
                                <div className="row pt-5">
                                        <div className="col-lg-6">
                                                <img src={image} className="img-fluid p-3 mx-auto" alt="" />
                                        </div>
                                        <div className="col-lg-6 brand-light-color fw-bold">
                                                <div className="w-75 mx-auto bg-dark p-3 rounded-3">
                                                        <div class="pt-3">
                                                                <label for="exampleInputEmail1" class="form-label">Your Name</label>
                                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                        <div class="">
                                                                <label for="exampleInputEmail1" class="form-label">Your Email</label>
                                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                        <div class="mb-3">
                                                                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                        <div class="d-grid gap-2 pb-4">
                                                                <button type="submit" class="btn brand-btn text-white"><h5>Submit</h5></button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Contact;