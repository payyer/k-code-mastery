import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import logoBlack from "../../assets/icon/logo-black.svg";

import avatar from "../../assets/img/avatar.png";
import "./style.css";
import HomeNavBar from "./partials/navbar/Navbar";
import HomeTabList from "./partials/tablist/Tab";
import HomeLesson from "./partials/lession/Lesson";
import HomeUserActionMenu from "./partials/user/user";
export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="relative">
        <HomeNavBar />
      </div>
      <nav className="main-container">
        <HomeTabList />
        <div className="main-lesson">
          <div className="bigTitle">Popular this week</div>
          <div className="grid-container">
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
