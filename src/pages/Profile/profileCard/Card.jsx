import React from "react";
import svgUserImage from "../../../assets/profile/user_placeholder.svg";
import svgUserEdit from "../../../assets/profile/edit.svg";
import svgUserLogout from "../../../assets/profile/logout-white.svg";
const user = [];
export default function Card({ setActiveTab }) {
  return (
    <div>
      <div className="bg-blue-600 p-8 h-screen space-y-10" id="profile-card">
        <div className="bg-white  rounded-2xl flex flex-col  items-center py-8  px-4  h-[calc(100%-96px)] space-y-8">
          <img src={svgUserImage} alt="user image" className="w-40" />
          <p className="text-2xl font-bold">NgoThanhY</p>
          <div className="flex flex-col gap-4">
            <hr />
            <div
              className="flex gap-2 justify-start items-center cursor-pointer"
              onClick={() => {
                setActiveTab(false);
              }}
            >
              <img src={svgUserEdit} alt="" class="icon-edit" />
              <p>Edit your profile</p>
            </div>
            <div className="flex gap-1 justify-start items-center cursor-pointer">
              <img src={svgUserEdit} alt="" class="icon-edit" />
              <p>Change password</p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff4a] rounded-2xl py-4 px-5 text-xl flex gap-2 cursor-pointer hover:bg-cyan-600 hover:ring-sky-500">
          <img src={svgUserLogout} alt="logout -svg" />
          <p className="text-white">Logout</p>
        </div>
      </div>
    </div>
  );
}
