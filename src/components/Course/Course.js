import React from 'react';
import './Course.css';

const Course = (props) => {
        // Destructure Date From Props:
        const { title, img, price, duration, certificate } = props.course;
        return (
                <div className="col">
                        <div class="card mb-3 course-card" style={{ 'maxWidth': '540px' }}>
                                <div class="row g-0">
                                        <div class="col-md-6 thumbnail">
                                                <img src={img} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-6">
                                                <div class="card-body">
                                                        <h5 class="card-title text-success">{title}</h5>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                                <h3>${price}</h3>
                                                                <p>{duration}month</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>

        );
};

export default Course;