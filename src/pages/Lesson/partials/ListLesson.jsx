import React from "react";
import LessonItem from "./LessonItem";
import { useGetDetailCourseQuery } from "../../../services/course/courseApi";
import { useParams } from "react-router-dom";

export default function ListLesson() {
  // Truyền vào bao nhiêu thì nhận để load list Lesson
  const paramsId = useParams();
  const { data, isFetching } = useGetDetailCourseQuery(paramsId.courseId);
  return (
    <>
      {!isFetching ? (
        <div className="min-h-lesson-container overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary">
          <div className="p-4 h-[48px] flex items-center text-xl font-medium">
            Crouse material
          </div>
          {data?.data?.lessonDTOs.map((item) => {
            return <LessonItem id={item.id} title={item.name} key={item.id} />;
          })}
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}
