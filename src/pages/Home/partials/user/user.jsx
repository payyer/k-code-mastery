import styleHome from "../../styleHome.module.css";
import avatar from "../../../../assets/img/creator/creator.png";
import cls from "classnames";

export default function HomeUserActionMenu() {
  return (
    <div>
      <div className={cls(styleHome.user_menu, styleHome.absolute)}>
        <div className={styleHome.header_user}>
          <div className={styleHome.image}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styleHome.user_name}>
            <a href="#">Ngo Thanh Y</a>
          </div>
          <div className={styleHome.logout}>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
}
