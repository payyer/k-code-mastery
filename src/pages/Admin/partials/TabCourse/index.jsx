import { useState } from "react";
import FormCreateCourse from "../../../../components/FormCreateCourse";
import TableData from "../../../../components/TableData";
import SearchBar from "../../../../components/SearchBar";
import Popup from "../../../../components/Popup";
import { FaPlus } from "react-icons/fa";

export default function TabCourse() {
  const [openCreate, setOpenCreate] = useState(false);
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

        <TableData />
      </div>
      {openCreate ? (
        <Popup
          closePopup={setOpenCreate}
          children={<FormCreateCourse isCreate={true} />}
        />
      ) : null}
    </>
  );
}
