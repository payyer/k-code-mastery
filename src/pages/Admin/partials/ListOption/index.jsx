import { MdOutlinePlayLesson } from "react-icons/md";
import OptionItem from "../OptionItem";
import { BiLogoDiscourse } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setTab } from "../../../../features/admin/adminSlice";

export default function ListOption() {
  const dispatch = useDispatch();

  const handleSetTab = (tabName) => {
    dispatch(setTab(tabName));
  };
  return (
    <div className="flex flex-col w-full gap-2">
      <OptionItem
        onClick={() => handleSetTab("course")}
        title={"Course"}
        icon={<BiLogoDiscourse />}
      />
      {/* <OptionItem
        onClick={() => handleSetTab("lesson")}
        title={"Lesson"}
        icon={<MdOutlinePlayLesson />}
      /> */}
      <OptionItem
        onClick={() => handleSetTab("category")}
        title={"Category"}
        icon={<MdOutlinePlayLesson />}
      />
    </div>
  );
}
