import React from "react";
import LessonItem from "./LessonItem";

export default function ListLesson() {
  return (
    <div className="min-h-lesson-container overflow-y-scroll">
      <div className="p-4 h-[48px] flex items-center text-xl font-medium">
        Crouse material
      </div>
      <LessonItem />
      <LessonItem />
      <LessonItem />
      <LessonItem />
      <LessonItem />
      <LessonItem />
      <LessonItem />
      <LessonItem />
      <LessonItem />
    </div>
  );
}
