import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import benefitsMainImg from '../../../public/images/GymBenefits/benefits.webp'
import benefitsAnime1 from '../../../public/images/GymBenefits/GymAnime1.png'
import benefitsAnime2 from '../../../public/images/GymBenefits/GymAnime2.png'

const GymBenefits = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2  w-10/12 xl:w-8/12 mx-auto my-20 items-center gap-10'>
            <div className='flex flex-col text-via-blue-950'>
                <h4 className='text-[#fd6d4b] text-lg font-semibold mb-4'>GYM BENEFITS</h4>
                <h1 className='text-5xl font-bold mb-5'>Experience The Ultimate Gym To Workout</h1>
                <p className='text-lg leading-loose mb-5'>
                    Gym workouts offer a multitude of benefits, including improved physical fitness, increased strength and endurance, better cardiovascular health, stress relief, enhanced mood, and opportunities for social interaction and support.
                </p>
                <div className='grid grid-cols-2 p-5 gap-5 bg-blue-950 rounded-md text-base-200 mb-5'>
                    <p className='flex items-center gap-2 font-semibold'><FaRegCheckCircle></FaRegCheckCircle> 24 Hours Access</p>
                    <p className='flex items-center gap-2 font-semibold'><FaRegCheckCircle></FaRegCheckCircle> Lifetime Access</p>
                    <p className='flex items-center gap-2 font-semibold'><FaRegCheckCircle></FaRegCheckCircle> Personal Trainer</p>
                    <p className='flex items-center gap-2 font-semibold'><FaRegCheckCircle></FaRegCheckCircle> Online Access</p>
                </div>
                <button className='primary-btn md:w-6/12 xl:w-4/12'>
                    <Link to={'/contact'}>Discover More</Link>
                </button>
            </div>

            <div className='flex lg:ml-10 flex-col before:w-8/12 items-center relative p-10 before:absolute md:before:w-6/12  before:h-[70%] before:bg-[#fd6d4b] before:-z-10 md:before:left-32 md:before:top-8 lg:before:left-7 lg:before:top-7 before:rounded-md xl:before:w-8/12'>
                <img className='rounded-lg' src={benefitsMainImg} alt="" />
                <img className='hidden absolute md:block top-36 md:left-20 lg:-left-5  -z-20 upAndDown' src={benefitsAnime2} alt="" />
                <img className='hidden absolute md:block top-5 md:right-28 lg:right-4 xl:right-5 -z-10 upAndDown' src={benefitsAnime1} alt="" />
            </div>
        </div>
    );
};

export default GymBenefits;