import React from "react";
import pythonIntro from "../../../../assets/lesson/python-intro.png";
import creatorImage from "../../../../assets/img/creator/creator.png";
export default function HomeLesson() {
  return (
    <div>
      <div>
        <div className="lesson">
          <img src={pythonIntro} alt="" />
          <div className="gradiant"></div>
        </div>
        <div className="title"> Introduction to Python</div>
      </div>
      <div className="content">
        <div className="creator">
          <img src={creatorImage} alt="" />
          <p>Creator</p>
          <p>Coddy</p>
        </div>
      </div>
    </div>
  );
}
