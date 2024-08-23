import { FaSearch } from "react-icons/fa";

export default function SearchBar({ className, placeholder, ...props }) {
  return (
    <div className="relative group w-full">
      <input
        type="text"
        placeholder={placeholder}
        className={`border border-black py-2 px-4 pr-10 rounded-lg outline-primary ${className}`}
        {...props}
      />
      <FaSearch className="absolute top-[10px] right-3 text-lg cursor-pointer group-focus-within:text-primary" />
    </div>
  );
}
