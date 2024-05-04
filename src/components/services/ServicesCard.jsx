import React from 'react';
import { MdAccessTime } from "react-icons/md";
const ServicesCard = ({service}) => {
    const { service_title,thumbnail_url,description,price,time} = service;
    return (
        <div className='p-5 group bg-gray-100 rounded-md flex flex-col'>
            <div className='rounded-md overflow-hidden'> 
                <img className='group-hover:scale-105 duration-500' src={thumbnail_url} alt="" />
            </div>
            <div className='flex flex-col gap-3 mt-5 flex-grow mb-5'>
                <h3 className='font-bold text-2xl'>{service_title}</h3>
                <p className='text-lg font-semibold flex items-center gap-2'><MdAccessTime className='text-emerald-500'></MdAccessTime> Time: {time}</p>
                <p>{description}</p>
            </div>
            <button className="bg-emerald-500 text-xl text-white font-semibold tracking-wide py-3 rounded-md">Buy Ticket ${price}</button>
        </div>
    );
};

export default ServicesCard;