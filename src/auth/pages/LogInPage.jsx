import { useContext, useEffect, useState } from "react";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./LogInPage.css";

const initializeForm = {
  email: "",
  password: "",
  confirmPassword: "",
};

const LogInPage = () => {
  const [formState, setFormState] = useState(initializeForm);
  const [modalTitle, setModalTitle] = useState("Log In");
  const { logInUser, logInUserWithGoogle, errorMessage } = useContext(AuthContext);
  const { email, password, confirmPassword } = formState;

  useEffect(() => {
    setFormState(initializeForm);
  }, [initializeForm]);

  const navigate = useNavigate();

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initializeForm);
  };

  const onLogInUser = async (event) => {
    event.preventDefault();

    const isSuccessLogin = await logInUser(email, password);
    if (isSuccessLogin) {
      const lastPath = localStorage.getItem("lastPath") || "/";
      navigate(lastPath, {
        replace: true,
      });
    }
  };

  const onLogInGoogle = async (event) => {
    event.preventDefault();

    const isSuccessLogin = await logInUserWithGoogle();
    if (isSuccessLogin) {
      const lastPath = localStorage.getItem("lastPath") || "/";
      navigate(lastPath, {
        replace: true,
      });
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form-content">
        <div className="login-form-title">
          <h4>{modalTitle}</h4>
        </div>
        <div className="login-form-body">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="User email"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
            placeholder="Password"
            required
          />
          {modalTitle === "Log In" ? (
            <></>
          ) : (
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={onInputChange}
              placeholder="Confirm password"
              required
            />
          )}
          <div className="signup-options">
          <button onClick={onLogInUser} type="button" className="btn-login">
            {modalTitle === "Sign Up" ? "Create account" : "Log In"}
          </button>
          <span>Or use</span>
          <div className="signup-options-icons">
          <AiFillGoogleCircle
            onClick={onLogInGoogle}
            size={50}
            style={{ cursor: "pointer", color: "#212529" }}
          />
          <AiFillGithub
            size={50}
            style={{ cursor: "pointer", color: "#212529" }}
          />
          </div>
          </div>
          {modalTitle === "Sign Up" ? (
            <div className="login-form-agreement">
              <input type="checkbox" required />
              <p>By continuing, I agree the terms & privacy policy.</p>
            </div>
          ) : (
            <></>
          )}
          {!errorMessage ? null : (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
        <div className="login-form-footer">
          {modalTitle === "Log In" ? (
            <p>
              Create a new account?{" "}
              <span
                onClick={() => {
                  setModalTitle("Sign Up");
                }}
              >
                Click here.
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setModalTitle("Log In");
                }}
              >
                Click here.
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LogInPage;
