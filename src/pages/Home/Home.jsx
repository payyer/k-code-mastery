import "./style.css";
import HomeNavBar from "./partials/navbar/Navbar";
import HomeTabList from "./partials/tablist/Tab";
import HomeLesson from "./partials/lession/Lesson";
export default function Home() {
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
