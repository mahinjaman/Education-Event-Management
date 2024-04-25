import React from 'react';
import Hero from '../../components/HomeComponents/Hero';
import HealthCoachTransform from '../../components/HomeComponents/HealthCoachTransform';
import AboutUs from '../../components/HomeComponents/AboutUs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HealthCoachTransform></HealthCoachTransform>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;