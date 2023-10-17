import React from "react";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const App = () => {
  const [schedule, setSchedules] = useState([]);
  useEffect(() => {
    setSchedules([
      { title: "event 1", date: "2023-10-12" },
      { title: "event 2", date: "2023-10-02" },
    ]);
  }, []);
  //console.log(schedule);

  const handleEventClick = (info) => {
    if (info !== undefined) {
      console.log(info.event);
    }
  };

  const handleDateClick = (info) => {
    if (info !== undefined) {
      console.log(info);
    }
  };

  const handleAddEvent = () => {
    console.log("add event");
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "title",
          end: "today custom prev next",
        }}
        customButtons={{
          custom: {
            text: "add",
            click: handleAddEvent,
          },
        }}
        weekends={false}
        events={schedule}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </>
  );
};

export default App;
