import React, { useState } from "react";
import cls from "classnames";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import styles from "../../style.module.css";
export default function Login() {
  const [userEmail, setUseEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const submitForm = () => {
    if (!userEmail && !userPassword) return setError("Please enter");
    if (!userEmail) return setError("Please enter Email");
    if (!userPassword) return setError("Please enter password");
    setError("");
    // if(!userEmail) return setError("Please enter email");
  };
  return (
    <div>
      <div className={cls(styles.formContainer, styles.loginContainer)}>
        <form
          action="#"
          onSubmit={submitForm}
          className="bg-white flex flex-col items-center justify-center p-0 px-12 h-full text-center"
        >
          <h1 className={styles.h1}>Login here</h1>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="email"
            name=""
            id="email.lg"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => {
              setUseEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name=""
            id="password-lg"
            placeholder="Password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <button className={cls(styles.button, styles.btn)}>Login</button>
          <span>or use your account</span>
        </form>
      </div>
    </div>
  );
}
