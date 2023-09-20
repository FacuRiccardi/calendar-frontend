import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"
import isBetween from "dayjs/plugin/isBetween"
dayjs.extend(weekOfYear)
dayjs.extend(isBetween)

import useUser from "../../stores/user/userContext"
import useDate from "../../stores/date/DateContext"
import DayEvents from "../../components/DayEvents"
import HourLabel from "../../components/HourLabel"
import DayLabel from "../../components/DayLabel"
import { getWeekEvents } from "../../api/events"
import { weekEventsMapper } from "../../utils/mappers/weekEventsMapper"


function WeekEvents() {
  const { token } = useUser()
  const { selectedDate } = useDate()

  const [dates, setDates] = useState([
    { column: 2, name: "-", num: "-", last: false, first: true },
    { column: 3, name: "-", num: "-", last: false, first: false },
    { column: 4, name: "-", num: "-", last: false, first: false },
    { column: 5, name: "-", num: "-", last: false, first: false },
    { column: 6, name: "-", num: "-", last: false, first: false },
    { column: 7, name: "-", num: "-", last: false, first: false },
    { column: 8, name: "-", num: "-", last: true, first: false },
  ])
  const [week, setWeek] = useState(dayjs().year(dayjs().year()).week(dayjs().week()))
  const [events, setEvents] = useState([[],[],[],[],[],[],[]])

  useEffect(() => {
    const newWeek = dayjs().year(selectedDate.year()).week(selectedDate.week())

    if(newWeek !== week) {
      setWeek(newWeek)
      const days = []
      for(let i = 0; i < 7; i++) {
        let day = dayjs(newWeek).day(i)
        days.push({
            column: i+2,
            name: day.format("ddd").toUpperCase(),
            num: day.format("DD"),
            last: i === 6,
            first: i === 0
          })
      }
      setDates(days)
    }
  
  }, [selectedDate])

  useEffect(() => {
    const fetchData = async () => {
      if(token !== "") {
        const response = await getWeekEvents(token, week.day(0).format("YYYY-MM-DD"), week.day(7).format("YYYY-MM-DD"))

        if(response.events) {
          const mappedEvents = weekEventsMapper(response.events)

          setEvents(mappedEvents)
        }
      }
    }

    fetchData()
  }, [token, selectedDate])

  const defaultHours = ["7 AM", "8 AM","9 AM","10 AM","11 AM","12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
 
  return (
    <WeekContainer>
      {
        defaultHours.map((hour, i) => (<HourLabel key={i} column={1} row={i+2} left hour={hour} />))
      }
      <DayLabel date={dates[0]}/>
      <DayLabel date={dates[1]}/>
      <DayLabel date={dates[2]}/>
      <DayLabel date={dates[3]}/>
      <DayLabel date={dates[4]}/>
      <DayLabel date={dates[5]}/>
      <DayLabel date={dates[6]}/>
      <DayEvents events={events[0]} column={2} first/>
      <DayEvents events={events[1]} column={3}/>
      <DayEvents events={events[2]} column={4}/>
      <DayEvents events={events[3]} column={5}/>
      <DayEvents events={events[4]} column={6}/>
      <DayEvents events={events[5]} column={7}/>
      <DayEvents events={events[6]} column={8} last/>
      {
        defaultHours.map((hour, i) => (<HourLabel key={i} column={9} row={i+2} hour={hour} />))
      }
    </WeekContainer>
  )
}

const WeekContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.3fr repeat(7, 1fr) 0.3fr;
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

export default WeekEvents