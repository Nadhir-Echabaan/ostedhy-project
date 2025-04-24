// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";


export default function BasicDateCalendar({ setSelectedDate }) {
  function handleDateChange(newDate) {
    setSelectedDate(newDate.format("YYYY-MM-DD"));
  }

  return (
    <div className="calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="date-calendar">
          <DateCalendar onChange={handleDateChange} />
        </div>
      </LocalizationProvider>
    </div>
  );
}
