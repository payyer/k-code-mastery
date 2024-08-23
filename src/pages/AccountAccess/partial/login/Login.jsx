import React from "react";
import cls from "classnames";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import styles from "../../style.module.css";
export default function Login() {
  return (
    <div>
      <div className={cls(styles.formContainer, styles.loginContainer)}>
        <form action="#">
          <h1 className={styles.h1}>Login here</h1>
          <input type="email" name="" id="email.lg" placeholder="Email" />
          <input
            type="password"
            name=""
            id="password-lg"
            placeholder="Password"
          />
          <button className={cls(styles.button, styles.btn)}>Login</button>
          <span>or use your account</span>
          <div className={styles.socialContainer}>
            <a href="#" className={styles.socialContainer}>
              <FaFacebook />
            </a>
            <a href="#" className={styles.socialContainer}>
              <FaGoogle />
            </a>
            <a href="#" className={styles.socialContainer}>
              <FaInstagram />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
