import React from "react";
import Lesson from "../../Home/partials/lession/Lesson";
export default function PanelActiveCourse() {
  return (
    <div className=" py-8 px-8">
      <div className="grid grid-cols-3 gap-8 ">
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </div>
  );
}
