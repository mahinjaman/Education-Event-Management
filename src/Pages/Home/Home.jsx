import React from 'react';
import Hero from '../../components/HomeComponents/Hero';
import AboutUs from '../../components/HomeComponents/AboutUs';
import { Helmet } from 'react-helmet-async';
import Featured from '../../components/HomeComponents/Featured';
import FunFact from '../../components/HomeComponents/FunFact';
import GymBenefits from '../../components/HomeComponents/GymBenefits';
import Testimonial from '../../components/HomeComponents/Testimonial';
import Blog from '../../components/HomeComponents/Blog/Blog';
import Instructors from '../../components/HomeComponents/Instructor/Instructors';
import Popular_course from '../../components/HomeComponents/PopularCourse/Popular_course';

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
            <GymBenefits></GymBenefits>
            <Instructors></Instructors>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default Home;