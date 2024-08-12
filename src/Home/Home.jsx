import React from 'react';
import Nav from '../Components/Nav/Nav';
import Banner from '../Components/Banner/Banner';
import Release from '../Components/Release/Release';
import Production from '../Components/Production/Production';
import Artist from '../Components/artist/Artist';
import Logo from '../Components/Logo/Logo';

const Home = () => {
    return (
        <div className='max-w-[1920px]'>
            <Nav></Nav>
            <Banner></Banner>
            <Release></Release>
            <Production></Production>
            <Artist></Artist>
            <Logo></Logo>
        </div>
    );
};

export default Home;