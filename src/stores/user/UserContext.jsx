import { createContext, useReducer, useContext } from "react";

import shopReducer, { initialState } from "./userReducer"

const UserContext = createContext({
  token: "",
  user: {},
  errors: {}
})

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState)

  const setTokenAndUser = (token, user) => {
    dispatch({
      type: "SET_TOKEN_AND_USER",
      payload: {
        token,
        user
      }
    })
  }

  const setErrors = (errors) => {
    dispatch({
      type: "SET_ERRORS",
      payload: {
        errors
      }
    })
  }

  const value = {
    token: state.token,
    user: state.user,
    errors: state.errors,
    setTokenAndUser,
    setErrors
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) throw new Error("useUser must be used within UserContext")

  return context
}

export default useUser