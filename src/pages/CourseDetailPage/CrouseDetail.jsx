import InfoCourse from "./partials/InfoCourse";

export default function CrouseDetail() {
  return (
    <div className="relative h-[468px] w-full">
      <img
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220714150931/JavaScript-Introduction.jpg"
        alt="crouse-theme"
        className={`h-full w-full object-cover"`}
      />
      <InfoCourse />
    </div>
  );
}
