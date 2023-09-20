import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

export const nextEventsMapper = (events) => {
  const days = {}
  const today = dayjs().utc().format("DD/MM/YYYY")
  events.forEach((event) => {
    const date = dayjs(event.date).utc()
    if(days[date.format("DD/MM/YYYY")]) {
      days[date.format("DD/MM/YYYY")].events.push({
        title: event.title,
        description: event.description,
        init: date.format("hh:mm A"),
        end: date.add(event.duration, "minute").format("hh:mm A"),
        duration: event.duration
      })
    } else {
      days[date.format("DD/MM/YYYY")] = {
        name: today === date.format("DD/MM/YYYY") ? "TODAY" : date.format("dddd").toUpperCase(),
        events: [{
          title: event.title,
          description: event.description,
          init: date.format("hh:mm A"),
          end: date.add(event.duration, "minute").format("hh:mm A"),
          duration: event.duration
        }]
      }
    }
  })

  return days
}