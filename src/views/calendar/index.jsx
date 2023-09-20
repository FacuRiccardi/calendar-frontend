import styled from "@emotion/styled"

import NextEvents from '../nextEvents'
import CalendarSelector from '../calendarSelector'

function Calendar() {
  return (
    <CalendarContainer>
      <CalendarSection>
        <CalendarSelector />
      </CalendarSection>
      <NextEventsSection>
        <NextEvents />
      </NextEventsSection>
      <WeekSection></WeekSection>
    </CalendarContainer>
  )
}

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: 320px repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 1903px;
  height: 963px;
  background-color: #18181B;
`

const CalendarSection = styled.div`
 grid-area: 1 / 1 / 3 / 2;
`

const NextEventsSection = styled.div`
  grid-area: 3 / 1 / 6 / 2;
`

const WeekSection = styled.div`
  grid-area: 1 / 2 / 6 / 6;
  background-color: lime;
`

export default Calendar