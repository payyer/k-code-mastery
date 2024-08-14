import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";

export default function LessonItem() {
  return (
    <div className="col-span-1 p-4 flex justify-between items-center border-b-2 border-gray-400 hover:bg-gray-300 cursor-pointer">
      <p className="w-[200px] overflow-hidden text-ellipsis">
        LessonItemLessonItemLessonItem
      </p>
      <div>
        <FaRegCircle className="hidden" />
        <FaCheckCircle />
      </div>
    </div>
  );
}
