import React from "react";
import CourseItem from "../CourseItem";

export default function CourseList() {
  return (
    <div className="grid md:grid-cols-2 gap-2 mt-4">
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </div>
  );
}
