import React from "react";
import logoBlack from "../../../../assets/icon/logo-black.svg";
import HomeTab from "../navbar/Tab";
import styles from "../../styleHome.module.css";
export default function HomeLogo() {
  return (
    <div>
      <div class={styles.logo}>
        <img src={logoBlack} alt="logo" />
        <HomeTab />
      </div>
    </div>
  );
}
