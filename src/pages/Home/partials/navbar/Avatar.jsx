import React, { useState } from "react";
import avatar from "../../../../assets/img/avatar.png";
import HomeUserActionMenu from "../user/user";
export default function HomeAvatar() {
  // Đổi tên `onclick` thành `onClick` cho chuẩn React
  const [isOpen, setIsOpen] = useState(false); // Sửa tên hàm thành `setIsOpen` và giá trị mặc định là `false`

  function handleAvatar() {
    setIsOpen(!isOpen); // Đổi trạng thái isOpen khi nhấn vào avatar
  }
  return (
    <div>
      <div className="avatarUser relative" onClick={handleAvatar}>
        {" "}
        {/* Đổi class thành className */}
        <img src={avatar} alt="avatar" className="avatar" />
        {isOpen && ( // Render menu chỉ khi `isOpen` là true
          <HomeUserActionMenu />
        )}
      </div>
    </div>
  );
}
