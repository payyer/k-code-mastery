import React from "react";
import pythonIntro from "../../../../assets/lesson/python-intro.png";
import creatorImage from "../../../../assets/img/creator/creator.png";
import lessonSmall from "../../../../assets/icon/lesson-small.svg";
import styles from "../../styleHome.module.css";
import cls from "classnames";
export default function HomeLesson() {
  return (
    <div>
      <div className={styles.courseItem}>
        <div>
          <div className={styles.lesson}>
            <img src={pythonIntro} alt="" />
            <div className={styles.gradiant}></div>
          </div>
          <div className={styles.title}> Introduction to Python</div>
        </div>
        <div className={styles.content}>
          <div className={styles.creator}>
            <img src={creatorImage} alt="" />
            <div>
              <p className={styles.smallText}>Creator</p>
              <p>Coddy</p>
            </div>
          </div>
          <p className={styles.overflowWrap}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi
            deleniti ad dolorem repudiandae adipisci natus odio. Cupiditate
            quidem maxime cum temporibus quas porro perspiciatis optio quisquam,
            enim magni dignissimos?
          </p>
          <div className={styles.overflowWrap}>
            <div>
              <div className={cls(styles.flex)}>
                <img src={lessonSmall} alt="" />
                <p className={styles.borderSmallIcon}> 18 Lesson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
