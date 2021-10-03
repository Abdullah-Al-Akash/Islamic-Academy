import React from 'react';
import './Header.css';
import HeaderImage from '../images/bg.png';

const Header = () => {
        return (
                <div className="header d-md-flex justify-content-center align-items-center">
                        <div>
                                <img class="img-fluid" src={HeaderImage} alt="" />
                        </div>
                        <div class="d-md-flex align-items-center">
                                <div class="p-3">
                                        <h2>
                                                And Allah Invites To
                                                The Home Of Peace
                                        </h2>
                                </div>
                        </div>
                </div>
        );
};

export default Header;