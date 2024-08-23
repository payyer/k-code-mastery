import LessonContent from "./partials/LessonContent";
import LessonHeader from "./partials/LessonHeader";
import ListLesson from "./partials/ListLesson";

export default function Lesson() {
  return (
    <div>
      <LessonHeader />
      {/* LessonContainer */}
      <div className="max-w-7xl grid grid-cols-4 mx-auto h-lesson-container">
        {/* Lesson content */}
        <LessonContent />
        {/* List lesson */}
        <ListLesson />
      </div>
    </div>
  );
}
