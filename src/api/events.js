const apiUrl = import.meta.env.VITE_API_URL

export async function createEvent (token, title, description, date, duration) {
  let response = await fetch(`${apiUrl}/event`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      description,
      date,
      duration
    }),
  })

  return await response.json()
}

export async function getNextEvents (token) {
  let response = await fetch(`${apiUrl}/event/next`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  return await response.json()
}

export async function getWeekEvents (token, initDate, endDate) {
  const params = new URLSearchParams()
  params.append("initDate", initDate)
  params.append("endDate", endDate)

  let response = await fetch(`${apiUrl}/event?${params.toString()}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  return await response.json()
}