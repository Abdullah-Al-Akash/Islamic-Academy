import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Course from '../Course/Course';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
        // State Date: 
        const [courses, setCourses] = useState([]);
        // Fetch Data From Database:
        useEffect(() => {
                fetch('./fakedb.JSON')
                        .then(res => res.json())
                        .then(date => setCourses(date))
        }, [])
        return (
                <div>
                        {/* Added Header Section */}
                        <Header />
                        <div className="course-section">
                                <div className="container pt-5 pb-5">
                                        <h1 style={{ 'textDecoration': 'underline' }} className="text-center mt-2 brand-color fw-bold">Our Courses</h1>
                                        <div className="mt-5 pb-5 row row-cols-1 row-cols-md-2 g-3 mx-auto">
                                                {/* Using Map for show all Course */}
                                                {
                                                        courses.slice(0, 4).map(course => <Course
                                                                course={course}
                                                                key={course.id}
                                                        >
                                                        </Course>)
                                                }
                                        </div>
                                        <Link to="/courses">
                                                <div className="text-center">
                                                        <button type="button" className="btn brand-btn text-white fw-bold pt-2">See More Courses <i className="fas fa-arrow-right"></i></button>
                                                </div>
                                        </Link>
                                </div>
                        </div>
                        {/* Added Contact Section */}
                        <Contact />
                </div>
        );
};

export default Home;