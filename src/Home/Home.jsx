import React from 'react';
import Nav from '../Components/Nav/Nav';
import Banner from '../Components/Banner/Banner';
import Release from '../Components/Release/Release';

const Home = () => {
    return (
        <div className='max-w-[1920px]'>
            <Nav></Nav>
            <Banner></Banner>
            <Release></Release>
        </div>
    );
};

export default Home;