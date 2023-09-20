import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

import Modal from "../../components/modal"
import DatePicker from "../../components/datePicker"
import TimePicker from "../../components/timePicker"
import DurationSelect from "../../components/durationSelect"
import useUser from "../../stores/user/userContext"
import { createEvent } from "../../api/events"


import "./style.css"

function CreateEvent({ open, closeModal }) {
  const { token } = useUser()

  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ date, setDate ] = useState(dayjs())
  const [ time, setTime ] = useState(dayjs())
  const [ duration, setDuration ] = useState(15)

  const [ errors, setErrors ] = useState([])
  const [ event, setEvent ] = useState({})

  const cleanStates = () => {
    setTitle("")
    setDescription("")
    setDate(dayjs())
    setTime(dayjs())
    setDuration(15)
    setErrors([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await createEvent(
      token,
      title,
      description,
      date.hour(time.hour()).minute(time.minute()).utc().format(),
      duration
    )

    if (response.errors) {
      setErrors(response.errors)
    } else if (response.type) {
      setErrors({ general: response.message })
    } else {
      setEvent({ title: response.title, date: dayjs(response.date).format("DD/MM/YYYY HH:mm") })
      cleanStates()
    }

  }

  const close = () => {
    setEvent({})
    cleanStates()
    closeModal()
  }

  return (
    <Modal open={open} height={650}>
      <h1 style={{ marginTop: 0 }}>Create new event</h1>
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
          required
          fullWidth
          margin="normal"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          error={errors.title && errors.title.length !== 0}
          helperText={errors.title && errors.title[0]}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          variant="outlined"
          multiline
          maxRows={4}
          value={description}
          onChange={(event) => {
            setDescription(event.target.value)
          }}
          error={errors.description && errors.description.length !== 0}
          helperText={errors.description && errors.description[0]}
        />
        <DatePicker
          label="Date"
          value={date}
          onChange={setDate}
        />
        <TimePicker
          label="Time"
          value={time}
          onChange={setTime}
        />
        <DurationSelect
          label="Duration"
          value={duration}
          onChange={setDuration}
          list={[15,30,45,60]}
        />
        {
          errors.general && <Alert severity="error">{errors.general}</Alert>
        }
        {
          event.title && event.date && <Alert severity="success">{`Created '${event.title}' event at ${event.date}`}</Alert>
        }
        <Button
          style={{ marginTop: 16, width: "45%" }}
          variant="contained"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
      <Button
        style={{ marginTop: 16 }}
        variant="outlined"
        size="small"
        onClick={close}
      >
        Close
      </Button>
    </Modal>
  )
}

export default CreateEvent