import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserProvider/UserProvider';
const EventCard = ({ event }) => {
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const { event_id, event_title, thumbnail_url,date, time, location, short_description } = event;
    const handleDetails = () =>{
        if(!currentUser){
            alert('Please SignIn First')
            return navigate('/signin')
        }
        return navigate(`/event-details/:${event_id}`)
    }
    return (
        <div className='group shadow-xl p-5 rounded-md bg-slate-50' onClick={handleDetails}>
            <div className='relative overflow-hidden'>
                <img className='relative group-hover:scale-110 duration-500' src={thumbnail_url} alt="" />
                <p className='absolute top-5 right-5 font-bold text-xl duration-500 w-3/12 text-white bg-orange-400 group-hover:bg-emerald-500 p-2 text-center rounded-md border'>{date}</p>
            </div>
            <div className='leading-7 my-5' >
                <h1 className='text-xl font-bold mb-4'>{event_title}</h1>
                {short_description.length > 100 ? <p className='font-semibold mb-4'>{short_description.slice(0, 100)} <span className='text-red-500 font-bold underline'><Link to={'/details'}>Read More...</Link></span></p> 
                :
                <p className='font-semibold mb-4'>{short_description}</p>}
                <p className='text-emerald-500'><span className='font-semibold mb-4 text-black'>Time:</span> {time}</p>
                <p className='text-emerald-500'><span className='font-semibold mb-4 text-black'>Location:</span> {location}</p>
            </div>
        </div>
    );
};


EventCard.propTypes = {
    event: PropTypes.object.isRequired
};

export default EventCard;