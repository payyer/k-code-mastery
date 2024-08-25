import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonLogin() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/account")}
        className="btn py-1 px-10 rounded-xl bg-[#07f] shadow-[0_10px_0_0_#005dc8] active:bg-[#07f] active:shadow-[0_4px_0_0_#005dc8] active:translate-y-[5px] transition duration-200  text-white font-bold  "
      >
        Login
      </button>
    </div>
  );
}
