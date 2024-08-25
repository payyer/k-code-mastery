import { Fragment, useState } from "react";
import Popup from "../Popup";
import { useDispatch } from "react-redux";
import { startUpdateCourse } from "../../features/course/courseSlice";
import FormCreateCourse from "../FormCreateCourse";
import {
  useDeleteCourseMutation,
  useGetCourseQuery,
} from "../../services/course/courseApi";
import { formatDate } from "../../utils/createFile";
import { CiEdit } from "react-icons/ci";
import { FaX } from "react-icons/fa6";
import { useDeleteLessonMutation } from "../../services/lesson/lessonApi";
import FormCreateLesson from "../FormCreateLesson";
import { startUpdateLesson } from "../../features/lesson/lessonSlice";
import { toast } from "react-toastify";
const arrayTitle = [
  "No",
  "Title",
  "Lecturer",
  "Category",
  "Date",
  "Price",
  "Option",
];

export default function TableData({ data, isFetching }) {
  const [openOption, setOpenOption] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [showLesson, setShowLesson] = useState(null);

  const [openLessonPopup, setOpenLessonPopup] = useState(false);

  const [deleteLesson] = useDeleteLessonMutation();
  const [deleteCourse] = useDeleteCourseMutation();

  const dispatch = useDispatch();
  const handleShowLesson = (e, id) => {
    e.stopPropagation();
    if (showLesson === id) return setShowLesson(null);
    setShowLesson(id);
  };

  const handleOption = (e, id) => {
    e.stopPropagation();
    if (openOption === id) return setOpenOption(null);
    setOpenOption(id);
  };

  const handleOpenEditPopup = (e, course) => {
    e.stopPropagation();
    dispatch(startUpdateCourse(course));
    setOpenOption(null);
    setOpenPopup(true);
  };

  const handleEditPopUp = (e, lesson, courseId) => {
    e.stopPropagation();
    setIdCourse(courseId);
    dispatch(startUpdateLesson({ ...lesson, courseID: courseId }));
    setEditPopup(true);
  };

  const handleDeleteLesson = (id) => {
    deleteLesson(id)
      .then((res) => {
        console.log({ res });
        toast("Delete successful");
      })
      .catch((err) => toast(err.message));
  };

  const handleDeleteCourse = (id) => {
    deleteCourse(id)
      .then((res) => {
        console.log({ res });
        toast("Delete course successful");
      })
      .catch((err) => toast(err.message));
  };

  const [idCourse, setIdCourse] = useState(null);
  const handleLessCreatePopup = (id) => {
    setOpenLessonPopup(true);
    setIdCourse(id);
  };

  return (
    <>
      <table className={`w-full mt-2`}>
        <thead>
          <tr className="grid-cols-8 border border-gray-400 mb-2">
            {arrayTitle?.map((title, index) => {
              return (
                <th className="border border-gray-400" key={index}>
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {!isFetching ? (
            data.data?.map((val, index) => {
              return (
                <Fragment key={val.id}>
                  <tr
                    className={`${
                      val.id === showLesson && "bg-primary bg-opacity-50"
                    } text-center border-b h-14 border-gray-400 hover:bg-primary hover:bg-opacity-10 cursor-pointer`}
                    onClick={(e) => handleShowLesson(e, val.id)}
                  >
                    <td className="px-2 font-bold">{index + 1}</td>
                    <td className="px-2">{val?.title}</td>
                    <td className="px-2">{val?.lecturer}</td>
                    <td className="px-2">{val?.categoryDTO?.name}</td>
                    <td className="px-2">{formatDate(val?.createDate)}</td>
                    <td className="px-2">{val?.price}</td>
                    <td className="px-2 relative">
                      <button
                        onClick={(e) => {
                          handleOption(e, val?.id);
                        }}
                        className=" bg-yellow-300 font-medium bg-opacity-70 hover:bg-opacity-50 rounded-lg py-1 px-2"
                      >
                        Option
                      </button>
                      <ul
                        className={`${
                          val.id === openOption ? "block" : "hidden"
                        } absolute z-10 top-[85%] rounded-lg bg-white left-0 right-0 border border-gray-400`}
                      >
                        <li
                          onClick={(e) => handleOpenEditPopup(e, val)}
                          className="cursor-pointer hover:bg-opacity-50 hover:bg-yellow-200 rounded-t-lg"
                        >
                          Edit
                        </li>
                        <li
                          onClick={(e) => handleDeleteCourse(val.id)}
                          className="cursor-pointer hover:bg-opacity-50 hover:bg-red-200 rounded-b-lg"
                        >
                          Delete
                        </li>
                      </ul>
                    </td>
                  </tr>
                  {showLesson === val.id && val.lessonDTOs.length > 0 && (
                    <>
                      <tr className="border-b border-gray-400 h-14 rounded-xl">
                        <td colSpan={7} className="h-10 rounded-xl text-center">
                          <button
                            onClick={() => handleLessCreatePopup(val.id)}
                            className="w-full bg-green-400 rounded-lg h-10 text-white font-semibold hover:bg-green-500"
                          >
                            Create lesson
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-400 bg-gray-100 text-sm h-10">
                        <th></th>
                        <th colSpan={4} className="border-r border-gray-400">
                          Lesson name
                        </th>
                        <th className="border-r border-gray-400">Video</th>
                        <th className="border-r border-gray-400">Option</th>
                      </tr>

                      {val.lessonDTOs.map((lesson) => {
                        return (
                          <tr
                            key={lesson.id}
                            className="hover:bg-gray-300 bg-gray-100 h-10 border-b border-gray-500"
                          >
                            <td></td>
                            <td colSpan={4} className="px-4">
                              {lesson.name}
                            </td>
                            <td key={lesson.id} className="px-2 text-center ">
                              <a
                                href={lesson.videoUrl}
                                target="_blank"
                                className="text-secondary hover:text-primary"
                              >
                                Video
                              </a>
                            </td>
                            <td className="px-4 flex h-full items-center justify-center pt-2 gap-4">
                              <button
                                onClick={(e) =>
                                  handleEditPopUp(e, lesson, val.id)
                                }
                                className="flex items-center justify-center bg-yellow-200 hover:bg-opacity-70 h-6 w-6 rounded-full"
                              >
                                <CiEdit />
                              </button>
                              <button
                                onClick={() => handleDeleteLesson(lesson.id)}
                                className="flex items-center justify-center bg-red-400 hover:bg-opacity-70 h-6 w-6 rounded-full"
                              >
                                <FaX className="text-white text-[10px]" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                  {showLesson === val.id && val.lessonDTOs.length == 0 && (
                    <>
                      <tr className="border-b border-gray-400 h-14 rounded-xl">
                        <td colSpan={7} className="h-10 rounded-xl text-center">
                          <button
                            onClick={() => handleLessCreatePopup(val.id)}
                            className="w-full bg-green-400 rounded-lg h-10 text-white font-semibold hover:bg-green-500"
                          >
                            Create lesson
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan={7}
                          className="text-center h-10 bg-gray-100"
                        >
                          No lesson available
                        </td>
                      </tr>
                    </>
                  )}
                </Fragment>
              );
            })
          ) : (
            <tr>
              <td>Loading...</td>
            </tr>
          )}

          {data?.data?.length === 0 && (
            <tr className="h-20 text-center">
              <td colSpan={7} className="text-xl ">
                No course available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Popup create course */}
      {openPopup ? (
        <Popup
          closePopup={setOpenPopup}
          children={
            <FormCreateCourse fnClosePopup={setOpenPopup} isCreate={false} />
          }
        />
      ) : null}

      {editPopup ? (
        <Popup
          closePopup={setEditPopup}
          children={
            <FormCreateLesson
              courseId={idCourse}
              fnClosePopup={setEditPopup}
              isCreate={false}
            />
          }
        />
      ) : null}

      {openLessonPopup ? (
        <Popup
          closePopup={setOpenLessonPopup}
          children={
            <FormCreateLesson
              fnClosePopup={setOpenLessonPopup}
              isCreate={true}
              courseId={idCourse}
            />
          }
        />
      ) : null}
    </>
  );
}
