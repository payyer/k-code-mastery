import SearchBar from "../../components/SearchBar";
import { useGetCourseQuery } from "../../services/course/courseApi";
import Drawer from "./partials/Drawer";

export default function Admin() {
  const { data, isFetching } = useGetCourseQuery();
  console.log({ data });
  return (
    <div className="min-h-screen w-full flex">
      <Drawer />
      <div className="p-4 flex-1">
        <SearchBar
          className={"w-full"}
          placeholder={"Ex: Javascript Fundamental..."}
        />
      </div>
    </div>
  );
}
