// import "./style.css";
import HomeNavBar from "./partials/navbar/Navbar";
import HomeTabList from "./partials/tablist/Tab";
import cls from "classnames";
import styleHome from "./styleHome.module.css";
import HomeLesson from "./partials/lession/Lesson";
import { useGetCourseQuery } from "../../services/course/courseApi";
export default function Home() {
  const { data, isFetching } = useGetCourseQuery();
  return (
    <div>
      <div className={styleHome.relative}>
        <HomeNavBar />
      </div>
      <nav className={cls(styleHome.main, styleHome.container)}>
        <HomeTabList />
        <div className={styleHome.mainLesson}>
          <div className={styleHome.bigTitle}>Popular this week</div>
          <div className={styleHome.gridContainer}>
            {data?.data.map((newData, i) => {
              return <HomeLesson key={i} lessonData={newData} />;
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
