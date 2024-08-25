import Admin from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import CourseDetail from "../pages/CourseDetailPage/CrouseDetail";
import Lesson from "../pages/Lesson/Lesson";
import AccountAccess from "../pages/AccountAccess/AccountAccess";

const linkPage = [
  { link: "/", element: <Home /> },
  { link: "/course/:id", element: <CourseDetail /> },
  { link: "/lesson", element: <Lesson /> },
  { link: "/admin", element: <Admin /> },
  { link: "/account", element: <AccountAccess /> },
];

export default linkPage;
