import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import logoBlack from "../../assets/icon/logo-black.svg";

import avatar from "../../assets/img/avatar.png";
import "./style.css";
import HomeSearch from "./partials/navbar/Search";
import HomeLogo from "./partials/navbar/Logo";
import HomeAvatar from "./partials/navbar/Avatar";
import HomeTab from "./partials/navbar/Tab";
import HomeTabList from "./partials/tablist/Tab";
import HomeLesson from "./partials/lession/Lesson";
export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <nav class="nav-bar">
        <HomeLogo />
        <HomeTab />
        <HomeSearch />
        <HomeAvatar />
      </nav>
      <nav className="main-container">
        <HomeTabList />
        <div className="main-lesson">
          <div className="bigTitle">Popular this week</div>
          <div className="grid-container">
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
