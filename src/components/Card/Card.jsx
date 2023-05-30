import React from 'react';
import './card.css'

const Card = ({ title, duration, status, changeImportant, deletePost }) => {


    return (
        <div className='item'>
            <h2>theme: {title}</h2>
            <p>duration: {duration}</p>
            <p>status: {status ? "Important" : "Unimportant"}</p>
            <div className="btn-wrapper">
                <button onClick={() => changeImportant()}>make {status ? "unimportant" : "imporatant"}</button>
                <button onClick={() => deletePost()}>delete post</button>
            </div>
            {/* если статус неважный, то кнопка сделать важным, иначе кнопка сделать неважным */}
        </div>
    );
};

export default Card;