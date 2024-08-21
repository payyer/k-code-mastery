import CrouseDetail from "../pages/CourseDetailPage/CrouseDetail";
import Home from "../pages/Home/Home";
import Lesson from "../pages/Lesson";
import AccountAccess from "../pages/AccountAccess/AccountAccess";
import Profile from "../pages/Profile/Profile";
const linkPage = [
  { link: "/", element: <Home /> },
  { link: "/course/:id", element: <CrouseDetail /> },
  { link: "/lesson/:id", element: <Lesson /> },
  { link: "/account", element: <AccountAccess /> },
  { link: "/profile", element: <Profile /> },
];

export default linkPage;
