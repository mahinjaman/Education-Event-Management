import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogComponents/BlogCard';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const [BlogPost, setBlockPost] = useState(null);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlockPost(data))
    },[])
    console.log(BlogPost);
    return (
        <div className='w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-20'>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            {
                BlogPost && BlogPost.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Blog;