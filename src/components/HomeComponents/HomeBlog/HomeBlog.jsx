import React, { useEffect, useState } from 'react';
import HomeBlogCard from './HomeBlogCard';

const HomeBlog = () => {
    const [newBlog, setNewBlog] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setNewBlog(data))
    },[])
    const displayBlog = newBlog.slice(0,3);
    return (
        <div className='py-20'>
            <div className='text-center mb-14 relative w-10/12 md:w-full mx-auto'>
                <p className='text-[#FD6D4B] text-xl'>OUR BLOG & ARTICAL</p>
                <h4 className='font-bold text-3xl lg:text-7xl'>Latest News Post</h4>
            </div>
            <div className='md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    displayBlog.map(blog => <HomeBlogCard key={blog._id} blog={blog}></HomeBlogCard>)
                } 
            </div>
        </div>
    );
};

export default HomeBlog;