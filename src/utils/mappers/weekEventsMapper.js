import dayjs from "dayjs";

export const weekEventsMapper = (events) => {
  const days = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  }

  events.forEach(event => {
    const day = dayjs(event.date)
    if(day.hour() >= 7 && day.hour() <= 17) days[day.day()].push(event)
  });

  return days
}