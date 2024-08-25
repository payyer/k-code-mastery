import React from "react";
import lessonSmall from "../../../../assets/icon/lesson-small.svg";
import styles from "../../styleHome.module.css";
import cls from "classnames";
export default function HomeLesson({ lessonData }) {
  return (
    <div>
      <div className={styles.courseItem}>
        <div>
          <div className={styles.lesson}>
            <img src={lessonData.image} />
            <div className={styles.gradiant}></div>
          </div>
          <div className={styles.title}>{lessonData.title}</div>
        </div>
        <div className={styles.content}>
          <div className="flex flex-col ">
            <div>
              <p className={styles.smallText}>Creator</p>
              <p>{lessonData.lecturer}</p>
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
