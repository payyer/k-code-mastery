export default function OptionItem({ title, onClick, icon, ...props }) {
  return (
    <button
      onClick={onClick}
      className="hover:bg-[#ffffff4a] flex items-center gap-2 p-2 pl-14"
      {...props}
    >
      <div>{icon}</div>
      <p>{title}</p>
    </button>
  );
}
