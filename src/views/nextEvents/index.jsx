import { useState } from "react"
import styled from "@emotion/styled"

import useUser from "../../stores/user/userContext"
import NextEventsDisplay from "../../components/NextEventsDisplay"
import NextEvent from "../../components/NextEvent"
import { useEffect } from "react"
import { getNextEvents } from "../../api/events"
import { nextEventsMapper } from "../../utils/mappers/nextEventsMapper"

function NextEvents() {
  const { token } = useUser()
  const [ events, setEvents ] = useState([])
  const [ mappedEvents, setMappedEvents ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if(token !== "") {
        const response = await getNextEvents(token)
        setEvents(response.events)
      }
    }

    fetchData()
  }, [token])

  useEffect(() => {
    if(events.length > 0) {
      const days = nextEventsMapper(events)
      
      setMappedEvents(Object.keys(days).map((dayValue, i) => {
        const day = days[dayValue]
        return (
          <NextEventsDisplay dayName={day.name} dayValue={dayValue} key={i}>
            {
              day.events.map((event, i) => {
                return(
                  <NextEvent init={event.init} end={event.end} title={event.title} description={event.description} key={i}/>
                )
              })
            }
          </NextEventsDisplay>
        )
      }))
    }
  }, [events])

  return (
    <NextEventsContainer>
      {mappedEvents}
    </NextEventsContainer>
  )
}

const NextEventsContainer = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
`

export default NextEvents