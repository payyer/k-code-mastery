import CrouseDetail from "../pages/CourseDetailPage/CrouseDetail";
import Home from "../pages/Home/Home";
import Lesson from "../pages/Lesson";
import AccountAccess from "../pages/AccountAccess/AccountAccess";
const linkPage = [
  { link: "/", element: <Home /> },
  { link: "/course/:id", element: <CrouseDetail /> },
  { link: "/lesson/:id", element: <Lesson /> },
  { link: "/account", element: <AccountAccess /> },
];

export default linkPage;
