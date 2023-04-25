import React from 'react';
import './homepage.css'
import Card from '../../components/Card/Card';

const HomePage = () => {

    const title1 = "HTML"
    const duration1 = "2m"
    const title2 = "css"
    const duration2 = "2m"
    const title3 = "js"
    const duration3 = "2m"

    return (
        <div className='item-wrapper'>
           <Card title={title1} duration={duration1} />
           <Card title={title2} duration={duration2} />
           <Card title={title3} duration={duration3} />
        </div>
    );
};

export default HomePage;