import { IoChevronBackOutline } from "react-icons/io5";

export default function LessonHeader() {
  return (
    <div className="h-lesson-nav-h border border-black flex items-center justify-between px-4">
      <div className="flex gap-4 items-center">
        {/* Btn back to Home */}
        <button>
          <IoChevronBackOutline className="text-[16px] text-primary" />
        </button>

        <div className="w-[30px] h-[30px] rounded-lg">
          <img
            className="rounded-lg"
            src="https://media.licdn.com/dms/image/C510BAQEvnZhpHdOs0g/company-logo_200_200/0/1630630080776/likelion_logo?e=2147483647&v=beta&t=S_UHgnPJDKVERDW8702zIR92xhShycx9j7oAUOyEnUU"
            alt=""
          />
        </div>

        <p className="text-xl font-medium">Javascrip Fundamental</p>
      </div>

      <div className="flex gap-4">
        <div>193/255 Lessons</div>
        <div>Submit</div>
      </div>
    </div>
  );
}
