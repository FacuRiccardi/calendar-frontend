import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateCalendar as DateCalendarUI } from "@mui/x-date-pickers/DateCalendar"

import './style.css'

function DateCalendar() {
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendarUI
        showDaysOutsideCurrentMonth
        fixedWeekNumber={6}
      />
    </LocalizationProvider>
  )
}

export default DateCalendar