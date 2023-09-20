import styled from "@emotion/styled"

function DayLabel({ date }) {
  return (
    <DayContainer style={{ gridColumn: date.column, gridRow: date.row, borderRight: date.last && "0px", backgroundColor: (date.first || date.last) && "#F2F2F2" }}>
      <DayName>{date.name}</DayName>
      <DayNum>{date.num}</DayNum>
    </DayContainer>
  ) 
}

const DayContainer = styled.div`
  border: 2px solid #E0E0E0;
  border-top: 0px;
  border-left: 0px;
  display: flex;
  flex-direction: column;
  padding: 5px 8px;
`

const DayName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: gray;
`

const DayNum = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: black;
`

export default DayLabel