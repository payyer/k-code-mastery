import React from "react";
import { MdOutlinePlayLesson } from "react-icons/md";

export default function CourseDescription({
  lecturer,
  title,
  description,
  countLesson,
}) {
  return (
    <div className="text-white px-4 flex flex-col gap-4">
      {/* Creator Info */}
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/C510BAQEvnZhpHdOs0g/company-logo_200_200/0/1630630080776/likelion_logo?e=2147483647&v=beta&t=S_UHgnPJDKVERDW8702zIR92xhShycx9j7oAUOyEnUU"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-sm">Creator</div>
          <div className="font-medium">{lecturer}</div>
        </div>
      </div>

      <h3 className="text-4xl font-medium">{title}</h3>

      <p className="text-lg">{description}</p>

      <span className="flex items-center gap-2 select-none ">
        <span className=" bg-secondary flex gap-2 items-center py-2 px-3  rounded-2xl">
          <MdOutlinePlayLesson /> {countLesson} Lesson
        </span>
      </span>
    </div>
  );
}
