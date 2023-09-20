import { useState } from "react"
import styled from "@emotion/styled"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

import useUser from "../../stores/user/userContext"
import NextEventsDisplay from "../../components/NextEventsDisplay"
import NextEvent from "../../components/NextEvent"
import { useEffect } from "react"
import { getNextEvents } from "../../api/events"

function NextEvents() {
  const { token } = useUser()
  const [ events, setEvents ] = useState([])
  const [ mappedEvents, setMappedEvents ] = useState([])

  useEffect(() => {
    console.log('Inicio la busqueda -------')
    const fetchData = async () => {
      if(token !== "") {
        console.log('Se hizo la llamada -------')
        const response = await getNextEvents(token)

        console.log(response.events)
        setEvents(response.events)
      }
    }

    fetchData()
  }, [token])

  useEffect(() => {
    if(events.length > 0) {
      const days = {}
      const today = dayjs().utc().format('DD/MM/YYYY')
      console.log('TODAY: ', today)
      events.forEach((event) => {
        const date = dayjs(event.date).utc()
        if(days[date.format('DD/MM/YYYY')]) {
          days[date.format('DD/MM/YYYY')].events.push({
            title: event.title,
            description: event.description,
            init: date.format('hh:mm A'),
            end: date.add(event.duration, 'minute').format('hh:mm A'),
            duration: event.duration
          })
        } else {
          days[date.format('DD/MM/YYYY')] = {
            name: today === date.format('DD/MM/YYYY') ? "TODAY" : date.format('dddd').toUpperCase(),
            events: [{
              title: event.title,
              description: event.description,
              init: date.format('hh:mm A'),
              end: date.add(event.duration, 'minute').format('hh:mm A'),
              duration: event.duration
            }]
          }
        }
      })
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