import { useState } from "react";
import Popup from "../../../../components/Popup";
import SearchBar from "../../../../components/SearchBar";

export default function TabCategory() {
  const [openCreate, setOpenCreate] = useState(false);
  return (
    <>
      <div className="p-4 flex-1 min-h-screen">
        <div className="flex gap-4">
          <SearchBar className={"w-full"} placeholder={"Ex: Java"} />
          <button
            onClick={() => setOpenCreate(true)}
            className="bg-green-400 rounded-lg px-2 hover:bg-green-300 font-medium "
          >
            Create
          </button>
        </div>

        <div className="mt-4">123</div>
      </div>
      {openCreate ? (
        <Popup closePopup={setOpenCreate} children={<h3>Create category</h3>} />
      ) : null}
    </>
  );
}
