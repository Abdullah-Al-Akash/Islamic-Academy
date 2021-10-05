import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
        const [courses, setCourses] = useState([]);
        // Load Data From Fake Data:
        useEffect(() => {
                fetch('./fakedb.JSON')
                        .then(res => res.json())
                        .then(data => setCourses(data));
        }, [])
        return (
                <div className="course-section">
                        <div className="container">
                                <h1 className="text-center our-course brand-color fw-bold">Our Courses</h1>
                                <h5 className="text-center brand-light-color">“Seek knowledge even if you have to go as far as China”</h5>
                                <div className="mt-3 pb-5 row row-cols-1 row-cols-md-2 g-5 mx-auto">
                                        {/* Map Data */}
                                        {
                                                courses.length === 0 ?
                                                        <img className="img-fluid w-25 rounded-3 mx-auto" src="https://trails.ca/wp-content/uploads/2020/10/loading-spinner.gif" alt="" />
                                                        :
                                                        courses.map(course => <Course
                                                                course={course}
                                                                key={course.id}
                                                        >
                                                        </Course>)

                                        }
                                </div>
                        </div>
                </div>
        );
};

export default Courses;