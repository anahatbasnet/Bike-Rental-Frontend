import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const CalendarComp = ({ onSelectRange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    setShowCalendar(false); // Hide calendar after dates are selected
    onSelectRange(ranges.selection); // Notify parent component about the selected range
  };

  const today = new Date();
  const minDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  return (
    <div className="relative">
      <input
        type="text"
        value={`${formatDate(selectionRange.startDate)} - ${formatDate(
          selectionRange.endDate
        )}`}
        placeholder="Select Date Range"
        className="border border-gray-300 rounded-md py-2 px-3 w-[20rem] focus:outline-none focus:border-blue-500"
        onClick={() => setShowCalendar(true)}
      />
      {showCalendar && (
        <div className="absolute top-full left-0 z-10">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={minDate}
            showSelectionPreview={false} // Hide the menu for selecting different date ranges
            direction="vertical"
          />
        </div>
      )}
    </div>
  );
};

// Function to format date as 'MM/DD/YYYY'
const formatDate = (date) => {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export default CalendarComp;
