import React, { useState } from "react";
import styleHome from "../../styleHome.module.css";
import { useGetCategoryQuery } from "../../../../services/category/categoryApi";
export default function HomeTabList({ setPagination, pagination }) {
  const [selectedTab, setSelectedTab] = useState(null);
  const { data, isFetching } = useGetCategoryQuery();

  const handleTabClick = (tab) => {
    if (tab === "") return setSelectedTab(0);
    setSelectedTab(tab);
    setPagination({ ...pagination, categoryID: tab });
  };

  return (
    <div>
      <div className={styleHome.tabList}>
        {!isFetching ? (
          <>
            <button
              key={0}
              className={selectedTab === 0 ? styleHome.active : ""}
              onClick={() => handleTabClick(0)}
            >
              All
            </button>
            {data?.data?.map((tab) => (
              <button
                key={tab.id}
                className={selectedTab === tab.id ? styleHome.active : ""}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}
