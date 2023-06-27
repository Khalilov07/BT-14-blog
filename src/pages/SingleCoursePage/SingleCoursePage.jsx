import React from 'react';
import './singlecoursepage.css'

const SingleCoursePage = () => {

    // получить ID - который находится в url
    // const id = id
    // axios.get(`http://localhost:3001/courses/${id}`)
    // получаем данные, переноси эти данные в состояние
    // useParams()

    return (
        <div>
            <p>Theme: </p>
            <p>Duration: </p>
            <p>Status: </p>
            <p>Information: </p>
            <button>Make Important</button>
            <button>Delete Course</button>
            <button>Edit Course</button>
        </div>
    );
};

export default SingleCoursePage;