import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../components/BlogComponents/BlogCard';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const BlogPost = useLoaderData();
    
    return (
        <div className='w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-20'>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            {
                BlogPost.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Blog;