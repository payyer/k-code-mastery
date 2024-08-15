import React from "react";
import searchIcon from "../../../../assets/icon/search.svg";
export default function HomeSearch() {
  return (
    <div>
      <div class="search">
        <input
          type="search"
          class="search-input"
          placeholder="Search your course"
        />

        <div class="searchLogo">
          <img src={searchIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
