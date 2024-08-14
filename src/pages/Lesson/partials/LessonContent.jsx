import React from "react";

import LessonDetail from "./LessonDetail";
import LessonTest from "./LessonTest";
export default function LessonContent() {
  return (
    <div className="col-span-3 overflow-y-scroll">
      {/* <LessonDetail /> */}
      <LessonTest />
    </div>
  );
}
