import { useDispatch } from "react-redux";
import { finishUPdateCourse } from "../../features/course/courseSlice";

export default function Popup({ children, closePopup }) {
  const dispatch = useDispatch();

  const close = () => {
    closePopup(false);
    dispatch(finishUPdateCourse());
  };
  return (
    <div
      hidden
      onClick={close}
      className={`absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
