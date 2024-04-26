import React from 'react';
import customers from '../../../public/images/fun-facts/customer.png';
import funFactBg from '../../../public/images/fun-facts/funfacts-icon.png'
const FunFact = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-full'>
                <div className='bg-cover bg-no-repeat lg:bg-contain md:p-20 md:bg-contain md:bg-[50%] lg:p-0 xl:bg-center xl:p-28' style={{backgroundImage: `url(${funFactBg})`}}>
                    <div className='text-center p-8 flex flex-col items-center bg-slate-50 text-black  rounded-full md:p-20 md:gap-2 lg:p-6  xl:p-20 xl:gap-3
                    '>
                        <img src={customers} alt="Customers" />
                        <h1 className='md:text-xl font-bold'>MORE THAN 10K+ <br /> TRUSTED CUSTOMERS</h1>
                        <p className='text-[13px] md:text-[15px] lg:text-lg '>We hope this message finds you in good health and high spirits. As we continue to navigate through these challenging times, we want to extend our sincerest gratitude for your continued trust and support in our gym services.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-1'>
                    <div className='text-center'>
                        <h1 className='text-[#FD6D4B] text-7xl'><span>0</span>K</h1>
                        <p className='font-semibold text-xl'>Active monthly users</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[#FD6D4B] text-7xl'><span>0</span>K</h1>
                        <p className='font-semibold text-xl'>Active monthly users</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[#FD6D4B] text-7xl'><span>0</span>K</h1>
                        <p className='font-semibold text-xl'>Active monthly users</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[#FD6D4B] text-7xl'><span>0</span>K</h1>
                        <p className='font-semibold text-xl'>Active monthly users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunFact;