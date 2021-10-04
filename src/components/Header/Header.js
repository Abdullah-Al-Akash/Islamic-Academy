import React from 'react';
import './Header.css';
import HeaderImage from '../images/main2.gif';

const Header = () => {
        return (
                <div className="header d-md-flex justify-content-center align-items-center">
                        <div>
                                <img className="img-fluid" src={HeaderImage} alt="" />
                        </div>
                        <div className="d-md-flex align-items-center">
                                <div className="p-3">
                                        <h1 class="text-success">
                                                Islamic Academy
                                        </h1>
                                        <h4 class="slogan">To Learn Quran Properly and get Proper Meaning</h4>
                                        <p className="text-success m-0 p-0 pt-5"><i className="fas fa-sun"></i> Sunrise At: 5:10 AM</p>
                                        <p className="text-success m-0 p-0"><i className="fas fa-moon"></i> Sunset At: 6:00 PM</p>
                                </div>
                        </div>
                </div>
        );
};

export default Header;