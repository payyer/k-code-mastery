import React from "react";
import HomeLesson from "../../Home/partials/lession/Lesson";
import { useLoadProfileQuery } from "../../../services/access/accessSlice";
import styles from "../../Home/styleHome.module.css";
export default function PanelActiveCourse() {
  let userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
  const { data, isFetching } = useLoadProfileQuery(userInfo.data.id);

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO");
    window.location.reload();
  };

  if (!data) return null;

  return (
    <div className="py-8 px-8">
      <div
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cousre ${styles.course}`}
      >
        {data.data.courses.map((course, index) => (
          <HomeLesson key={index} lessonData={course} />
        ))}
      </div>
    </div>
  );
}
