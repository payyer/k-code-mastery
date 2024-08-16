import React from "react";
import HomeSearch from "../navbar/Search";
import HomeLogo from "../navbar/Logo";
import HomeAvatar from "../navbar/Avatar";

import avatar from "../../../../assets/img/creator/creator.png";
import { useState } from "react";
import HomeUserActionMenu from "../user/user";
export default function HomeNavBar() {
  return (
    <div>
      <div className="nav-bar">
        <HomeLogo />
        <HomeSearch />
        <HomeAvatar />
      </div>
    </div>
  );
}
