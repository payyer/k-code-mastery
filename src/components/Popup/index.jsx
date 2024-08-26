import { useDispatch } from "react-redux";
import { finishUPdateCourse } from "../../features/course/courseSlice";
import { finishUPdateCategory } from "../../features/category/categorySlice";
import { finishUpdateLesson } from "../../features/lesson/lessonSlice";

export default function Popup({ children, closePopup }) {
  const dispatch = useDispatch();

  const close = () => {
    closePopup(false);
    dispatch(finishUPdateCourse());
    dispatch(finishUPdateCategory());
    dispatch(finishUpdateLesson());
  };
  return (
    <div
      hidden
      onClick={close}
      className={` top-0 left-0 right-0 fixed bottom-0 bg-black bg-opacity-50 flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
