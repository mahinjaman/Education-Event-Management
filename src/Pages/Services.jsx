import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../components/services/ServicesCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='w-8/12 mx-auto py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServicesCard key={service.service_id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;