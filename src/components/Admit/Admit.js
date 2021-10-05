import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Admit.css';

const Admit = () => {
        // Catch Course Id by using useParams:
        const { courseId } = useParams()
        // Declare State:
        const [courses, setCourses] = useState([]);
        // Fetch Data:
        useEffect(() => {
                fetch('/fakedb.JSON')
                        .then(res => res.json())
                        .then(data => setCourses(data))
        }, [courseId]);

        // Show Admitted Course:
        const admitCourse = courses?.find(course => course.id === +courseId);
        const studentId = Math.round(Math.random() * 100);
        // Back To Home After Admit:
        const history = useHistory();
        const backToHome = () => {
                history.push('/');
        }
        return (
                <div className="admit-section container pb-5">
                        <h2 className="text-center brand-color fw-bolder">Please fill up the form for admission process</h2>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 pt-5">
                                <div className="col pt-5">
                                        <div className="card mb-3 course-card" style={{ 'maxWidth': '560px' }}>
                                                <div className="row g-0">
                                                        <div className="col-md-6 thumbnail">
                                                                <img src={admitCourse?.img} className="img-fluid rounded-start" alt="..." />
                                                        </div>
                                                        <div className="col-md-6">
                                                                <div className="card-body">
                                                                        <h5 className="card-title brand-light-color fw-bolder">{admitCourse?.title}</h5>
                                                                        <div className="d-flex justify-content-between align-items-center">
                                                                                <h3 className="text-success fw-bolder">${admitCourse?.price}</h3>
                                                                                <p className="pt-2"><i className="fas fa-clock brand-light-color"></i> {admitCourse?.duration}month</p>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between align-items-center">

                                                                                <h6 className="fw-normal fst-italic">Certificate: {admitCourse?.certificate}</h6>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                {/* Admit Form Section */}
                                <div className="col fw-bold brand-light-color">
                                        {/* Form Section */}
                                        <div className="mx-auto bg-dark p-3 rounded-3">
                                                <h5 className="text-center text-white fw-bolder pb-3">Course Name: {admitCourse?.title}</h5>
                                                <fieldset disabled>
                                                        <div className="">
                                                                <label className="form-label">Student ID</label>
                                                                <input type="text" id="disabledTextInput" className="form-control" placeholder={studentId} />
                                                        </div>
                                                </fieldset>
                                                <div className="pt-3">
                                                        <label className="form-label">Student Name</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" />
                                                </div>
                                                <div className="">
                                                        <label className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" />
                                                </div>

                                                <div className="mt-3">
                                                        <label className="form-label">Gender</label>
                                                        <select className="form-select" aria-label="Default select example">
                                                                <option value="1">Male</option>
                                                                <option value="2">Female</option>
                                                        </select>
                                                </div>
                                                <div className="d-grid gap-2 pb-4 mt-3">
                                                        <button type="submit" className="btn brand-btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"><h5>Submit</h5></button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="modal fade" id="exampleModal" aria-hidden="true">
                                <div className="modal-dialog">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title text-success fw-bolder" id="exampleModalLabel">Congratulations!</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                        <p>you are successfully admitted in <span className="fw-bolder brand-color">{admitCourse?.title}</span>'s course.</p>
                                                        <h6>Your Student Id: <span className="fw-bolder brand-color">{studentId}</span></h6>
                                                </div>
                                                <div className="modal-footer">
                                                        <button onClick={backToHome} type="button" className="btn brand-btn fw-bolder" data-bs-dismiss="modal">Ok</button>
                                                </div>
                                        </div>
                                </div>
                        </div>

                </div>
        );
};

export default Admit;