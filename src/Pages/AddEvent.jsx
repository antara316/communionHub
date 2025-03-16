import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "", image: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.description && newEvent.image) {
      let events = JSON.parse(localStorage.getItem("events")) || [];
      events.push(newEvent);
      localStorage.setItem("events", JSON.stringify(events));
      navigate("/events");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800">Post Your Event</h2>
      <form onSubmit={addEvent} className="mt-6 space-y-4 bg-white p-6 shadow-md rounded-lg">
        <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="date" name="date" value={newEvent.date} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Event Description" value={newEvent.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="image" placeholder="Image URL" value={newEvent.image} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit Event</button>
      </form>
    </div>
  );
}

export default AddEvent;