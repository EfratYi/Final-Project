import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/public.css';  // Make sure the path is correct based on your folder structure

const localizer = momentLocalizer(moment);

function Calendar1() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/queues') // Adjust the endpoint as needed
      .then((res) => res.json())
      .then((data) => {
        console.log('Raw data from server:', data);

        const formattedEvents = data.map((event) => {
          const start = moment(event.date).set({ hour: event.hour, minute: event.minutes }).toDate();
          const end = moment(event.date).set({ hour: event.hour + 1, minute: event.minutes }).toDate();

          return {
            title: `${event.name },${event.type}`,
            start: start,
            end: end,
            ...event
          };
        }).filter(event => event !== null);

        setEvents(formattedEvents);
        console.log('Formatted events:', formattedEvents);
      })
      .catch((error) => console.error('Error fetching queues:', error));
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: '500px' }} // Ensure the calendar has enough height to be displayed
      />
      {selectedEvent && (
        <div className="modal-event">
          <h2>Event Details</h2>
          {/* <p><strong>Date:</strong> {selectedEvent.start.toLocaleDateString()}</p>
          <p><strong>Time:</strong> {selectedEvent.start.toLocaleTimeString()}</p> */}
          <p><strong>Name:</strong> {selectedEvent.name}</p>
          <p><strong>Type:</strong> {selectedEvent.type}</p>
          
        </div>
      )}
    </div>
  );
}

export default Calendar1;