import Admin from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import CourseDetail from "../pages/CourseDetailPage/CrouseDetail";
import Lesson from "../pages/Lesson/Lesson";

const linkPage = [
  { link: "/", element: <Home /> },
  { link: "/course/:id", element: <CourseDetail /> },
  { link: "/lesson/:id", element: <Lesson /> },
  { link: "/admin", element: <Admin /> },
];

export default linkPage;
