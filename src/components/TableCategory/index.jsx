import { Fragment, useState } from "react";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../services/category/categoryApi";
import FormCreateCategory from "../FormCreateCategory";
import Popup from "../Popup";
import { useDispatch, useSelector } from "react-redux";
import { startUpdateCategory } from "../../features/category/categorySlice";
import { toast } from "react-toastify";
import { filterValue } from "../../utils/createFile";

const titleList = ["No", "Name", "Option"];

export default function TableCategory() {
  const dispatch = useDispatch();
  const { data, isFetching } = useGetCategoryQuery();
  const [deteleCategory] = useDeleteCategoryMutation();

  const searchValue = useSelector((state) => state.category.searchValue);

  let filterData = [];
  if (searchValue) {
    filterData = filterValue(data?.data, searchValue);
  }

  const [openOption, setOpenOption] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const handleOption = (e, id) => {
    e.stopPropagation();
    if (openOption === id) return setOpenOption(null);
    setOpenOption(id);
  };

  const handleOpenEditPopup = (e, category) => {
    e.stopPropagation();
    dispatch(startUpdateCategory(category));
    setOpenOption(null);
    setOpenPopup(true);
  };

  const deleteCategory = (id) => {
    deteleCategory({ id })
      .then((res) => {
        if (res.data.statusCode === 200) {
          toast("Delete successful!");
          setOpenOption(null);
          setOpenPopup(false);
        }
      })
      .catch((err) => toast.error("Something went wrong!"));
  };

  return (
    <>
      <table className={`w-full mt-2`}>
        <thead>
          <tr className="grid-cols-8 border border-gray-400 mb-2">
            {titleList?.map((title, index) => {
              return (
                <th className="border border-gray-400" key={index}>
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!searchValue && (
            <>
              {!isFetching ? (
                data.data?.map((val, index) => {
                  return (
                    <Fragment key={val.id}>
                      <tr
                        className={` text-center border-b h-14 border-gray-400 hover:bg-primary hover:bg-opacity-10 cursor-pointer`}
                      >
                        <td className="px-2 font-bold">{index + 1}</td>
                        <td className="px-2">{val?.name}</td>
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
                              onClick={() => deleteCategory(val.id)}
                              className="cursor-pointer hover:bg-opacity-50 hover:bg-red-200 rounded-b-lg"
                            >
                              Delete
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })
              ) : (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}
            </>
          )}

          {searchValue && (
            <>
              {filterData.length > 0 ? (
                filterData?.map((val, index) => {
                  return (
                    <Fragment key={val.id}>
                      <tr
                        className={` text-center border-b h-14 border-gray-400 hover:bg-primary hover:bg-opacity-10 cursor-pointer`}
                        onClick={(e) => handleShowLesson(e, val.id)}
                      >
                        <td className="px-2 font-bold">{index + 1}</td>
                        <td className="px-2">{val?.name}</td>
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
                              onClick={() => deleteCategory(val.id)}
                              className="cursor-pointer hover:bg-opacity-50 hover:bg-red-200 rounded-b-lg"
                            >
                              Delete
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={3} className="text-center">
                    No category available
                  </td>
                </tr>
              )}
            </>
          )}
        </tbody>
      </table>
      {openPopup ? (
        <Popup
          closePopup={setOpenPopup}
          children={
            <FormCreateCategory fnClosePopup={setOpenPopup} isCreate={false} />
          }
        />
      ) : null}
    </>
  );
}
