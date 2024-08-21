import React from "react";
import svgBack from "../../../assets/icon/back-svg.svg";
import svgUserImage from "../../../assets/profile/user_placeholder.svg";
export default function PanelActiveEdit() {
  return (
    <div>
      PanelActive
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center cursor-pointer">
            <img src={svgBack} alt="" />
            <p className="text-xl">Back</p>
          </div>
          <button className="btn py-3 px-10 rounded-xl bg-[#07f] shadow-[0_10px_0_0_#005dc8] active:bg-[#07f] active:shadow-[0_4px_0_0_#005dc8] active:translate-y-[5px] transition duration-200  text-white font-bold ">
            Save
          </button>
        </div>
        <hr />
        <p>Profile Image</p>
        <div className="w-40">
          <img src={svgUserImage} alt="user image" className="w-full" />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            placeholder="Example@gmail.com"
            disabled
            className="border border-solid rounded"
          />
        </div>
        <div>
          <p>User Name</p>
          <input
            type="text"
            placeholder=""
            className="border border-solid rounded "
          />
        </div>
      </div>
    </div>
  );
}
