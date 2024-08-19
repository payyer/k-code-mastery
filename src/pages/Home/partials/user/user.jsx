import HomeAvatar from "../navbar/Avatar";
import avatar from "../../../../assets/img/creator/creator.png";
export default function HomeUserActionMenu() {
  return (
    <div>
      <div className="user_menu absolute">
        <div className="header_user">
          <div className="image">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="user_name">
            <a href="#">Ngo Thanh Y</a>
          </div>
          <div className="logout">
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
}
