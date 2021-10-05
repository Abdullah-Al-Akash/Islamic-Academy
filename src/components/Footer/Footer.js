import React from 'react';
import './Footer.css';
import card from '../images/card.png';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebook from '../images/icon/facebook.png';
import twt from '../images/icon/twt.png';
import youtube from '../images/icon/youtube.png';

const Footer = () => {
        return (
                <div>
                        <footer id="footer" className="text-white container-fluid">
                                <div className="container pb-5">
                                        <div className="row d-flex justify-content-between align-items-center brand-light-color">
                                                <div className="col-lg-5 mt-5">

                                                        <Link to="/">
                                                                <img src={logo} height="100px" className="img-fluid w-50" alt="" />
                                                        </Link>

                                                        <h6 className="mt-3 ps-3"><i className="fas fa-map-marker-alt"> </i> Level-4, 34, Maskanda
                                                                Passport Office
                                                                Road,
                                                                Mymensingh.</h6>
                                                        <h6 className="ps-3"><i className="fas fa-envelope"></i> Official: abc@gmail.com</h6>
                                                        <h6 className="ps-3"><i className="fas fa-info-circle"></i> Helpline : +878545454545 (Available :
                                                                09:00am to
                                                                7:00pm)</h6>
                                                        <div className="social-icon pb-5 pt-3">
                                                                <img src={facebook} width="30px" height="30px" className="mx-auto ms-3" alt="..." />
                                                                <img src={twt} width="30px" height="30px" className="mx-auto ms-3" alt="..." />
                                                                <img src={youtube} width="30px" height="30px" className="mx-auto ms-3" alt="..." />
                                                        </div>
                                                </div>
                                                <div className="col-lg-3 mt-5 footer-text pt-5">
                                                        <h6 className="ps-3">About Us</h6>
                                                        <h6 className="ps-3">Refund Policy</h6>
                                                        <h6 className="ps-3">Terms & Condition</h6>
                                                        <h6 className="ps-3">Privacy Policy</h6>
                                                </div>
                                                <div className="col-lg-4 mt-5">
                                                        <div>
                                                                <img className="img-fluid rounded" src={card} alt="" />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="text-center pb-5">
                                        <p className="p-0 m-0">Copyright © 2021 Islamic-academy.netlify.app</p>
                                        <small>made by <span className="brand-light-color">Abdullah Al Akash</span></small>
                                </div>
                        </footer >
                </div>
        );
};

export default Footer;