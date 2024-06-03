import { useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { authTypes } from "../types/authTypes";
import { AuthContext } from "./AuthContext";
import { userAuthWithEmailAndPass } from "../../firebase/providers";

const initialState = {
  isLogged: false,
};

const initialize = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    isLogged: !!user,
    user
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(
    authReducer,
    initialState,
    initialize
  );

  const logInUser = async (email = "", password = "") => {
    const { ok, uid, photoURL, displayName, errorMessage } = await userAuthWithEmailAndPass(email, password);

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
    }

    const payload = { uid, email, photoURL, displayName };
    const action = {
      type: authTypes.logIn,
      payload
    };
    localStorage.setItem('user', JSON.stringify(payload));
    dispatch(action);

    return true;
  };

  const logOutUser = () => {
    localStorage.removeItem('user');
    const action = {
      type: authTypes.logOut,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={
        { 
          ...authState, 
          logInUser: logInUser, 
          logOutUser: logOutUser 
        }
      }
    >
      { children }
    </AuthContext.Provider>
  );
};
