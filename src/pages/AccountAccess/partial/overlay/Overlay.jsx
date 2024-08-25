import React from "react";
import cls from "classnames";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import styles from "../../style.module.css";
export default function Overlay({ togglePanelRegistLogin }) {
  return (
    <div>
      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={cls(styles.overlayPanel, styles.overlayLeft)}>
            <h1 className={cls(styles.title, styles.h1)}>
              Hello <br />
              Friends
            </h1>
            <p className={styles.pagarap}>
              if you have an account, login here and have fun
            </p>
            <button
              className={cls(styles.ghost, styles.button, styles.btn)}
              id="login"
              onClick={() => {
                togglePanelRegistLogin();
              }}
            >
              Login
            </button>
          </div>
          <div className={cls(styles.overlayPanel, styles.overlayRight)}>
            <h1 className={cls(styles.title, styles.h1)}>
              Start yout
              <br />
              journy now
            </h1>
            <p>if you have an account, login here and have fun</p>
            <button
              className={cls(styles.ghost, styles.button, styles.btn)}
              id="register"
              onClick={() => {
                togglePanelRegistLogin();
              }}
            >
              Register 1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
