import React from "react";
import HomeLesson from "../../Home/partials/lession/Lesson";
import { useGetCourseQuery } from "../../../services/course/courseApi";
export default function PanelActiveCourse() {
  const { data, isFetching } = useGetCourseQuery();
  console.log("data:", data);

  return (
    <div className=" py-8 px-8">
      <div className="grid grid-cols-3 gap-8 ">
        {data?.data.map((newData, i) => {
          return <HomeLesson key={i} lessonData={newData} />;
        })}
      </div>
    </div>
  );
}
