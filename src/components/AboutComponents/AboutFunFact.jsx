import React, { useEffect } from 'react';
import { Counter } from '../../apps';

const AboutFunFact = () => {
    useEffect(()=>{
        Counter(3, 'trained', 1);
        Counter(15, 'classes', 3);
        Counter(97, 'satisfaction', 13);
        Counter(102, 'students', 17);
    },[])
    return (
        <div style={{ backgroundImage: `url(${'https://i.ibb.co/FHgdHRz/funfact-bg.png'})`}}>
            <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 bg-emerald-800 bg-opacity-60'>
                <div className='flex gap-4 items-center justify-start'>
                    <img className='w-20 p-5 bg-white rounded' src="https://i.ibb.co/Y76Qv9p/teacher.png" alt="" />
                    <div>
                        <h1 className='font-bold text-5xl'><span id='trained'>0</span>K</h1>
                        <p className='text-xl'>Successfully Trained</p>
                    </div>
                </div>

                <div className='flex gap-4 items-center justify-start'>
                    <img className='w-20 p-5 bg-white rounded' src="https://i.ibb.co/T2Jqtbw/completed-task.png" alt="" />
                    <div className='text-slate-900'>
                        <h1 className='font-bold text-5xl'><span id='classes'>0</span>K</h1>
                        <p className='text-xl'>Classes Completed</p>
                    </div>
                </div>

                <div className='flex gap-4 items-center justify-start'>
                    <img className='w-20 p-5 bg-white rounded' src="https://i.ibb.co/JpHQP6P/best-customer-experience.png" alt="" />
                    <div>
                        <h1 className='font-bold text-5xl'><span id='satisfaction'>0</span>K</h1>
                        <p className='text-xl'>Satisfaction Rate</p>
                    </div>
                </div>

                <div className='flex gap-4 items-center justify-start'>
                    <img className='w-20 p-5 bg-white rounded' src="https://i.ibb.co/BqGPcfQ/knowledge.png" alt="" />
                    <div>
                        <h1 className='font-bold text-5xl'><span id='students'>0</span>K</h1>
                        <p className='text-xl'>Students Community</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFunFact;