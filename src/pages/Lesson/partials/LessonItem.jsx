import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetailLesson } from "../../../features/lesson/lessonSlice";

export default function LessonItem({ id, title }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeLesson = () => {
    dispatch(getDetailLesson(id));
    // navigate(`/lesson/${id}`);
  };
  return (
    <div
      onClick={handleChangeLesson}
      className=" col-span-1 p-4 gap-2 flex justify-between items-center border-b-2 border-gray-400 hover:bg-gray-300 cursor-pointer"
    >
      <p className="w-[230px] overflow-hidden text-ellipsis">{title}</p>
      <div>
        <FaRegCircle className="hidden" />
        <FaCheckCircle className="text-primary" />
      </div>
    </div>
  );
}
