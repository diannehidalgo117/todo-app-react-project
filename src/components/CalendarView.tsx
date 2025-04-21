import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarView = () => {
  const [date, setDate] = useState<Value>(new Date());

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
    // TODO: add logic here to filter tasks by the selected date
    console.log(newDate);
  };

  // Get day name (e.g., "Monday")
  const getDayName = (date: Date): string => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const getFormattedDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      {/* Display the selected date and day name */}
      {date instanceof Date && (
        <div className="mb-4 text-center">
          <h2 className="text-xl font-light text-rose-400">
            {getDayName(date)}
          </h2>
          <p className="text-3xl font-bold text-gray-800">
            {getFormattedDate(date)}
          </p>
        </div>
      )}

      <div className="calendar-container ">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="rounded-md border-none"
        />
      </div>
    </div>
  );
};
export default CalendarView;
