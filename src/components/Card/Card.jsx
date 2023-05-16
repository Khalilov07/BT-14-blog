import React from 'react';
import './card.css'

const Card = ({ title, duration }) => {


    return (
        <div className='item'>
            <h2>theme: {title}</h2>
            <p>duration: {duration}</p>
        </div>
    );
};

export default Card;