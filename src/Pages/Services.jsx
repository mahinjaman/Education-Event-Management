import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <h1 className='font-bold text-7xl text-center py-10'>Services Available :- {services.length}</h1>

        </div>
    );
};

export default Services;