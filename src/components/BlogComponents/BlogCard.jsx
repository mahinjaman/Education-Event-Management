import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward } from "react-icons/md";
import { FcSms } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import PropTypes from 'prop-types'
const BlogCard = ({blog}) => {
    const { _id, comments, posted_date, thumbnail_url, title } = blog;
    return (
        <div className='bg-slate-300 p-5 rounded-md group flex flex-col gap-4'>
            <div className='rounded-md overflow-hidden'>
                <img className='group-hover:scale-110 duration-500' src={thumbnail_url} alt="" />
            </div>
            <div className='flex-grow'>
                <div className='flex justify-between mb-4'>
                    <p className='flex items-center gap-2'><SlCalender className='text-emerald-500 text-2xl'></SlCalender> {posted_date}</p>
                    <p className='flex items-center gap-2'><FcSms className='text-2xl'></FcSms> Comments ({comments})</p>
                </div>
                <h4 className='font-bold text-xl lg:text-2xl'>{title}</h4>
            </div>
            
            <div>
                <button className='py-3 px-10 bg-emerald-500 text-white font-semibold text-lg rounded flex items-center'><Link to={'/blog-details'}>Read More</Link> <span className='text-2xl ml-2'><MdArrowForward></MdArrowForward></span></button>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogCard;