import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <div className="calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="date-calendar">
        <DateCalendar />
        </div>
      </LocalizationProvider>
    </div>
  );
}
