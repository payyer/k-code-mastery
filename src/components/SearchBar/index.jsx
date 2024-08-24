import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchCategory } from "../../features/category/categorySlice";

export default function SearchBar({ className, placeholder, isCourse }) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isCourse) {
      dispatch(setSearchCategory(searchValue));
    }
  }, [dispatch, searchValue]);

  return (
    <div className="relative group w-full">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        placeholder={placeholder}
        className={`border border-black py-2 px-4 pr-10 rounded-lg outline-primary ${className}`}
      />
      <FaSearch className="absolute top-[10px] right-3 text-lg cursor-pointer group-focus-within:text-primary" />
    </div>
  );
}
