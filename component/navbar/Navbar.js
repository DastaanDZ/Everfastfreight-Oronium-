import logo from "../../assets/images/logo.png";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiDownArrow,BiUpArrow } from 'react-icons/bi';
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleLi, setToggleLi] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)

  console.log('show',showDropDown)

  const style1 = {
    left: toggle ? "0" : "-100%",
    "@media (maxWidth: 768px)": {
      opacity: toggle ? "1" : "0",
    },
  };

  const style2 = {
      display: toggleLi? 'block' : 'none',
  };
  // console.log(toggleLi)

  return (
    <>
      <div className={styles.navbar_container}>
        <Link href="/">
          <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
          </div>
        </Link>
        <div className={styles.close}>
          <GiHamburgerMenu onClick={() => {
            setToggle(!toggle);
          }}/>
        </div>
        <ul
          className={styles.ul}
          style={style1}
        >
          <div className={styles.header}>
            <img src={logo.src} className={styles.logo} alt="" />
            <AiOutlineClose onClick={() => {
            setToggle(!toggle);
          }}/>
          </div>
          <li className={styles.li}>
          <p className={styles.services_li}>Services {toggleLi?<BiDownArrow className={styles.down_arrow} onClick={()=> setToggleLi(!toggleLi)}/>:<BiUpArrow className={styles.down_arrow} onClick={()=> setToggleLi(!toggleLi)}/>}</p>
          <div className={styles.dropdown_services} style={{display : showDropDown? 'block': 'none'}}>
            <ul>
              <li>Air Freight</li>
              <li>Sea Freight</li>
              <li>Warehousing</li>
              <li>Custom Clearence</li>
              <li>Door to Door Services</li>
              <li>Road Transport</li>
              <li>Project Forwarding</li>
            </ul>
          </div>
          <div className={styles.dropdown_services_mob} style={style2}>
            <ul>
              <li>Air Freight</li>
              <li>Sea Freight</li>
              <li>Warehousing</li>
              <li>Custom Clearence</li>
              <li>Door to Door Services</li>
              <li>Road Transport</li>
              <li>Project Forwarding</li>
            </ul>
          </div>
          </li>
          <Link href="/aboutus">
            <li className={styles.li}>About</li>
          </Link>
          <Link href="/branches">
            <li className={styles.li}>Branches</li>
          </Link>
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