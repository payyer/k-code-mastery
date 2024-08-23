import React from "react";
import cls from "classnames";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import styles from "../../style.module.css";

export default function Register() {
  return (
    <div>
      <div className={cls(styles.formContainer, styles.registerContainer)}>
        <form action="#">
          <h1 className={styles.h1}>Register here</h1>
          <input type="text" name="" id="text-rg" placeholder="Name" />
          <input type="email" name="" id="email-rg" placeholder="Email" />
          <input
            type="password"
            name=""
            id="password-rg"
            placeholder="Password"
          />
          <button className={cls(styles.button, styles.btn)}>Register</button>
          <span>or use your account</span>
          <div className={styles.socialContainer}>
            <a href="#" className={styles.social}>
              <FaFacebook />
            </a>
            <a href="#" className={styles.social}>
              <FaGoogle />
            </a>
            <a href="#" className={styles.social}>
              <FaInstagram />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
