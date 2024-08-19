import { MdOutlineDashboard, MdOutlinePlayLesson } from "react-icons/md";
import OptionItem from "../OptionItem";
import { BiLogoDiscourse } from "react-icons/bi";

export default function ListOption() {
  return (
    <div className="flex flex-col w-full gap-4">
      <OptionItem title={"Dashboard"} icon={<MdOutlineDashboard />} />
      <OptionItem title={"Course"} icon={<BiLogoDiscourse />} />
      <OptionItem title={"Dashboard"} icon={<MdOutlinePlayLesson />} />
    </div>
  );
}
