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
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-center"
            >
                <Hero></Hero>
            </div>

            <div
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-center"
            >
                <Featured></Featured>
            </div>

            <div
                data-aos="zoom-in-left"
                data-aos-anchor-placement="top-center"
            >
                <AboutUs></AboutUs>
            </div>

            <div
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-center"
            >
                <Popular_course></Popular_course>
            </div>

            <div
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-center"
            >
                <FunFact></FunFact>
            </div>


            <div
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-center"
            >
                <GymBenefits></GymBenefits>
            </div>

            <div
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-center"
            >
                <Instructors></Instructors>
            </div>

            <div
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-center"
            >
                <Testimonial></Testimonial>
            </div>

            <div
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-center"

            >
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Home;