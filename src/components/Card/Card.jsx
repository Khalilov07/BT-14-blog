import React from 'react';
import './card.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Card = ({ title, duration, status, changeImportant, deletePost, id }) => {


    return (
        <div className='item'>
            <h2>theme: {title}</h2>
            <p>duration: {duration}</p>
            <p>status: {status ? "Important" : "Unimportant"}</p>
            <div className="btn-wrapper">
                <Button style={{color: "white"}} onClick={() => changeImportant()}>make {status ? "unimportant" : "imporatant"}</Button>
                <Button style={{color: "white"}} onClick={() => deletePost()}>delete post</Button>
                <Link to={`/course/${id}`}>Learn More</Link>
            </div>
            {/* если статус неважный, то кнопка сделать важным, иначе кнопка сделать неважным */}
        </div>
    );
};

export default Card;