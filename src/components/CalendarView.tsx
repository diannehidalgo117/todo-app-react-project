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
    return `${date.toLocaleString("default", {
      month: "long"
    })} ${date.getDate()}, ${date.getFullYear()}`;
  };

  // TODO: add logic to go back to today's date
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Display the selected date and day name */}
      {date instanceof Date && (
        <div className="text-center py-6">
          <h2 className="text-rose-400 font-normal">{getDayName(date)}</h2>
          <p className="text-2xl font-bold text-gray-800 mt-1">
            {getFormattedDate(date)}
          </p>
        </div>
      )}

      <div className="calendar-container w-full py-0 pt-0 pb-3">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="rounded-md border-none"
          navigationLabel={({ date }) =>
            `${date.toLocaleString("default", {
              month: "long"
            })} ${date.getFullYear()}`
          }
        />
      </div>
    </div>
  );
};

export default CalendarView;
