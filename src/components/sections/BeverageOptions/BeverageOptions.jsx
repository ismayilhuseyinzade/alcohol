import React from "react";
import styles from "./BeverageOptions.module.scss";

const BeverageOptions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h1>Wine's Blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          perspiciatis!
        </p>
        <span>View All Products </span>
      </div>

      <div className={styles.alcoholBoxs}>
        <div className={styles.alcoholImg}>
          <img
            src="https://preview.colorlib.com/theme/wines/images/img_1.jpg"
            alt=""
          />
          <h3>What You Need To Know About Premium Rosecco</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            temporibus praesentium neque, voluptatum quam quibusdam.
          </span>
          <p>Dave Rogers in News</p>
        </div>
        <div className={styles.alcoholImg}>
          <img
            src="https://preview.colorlib.com/theme/wines/images/img_2.jpg"
            alt=""
          />
          <h3>What You Need To Know About Premium Rosecco</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            temporibus praesentium neque, voluptatum quam quibusdam.
          </span>
          <p>Dave Rogers in News</p>
        </div>
        <div className={styles.alcoholImg}>
          <img
            src="https://preview.colorlib.com/theme/wines/images/img_3.jpg"
            alt=""
          />
          <h3>What You Need To Know About Premium Rosecco</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            temporibus praesentium neque, voluptatum quam quibusdam.
          </span>
          <p>Dave Rogers in News</p>
        </div>
      </div>
    </div>
  );
};

export default BeverageOptions;
