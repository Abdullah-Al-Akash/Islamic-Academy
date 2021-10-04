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

                        <Link to="/home">
                                <button className="btn brand-btn mt-5 pt-2"><h4><i className="fas fa-arrow-left"></i> Back To Home</h4></button>

                        </Link>
                </div>
        );
};

export default NotFound;