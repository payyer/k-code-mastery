export default function PrerequisitesCourse() {
  return (
    <div className="p-6 bg-white rounded-xl flex flex-col gap-2">
      <h3 className="text-lg font-bold">Prerequisites</h3>
      <ul className="flex flex-col gap-4 flex-1">
        <li className=" flex items-center gap-2 text-text-secondary">
          <div className="w-2 h-2 bg-primary rounded-full"></div> No prior
          knowledge required
        </li>
      </ul>
      <button className="flex items-center justify-center py-2 bg-primary rounded-lg text-white font-bold shadow-shadow-b hover:bg-opacity-90">
        BUY NOW 489.000$
      </button>
    </div>
  );
}
