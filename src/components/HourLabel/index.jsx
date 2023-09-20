import styled from "@emotion/styled"

function HourLabel({ hour, column, row, left }) {
  return (
    <HourContainer style={{ gridColumn: column, gridRow: row, paddingLeft: left ? "0" : "15px", paddingRight: left ? "15px" : 0, textAlign: left ? "right" : "left" }}>
      {hour}
    </HourContainer>
  )
}

const HourContainer = styled.div`
  color: gray;
  font-weight: 400;
  font-size: 12px;
`

export default HourLabel