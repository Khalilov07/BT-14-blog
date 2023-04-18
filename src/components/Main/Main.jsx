import React from 'react';
import './main.css'


const Main = ({ a, b, total }) => {

    

    return (
        <main>
            <h1>сумма чисел {a} + {b} даёт нам {total}</h1>
        </main>
    );

};

export default Main;