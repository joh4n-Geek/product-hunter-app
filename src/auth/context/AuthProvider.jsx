import { useReducer } from "react";
import {
  registerNewUser,
  userAuthWithEmailAndPass,
  userAuthWithGoogle,
  userLogOut,
} from "../../firebase/providers";
import { authReducer } from "../reducers/authReducer";
import { authTypes } from "../types/authTypes";
import { AuthContext } from "./AuthContext";

const initialState = {
  isLogged: false,
};

const initialize = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    isLogged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(
    authReducer,
    initialState,
    initialize
  );

  const logInUser = async (email = "", password = "") => {
    const { ok, uid, photoURL, displayName, errorMessage } =
      await userAuthWithEmailAndPass(email, password);

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = { uid, email, photoURL, displayName };
    const action = {
      type: authTypes.logIn,
      payload,
    };
    localStorage.setItem("user", JSON.stringify(payload));
    dispatch(action);

    return true;
  };

  const logInUserWithGoogle = async () => {
    const {
      ok,
      uid,
      photoURL,
      displayName,
      email: googleEmail,
      errorMessage,
    } = await userAuthWithGoogle();

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = { uid, googleEmail, photoURL, displayName };
    const action = {
      type: authTypes.logIn,
      payload,
    };
    localStorage.setItem("user", JSON.stringify(payload));
    dispatch(action);

    return true;
  };

  const registerUser = async (email, password, displayName) => {
    const { ok, uid, photoURL, errorMessage } = await registerNewUser({
      email,
      password,
      displayName,
    });

    const payload = {
      uid,
      email,
      photoURL,
      displayName,
    };
    const action = {
      type: authTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));
    dispatch(action);

    return true;
  };

  const logOutUser = async () => {
    await userLogOut();
    localStorage.removeItem("user");
    const action = {
      type: authTypes.logOut,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        logInUser,
        logInUserWithGoogle,
        registerUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
