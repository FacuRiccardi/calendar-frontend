import styled from "@emotion/styled"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { TimeField } from "@mui/x-date-pickers/TimeField"

function TimePicker({ value, onChange, label = "" }) {
  return (
    <TimePickerContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeField
          label={label}
          value={value}
          onChange={(newValue) => onChange(newValue)}
          format="HH:mm"
        />
      </LocalizationProvider>
    </TimePickerContainer>
  )
}

const TimePickerContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`

export default TimePicker