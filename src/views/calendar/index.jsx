import styled from "@emotion/styled"

import { DateProvider } from "../../stores/date/DateContext"
import NextEvents from "../nextEvents"
import CalendarSelector from "../calendarSelector"
import WeekEvents from "../weekEvents"

function Calendar() {
  return (
    <CalendarContainer>
      <DateProvider>
        <CalendarSection>
          <CalendarSelector />
        </CalendarSection>
        <NextEventsSection>
          <NextEvents />
        </NextEventsSection>
        <WeekSection>
          <WeekEvents />
        </WeekSection>
      </DateProvider>
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
  background: white;
  padding: 16px 0 16px 16px;
`

export default Calendar