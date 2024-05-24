import React from "react";
import styles from './Footer.module.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconsBox}>
        <div><FaFacebookF/></div>
        <div><FaTwitter/></div>
        <div><FaYoutube/></div>
        <div><FaInstagram/></div>
      </div>
      <p>
        Copyright ©2024 All rights reserved | This template is made with <span><FaHeart/></span> by
        Colorlib
      </p>
    </div>
  );
};

export default Footer;
