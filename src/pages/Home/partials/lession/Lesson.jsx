import React from "react";
import pythonIntro from "../../../../assets/lesson/python-intro.png";
import creatorImage from "../../../../assets/img/creator/creator.png";
import lessonSmall from "../../../../assets/icon/lesson-small.svg";
import challengSmall from "../../../../assets/icon/challenge-small.svg";
export default function HomeLesson() {
  return (
    <div>
      <div className="courseItem">
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
            <div>
              <p className="small-text">Creator</p>
              <p>Coddy</p>
            </div>
          </div>
          <p className="overflow-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi
            deleniti ad dolorem repudiandae adipisci natus odio. Cupiditate
            quidem maxime cum temporibus quas porro perspiciatis optio quisquam,
            enim magni dignissimos?
          </p>
          <div className="flex">
            <div>
              <div className="flex border-small-icon">
                <img src={lessonSmall} alt="" />
                <p> 18 Lesson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
