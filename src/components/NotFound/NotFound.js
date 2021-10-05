import React from 'react';
import { Link } from 'react-router-dom';
import './NotFond.css';
import notFound from '../images/not-found.png';

const NotFound = () => {
        return (
                <div className="container text-center mt-5 pt-5 mb-5 pb-5">
                        <div>
                                <img src={notFound} className="img-fluid rounded-3" alt="" />
                        </div>
                        {/* For Home Page */}
                        <Link to="/home">
                                <button className="btn brand-btn mt-5 pt-2 fw-bold"><i className="fas fa-arrow-left"></i> Back To Home</button>

                        </Link>
                </div>
        );
};

export default NotFound;