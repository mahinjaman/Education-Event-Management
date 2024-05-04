import React, { useContext, useEffect, useState } from 'react';
import PopularCourseCard from './PopularCourseCard';
import { UserContext } from '../../../UserProvider/UserProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Popular_course = () => {
    const { addToCard } = useContext(UserContext);

    const [PopularCourse, setPopularCourse ] = useState([]);
    useEffect(()=>{
        fetch('popular_courses.json')
        .then(res => res.json())
        .then(data => setPopularCourse(data))
    },[])
    
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='p-5 md:w-10/12 lg:w-8/12 mx-auto flex flex-col items-center my-20 gap-4' data-aos="zoom-in-left">
            <h4 className='text-[#fd6d4b] text-lg font-semibold'>TOP POPULAR COURSE</h4>
            <h1 className='text-xl  md:text-4xl lg:text-5xl font-bold mb-4'>Pick A Course To Get Started</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {
                    PopularCourse.map(course => <PopularCourseCard key={course.id} handleAddToCard={addToCard} course={course}></PopularCourseCard>)
                }
            </div>
        </div>
    );
};

export default Popular_course;