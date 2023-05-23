import React, { useEffect } from 'react';
import './homepage.css'
import axios from 'axios'
import Card from '../../components/Card/Card';
import { useState } from 'react';

const HomePage = () => {

    const [courses, setCourses] = useState([])

    const [showAll, setShowAll] = useState(true)

    // если showAll true то тогда отображаем все посты, иначе отображаем лишь те посты у которых статус true

    const filterdCourses = showAll ? courses : courses.filter(course => course.important === true)

    useEffect(() => {
        axios.get("http://localhost:3001/courses")
            .then(res => setCourses(res.data))
    }, [])

    return (
        <>
            <button onClick={() => setShowAll(!showAll)}>{showAll ? "Покзать важные" : "Показать все"}</button>
            <div className='item-wrapper'>
                {filterdCourses.map((course) => <Card key={course.id} title={course.title} duration={course.duration} status={course.important} />)}
            </div>
        </>
    );

};

export default HomePage;