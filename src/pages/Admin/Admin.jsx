import { useSelector } from "react-redux";
import Drawer from "./partials/Drawer";
import TabCourse from "./partials/TabCourse";
import TabCategory from "./partials/TabCategory";
export default function Admin() {
  const tabAdmin = useSelector((state) => state.admin.tab);
 
  return (
    <div className="min-h-screen w-full flex">
      <Drawer />
      {tabAdmin === "course" && <TabCourse />}
      {tabAdmin === "category" && <TabCategory />}
    </div>
  );
}
