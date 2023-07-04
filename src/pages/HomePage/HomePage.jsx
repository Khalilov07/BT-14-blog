import React, { useEffect } from 'react';
import './homepage.css'
import Card from '../../components/Card/Card';
import { useState } from 'react';
import postServices from '../../services/postServices'
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { Snackbar } from '@mui/material';

const HomePage = () => {

    const [courses, setCourses] = useState([])

    const [showAll, setShowAll] = useState(true)

    const [open, setOpen] = useState(false);

    // если showAll true то тогда отображаем все посты, иначе отображаем лишь те посты у которых статус true

    const filterdCourses = showAll ? courses : courses.filter(course => course.important === true)

    useEffect(() => {
        postServices.getData()
            .then(res => setCourses(res.data))
    }, [])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                X
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <Button style={{ margin: "20px" }} variant="contained" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Important" : "Show All"}</Button>
            <div className='item-wrapper'>
                {filterdCourses.map((course) =>
                    <Card
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        duration={course.duration}
                        status={course.important}
                    />)}
            </div>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Deleted"
                action={action}
            />

        </>
    );

};

export default HomePage;