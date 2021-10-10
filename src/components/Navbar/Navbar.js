import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import './Navbar.css'
import logo from '../images/logo.png';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
        // Call useFirebase Function:
        const { user, logOut } = useAuth();
        // useHistory For Push Route:
        const history = useHistory();
        const login = () => {
                history.push('/login')
        }
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
                                                                }} className="nav-link active me-2"
                                                        >
                                                                Contact
                                                        </NavLink>
                                                </li>
                                                {
                                                        user?.email &&
                                                        <li className="nav-item">
                                                                <img src={user.photoURL} className="rounded-circle img-fluid me-2" height="40px" width="40px" />
                                                        </li>
                                                }
                                                {
                                                        user?.email ?
                                                                <li className="nav-item">
                                                                        <button onClick={logOut} className="brand-btn btn fw-bolder">Logout
                                                                                <i class="ms-1 fas fa-sign-out-alt"></i>
                                                                        </button>
                                                                </li>
                                                                :
                                                                <li className="nav-item">
                                                                        <button onClick={login} className="brand-btn btn fw-bolder">Login
                                                                                <i class="fas fa-sign-in-alt ms-1"></i>
                                                                        </button>
                                                                </li>

                                                }
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;