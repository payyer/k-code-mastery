import { useGetDetailCourseQuery } from "../../services/course/courseApi";
import InfoCourse from "./partials/InfoCourse";

export default function CrouseDetail() {
  const { data, isFetching } = useGetDetailCourseQuery(49);

  return (
    <>
      {!isFetching ? (
        <div className="relative h-[468px] w-full">
          <img
            src={data?.data?.image}
            alt="crouse-theme"
            className={`h-full w-full object-cover"`}
          />
          <InfoCourse data={data?.data} />
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}
