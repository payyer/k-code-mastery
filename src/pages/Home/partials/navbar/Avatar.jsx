import React, { useState } from "react";
import avatar from "../../../../assets/img/avatar.png";
import HomeUserActionMenu from "../user/user";
import styles from "../../styleHome.module.css";
import cls from "classnames";
export default function HomeAvatar() {
  // Đổi tên `onclick` thành `onClick` cho chuẩn React
  const [isOpen, setIsOpen] = useState(false); // Sửa tên hàm thành `setIsOpen` và giá trị mặc định là `false`
  let userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
  function handleAvatar() {
    setIsOpen(!isOpen); // Đổi trạng thái isOpen khi nhấn vào avatar
  }
  return (
    <div>
      <div
        className={cls(styles.avatarUser, styles.relative)}
        onClick={handleAvatar}
      >
        {/* Đổi class thành className */}
        {userInfo && (
          <img src={avatar} alt="avatar" className={styles.avatar} />
        )}
        {isOpen && ( // Render menu chỉ khi `isOpen` là true
          <HomeUserActionMenu />
        )}
      </div>
    </div>
  );
}
