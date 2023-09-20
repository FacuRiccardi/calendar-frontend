import { useState } from "react"
import styled from "@emotion/styled"

import useDate from "../../stores/date/DateContext"
import DateCalendar from "../../components/CalendarSelector"
import NavBar from "../../components/navBar"
import CreateEvent from "../createEvent"

function CalendarSelector() {
  const { selectDate, setSelectedDate } = useDate()

  const [createEventModal, setCreateEventModal] = useState(false)

  return (
    <SelectorContainer>
     <NavBar addClick={() => {setCreateEventModal(true)}}/>
     <DateCalendar value={selectDate} onChange={setSelectedDate} />
     <CreateEvent open={createEventModal} closeModal={() => {setCreateEventModal(false)}}/>
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default CalendarSelector