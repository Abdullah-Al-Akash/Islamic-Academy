import React from 'react';
import './About.css';

const About = () => {
        return (
                <div className="about-section pt-3">
                        <div className="container">
                                <div className="row">
                                        <div className="col-lg-6 d-flex justify-content-center ps-5 mt-5 pt-5">
                                                <div class="w-75">
                                                        <h1 class="pt-2 fw-bold">About Us</h1>
                                                        <h3 class="brand-color mt-3">Islamic Academy For Muslims To Achieve Spiritual Goals</h3>
                                                        <p>Many historians claim that the earliest Muslims came from the Senegambian region of Africa in the early 14th century. It is believed they were Moors, expelled from Spain, who made their way to the Caribbean and possibly to the Gulf of Mexico.</p>
                                                </div>
                                        </div>
                                        <div className="col-lg-6 d-flex justify-content-center pt-5">
                                                <img src="https://cdn.dribbble.com/users/1894420/screenshots/15537135/em060421n10.gif" className="img-fluid w-100 rounded-3" alt="" />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default About;