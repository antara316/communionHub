import React from "react";
import EventCard from "./EventCard";
import AddEvent from "./AddEvent";

const EventPage = () =>{

    const [events, setEvents] = useState([]);

    return (
  <div className="p-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800">Upcoming Events</h2>
    <Link to="/add-event" className="block text-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4">Add New Event</Link>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {events.length > 0 ? events.map((event, index) => <EventCard key={index} event={event} />) : <p className="text-center text-gray-600">No events available. Add one!</p>}
    </div>
  </div>
);
}

export default EventPage;