import React from "react";
import avatar from "../../../../assets/img/avatar.png";
export default function HomeAvatar() {
  return (
    <div>
      <div class="avatarUser">
        <img src={avatar} alt="avatar" class="avatar" />
      </div>
    </div>
  );
}
