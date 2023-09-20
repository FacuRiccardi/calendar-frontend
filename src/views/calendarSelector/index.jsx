import { useState } from 'react'
import styled from "@emotion/styled"

import DateCalendar from '../../components/calendarSelector'
import NavBar from '../../components/navBar'
import CreateEvent from "../createEvent"

function CalendarSelector() {
  const [createEventModal, setCreateEventModal] = useState(false)

  return (
    <SelectorContainer>
     <NavBar addClick={() => {setCreateEventModal(true)}}/>
     <DateCalendar />
     <CreateEvent open={createEventModal} closeModal={() => {setCreateEventModal(false)}}/>
    </SelectorContainer>
  )
}

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default CalendarSelector