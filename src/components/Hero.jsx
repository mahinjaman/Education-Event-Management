import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import heroImage from '../../public/images/hero-img.png';
import heroImgBg from '../../public/images/hero-img-bg.png';


const Hero = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col justify-center space-y-7 mb-10 lg:mb-0'>
                <h1 className='text-4xl lg:text-7xl font-bold'>Healthy In Side Fresh Our Side.</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='flex flex-col md:flex-row gap-5'>
                    <button className=' bg-[#fd6d4b] font-bold text-white tracking-wide text-lg py-4 px-5 rounded-md duration-300 hover:shadow-xl hover:bg-base-100 hover:scale-105'><NavLink to={'/course-details'}>Find The Course</NavLink></button>
                    <a className='flex items-center gap-3' href="https://youtu.be/rYXPu8XOfXA?si=iA4pYduFFh-vzid_"><FaPlay className='animate-pulse'></FaPlay><span>Watch Now</span></a>
                </div>
            </div>
            <div className='bg-no-repeat bg-top' style={{backgroundImage: `url(${heroImgBg})`}}>
                <img src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;