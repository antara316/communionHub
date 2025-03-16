import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaClock , FaStar} from "react-icons/fa";

const EventCard = ({event}) =>{
    return (
        <div className="bg-white shadow-lg roundd-lg overflow-hidden w-80">
            <div className="relative">
                <img src={event.image} alt = {event.title} className="w-full h-48 object-cover"/>
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-md">
                    <p className="text-sm font-bold ">{event.date}</p>
                </div>
            </div>

            <div className="p-4">
            <div className="flex items-center text-gray-500 text-sm mt-2">
            <SlCalender className="mr-2"/>
            <p>{event.dateDetails}</p>
            </div>

            <div className="flex items-center text-gray-500 text-sm mt-1">
            <FaClock className="mr-2"/>
            <p>{event.time}</p>
            </div>

            <p className="text-blue-600 text-sm mt-3 hover:underline cursor-pointer">
            <FaStar />
            Join In This Event
            </p>

            <button className="mt-4 bg-blue-600 text-white w-full py-2 rounded-md flex justify-center items-center gap-2 hover:bg-blue-700">
                Event Details
            </button>
            </div>
          
        </div>
    )
}

export default EventCard;