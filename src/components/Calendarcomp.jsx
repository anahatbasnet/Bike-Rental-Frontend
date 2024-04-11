import React, { useState } from "react";
import { format } from "date-fns";
import { Dropdown } from "./Dropdown";

export default function Calendarcomp() {
  const today = new Date();
  const [selectionRange, setSelectionRange] = useState({
    startDate: today,
    endDate: today,
  });

  const handleSelect = (selectedRange) => {
    setSelectionRange(selectedRange);
    console.log(selectedRange);
  };

  return (
    <div className="calendarWrap">
      <Dropdown
        label="Select dates"
        startDate={selectionRange.startDate}
        endDate={selectionRange.endDate}
        onChange={handleSelect}
      />
    </div>
  );
}
