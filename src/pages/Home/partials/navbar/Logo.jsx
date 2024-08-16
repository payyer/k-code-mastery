import React from "react";
import logoBlack from "../../../../assets/icon/logo-black.svg";
import HomeTab from "../navbar/Tab";

export default function HomeLogo() {
  return (
    <div>
      <div class="logo">
        <img src={logoBlack} alt="logo" />
        <HomeTab />
      </div>
    </div>
  );
}
