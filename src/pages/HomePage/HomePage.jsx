import React, { useEffect } from 'react';
import './homepage.css'
import axios from 'axios'
import Card from '../../components/Card/Card';
import { useState } from 'react';

const HomePage = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/courses")
            .then(res => setCourses(res.data))
    }, [])

    return (
        <div className='item-wrapper'>
            {courses.map((course) => <Card key={course.id} title={course.title} duration={course.duration} />)}
        </div>
    );

};

export default HomePage;