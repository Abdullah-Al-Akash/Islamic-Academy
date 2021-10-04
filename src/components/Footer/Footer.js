import React from 'react';
import './Footer.css';
import card from '../images/card.png';
import logo from '../images/logo.png';

const Footer = () => {
        return (
                <div>
                        <footer id="footer" className="text-white container-fluid">
                                <div className="container pb-5">
                                        <div className="row d-flex justify-content-between align-items-center brand-light-color">
                                                <div className="col-lg-5 mt-5">

                                                        <img src={logo} height="100px" className="img-fluid w-50" alt="" />

                                                        <h6 className="mt-3 ps-3"><i className="fas fa-map-marker-alt"> </i> Level-4, 34, Maskanda
                                                                Passport Office
                                                                Road,
                                                                Mymensingh.</h6>
                                                        <h6 className="ps-3"><i className="fas fa-envelope"></i> Official: abc@gmail.com</h6>
                                                        <h6 className="ps-3"><i className="fas fa-info-circle"></i> Helpline : +878545454545 (Available :
                                                                09:00am to
                                                                7:00pm)</h6>
                                                </div>
                                                <div className="col-lg-3 mt-5 footer-text">
                                                        <h6>About Us</h6>
                                                        <h6>Refund Policy</h6>
                                                        <h6>Terms & Condition</h6>
                                                        <h6>Privacy Policy</h6>
                                                </div>
                                                <div className="col-lg-4 mt-5">
                                                        <div>
                                                                <img className="img-fluid rounded" src={card} alt="" />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </footer >
                </div>
        );
};

export default Footer;