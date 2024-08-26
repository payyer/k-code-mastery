import React from "react";
// import HomeSearch from "../navbar/Search";
import HomeLogo from "../navbar/Logo";
import HomeAvatar from "../navbar/Avatar";
import styleHome from "../../styleHome.module.css";
import ButtonLogin from "./ButtonLogin";
export default function HomeNavBar() {
  let userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
  return (
    <div>
      <div className={styleHome.navBar}>
        <HomeLogo />
        {/* <HomeSearch /> */}
        {userInfo && <HomeAvatar />}
        {!userInfo && <ButtonLogin />}
      </div>
    </div>
  );
}
