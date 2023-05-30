import React, { useEffect } from 'react';
import './homepage.css'
import axios from 'axios'
import Card from '../../components/Card/Card';
import { useState } from 'react';
import postServices from '../../services/services'

const HomePage = () => {

    const [courses, setCourses] = useState([])

    const [showAll, setShowAll] = useState(true)

    // если showAll true то тогда отображаем все посты, иначе отображаем лишь те посты у которых статус true

    const filterdCourses = showAll ? courses : courses.filter(course => course.important === true)

    useEffect(() => {
        postServices.getData()
            .then(res => setCourses(res.data))
    }, [])

    const changeImportant = (id) => {
        const post = courses.find(course => course.id === id) //
        const newChange = {
            ...post,
            important : !post.important
        }
        postServices.changeData(newChange, id)
            .then(res => setCourses(courses.map(course => course.id === res.data.id ? newChange : course)))
    }

    const deletePost = (id) => {
        postServices.deletePost(id)
            .then(res => console.log(res.data))
    }

    return (
        <>
            <button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Important" : "Show All"}</button>
            <div className='item-wrapper'>
                {filterdCourses.map((course) =>
                    <Card
                        key={course.id}
                        title={course.title}
                        duration={course.duration}
                        status={course.important}
                        changeImportant={() => changeImportant(course.id)}
                        deletePost={() => deletePost(course.id)}
                    />)}
            </div>
        </>
    );

};

export default HomePage;