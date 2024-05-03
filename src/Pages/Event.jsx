import React, { useEffect, useState } from 'react';
import EventCard from '../components/Event/EventCard';

const Event = () => {
    const [ events, setEvents ] = useState(null)
    useEffect(()=>{
        fetch('events.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
    return (
        <div className='py-20'>
            <div className='md:w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    events && events.map(event => <EventCard key={event.event_id} event={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default Event;