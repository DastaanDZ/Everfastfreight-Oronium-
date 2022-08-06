import logo from "../../assets/images/logo.png";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const style = {
    left: toggle ? "0" : "-100%",
    "@media (maxWidth: 768px)": {
      opacity: toggle ? "1" : "0",
    },
  };

  return (
    <>
      <div className={styles.navbar_container}>
        <Link href="/">
          <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
          </div>
        </Link>
        <div
          className={styles.close}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <GiHamburgerMenu />
        </div>
        <ul
          className={styles.ul}
          style={style}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div className={styles.header}>
            <img src={logo.src} className={styles.logo} alt="" />
            <AiOutlineClose />
          </div>
          <li className={styles.li}>Services</li>
          <Link href="/aboutus">
            <li className={styles.li}>About</li>
          </Link>
          <Link href="/branches">
            <li className={styles.li}>Branches</li>
          </Link>
          {/* <li className={styles.li}>Track</li> */}
          <Link href="/career">
            <li className={styles.li}>Career</li>
          </Link>
          <Link href="/contact">
            <li className={styles.li}>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
