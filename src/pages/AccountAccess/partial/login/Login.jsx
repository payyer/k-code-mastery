import React, { useState } from "react";
import cls from "classnames";
import styles from "../../style.module.css";
import { useSignInMutation } from "../../../../services/access/accessSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userEmail, setUseEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [signInUser, { isLoading }] = useSignInMutation();
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
    if (!userEmail && !userPassword) {
      return setError("Please enter email and password");
    }
    if (!userEmail) {
      return setError("Please enter Email");
    }
    if (!userPassword) {
      return setError("Please enter Password");
    }

    try {
      const res = await signInUser({
        email: userEmail,
        password: userPassword,
      });
      console.log("status code", res);
      if (res.data.statusCode === 200) {
        console.log("Login successful:", res.data);
        localStorage.setItem("USER_INFO", JSON.stringify(res.data)); // Lưu thông tin người dùng vào local storage

        navigate("/"); // Điều hướng đến trang khác
      } else {
        console.error("Failed to login:", res.data.errorMessage);
        setError("Login failed. Please check your credentials and try again.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
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
          id="email-lg"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUseEmail(e.target.value)}
          className="mb-2"
        />
        <input
          type="password"
          id="password-lg"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          className="mb-4"
        />
        <button type="submit" className={cls(styles.button, styles.btn)}>
          Login
        </button>
        <span className="span">Don't have an account? Register</span>
      </form>
    </div>
  );
}
