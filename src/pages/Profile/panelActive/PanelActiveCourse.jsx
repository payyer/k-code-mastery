import React from "react";
import HomeLesson from "../../Home/partials/lession/Lesson";
import { useLoadProfileQuery } from "../../../services/access/accessSlice";

export default function PanelActiveCourse() {
  let userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
  // console.log("user", userInfo.data);
  const { data, isFetching } = useLoadProfileQuery(userInfo.data.id);
  console.log("data", data);
  const handleLogout = () => {
    // Xóa thông tin người dùng khỏi localStorage
    localStorage.removeItem("USER_INFO");
    // Tải lại trang để thay đổi có hiệu lực
    window.location.reload();
  };
  if (!data) return null;
  return (
    <div className=" py-8 px-8">
      <div className="grid grid-cols-3 gap-8 ">
        {data.data.courses.map((course, index) => (
          <HomeLesson key={index} lessonData={course} />
        ))}
      </div>
    </div>
  );
}
