import styled from "@emotion/styled"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

function DurationSelect({ value, onChange, label, list }) {
  return (
    <DurationSelectContainer>
      <FormControl fullWidth>
        <InputLabel>Duration</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={(event) => { onChange(event.target.value) }}
        >
          {
            list.map((item, i) => (<MenuItem key={i} value={item}>{item}</MenuItem>))
          }
        </Select>
      </FormControl>
    </DurationSelectContainer>
  )
}

const DurationSelectContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
`

export default DurationSelect