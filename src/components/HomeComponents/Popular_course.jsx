import React, { useEffect, useState } from 'react';
import PopularCourseCard from './PopularCourseCard';

const Popular_course = () => {
    const [PopularCourse, setPopularCourse ] = useState([]);
    useEffect(()=>{
        fetch('popular_courses.json')
        .then(res => res.json())
        .then(data => setPopularCourse(data))
    },[])
    
    return (
        <div className='w-10/12 mx-auto flex flex-col items-center my-24 gap-4'>
            <h4 className='text-[#fd6d4b] text-lg font-semibold'>TOP POPULAR COURSE</h4>
            <h1 className='text-xl  md:text-4xl lg:text-5xl font-bold mb-4'>Pick A Course To Get Started</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    PopularCourse.map(course => <PopularCourseCard key={course.id} course={course}></PopularCourseCard>)
                }
            </div>
        </div>
    );
};

export default Popular_course;