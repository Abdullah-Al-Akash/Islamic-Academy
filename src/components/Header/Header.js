import React from 'react';
import './Header.css';
import HeaderImage from '../images/bg.png';

const Header = () => {
        return (
                <div className="header d-md-flex justify-content-center align-items-center">
                        <div>
                                <img className="img-fluid" src={HeaderImage} alt="" />
                        </div>
                        <div className="d-md-flex align-items-center">
                                <div className="p-3 w-75">
                                        <h2>
                                                And Allah Invites To
                                                The Home Of Peace
                                        </h2>
                                        <p class="text-success m-0 p-0 pt-5"><i class="fas fa-sun"></i> Sunrise At: 5:10 AM</p>
                                        <p class="text-success m-0 p-0"><i class="fas fa-moon"></i> Sunset At: 6:00 PM</p>
                                </div>
                        </div>
                </div>
        );
};

export default Header;