import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
        // State Date: 
        const [courses, setCourses] = useState([]);

        useEffect(() => {
                fetch('./fakedb.JSON')
                        .then(res => res.json())
                        .then(date => setCourses(date))
        }, [])
        return (
                <div>

                        <Header />
                        <div className="container">
                                <h2 className="text-center mt-5 text-success">Our Courses</h2>
                                <div className="mt-5 pb-5 row row-cols-1 row-cols-md-2 g-3 mx-auto">
                                        {
                                                courses.slice(0, 4).map(course => <Course
                                                        course={course}
                                                        key={course.id}
                                                >
                                                </Course>)
                                        }
                                </div>
                                <Link to="/courses">
                                        <h3 className="text-center text-success pb-5 see-more">See More</h3>
                                </Link>

                        </div>
                </div>
        );
};

export default Home;