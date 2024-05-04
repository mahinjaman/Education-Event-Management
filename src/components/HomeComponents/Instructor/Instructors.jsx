import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Instructors = () => {
    const [ instructors, setInstructors ] = useState([]);
    useEffect(()=>{
        fetch('instructors.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='bg-orange-50 py-28' data-aos="zoom-in-left">
            <div>
                <div className='text-center mb-14'>
                    <p className='text-[#FD6D4B] text-xl'>INSTRUCTORS</p>
                    <h4 className='font-bold text-5xl'>Course Instructors</h4>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-9/12 mx-auto gap-5 mb-5'>
                    {
                        instructors.map(instructor => <InstructorCard key={instructor.id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;