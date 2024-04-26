import React, { useEffect, useState } from 'react';

const Popular_course = () => {
    const [PopularCourse, setPopularCourse ] = useState([]);
    useEffect(()=>{
        fetch('popular_courses.json')
        .then(res => res.json())
        .then(data => setPopularCourse(data))
    },[])
    console.log(PopularCourse);
    return (
        <div>
            <h4 className='text-[#fd6d4b] text-lg font-semibold'>TOP POPULAR COURSE</h4>
            <h1 className='text-xl  md:text-4xl lg:text-5xl font-bold mb-4'>Pick A Course To Get Started</h1>
            
        </div>
    );
};

export default Popular_course;