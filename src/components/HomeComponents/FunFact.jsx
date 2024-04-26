import React, { useEffect } from 'react';
import customers from '../../../public/images/fun-facts/customer.png';
import funFactBg from '../../../public/images/fun-facts/funfacts-icon.png'
import Spinner from '../../../public/images/icon/funfactSpinner.png'
import anim from '../../../public/images/icon/funfactAnime.png'
import funfactMainBg from '../../../public/images//fun-facts/fun-facts.jpg'
import { Counter } from '../../apps';
const FunFact = () => {
    useEffect(() =>{
        Counter(85, 'monthlyUser', 30);
        Counter(15, 'experience', 100);
        Counter(13, 'project', 100);
        Counter(10, 'happyCustomer', 100);
    })
    
    return (
        <div style={{ backgroundImage: `url(${funfactMainBg})`}} className=''>
            <div className='relative bg-blue-950 bg-opacity-40 py-20'>
                <div className='w-10/12 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-full'>
                        <div className='bg-cover bg-no-repeat lg:bg-contain md:p-20 md:bg-contain md:bg-[50%] lg:p-0 xl:bg-center xl:p-28' style={{ backgroundImage: `url(${funFactBg})` }}>
                            <div className='text-center p-8 flex flex-col items-center bg-slate-50 text-black  rounded-full md:p-20 md:gap-2 lg:p-6  xl:p-20 xl:gap-3
                    '>
                                <img src={customers} alt="Customers" />
                                <h1 className='md:text-xl font-bold'>MORE THAN 10K+ <br /> TRUSTED CUSTOMERS</h1>
                                <p className='text-[13px] md:text-[15px] lg:text-lg '>We hope this message finds you in good health and high spirits. As we continue to navigate through these challenging times, we want to extend our sincerest gratitude for your continued trust and support in our gym services.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-1 xl:w-10/12 xl:p-20'>
                            <div className='flex '>
                                <div className='text-center'>
                                    <h1 className='text-[#FD6D4B] text-7xl'><span id='monthlyUser'>0</span>K</h1>
                                    <p className='font-semibold text-xl'>Active monthly users</p>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <div className='text-center'>
                                    <h1 className='text-[#FD6D4B] text-7xl'><span id='experience'>0</span>K</h1>
                                    <p className='font-semibold text-xl'>Tears of experience</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='text-center'>
                                    <h1 className='text-[#FD6D4B] text-7xl'><span id='project'>0</span>K</h1>
                                    <p className='font-semibold text-xl'>Project Complete</p>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <div className='text-center'>
                                    <h1 className='text-[#FD6D4B] text-7xl'><span id='happyCustomer'>0</span>K</h1>
                                    <p className='font-semibold text-xl'>Happy Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='hidden absolute md:block md:top-16 md:w-20 lg:bottom-20 lg:left-8 xl:top-20 xl:left-32 upAndDown xl:w-32' src={anim} alt="" />
                <img className='hidden absolute md:block md:top-16 md:w-20 lg:top-20 lg:right-20 xl:top-20 xl:right-32 animate-spin-slow xl:w-32 ' src={Spinner} alt="" />
            </div>
        </div>
    );
};

export default FunFact;