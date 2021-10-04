import React from 'react';
import './SingleScholar.css'
import facebook from '../images/icon/facebook.png';
import twt from '../images/icon/twt.png';
import youtube from '../images/icon/youtube.png';

const SingleScholar = (props) => {
        // Destructure from Props:
        const { name, img } = props.scholar;
        return (
                <div class="col">
                        <div class="card h-100 text-center scholar-card">
                                <img src={img} width="200px" height="200px" class="rounded-circle border border-3 border-dark mx-auto mt-5" alt="..." />
                                <div class="card-body mt-2">
                                        <h3 class="card-title">{name}</h3>
                                </div>
                                <div class="social-icon pb-5">
                                        <img src={facebook} width="35px" height="35px" class="mx-auto ms-2" alt="..." />
                                        <img src={twt} width="35px" height="35px" class="mx-auto ms-2" alt="..." />
                                        <img src={youtube} width="35px" height="35px" class="mx-auto ms-2" alt="..." />
                                </div>
                        </div>
                </div>
        );
};

export default SingleScholar;