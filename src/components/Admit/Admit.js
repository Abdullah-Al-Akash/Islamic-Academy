import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Admit.css';

const Admit = () => {
        // Catch Course Id by using useParams:
        const { courseId } = useParams()
        console.log("Course ID:", courseId);
        console.log(typeof (courseId));
        // Declare State:
        const [courses, setCourses] = useState([]);
        // Fetch Data:
        useEffect(() => {
                fetch('/fakedb.JSON')
                        .then(res => res.json())
                        .then(data => setCourses(data))
        }, [courseId]);

        // Show Admitted Course:
        const admitCourse = courses.find(course => course.id === +courseId);
        console.log(admitCourse);
        return (
                <div className="admit-section">
                        <h3>Hello Admit {courseId}</h3>

                </div>
        );
};

export default Admit;