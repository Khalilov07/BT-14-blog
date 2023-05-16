import React, { useState } from 'react';
import './aboutpage.css'

const AboutPage = () => {

    const [clicks, setClicks] = useState({
        left : 0,
        rigth : 0
    })

    const [allClicks, setAllClicks] = useState([]) // ["L", "R", "L", "L", "R", "R"]

    // примитивные данные это: number, string, boolean 

    const handleLeft = () => {
        const newClicks = {
            ...clicks,
            left : clicks.left + 1
        }
        setClicks(newClicks)
        const newAllClicks = allClicks.concat("L")
        setAllClicks(newAllClicks)
    }

    const handleRight = () => {
        const newClicks = {
            ...clicks,
            rigth : clicks.rigth + 1
        }
        setClicks(newClicks)
        const newAllClicks = allClicks.concat("R")
        setAllClicks(newAllClicks)
    }

    const handleZero = () => {
        const newClicks = {
            left : 0,
            rigth : 0
        }
        setAllClicks([])
        setClicks(newClicks)
    }

    // должна быть кнопка которая будет обнулять состояния

    return (
        <div className='about-wrapper'>

            <h1>left: {clicks.left}</h1>
            <h1>right: {clicks.rigth}</h1>
            <h1>{allClicks.join(", ")}</h1>

            <button onClick={handleLeft}>left</button>
            <button onClick={handleRight}>right</button>
            <button onClick={handleZero}>Zero</button>

        </div>
    );
};

export default AboutPage;

// функции для более больших задач,

    // <button onClick={() => setLikes(likes + 1)}>LIKE</button> - для более простых задач

    // counter - Это переменная где будто наши данные 
    // setCunter - Это функиця которая будет изменять наши данные

// ДЗ: объяснить мне почему я не могу использовать метод Push(), но, могу использовать метод Concat()