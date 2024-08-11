import React from 'react';
import Nav from '../Components/Nav/Nav';
import Banner from '../Components/Banner/Banner';
import Release from '../Components/Release/Release';
import Production from '../Components/Production/Production';

const Home = () => {
    return (
        <div className='max-w-[1920px]'>
            <Nav></Nav>
            <Banner></Banner>
            <Release></Release>
            <Production></Production>
        </div>
    );
};

export default Home;