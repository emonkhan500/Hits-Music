import React from 'react';
import Nav from '../Components/Nav/Nav';
import Banner from '../Components/Banner/Banner';

const Home = () => {
    return (
        <div className='max-w-[1920px]'>
            <Nav></Nav>
            <Banner></Banner>
        </div>
    );
};

export default Home;