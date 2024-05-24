import React from "react";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  
      const navigation = useNavigate()


  return (
    <div className={styles.headerSections}>
      <img
        src="https://preview.colorlib.com/theme/wines/images/logo.png"
        alt=""
      />
      <div className={styles.navContainer}>
        <div className={styles.navBar}>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div className={styles.basket}>
          <FaBasketShopping  onClick = {() => navigation('/basket')} />

        </div>
        <div className={styles.heart}>
          <FaHeart onClick={()=> navigation('/wishlist')}/>
        </div>
        <div className={styles.hamburgerMenu}>
          <GiHamburgerMenu />
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
