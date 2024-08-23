import { useDispatch, useSelector } from "react-redux";
import cls from "classnames";
import styleHome from "./styleHome.module.css";
import HomeNavBar from "./partials/navbar/Navbar";
import HomeTabList from "./partials/tablist/Tab";
import HomeLesson from "./partials/lession/Lesson";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
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
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
            <HomeLesson />
          </div>
        </div>
      </nav>
    </div>
  );
}
