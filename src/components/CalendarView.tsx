import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarOnChangeProps {
  action: string;
  activeStartDate: Date | null;
  value: Value;
  view: string;
}

const CalendarView = () => {
  const [date, setDate] = useState<Value>(new Date());
  // Add a separate state for the active month view
  const [activeStartDate, setActiveStartDate] = useState<Date>(new Date());

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
    // TODO: add logic here to filter tasks according to the selected date
    console.log(newDate);
  };

  // Handle month/year navigation changes
  const handleActiveStartDateChange = ({
    activeStartDate: newActiveStartDate
  }: CalendarOnChangeProps) => {
    if (newActiveStartDate) {
      setActiveStartDate(newActiveStartDate);
    }
  };

  // Get day name (e.g., "Monday")
  const getDayName = (date: Date): string => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Get formatted date (e.g., "January 1, 2023")
  const getFormattedDate = (date: Date): string => {
    return `${date.toLocaleString("default", {
      month: "long"
    })} ${date.getDate()}, ${date.getFullYear()}`;
  };

  // Reset calendar to today's date
  const goToToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    setDate(today);
    setActiveStartDate(today); // Also update the active month view
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Display the selected date and day name */}
      {date instanceof Date && (
        <div className="text-center py-6">
          <h2 className="text-rose-400 font-normal">{getDayName(date)}</h2>
          <p className="text-2xl font-bold text-gray-800 mt-1">
            {getFormattedDate(date)}
          </p>

          {/* Today button*/}
          <button
            onClick={goToToday}
            className="mt-3 px-4 py-1 bg-rose-50 hover:bg-rose-100
                  text-rose-600 text-sm rounded-full transition-colors
                  border border-rose-200 focus:outline-none focus:ring-2
                  focus:ring-rose-500 focus:ring-offset-2"
          >
            Back to Today
          </button>
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
          view="month"
          onActiveStartDateChange={handleActiveStartDateChange}
          activeStartDate={activeStartDate}
        />
      </div>
    </div>
  );
};

export default CalendarView;
