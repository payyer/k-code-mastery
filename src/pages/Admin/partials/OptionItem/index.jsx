import { useSelector } from "react-redux";

export default function OptionItem({ title, onClick, icon, ...props }) {
  const tabAdmin = useSelector((state) => state.admin.tab);
  const isActive = tabAdmin == title.toLowerCase();
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "bg-secondary" : ""
      } hover:bg-[#ffffff4a] flex items-center gap-2 p-2 py-4 pl-14 rounded-lg`}
      {...props}
    >
      <div>{icon}</div>
      <p>{title}</p>
    </button>
  );
}
