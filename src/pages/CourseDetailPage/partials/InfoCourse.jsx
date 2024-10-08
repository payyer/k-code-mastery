import CourseDescription from "./CourseDescription";
import ListLesson from "./ListLesson";
import PrerequisitesCourse from "./PrerequisitesCourse";

export default function InfoCourse({ data }) {
  return (
    <div className="flex items-center absolute top-0 left-0 min-h-full right-0 bg-black bg-opacity-80 backdrop-blur-lg px-4 py-4">
      <div className="relative grid md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto ">
        <CourseDescription
          lecturer={data?.lecturer}
          description={data?.description}
          title={data?.title}
          countLesson={data?.lessonDTOs.length}
        />
        <PrerequisitesCourse
          lessonId={data?.lessonDTOs[0].id}
          price={data?.price}
        />
        <ListLesson listLesson={data?.lessonDTOs} />
      </div>
    </div>
  );
}
