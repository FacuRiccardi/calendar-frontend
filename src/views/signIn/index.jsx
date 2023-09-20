import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"

import Modal from "../../components/modal"
import useUser from "../../stores/user/userContext"
import { signIn } from "../../api/users"
import SignUp from "../signUp"

function SignIn({ open, closeModal }) {
  const { token, errors, setTokenAndUser, setErrors } = useUser()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [signUpModal, setSignUpModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await signIn(email, password)

    if (response.errors) {
      setErrors(response.errors)
    } else if (response.type) {
      setErrors({ general: response.message })
    } else {
      setTokenAndUser(response.token, { name: response.name, email: response.email })
      setErrors({})
    }
  }

  const closeSignUpModal = () => {
    setSignUpModal(false)
    closeModal()
  }

  return (
    <Modal open={open}>
      <h1 style={{ marginTop: 0 }}>Sign In</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          disabled={!!token}
          required
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          error={errors.email && errors.email.length !== 0}
          helperText={errors.email && errors.email[0]}
        />
        <TextField
          disabled={!!token}
          type={"password"}
          required
          fullWidth
          margin="normal"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          error={errors.password && errors.password.length !== 0}
          helperText={errors.password && errors.password[0]}
        />
        {
          errors.general && <Alert severity="error">{errors.general}</Alert>
        }
        {
          !token ?
          <>
            <Button
              style={{ marginTop: 16, width: "45%" }}
              variant="contained"
              size="large"
              type="submit"
            >
              Submit
            </Button>
            <Button
              style={{ marginTop: 16 }}
              variant="outlined"
              size="small"
              onClick={() => setSignUpModal(true)}
            >
              Sign Up
            </Button>
          </> :
          <>
            <Alert severity="success">Successfully logged in</Alert>
            <Button
              style={{ marginTop: 16 }}
              variant="outlined"
              size="small"
              onClick={() => closeModal()}
            >
              Close
            </Button>
          </>
        }
      </form>
      <SignUp open={signUpModal} toSignIn={() => {setSignUpModal(false)}} closeModal={closeSignUpModal} />
    </Modal>
  )
}

export default SignIn
