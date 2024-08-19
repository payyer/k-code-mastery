import Admin from "../pages/Admin/Admin";
import { CourseDetail } from "../pages/CourseDetailPage";
import Home from "../pages/Home";
import { Lesson } from "../pages/Lesson";

const linkPage = [
  { link: "/", element: <Home /> },
  { link: "/course/:id", element: <CourseDetail /> },
  { link: "/lesson/:id", element: <Lesson /> },
  { link: "/admin", element: <Admin /> },
];

export default linkPage;
