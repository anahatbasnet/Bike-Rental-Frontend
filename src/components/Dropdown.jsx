import React, { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export function Dropdown({ label, startDate, endDate, onChange }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (ranges) => {
    const formattedStartDate = format(ranges.selection.startDate, "yyyy-MM-dd");
    const formattedEndDate = format(ranges.selection.endDate, "yyyy-MM-dd");
    onChange({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    });
    setShowCalendar(false); // Hide the calendar after selecting dates
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCalendar(false); // Close the calendar if clicked outside the dropdown
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <label htmlFor="calendar">{label}</label>
      <input
        className="border border-gray-300 rounded-md py-2 px-3 md:w-[20rem] focus:outline-none focus:border-blue-500"
        type="text"
        value={` ${startDate}  To ${endDate}`}
        onClick={() => setShowCalendar(!showCalendar)} // Toggle calendar visibility on input click
        readOnly // Prevent user from editing the input directly
      />
      {showCalendar && (
        <DateRange
          ranges={[
            {
              startDate: new Date(startDate),
              endDate: new Date(endDate),
              key: "selection",
            },
          ]}
          onChange={handleSelect}
          showDateDisplay={false} // Hides the date display within the calendar
          minDate={new Date()} // Prevents selection of dates before today
          showSelectionPreview={false} // Disables today, tomorrow, next week shortcuts
        />
      )}
    </div>
  );
}
