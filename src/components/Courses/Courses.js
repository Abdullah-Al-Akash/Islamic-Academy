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
                <div className="container">
                        <h2 className="text-center mt-5 text-success">Our Courses</h2>
                        <div className="mt-5 pb-5 row row-cols-1 row-cols-md-2 g-5 mx-auto">
                                {
                                        courses.map(course => <Course
                                                course={course}
                                                key={course.id}
                                        >
                                        </Course>)
                                }
                        </div>
                </div>
        );
};

export default Courses;