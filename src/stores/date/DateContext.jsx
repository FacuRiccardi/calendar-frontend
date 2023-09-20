import dayjs from "dayjs";
import { createContext, useState, useContext } from "react";

export const DateContext = createContext()

export const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs())

  return(
    <DateContext.Provider value={{selectedDate, setSelectedDate}}>
      {children}
    </DateContext.Provider>
  )
}

const useDate = () => {
  const context = useContext(DateContext)

  if (context === undefined) throw new Error("useDate must be used within DateContext")

  return context
}

export default useDate