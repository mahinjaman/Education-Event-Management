import React from 'react';
import Hero from '../../components/HomeComponents/Hero';
import AboutUs from '../../components/HomeComponents/AboutUs';
import Popular_course from '../../components/HomeComponents/Popular_course';
import { Helmet } from 'react-helmet-async';
import Featured from '../../components/HomeComponents/Featured';
import FunFact from '../../components/HomeComponents/FunFact';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero></Hero>
            <Featured></Featured>
            <AboutUs></AboutUs>
            <Popular_course></Popular_course>
            <FunFact></FunFact>
        </div>
    );
};

export default Home;