import { BsBarChartFill } from 'react-icons/bs';
import CourseInfo from './partials/CourseInfo';
import ListLesson from './partials/ListLesson';
import { FaRegClock } from 'react-icons/fa';
import { SlPuzzle } from 'react-icons/sl';
import { RiListCheck3 } from 'react-icons/ri';

export default function CrouseDetail() {
  return (
    <div className="flex flex-col gap-4 max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <CourseInfo />
      <section className="flex flex-col md:flex-row gap-5 justify-between bg-secondary p-4 border-2">
        <div className="flex items-center gap-4">
          <div>
            <BsBarChartFill className="text-[32px]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm">Skill Level</p>
            <p className="text-2xl font-medium">Beginner</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <FaRegClock className="text-[32px]" />
          </div>
          <div>
            <p>Time to complete</p>
            <p>115 hours</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <SlPuzzle className="text-[32px]" />
          </div>
          <div>
            <p>Lessons</p>
            <p>77</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <RiListCheck3 className="text-[32px]" />
          </div>
          <div>
            <p>Prerequisites</p>
            <p>Non</p>
          </div>
        </div>
      </section>
      <ListLesson />
    </div>
  );
}
