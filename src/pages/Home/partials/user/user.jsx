import styleHome from "../../styleHome.module.css";
import avatar from "../../../../assets/img/creator/creator.png";
import cls from "classnames";
import { useNavigate } from "react-router-dom";

export default function HomeUserActionMenu() {
  let userInfo = JSON.parse(localStorage.getItem("USER_INFO"));

  const navigate = useNavigate();
  const handleLogout = () => {
    // Xóa thông tin người dùng khỏi localStorage
    localStorage.removeItem("USER_INFO");

    // Tải lại trang để thay đổi có hiệu lực
    window.location.reload();
  };

  return (
    <div>
      <div className={cls(styleHome.user_menu, styleHome.absolute)}>
        <div className={styleHome.header_user}>
          <div className={styleHome.image}>
            <img src={avatar} alt="avatar" />
          </div>
          <div
            onClick={() => {
              navigate("/profile");
            }}
            className={styleHome.user_name}
          >
            <a href="#">{userInfo ? userInfo.data.username : "Guest"}</a>
          </div>
          <div className={styleHome.logout} onClick={handleLogout}>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
}
