import CrouseDetail from '../pages/CourseDetailPage/CrouseDetail';
import Home from '../pages/Home';
import { Test } from '../pages/Test';

const linkPage = [
  { link: '/', element: <Home /> },
  { link: '/test', element: <Test /> },
  { link: '/course/:id', element: <CrouseDetail /> },
];

export default linkPage;
