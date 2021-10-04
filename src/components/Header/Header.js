import React from 'react';
import './Header.css';
import About from '../About/About';

const Header = () => {
        return (
                <div>
                        <div className="header d-md-flex justify-content-center align-items-center">
                                <div className="p-3">
                                        <h1 className="text-white text-center pb-5">بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ</h1>
                                        {/* Title */}
                                        <h1 className="head-title">
                                                Islamic Academy
                                        </h1>
                                        <h4 className="slogan">To Learn Quran Properly and get Proper Meaning <br /> With proper Tajweed, the beauty of our recitation amplifies.</h4>
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