import React from "react";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const App = () => {
  const [schedule, setSchedules] = useState([]);
  useEffect(() => {
    setSchedules([
      { title: "event 1", date: "2023-10-12" },
      { title: "event 2", date: "2023-10-02" },
    ]);
  }, []);
  console.log(schedule);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={schedule}
      />
    </>
  );
};

export default App;
