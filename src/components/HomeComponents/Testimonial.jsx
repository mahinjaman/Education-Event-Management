import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Testimonial = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='py-28 relative' data-aos="zoom-in-left">
            <div className='text-center mb-14 relative w-10/12 md:w-full mx-auto'>
                <p className='text-[#FD6D4B] text-xl'>TESTIMONIAL</p>
                <h4 className='font-bold text-3xl lg:text-7xl'>Clients Are Always Satisfied With Us</h4>
            </div>
            <div className='w-10/12 lg:w-8/12 xl:w-4/12 mx-auto relative'>
                <Carousel 
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showThumbs={false}
                    showIndicators={false}
                    transitionTime={1000}
                    stopOnHover={true}
                    verticalSwipe='standard'
                    axis='vertical'
                    emulateTouch={true}
                    centerSlidePercentage={true}
                    statusFormatter={(currentItem, total)=>{
                        return ''
                    }}
                >
                    <div className='p-10 relative'>
                        <div className='flex flex-col items-center justify-center text-center'>
                            <div>
                                <img src="https://ordainit.com/educate/assets/img/home-6/testimonial/avater/test-avater.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className='font-bold text-2xl '>Terry Florence</h4>
                                <div className='flex gap-2 items-center justify-center'>
                                    <p className='text-xl font-semibold'>CEO of (Megana)</p>
                                    <div className="rating">
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                    </div>
                                </div>
                                <p className='leading-8 text-lg'>From the moment I walked in, I felt the electric energy of motivation pulsating through every corner of this gym. The facilities are top-notch, equipped with everything needed to push your limits and surpass your fitness goals. </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-10 relative'>
                        <div className='flex flex-col items-center justify-center text-center'>
                            <div>
                                <img src="https://ordainit.com/educate/assets/img/home-6/testimonial/avater/test-avater.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className='font-bold text-2xl '>Terry Florence</h4>
                                <div className='flex gap-2 items-center justify-center'>
                                    <p className='text-xl font-semibold'>CEO of (Megana)</p>
                                    <div className="rating">
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 w-4" />
                                    </div>
                                </div>
                                <p className='leading-8 text-lg'>From the moment I walked in, I felt the electric energy of motivation pulsating through every corner of this gym. The facilities are top-notch, equipped with everything needed to push your limits and surpass your fitness goals. </p>
                            </div>
                        </div>
                    </div>
                    
                    
                </Carousel>
            </div>
            <img className='hidden md:absolute xl:inline-block left-28 top-44' src="https://i.ibb.co/nCtbdNr/l-shape.png" alt="" />
            <img className='hidden md:absolute xl:inline-block top-44 right-28' src="https://i.ibb.co/N3QNrFj/r-shape.png" alt="" />
        </div>
    );
};
export default Testimonial;