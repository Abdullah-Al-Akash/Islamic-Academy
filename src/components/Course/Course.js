import React from 'react';
import './Course.css';

const Course = (props) => {
        // Destructure Date From Props:
        const { title, img, price, duration, certificate } = props.course;
        return (
                <div className="col">
                        <div className="card mb-3 course-card" style={{ 'maxWidth': '540px' }}>
                                <div className="row g-0">
                                        <div className="col-md-6 thumbnail">
                                                <img src={img} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-6">
                                                <div className="card-body">
                                                        <h5 className="card-title text-success">{title}</h5>
                                                        <p>Certificate: {certificate}</p>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                                <h3>${price}</h3>
                                                                <p>Duration: {duration}month</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>

        );
};

export default Course;