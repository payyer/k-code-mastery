import React from "react";
import LessonDetail from "./LessonDetail";
// import LessonTest from "./LessonTest";

export default function LessonContent(data) {
  return (
    <div className="col-span-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary">
      <LessonDetail videoUrl={data?.data?.videoUrl} />
      {/* <LessonTest /> */}
    </div>
  );
}
