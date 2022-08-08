import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";
import logo from "../../assets/images/logo.png";
import styles from "./footer.module.css";
import Link from "next/link";

import a from "next/link";
const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={logo.src} className={styles.logo} alt="" />
          <p className={styles.logo_desc}>
            © 2022 - Everfast Forwarders Pvt. Ltd.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.part1}>
            <p className={styles.heading}>Jump to</p>
            <ul className={styles.ul}>
              <Link href="/aboutus">
                <li className={styles.li}>About</li>
              </Link>
              <Link href="/news">
                <li className={styles.li}>News</li>
              </Link>
              <Link href="/">
                <li className={styles.li}>Testimonials</li>
              </Link>
              <Link href="/services">
                <li className={styles.li}>Services</li>
              </Link>
              <Link href="/">
                <li className={styles.li}>FAQs</li>
              </Link>
            </ul>
          </div>
          <div className={styles.part2}>
            <p className={styles.heading}>Legal</p>
            <ul className={styles.ul}>
              <Link href="/privacypolicy">
                <li className={styles.li}>Privacy Policy</li>
              </Link>
              <Link href="/termsofservices">
                <li className={styles.li}>Terms of Services</li>
              </Link>
            </ul>
          </div>
          <div className={styles.part3}>
            <p className={styles.heading}>Social</p>
            <ul className={styles.ul}>
              <a href="https://www.facebook.com/EVERFASTINDIA/">
                <li className={styles.li}>
                  <BsFacebook />{" "}
                  <p className={styles.social_media_icon}>Facebook</p>
                </li>
              </a>
              <a href="https://twitter.com/EverfastF">
                <li className={styles.li}>
                  <BsTwitter />{" "}
                  <p className={styles.social_media_icon}>Twitter</p>
                </li>
              </a>
              <a href="https://www.linkedin.com/in/everfast-freight-aa4752119/?originalSubdomain=in">
                <li className={styles.li}>
                  <BsLinkedin />{" "}
                  <p className={styles.social_media_icon}>Linkedin</p>
                </li>
              </a>
              <a href="https://www.youtube.com/channel/UCh9mpCJYqiUsli2VRzoOZPQ">
                <li className={styles.li}>
                  <BsYoutube />{" "}
                  <p className={styles.social_media_icon}>Youtube</p>
                </li>
              </a>
              <a>
                <li className={styles.li}>
                  <BsInstagram />{" "}
                  <p className={styles.social_media_icon}>Instagram</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
