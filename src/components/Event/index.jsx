import styled from "@emotion/styled"

function Event({ title, date, duration, sharesWith = 1, position = 0 }) {
  const topPosition = ((date.hour() - 7) * 60 + date.minute()) * 100 / 660
  const height = duration < 60 ?
    60 * 100 / 660
    : duration * 100 / 660
  
  const width = 100 / sharesWith
  const leftPosition = width * position

  return (
    <EventContainer style={{ top: `${topPosition}%`, height: `${height}%`, left: `${leftPosition}%`, width: `${width}%`  }}>
      <EventHour>{date.format("hh:mm A")}</EventHour>
      <EventTitle style={{ whiteSpace: duration < 60 && "nowrap" }}>{title}</EventTitle>
    </EventContainer>
  )
}

const EventContainer = styled.div`
  background-color: rgba(14, 165, 233, 0.1);
  border-radius: 4px;
  border-left: 4px solid rgba(14, 165, 233, 0.8);
  position: absolute;
  box-sizing: border-box;
  padding: 10px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 24px 1fr;
`

const EventHour = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #0485bf;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  grid-row: 1 / 1;
`

const EventTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #0485bf;
  overflow: hidden;
  text-overflow: ellipsis;
  grid-row: 2 / 2;
`

export default Event