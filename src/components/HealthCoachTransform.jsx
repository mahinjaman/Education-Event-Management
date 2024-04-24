import React from 'react';
import Exercise from '../../public/images/icon/exercise.png'
import Nutrition from '../../public/images/icon/nutrition.png'
import Guides from '../../public/images/icon/guides.png'
import OnlineClass from '../../public/images/icon/online-class.png'
import iconBg from '../../public/images/icon/card-bg.png'
import Carousel from './Slider';
import slideImg1 from '../../public/images/slider-images/slider1.png'
import slideImg2 from '../../public/images/slider-images/slider2.png'
import slideImg3 from '../../public/images/slider-images/slider3.png'
import slideImg4 from '../../public/images/slider-images/slider4.png'
import slideImg5 from '../../public/images/slider-images/slider5.png'
import slideImg6 from '../../public/images/slider-images/slider6.png'
const HealthCoachTransform = () => {
    const items = [
        <div className="item" data-value="1">
            <img src={slideImg1} alt="" />
        </div>,
        <div className="item" data-value="2">
            <img src={slideImg2} alt="" />
        </div>,
        <div className="item" data-value="3">
            <img src={slideImg3} alt="" />
        </div>,
        <div className="item" data-value="4">
            <img src={slideImg4} alt="" />
        </div>,
        <div className="item" data-value="5">
            <img src={slideImg5} alt="" />
        </div>,
        <div className="item" data-value="5">
            <img src={slideImg6} alt="" />
        </div>,
    ];

   
    return (
        <div className= 'mt-28 space-y-20 py-10'>
            {/* Main Health */}
            <div >
                <div className='text-center md:w-7/12 mx-auto'>
                    <h4 className='text-[#fd6d4b] text-lg font-semibold'>WHY HEALTH COACH</h4>
                    <h1 className='text-6xl font-semibold mb-10'>Transform Your Body, Transform Your Life</h1>
                </div>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:w-10/12 mx-auto'>
                    <div className='bg-white text-base-100 flex flex-col items-center p-5 duration-500 hover:bg-base-200 hover:text-white rounded text-center'>
                        <div className='bg-no-repeat bg-[100%] p-10' style={{ backgroundImage: `url(${iconBg})` }}>
                            <img className=' text-white' src={Exercise} alt="Exercise" />
                        </div>
                        <h1 className='font-semibold text-xl'>Exercise</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt,</p>
                    </div>
                    <div className='bg-white text-base-100 flex flex-col items-center p-5 duration-500 hover:bg-base-200 hover:text-white rounded text-center'>
                        <div className='bg-no-repeat bg-[100%] p-10' style={{ backgroundImage: `url(${iconBg})` }}>
                            <img className=' text-white' src={Nutrition} alt="Exercise" />
                        </div>
                        <h1 className='font-semibold text-xl'>Nutrition</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt,</p>
                    </div>
                    <div className='bg-white text-base-100 flex flex-col items-center p-5 duration-500 hover:bg-base-200 hover:text-white rounded text-center'>
                        <div className='bg-no-repeat bg-[100%] p-10' style={{ backgroundImage: `url(${iconBg})` }}>
                            <img className=' text-white' src={Guides} alt="Exercise" />
                        </div>
                        <h1 className='font-semibold text-xl'>Guides</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt,</p>
                    </div>
                    <div className='bg-white text-base-100 flex flex-col items-center p-5 duration-500 hover:bg-base-200 hover:text-white rounded text-center'>
                        <div className='bg-no-repeat bg-[100%] p-10' style={{ backgroundImage: `url(${iconBg})` }}>
                            <img src={OnlineClass} alt="Exercise" />
                        </div>
                        <h1 className='font-semibold text-xl'>Online Class</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt,</p>
                    </div>

                </div>
            </div>

            <div className='flex justify-center items-center gap-4'>
                <span className='w-2/12 border h-0'></span>
                <p className='text-2xl'>WE WORKED WITH GLOBAL LARGEST BRANDS</p>
                <span className='w-2/12 border h-0'></span>
            </div>

            {/* Slider */}
            <div className='p-10 md:w-10/12 mx-auto rounded bg-slate-400'>
                <Carousel items={items}></Carousel>
            </div>
        </div>
    );
};

export default HealthCoachTransform;