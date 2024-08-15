import CrouseDetail from "../pages/CourseDetailPage/CrouseDetail";
import Home from "../pages/Home";
import Lesson from "../pages/Lesson";

const linkPage = [
  { link: "/", element: <Home /> },
  { link: "/course/:id", element: <CrouseDetail /> },
  { link: "/lesson/:id", element: <Lesson /> },
];

export default linkPage;
