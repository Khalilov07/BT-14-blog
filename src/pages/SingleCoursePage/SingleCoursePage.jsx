import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './single.module.css'
import Button from '@mui/material/Button';

const SingleCoursePage = () => {

    const { id } = useParams()

    const [data, setData] = useState([])

    const [editMode, setEditMode] = useState(false)

    const [newTitle, setNewTitle] = useState('')

    const [newDuration, setNewDuration] = useState(0)

    const navigate = useNavigate()

    // получить ID - который находится в url
    // const id = id
    // axios.get(`http://localhost:3001/courses/${id}`)
    // получаем данные, переноси эти данные в состояние
    // useParams() = id

    const deleteCourse = () => {
        axios.delete(`http://localhost:3001/courses/${id}`)
            .then(res => {
                navigate("/")
            })
    }

    const makeImportant = () => {

        const newData = {
            title: data.title,
            duration: data.duration,
            important: !data.important
        }

        axios.put(`http://localhost:3001/courses/${id}`, newData)
            .then(res => setData(res.data))
    }

    const editCourse = () => {

        const newCourse = {
            title : newTitle,
            duration : newDuration,
            important : data.important
        }

        axios.put(`http://localhost:3001/courses/${id}`, newCourse)
            .then(res => {
                setEditMode(false)
                setData(res.data)
            })

    }

    useEffect(() => {
        axios.get(`http://localhost:3001/courses/${id}`)
            .then(res => setData(res.data))
    }, [])

    console.log(data)

    return (
        <div className={styles.single__card}>
            <img className={styles.card__img} src="https://picsum.photos/1079/620?grayscale" alt="" />
            <hr style={{ margin: "10px 0 30px" }} />

            {
                editMode === true ?
                    <div className={styles.editMode}>
                        <input
                            type="text"
                            placeholder='Enter New-Title...'
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder='Enter New-Duration'
                            value={newDuration}
                            onChange={(e) => setNewDuration(e.target.value)}
                        />

                        <Button
                            variant="contained"
                            color="success"
                            onClick={editCourse}
                        >
                            Save
                        </Button>

                    </div>
                    :
                    <>
                        <div className={styles.card__descr1}>
                            <p>Theme: {data.title}</p>
                            <p>Duration: {data.duration}</p>
                        </div>
                        <div className={styles.card__descr2}>
                            <p>Status: {data.important ? "Важный" : "Не важный"} </p>
                            <p>Information: </p>
                        </div>

                        <div className={styles.card__buttons}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={makeImportant}
                            >
                                Make Important
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={deleteCourse}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => setEditMode(true)}
                            >
                                Edit
                            </Button>
                        </div>
                    </>
            }
        </div>
    );
};

export default SingleCoursePage;