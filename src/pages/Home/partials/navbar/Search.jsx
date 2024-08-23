import React from "react";
import searchIcon from "../../../../assets/icon/search.svg";
import styleHome from "../../styleHome.module.css";
export default function HomeSearch() {
  return (
    <div>
      <div class={styleHome.search}>
        <input
          type="search"
          class={styleHome.searchInput}
          placeholder="Search your course"
        />

        <div class={styleHome.searchLogo}>
          <img src={searchIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
