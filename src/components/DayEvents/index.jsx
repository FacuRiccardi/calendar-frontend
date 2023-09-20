import styled from "@emotion/styled"
import dayjs from "dayjs"

import Event from "../../components/Event"

function DayEvents({ column, first, last, events = [] }) {
  const hours = []
  for(var i = 1; i <= 11; i++) {
    hours.push(<HourContainer key={i} style={{ gridRow: i , borderRight: last && "0px"}}/>)
  }

  return (
    <DayContainer style={{ gridArea:`2 / ${column} / 13 / ${column+1}`, backgroundColor: (first || last) && "#F2F2F2"}}>
      {
        hours
      }
      {
        events.map((event, i) => (
          <Event
            key={i}
            title={event.title}
            date={dayjs(event.date)}
            duration={event.duration}
            sharesWith={event.shareWith}
            position={event.position}
          />
        ))
      }
    </DayContainer>
  )
}

const DayContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(11, 1fr);
  position: relative;
`

const HourContainer = styled.div`
  border: 2px solid #E0E0E0;
  border-top: 0px;
  border-left: 0px;
`

export default DayEvents