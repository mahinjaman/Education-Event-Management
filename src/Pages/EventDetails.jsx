import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EventDetails = () => {
    const [events, setEvents] = useState(null)
    const params = useParams();
    console.log(params);
    const getData = async () => {
        try {
            const fetchData = await fetch('blog.json')
            const data = await fetchData.json()

            console.log(data);
            return data;
        }
        catch (err) {
            console.log(err);
        }}
        useEffect(() => {
            getData()
            .then(data => console.log(data))
        }, [params])
    return (
        <div>
            {/* <h1 className='font-bold text-7xl text-center py-10'>Events Available :- {events.length}</h1> */}

        </div>
    );
}
    
    
    // useEffect(()=>{
    //     fetch('blog.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data.data))
    // },[params])
    

    

export default EventDetails;