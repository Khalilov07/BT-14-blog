import React from 'react';
import './card.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Card = ({ title, duration, status, id }) => {


    return (
        <div className='item'>
            <h2>theme: {title}</h2>
            <p>duration: {duration}</p>
            <p>status: {status ? "Important" : "Unimportant"}</p>
            <div className="btn-wrapper">
                <Link to={`/course/${id}`}>Learn More</Link>
            </div>
        </div>
    );
};

export default Card;