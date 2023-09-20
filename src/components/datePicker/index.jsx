import styled from "@emotion/styled"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker as DatePickerUI } from "@mui/x-date-pickers/DatePicker"

function DatePicker({ value, onChange, label = "" }) {
  return (
    <DatePickerContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerUI
          format={"DD/MM/YYYY"}
          label={label}
          value={value}
          onChange={(newValue) => onChange(newValue)}
        />
      </LocalizationProvider>
    </DatePickerContainer>
  )
}

const DatePickerContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`

export default DatePicker