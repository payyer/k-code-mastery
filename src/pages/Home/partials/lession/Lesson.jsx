import React from "react";
import lessonSmall from "../../../../assets/icon/lesson-small.svg";
import styles from "../../styleHome.module.css";
import cls from "classnames";
import { useNavigate } from "react-router-dom";
export default function HomeLesson({ lessonData }) {
  const navigate = useNavigate();

  console.log("lesson data", lessonData);
  return (
    <div onClick={() => navigate(`course/${lessonData.id}`)}>
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
          <p className={styles.overflowWrap}>{lessonData.description}</p>
          <div className={styles.overflowWrap}>
            <div>
              <div className={cls(styles.flex)}>
                <img src={lessonSmall} alt="" />
                <p className={styles.borderSmallIcon}>
                  {" "}
                  {lessonData.lessonDTOs === null
                    ? "0"
                    : lessonData.lessonDTOs?.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
