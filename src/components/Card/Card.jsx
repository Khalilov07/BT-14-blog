import React from 'react';
import './card.css'

const Card = ({ title, duration, status }) => {


    return (
        <div className='item'>
            <h2>theme: {title}</h2>
            <p>duration: {duration}</p>
            <p>status: {status ? "Важный" : "Неважный"}</p>
        </div>
    );
};

export default Card;