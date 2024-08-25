import { useEffect, useState } from "react";
import FormCreateCourse from "../../../../components/FormCreateCourse";
import TableData from "../../../../components/TableData";
import SearchBar from "../../../../components/SearchBar";
import Popup from "../../../../components/Popup";
import { FaPlus } from "react-icons/fa";
import { useGetCategoryQuery } from "../../../../services/category/categoryApi";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGetCourseQuery } from "../../../../services/course/courseApi";

export default function TabCourse() {
  const [openCreate, setOpenCreate] = useState(false);
  const [pagination, setPagination] = useState({
    searchByName: "",
    page: 1,
    limit: 3,
  });

  const [pageList, setPageList] = useState(0);

  const { data, isFetching } = useGetCourseQuery(pagination);
  const { data: categoryList } = useGetCategoryQuery();

  const searchValueCourse = useSelector(
    (state) => state.course.searchValueCourse
  );

  console.log({ data });
  const handlePagination = (e) => {
    setPagination({ ...pagination, categoryID: e.target.value, page: 1 });
  };
  const handlePageClick = (pageNum) => {
    setPagination((prev) => ({
      ...prev,
      page: pageNum,
    }));
  };

  useEffect(() => {
    if (data && data.total && data.limit) {
      setPageList(Math.ceil(data.total / data.limit));
    }
  }, [data, pagination, searchValueCourse]);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      searchByName: searchValueCourse,
      page: 1,
    }));
  }, [searchValueCourse]);

  return (
    <>
      <div className="p-4 flex-1 min-h-screen">
        <div className="flex gap-4">
          <SearchBar
            className={"w-full"}
            placeholder={"Ex: Javascript fundamental"}
          />
          <button
            onClick={() => setOpenCreate(true)}
            className="bg-primary flex items-center justify-center rounded-full h-10 w-10 flex-shrink-0 hover:bg-opacity-70 font-medium "
          >
            <FaPlus className=" text-white" />
          </button>
        </div>

        <select
          name=""
          id=""
          className="h-10 outline-primary"
          onChange={(e) => handlePagination(e)}
        >
          <option value={""}>All</option>
          {categoryList?.data?.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>

        <TableData data={data} isFetching={isFetching} />

        <div className="w-full flex justify-end gap-2 mt-4">
          <button className="bg-white border border-primary rounded-md p-1">
            <IoIosArrowBack className="text-2xl" />
          </button>
          {Array.from({ length: pageList }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`${
                pagination.page === index + 1
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } border border-primary rounded-md p-1 px-3`}
            >
              {index + 1}
            </button>
          ))}
          <button className="bg-white border border-primary rounded-md p-1">
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
      {openCreate ? (
        <Popup
          closePopup={setOpenCreate}
          children={
            <FormCreateCourse fnClosePopup={setOpenCreate} isCreate={true} />
          }
        />
      ) : null}
    </>
  );
}
