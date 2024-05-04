import { useState } from "react";
import { useParams } from "react-router-dom";
import { BsJournalBookmark } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
const EventDetails = () => {
    const [events, setEvents] = useState([])
    const params = useParams();
    const id = parseInt(params.event_id)
    console.log(id);
    useState(() => {
        fetch('../../public/events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const exactData = events?.find(event => parseInt(event?.event_id) === id);

    return (
        <div className="py-20">
            {
                exactData && <div className="w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 ">
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <img className="rounded-md" src={exactData.thumbnail_url} alt="" />
                        <h1 className="text-4xl font-bold">{exactData.event_title}</h1>
                        <div className="flex gap-5">
                            <p className="flex items-center gap-2 font-semibold text-xl text-slate-500"><BsJournalBookmark className="text-emerald-500"></BsJournalBookmark> Lesson {exactData.lesson}</p>
                            <p className="flex items-center gap-2 font-semibold text-xl text-slate-500"><IoTimeOutline className="text-emerald-500"></IoTimeOutline>{exactData.time}</p>
                        </div>
                        <p className="flex items-center gap-2 font-semibold text-xl text-slate-500"><IoLocationOutline className="text-emerald-500"></IoLocationOutline>{exactData.location}</p>
                        <p className="text-lg lg:w-8/12">{exactData.short_description}</p>
                        <h3 className="text-3xl font-bold">Event Discription</h3>
                        <p className="leading-8">{exactData.description}</p>
                    </div>

                    <div className="p-5 bg-gray-100 h-fit rounded-md">
                        <img className="rounded-md" src={exactData.thumbnail_url} alt="" />
                        <div className="mt-5 flex flex-col gap-5 ">
                            <button className="bg-emerald-500 text-xl text-white font-semibold tracking-wide py-3 rounded-md">Buy Ticket ${exactData.ticket_price}</button>
                            <p className="text-lg text-gray-500">{exactData.time}</p>
                            <p className="text-lg text-gray-500">{exactData.date}</p>
                            <p className="text-lg text-gray-500 w-8/12">{exactData.location}</p>
                            <p className="text-lg text-gray-500">fitness@info.com</p>
                            <p className="text-lg text-gray-500">+880161111888</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}



export default EventDetails;