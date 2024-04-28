import React, { useEffect, useState } from 'react';
import Instructor1 from '../../../public/images/instructor/insta-1.jpg'
import Instructor2 from '../../../public/images/instructor/insta-2.jpg'
import Instructor3 from '../../../public/images/instructor/insta-3.jpg'
import Instructor4 from '../../../public/images/instructor/insta-4.jpg'
import InstructorCard from './InstructorCard';
const Instructors = () => {
    const [ instructors, setInstructors ] = useState([]);
    useEffect(()=>{
        fetch('instructors.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <div className='bg-orange-50 py-28'>
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