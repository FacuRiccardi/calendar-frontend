import styled from "@emotion/styled"

function DayEventsDisplay({ children, dayName, dayValue }) {
  return (
    <DayEventsContainer>
      <Header style={{ color: dayName === "TODAY" ? '#3B82F6' : 'rgba(255, 255, 255, 0.7)' }}>
        <DayName>{dayName}</DayName>
        <DayValue>{dayValue}</DayValue>
      </Header>
      <EventsDisplay>
        {children}
      </EventsDisplay>
    </DayEventsContainer>
  )
}

const DayEventsContainer = styled.div`
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  margin-top: 12px;
`

const DayName = styled.div`
  font-weight: bold;
  padding-right: 10px;
`
const DayValue = styled.div`
`

const EventsDisplay = styled.div`
`

export default DayEventsDisplay