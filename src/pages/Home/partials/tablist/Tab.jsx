import React, { useState } from "react";
import styleHome from "../../styleHome.module.css";
export default function HomeTabList() {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className={styleHome.tabList}>
        {["Python", "JavaScript", "HTML", "CSS", "C++", "C#"].map((tab) => (
          <button
            key={tab}
            className={selectedTab === tab ? styleHome.active : ""}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
