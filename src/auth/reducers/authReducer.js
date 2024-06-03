import { authTypes } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authTypes.logIn:
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };
    case authTypes.logOut:
      return {
        isLogged: false,
        // errorMessage: action.payload?.errorMessage
      };
    case authTypes.error:
      return {
        // ...state,
        isLogged: false,
        errorMessage: action.payload.errorMessage
        // errorMessage: action.payload?.errorMessage
      };
    default:
      return state;
  }
};
