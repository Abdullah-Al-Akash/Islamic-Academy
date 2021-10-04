import React from 'react';
import './Header.css';
import HeaderImage from '../images/main-header.png';
import About from '../About/About';

const Header = () => {
        return (
                <div>
                        <div className="header d-md-flex justify-content-center align-items-center">
                                <div className="p-3">
                                        <h1 class="text-white text-center pt-3 pb-5">بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ</h1>
                                        <h1 class="head-title">
                                                Islamic Academy
                                        </h1>
                                        <h4 class="slogan">To Learn Quran Properly and get Proper Meaning <br /> With proper Tajweed, the beauty of our recitation amplifies, <br /> applying all rules and characteristics correctly.</h4>
                                        <div className="d-flex justify-content-between text-white">
                                                <p className="m-0 p-0 pt-5"><i className="fas fa-sun"></i> Sunrise At: 5:10 AM</p>
                                                <p className="m-0 p-0 pt-5"><i className="fas fa-moon"></i> Sunset At: 6:00 PM</p>
                                        </div>
                                </div>
                        </div>
                        <About />
                </div>
        );
};

export default Header;