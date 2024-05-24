import React from "react";
import styles from './CommentSection.module.scss'

const CommentSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.commentBoxs}>
        <div className={styles.commentBox}>
          <div className={styles.pageView}>
            <img
              src="https://preview.colorlib.com/theme/wines/images/person_1.jpg"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            ullam nostrum iste, est ipsum voluptates praesentium accusamus
            saepe! Quo sunt totam ipsum rerum possimus! Unde suscipit possimus
            veniam dicta delectus debitis. Non, nesciunt?
          </p>
          <span>-LEVI MORRIS</span>
        </div>
        <div className={styles.commentBox}>
          <div className={styles.pageView}>
            <img
              src="https://preview.colorlib.com/theme/wines/images/person_1.jpg"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            ullam nostrum iste, est ipsum voluptates praesentium accusamus
            saepe! Quo sunt totam ipsum rerum possimus! Unde suscipit possimus
            veniam dicta delectus debitis. Non, nesciunt?
          </p>
          <span>-LEVI MORRIS</span>
        </div>
        <div className={styles.commentBox}>
          <div className={styles.pageView}>
            <img
              src="https://preview.colorlib.com/theme/wines/images/person_1.jpg"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            ullam nostrum iste, est ipsum voluptates praesentium accusamus
            saepe! Quo sunt totam ipsum rerum possimus! Unde suscipit possimus
            veniam dicta delectus debitis. Non, nesciunt?
          </p>
          <span>-LEVI MORRIS</span>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
