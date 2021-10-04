import React from 'react';
import './SingleScholar.css'
import facebook from '../images/icon/facebook.png';
import twt from '../images/icon/twt.png';
import youtube from '../images/icon/youtube.png';

const SingleScholar = (props) => {
        // Destructure from Props:
        const { name, img } = props.scholar;
        return (
                <div className="col">
                        <div className="card h-100 text-center scholar-card">
                                <img src={img} width="200px" height="200px" className="rounded-circle border border-3 border-dark mx-auto mt-5" alt="..." />
                                <div className="card-body mt-2">
                                        <h3 className="card-title">{name}</h3>
                                </div>
                                <div className="social-icon pb-5">
                                        <img src={facebook} width="35px" height="35px" className="mx-auto ms-2" alt="..." />
                                        <img src={twt} width="35px" height="35px" className="mx-auto ms-2" alt="..." />
                                        <img src={youtube} width="35px" height="35px" className="mx-auto ms-2" alt="..." />
                                </div>
                        </div>
                </div>
        );
};

export default SingleScholar;