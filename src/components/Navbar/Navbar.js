import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                        <div className="container">
                                <a className="navbar-brand" href="#">Islamic Point</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                        <NavLink
                                                                to="/home"
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "red"
                                                                }} className="nav-link active"
                                                        >
                                                                Home
                                                        </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                        <NavLink
                                                                to="/courses"
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "red"
                                                                }} className="nav-link active"
                                                        >
                                                                Courses
                                                        </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                        <NavLink
                                                                to="/about"
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "red"
                                                                }} className="nav-link active"
                                                        >
                                                                About Us
                                                        </NavLink>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;