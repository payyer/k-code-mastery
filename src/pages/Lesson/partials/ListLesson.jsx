import React from "react";
import LessonItem from "./LessonItem";

const listLesson = [
  {
    id: 1,
    title: "Bài 1",
  },
  {
    id: 2,
    title: "Bài 2",
  },
  {
    id: 3,
    title: "Bài 3",
  },
];

export default function ListLesson() {
  return (
    <div className="min-h-lesson-container overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary">
      <div className="p-4 h-[48px] flex items-center text-xl font-medium">
        Crouse material
      </div>
      {listLesson.map((item) => {
        return <LessonItem id={item.id} title={item.title} key={item.id} />;
      })}
    </div>
  );
}
