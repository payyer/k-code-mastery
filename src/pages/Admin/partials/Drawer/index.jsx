import { useNavigate } from "react-router-dom";
import AdminInfo from "../AdminInfo";
import ListOption from "../ListOption";

export default function Drawer() {
  const navigate = useNavigate();
  return (
    <div className="w-[250px] flex flex-col gap-4 items-center bg-primary text-white min-h-screen py-4">
      <div className="fixed flex h-full flex-col gap-4 items-center">
        {/* Header */}
        <AdminInfo />
        {/* List option */}
        <ListOption />
        <button
          onClick={() => {
            localStorage.removeItem("USER_INFO");
            navigate("/");
          }}
          className="btn mt-auto mb-10 block py-1 px-10 rounded-xl bg-secondary shadow-[0_10px_0_0_#005dc8] active:bg-[#07f] active:shadow-[0_4px_0_0_#005dc8] active:translate-y-[5px] transition duration-200  text-white font-bold "
        >
          Logout
        </button>
      </div>
    </div>
  );
}
