import React from 'react';
import Hero from '../../components/HomeComponents/Hero';
import HealthCoachTransform from '../../components/HomeComponents/HealthCoachTransform';
import AboutUs from '../../components/HomeComponents/AboutUs';
import Popular_course from '../../components/HomeComponents/Popular_course';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HealthCoachTransform></HealthCoachTransform>
            <AboutUs></AboutUs>
            <Popular_course></Popular_course>
        </div>
    );
};

export default Home;