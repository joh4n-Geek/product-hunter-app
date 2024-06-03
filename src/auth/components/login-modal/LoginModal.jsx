import React, { useState } from "react";
import "./LoginModal.css";

const LoginModal = ({ setDisplayModal }) => {
  const [modalTitle, setModalTitle] = useState("Sign Up");
  return (
    <div className="login-modal">
      <form className="login-modal-form">
        <div className="login-modal-title">
          <h4>{modalTitle}</h4>
          <button
            onClick={() => {
              setDisplayModal(false);
            }}
            type="button"
            className="btn-close"
          ></button>
        </div>
        <div className="login-modal-body">
          <input type="text" placeholder="User" required />
          <input type="password" placeholder="Password" required />
          {modalTitle === "Login" ? (
            <></>
          ) : (
            <input type="password" placeholder="Confirm password" required />
          )}
        </div>
        <div className="login-modal-footer">
          <button>
            {modalTitle === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="login-modal-agreement">
            <input type="checkbox" required />
            <p>By continuing, I agree the terms of use and privacy policy.</p>
          </div>
          {modalTitle === "Login" ? (
            <p>
              Create a new account?{" "}
              <span
                onClick={() => {
                  setModalTitle("Sign Up");
                }}
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setModalTitle("Login");
                }}
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
