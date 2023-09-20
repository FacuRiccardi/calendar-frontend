const apiUrl = import.meta.env.VITE_API_URL

export async function signUp (name, email, password) {
  let response = await fetch(`${apiUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })

  return await response.json()
}

export async function signIn(email, password) {
  const response = await fetch(`${apiUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  return await response.json()
}
