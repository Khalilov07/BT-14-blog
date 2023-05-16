import React from 'react';
import './homepage.css'
import axios from 'axios'
import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';

const HomePage = () => {

    const [courses, setCoueses] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/courses")
            .then(res => setCoueses(res.data))
    }, [])

    console.log(courses)
    
    return (
        <div className='item-wrapper'>
            {courses.map((course) => <Card key={course.id} title={course.title} duration={course.duration} />)}
        </div>
    );

};

export default HomePage;