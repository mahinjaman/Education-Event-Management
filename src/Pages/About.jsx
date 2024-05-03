import React from 'react';
import { FcAbout } from "react-icons/fc";
import { MdOutlineScreenShare } from "react-icons/md";
import { RxLightningBolt } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { MdArrowForward } from "react-icons/md";
import AboutFunFact from '../components/AboutComponents/AboutFunFact';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='w-9/12 mx-auto py-20'>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-10'>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                        <img src={'https://i.ibb.co/bL7TcH9/al-imran.jpg'} alt="" />
                        <img className='w-full' src={'https://i.ibb.co/GxfNxF3/Whats-App-Image-2024-04-30-at-13-07-47-5f0c778c.jpg'} alt="" />
                    </div>
                    <div >
                        <img src={'https://i.ibb.co/41QF6H7/abdul-mannan.jpg'} alt="" />
                    </div>
                </div>
                <div >
                    <div>
                        <div className='mb-5'>
                            <p className='text-xl text-emerald-500 flex items-center gap-2'><FcAbout /> About</p>
                            <h1 className='text-5xl font-bold leading-[60px]'>We Are Always Ensure Best Course For Your <span className='text-emerald-500'>Learning</span></h1>
                            <p className='text-lg'>Welcome to our gym center, where fitness meets community! We're dedicated to empowering individuals of all levels to reach their health and wellness goals. With state-of-the-art equipment, expert trainers, and a supportive atmosphere, we're here to help you thrive on your fitness journey. Whether you're a beginner or a seasoned athlete, our diverse range of classes and personalized training programs cater to everyone. Join us and discover the strength, energy, and confidence to transform your life</p>
                        </div>
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='bg-emerald-500 p-4 rounded-md'>
                                <MdOutlineScreenShare className='text-4xl text-white' />
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>Sharing A Screen</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, asperiores!</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3 mb-5'>
                            <div className='bg-emerald-500 p-4 rounded-md'>
                                <RxLightningBolt className='text-4xl text-white' />
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>Presenter Control</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, asperiores!</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button className='py-3 px-10 bg-emerald-500 text-white font-semibold text-lg rounded flex items-center'><Link to={'/contact'}>Admission Open</Link> <span className='text-2xl ml-2'><MdArrowForward></MdArrowForward></span></button>
                        <img src="https://i.ibb.co/nR4xhjQ/download.png" alt="" />
                    </div>
                </div>
                
            </div>
            <div>
                <AboutFunFact></AboutFunFact>
            </div>
        </div>
    );
};

export default About;