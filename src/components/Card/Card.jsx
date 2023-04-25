import React from 'react';
import './card.css'

const Card = (props) => {

    return (
        <div>
            <div className='item'>
                <h2>theme: {props.title}</h2>
                <p>duration: {props.duration}</p>
            </div>
        </div>
    );
};

export default Card;