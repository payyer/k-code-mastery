import React, { useState } from "react";
import cls from "classnames";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import styles from "../../style.module.css";
import { useSignUpMutation } from "../../../../services/access/accessSlice";

export default function Register() {
  const [signUpUser] = useSignUpMutation();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = () => {
    if (!userName || !userEmail || !userPassword)
      return setError("Please fill all fields");
    signUpUser({
      username: userName,
      email: userEmail,
      password: userPassword,
      avatar: "avatar",
    })
      .then((res) => {
        console.log("res", { res });
      })
      .catch((err) => {
        console.log(err);
      });

    setError("");
  };
  return (
    <div>
      <div className={cls(styles.formContainer, styles.registerContainer)}>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="bg-white flex flex-col items-center justify-center p-0 px-12 h-full text-center"
        >
          <h1 className={styles.h1}>Register here</h1>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            name=""
            id="text-rg"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name=""
            id="email-rg"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id="password-rg"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button className={cls(styles.button, styles.btn)}>Register</button>
          <span>or use your account</span>
        </form>
      </div>
    </div>
  );
}
