import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const HomeBlogCard = ({blog}) => {
    const { _id, thumbnail_url, title, posted_date, category} = blog;
    return (
        <div className='group p-5 shadow-lg rounded-md'>
            <div className='relative overflow-hidden rounded-md '>
                <img className='duration-500 relative group-hover:scale-110 group-hover:-rotate-2' src={thumbnail_url} alt={title} />
                <p className='absolute bottom-5 right-5 text-white bg-[#FD6D4B] font-semibold py-2 px-5 rounded'>{posted_date}</p>
            </div>
            <div className='flex flex-col gap-3 py-5 items-start'>
                <p className='text-xl text-[#FD6D4B] '>{category}</p>
                <h3 className='font-bold duration-500 text-black text-2xl hover:text-[#FD6D4B]'>{title}</h3>
                <button className='border border-[#FD6D4B] py-2 px-5 font-semibold rounded-md text-[#FD6D4B]'><Link to={`/blog_details/${_id}`}>More Details</Link></button>
            </div>
        </div>
    );
};

HomeBlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default HomeBlogCard;