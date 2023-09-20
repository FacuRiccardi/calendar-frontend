import { useState, useEffect } from "react"

import useUser from "../../stores/user/userContext"
import SignIn from "../signIn"
import Calendar from "../calendar"

function Home() {
  const { token } = useUser()

  const [signInModal, setSignInModal] = useState(false)

  useEffect(() => {
    if (!token) setSignInModal(true)
  }, [])

  return (
    <div>
      <SignIn open={signInModal} closeModal={() => { setSignInModal(false) }} />
      <Calendar />
    </div>
  )
}

export default Home
