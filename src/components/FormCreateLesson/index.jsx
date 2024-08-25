import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useAddLessonMutation,
  useEditLessonMutation,
} from "../../services/lesson/lessonApi";
import { finishUpdateLesson } from "../../features/lesson/lessonSlice";

export default function FormCreateLesson({ isCreate, fnClosePopup, courseId }) {
  const [addLesson] = useAddLessonMutation();
  const [editLesson] = useEditLessonMutation();

  const dispatch = useDispatch();

  const lessonUpdate = useSelector((state) => state.lesson.lessonUpdate);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fnClosePopup(false);
    if (isCreate) {
      addLesson(data).then((res) => {
        toast("Create lesson Successful!");
        fnClosePopup(false);
      });
      return;
    }
    editLesson({ id: lessonUpdate.id, body: data }).then((res) => {
      toast("Update successful!");
      dispatch(finishUpdateLesson());
    });
    return;
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[500px] bg-white p-4 rounded-lg px-4 max-h-[90%] "
    >
      <h3 className="text-xl font-bold text-center">
        {isCreate ? "Create category" : "Update category"}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          defaultValue={courseId}
          autoComplete="off"
          id="courseID"
          className="hidden p-2 border border-gray-400 focus:outline-primary rounded-lg"
          {...register("courseID", { required: "course is empty!" })}
        />
        {errors.courseID && (
          <span className="text-red-500">{errors.courseID.message}</span>
        )}

        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          defaultValue={lessonUpdate ? lessonUpdate.name : ""}
          autoComplete="off"
          id="name"
          className="p-2 border border-gray-400 focus:outline-primary rounded-lg"
          {...register("name", { required: "Name is empty!" })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}

        <label htmlFor="videoUrl" className="font-medium">
          VideoURL
        </label>
        <input
          defaultValue={lessonUpdate ? lessonUpdate.videoUrl : ""}
          autoComplete="off"
          id="videoUrl"
          className="p-2 border border-gray-400 focus:outline-primary rounded-lg"
          {...register("videoUrl", { required: "videoUrl is empty!" })}
        />
        {errors.videoUrl && (
          <span className="text-red-500">{errors.videoUrl.message}</span>
        )}

        <input
          className="hidden"
          {...register("isSuccess")}
          defaultValue={0}
        ></input>
        <input
          className="hidden"
          {...register("isDelete")}
          defaultValue={0}
        ></input>

        <input
          autoComplete="off"
          type="submit"
          className="mt-2 w-full py-2 bg-primary hover:bg-opacity-70 rounded-lg cursor-pointer text-white font-medium"
          value={isCreate ? "Create" : "Update"}
        />
      </form>
    </div>
  );
}
