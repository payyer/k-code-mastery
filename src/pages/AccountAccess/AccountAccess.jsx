import React from "react";

import styles from "./style.module.css";
import Register from "./partial/register/Register";
import Login from "./partial/login/login";
import Overlay from "./partial/overlay/Overlay";
import cls from "classnames";
import { useState } from "react";
export default function () {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const toggleRegisterPanel = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <div className={styles.body}>
      <div
        className={cls(
          isRightPanelActive ? styles.rightPanelActive : "",
          styles.container
        )}
        id="container"
      >
        <Register />
        <Login togglePanelRegistLogin={toggleRegisterPanel} />
        <Overlay togglePanelRegistLogin={toggleRegisterPanel} />
      </div>
    </div>
  );
}
