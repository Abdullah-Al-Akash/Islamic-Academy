import React from 'react';
import { useHistory } from 'react-router';
import './Course.css';

const Course = (props) => {
        // Destructure Date From Props:
        const { title, img, price, duration, certificate, id } = props.course;
        // Admit Function:
        const history = useHistory();
        const handleAdmit = () => {
                history.push(`/course/${id}`);
        }
        return (
                <div className="col">
                        <div className="card mb-3 course-card" style={{ 'maxWidth': '560px' }}>
                                <div className="row g-0">
                                        <div className="col-md-6 thumbnail">
                                                <img src={img} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-6">
                                                <div className="card-body">
                                                        <h5 className="card-title brand-light-color fw-bolder">{title}</h5>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                                <h3 className="text-success fw-bolder">${price}</h3>
                                                                <p className="pt-2"><i className="fas fa-clock brand-light-color"></i> {duration}month</p>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center">

                                                                <h6 className="fw-normal fst-italic">Certificate: {certificate}</h6>
                                                                <button onClick={handleAdmit} className="btn brand-btn text-white"><i className="fas fa-calendar-plus"></i> Admit Now</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>

        );
};

export default Course;