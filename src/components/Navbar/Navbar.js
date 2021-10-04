import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../images/logo.png';

const Navbar = () => {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top mb-5">
                        <div className="container">
                                <Link to="/" className="m-0 p-0">
                                        <img src={logo} height="60" alt="" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                        <NavLink
                                                                to="/home"
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "rgb(211, 146, 62)"
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
                                                                        color: "rgb(211, 146, 62)"
                                                                }} className="nav-link active"
                                                        >
                                                                Courses
                                                        </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                        <NavLink
                                                                to="/scholars"
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "rgb(211, 146, 62)"
                                                                }} className="nav-link active"
                                                        >
                                                                Our Scholars
                                                        </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                        <NavLink
                                                                to="/about"
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "rgb(211, 146, 62)"
                                                                }} className="nav-link active"
                                                        >
                                                                About Us
                                                        </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                        <NavLink
                                                                to="/contact"
                                                                activeStyle={{
                                                                        fontWeight: "bold",
                                                                        color: "rgb(211, 146, 62)"
                                                                }} className="nav-link active"
                                                        >
                                                                Contact
                                                        </NavLink>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;