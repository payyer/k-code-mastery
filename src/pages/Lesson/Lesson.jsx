import { useSelector } from "react-redux";
import { useGetDetailLessonQuery } from "../../services/lesson/lessonApi";
import LessonContent from "./partials/LessonContent";
import LessonHeader from "./partials/LessonHeader";
import ListLesson from "./partials/ListLesson";
import { useParams } from "react-router-dom";

export default function Lesson() {
  const lessonParams = useParams();
  // const lessonId = useSelector((state) => state.lesson.getLessonById);
  const { data, isFetching } = useGetDetailLessonQuery(lessonParams.id);

  return (
    <>
      {!isFetching ? (
        <div>
          <LessonHeader name={data?.data?.name} />
          {/* LessonContainer */}
          <div className="max-w-7xl grid grid-cols-4 mx-auto h-lesson-container">
            {/* Lesson content */}
            <LessonContent data={data?.data} />
            {/* List lesson */}
            <ListLesson />
          </div>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}
