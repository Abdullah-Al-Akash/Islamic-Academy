import React from 'react';
import { Link } from 'react-router-dom';
import './NotFond.css';

const NotFound = () => {
        return (
                <div className="text-center mt-5 pt-5 mb-5 pb-5">
                        <h1 className="text-danger pb-3">404</h1>
                        <h3>Page Not Found</h3>
                        <Link to="/">
                                <button className="btn btn-success mt-5">Back To Home</button>
                        </Link>
                </div>
        );
};

export default NotFound;