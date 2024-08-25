import _ from "lodash";
export default function ListLesson({ listLesson }) {
  console.log({ listLesson });
  const chunkedArray = _.chunk(listLesson, listLesson.length / 2);
  console.log({ chunkedArray });

  return (
    <div className="relative md:col-span-2">
      <div className="absolute shadow-custom-box grid md:grid-cols-2 gap-4 top-0 bg-white rounded-lg p-4 w-full">
        <ul className="grid gap-4">
          {chunkedArray[0]?.map((lesson) => {
            return <li>{lesson.name}</li>;
          })}
        </ul>
        <ul className="grid gap-4">
          {chunkedArray[1]?.map((lesson) => {
            return <li>{lesson.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
