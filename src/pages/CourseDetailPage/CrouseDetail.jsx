import { useParams } from "react-router-dom";
import { useGetDetailCourseQuery } from "../../services/course/courseApi";
import InfoCourse from "./partials/InfoCourse";
import HomeNavBar from "../Home/partials/navbar/Navbar";

export default function CrouseDetail() {
  const courseId = useParams();
  console.log({ courseId });
  const { data, isFetching } = useGetDetailCourseQuery(courseId.id);

  return (
    <>
      <HomeNavBar />
      {!isFetching ? (
        <div className="relative h-[468px] w-full mt-[50px] lg::mt-[60px] ">
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
