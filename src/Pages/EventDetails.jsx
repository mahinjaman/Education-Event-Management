import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EventDetails = () => {
    
    const getLoaderData = useLoaderData()
    
    return (
        <div>
            {/* <h1 className='font-bold text-7xl text-center py-10'>Events Available :- {events.length}</h1> */}
        </div>
    );
}
    
    

export default EventDetails;