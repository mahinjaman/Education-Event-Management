import React from 'react';
import PropTypes from 'prop-types';
const InstructorCard = ({instructor}) => {
    const { name, position, social, author_img } = instructor;
    console.log(social);
    return (
        <div className='relative flex flex-col justify-center items-center overflow-hidden group text-white'>
            <div className='relative overflow-hidden flex flex-col items-center'>
                <img className='relative overflow-hidden duration-500 group-hover:scale-110' src={author_img} alt="" />

                <div className='absolute text-center w-full py-5 -bottom-40 duration-500 group-hover:bottom-0 bg-gradient-to-t from-black to-transparent'>
                    <h4 className='text-xl font-bold mb-3'>{name}</h4>
                    <p className='font-bold mb-3'>{position}</p>
                    <div>
                        <ul className='flex gap-5 justify-center items-center py-3'>
                            {
                                social.map((item, idx) => <li key={idx}><a href={item.link}><img className='w-5' src={item.icon} alt="" /></a></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

InstructorCard.propTypes = {
    instructor: PropTypes.object.isRequired
};

export default InstructorCard;