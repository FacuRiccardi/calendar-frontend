import { createTheme, ThemeProvider } from "@mui/material/styles"

import { UserProvider } from "./stores/user/userContext"
import Home from "./views/home"

const theme = createTheme({
  typography: {
    fontFamily: "Inter, system-ui",
  },
  palette: {
    black: { main: "#18181B" },
    gray: { main: "rgba(255, 255, 255, 0.1)" },
    white: { main: "white" }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Home />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
