export const initialState = {
  token: "",
  user: {},
  errors: {}
}

const userReducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case "SET_TOKEN_AND_USER":
      console.log("SAVE_TOKEN_AND_USER", payload)
      return {
        ...state,
        user: payload.user,
        token: payload.token
      }
    case "SET_ERRORS":
      console.log("SET_ERRORS", payload)
      return {
        ...state,
        errors: payload.errors
      }
    default:
      throw new Error(`No case for type ${type} in userReducer`)
  }
}

export default userReducer