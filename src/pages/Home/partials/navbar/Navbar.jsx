import React from "react";
import HomeSearch from "../navbar/Search";
import HomeLogo from "../navbar/Logo";
import HomeAvatar from "../navbar/Avatar";
import styleHome from "../../styleHome.module.css";
export default function HomeNavBar() {
  return (
    <div>
      <div className={styleHome.navBar}>
        <HomeLogo />
        <HomeSearch />
        <HomeAvatar />
      </div>
    </div>
  );
}
