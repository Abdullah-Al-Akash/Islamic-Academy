import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
        const location = useLocation();
        const history = useHistory();
        const redirect_URI = location.state?.from || '/home';
        const { signInUsingGoogle } = useAuth();

        const handleGoogleLogin = () => {
                signInUsingGoogle()
                        .then(result => {
                                history.push(redirect_URI);
                        })
        }
        return (
                <div className="login container">
                        <div className="row pb-5">
                                <div className="col-lg-6 brand-light-color fw-bold">
                                        {/* Form Section */}
                                        <div className="w-75 mx-auto bg-dark p-3 rounded-3">
                                                <h3 className="text-center text-white fw-bolder pt-3 mb-3">Please Login Here</h3>
                                                <div className="pt-3 mb-3">
                                                        <label className="form-label">Your Name</label>
                                                        <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                        <label className="form-label">Your Email</label>
                                                        <input type="email" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div className="d-grid gap-2 pt-3">
                                                        <button type="submit" className="btn brand-btn fw-bold btn-lg">Login <i className="fas fa-sign-in-alt"></i></button>
                                                </div>
                                                <h6 className="text-center text-white m-0 p-0">Or</h6>
                                                <div className="d-grid gap-2 mb-3">
                                                        <button onClick={handleGoogleLogin} type="submit" className="btn btn-light btn-lg fw-bold">
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" className="img-fluid me-3" height="27px" width="27px" alt="" />
                                                                Sign In Using Google <i className="fas fa-sign-in-alt"></i></button>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-6"></div>
                        </div>
                </div>
        );
};

export default Login;