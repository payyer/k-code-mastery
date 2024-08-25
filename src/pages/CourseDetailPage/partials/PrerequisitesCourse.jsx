import { useNavigate, useParams } from "react-router-dom";
import { useAddCourseForUserMutation } from "../../../services/course/courseApi";
import { toast } from "react-toastify";

export default function PrerequisitesCourse({ price, lessonId }) {
  const stringInfo = localStorage.getItem("USER_INFO");
  const courseId = useParams();
  const userInfo = JSON.parse(stringInfo);
  const navigate = useNavigate();
  const [addCourseForUser] = useAddCourseForUserMutation();

  const handleJoinCourse = () => {
    if (!userInfo) return navigate("/account");
    const body = { user_id: userInfo.data.id, course_id: courseId.id };

    addCourseForUser(body)
      .then(() => {
        navigate(`/lesson/${courseId.id}/${lessonId}`);
      })
      .catch(() => toast("Something wrong!"));
  };
  return (
    <div className="p-6 bg-white rounded-xl flex flex-col gap-2">
      <h3 className="text-lg font-bold">Prerequisites</h3>
      <ul className="flex flex-col gap-4 flex-1">
        <li className=" flex items-center gap-2 text-text-secondary">
          <div className="w-2 h-2 bg-primary rounded-full"></div> No prior
          knowledge required
        </li>
      </ul>
      <button
        onClick={handleJoinCourse}
        className="flex items-center justify-center py-2 bg-primary rounded-lg text-white font-bold shadow-shadow-b hover:bg-opacity-90"
      >
        {price === 0 ? "IS FREE NOW!" : `BUY NOW ${price}$`}
      </button>
    </div>
  );
}
