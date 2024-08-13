import LessonItem from './LessonItem';

export default function ListLesson() {
  return (
    <section className="flex flex-col gap-2 ">
      <h3 className="text-xl font-medium">Noi dung khoa hoc</h3>
      <p>
        Gom <span className="font-medium">28</span> bai hoc
      </p>
      {/* List bai hoc */}
      <div className="flex flex-col border">
        <LessonItem />
        <LessonItem />
        <LessonItem />
      </div>
    </section>
  );
}
