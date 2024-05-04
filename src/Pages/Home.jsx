import React, { useEffect } from 'react';
import Hero from '../components/HomeComponents/Hero';
import AboutUs from '../components/HomeComponents/AboutUs';
import { Helmet } from 'react-helmet-async';
import Featured from '../components/HomeComponents/Featured';
import FunFact from '../components/HomeComponents/FunFact';
import GymBenefits from '../components/HomeComponents/GymBenefits';
import Testimonial from '../components/HomeComponents/Testimonial';
import Blog from '../components/HomeComponents/HomeBlog/HomeBlog';
import Instructors from '../components/HomeComponents/Instructor/Instructors';
import Popular_course from '../components/HomeComponents/PopularCourse/Popular_course';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div
            >
                <Hero></Hero>
            </div>

            <div>
                <Featured></Featured>
            </div>

            <div>
                <AboutUs></AboutUs>
            </div>

            <div>
                <Popular_course></Popular_course>
            </div>

            <div>
                <FunFact></FunFact>
            </div>


            <div>
                <GymBenefits></GymBenefits>
            </div>

            <div>
                <Instructors></Instructors>
            </div>

            <div>
                <Testimonial></Testimonial>
            </div>

            <div>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Home;