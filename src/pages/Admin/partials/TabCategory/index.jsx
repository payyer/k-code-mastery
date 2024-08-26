import { useState } from "react";
import Popup from "../../../../components/Popup";
import SearchBar from "../../../../components/SearchBar";
import FormCreateCategory from "../../../../components/FormCreateCategory";
import { FaPlus } from "react-icons/fa";
import TableCategory from "../../../../components/TableCategory";

export default function TabCategory() {
  const [openCreate, setOpenCreate] = useState(false);
  return (
    <>
      <div className="p-4 flex-1 min-h-screen">
        <div className="flex gap-4">
          <SearchBar
            className={"w-full"}
            placeholder={"Ex: Java"}
            isCourse={false}
          />
          <button
            onClick={() => setOpenCreate(true)}
            className="bg-primary flex items-center justify-center rounded-full h-10 w-10 flex-shrink-0 hover:bg-opacity-70 font-medium "
          >
            <FaPlus className=" text-white" />
          </button>
        </div>

        <TableCategory />
      </div>
      {openCreate ? (
        <Popup
          closePopup={setOpenCreate}
          children={
            <FormCreateCategory fnClosePopup={setOpenCreate} isCreate={true} />
          }
        />
      ) : null}
    </>
  );
}
