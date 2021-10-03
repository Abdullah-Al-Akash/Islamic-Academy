import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Header from '../Header/Header';

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
                                <h2>Our Course</h2>
                                <div class="row row-cols-1 row-cols-md-2 g-3">
                                        {
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

export default Home;