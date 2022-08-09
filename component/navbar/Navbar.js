import logo from "../../assets/images/logo.png";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleLiMob, setToggleLiMob] = useState(false);
  const [toggleLi, setToggleLi] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  console.log("show", showDropDown);

  const style1 = {
    left: toggle ? "0" : "-100%",
    "@media (maxWidth: 768px)": {
      opacity: toggle ? "1" : "0",
    },
  };

  const style2 = {
    display: toggleLiMob ? "block" : "none",
  };
  const style3 = {
    display: toggleLi ? "block" : "none",
    position: 'absolute',
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
          <GiHamburgerMenu
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
        <ul className={styles.ul} style={style1}>
          <div className={styles.header}>
            <img src={logo.src} className={styles.logo} alt="" />
            <AiOutlineClose
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>
          <Link href='/'> 
          <li className={styles.li}>Home</li>
          </Link>
          <li className={styles.li} onClick={() => console.log("hello")}>
            <p className={styles.services_li}>
              <p className={styles.services}>Services</p>
              {toggleLi ? (
                <BiDownArrow
                  className={styles.down_arrow}
                  onClick={() => setToggleLi(!toggleLi)}
                />
              ) : (
                <BiUpArrow
                  className={styles.down_arrow}
                  onClick={() => setToggleLi(!toggleLi)}
                />
              )}
              {toggleLiMob ? (
                <BiDownArrow
                  className={styles.down_arrow_mob}
                  onClick={() => setToggleLiMob(!toggleLiMob)}
                />
              ) : (
                <BiUpArrow
                  className={styles.down_arrow_mob}
                  onClick={() => setToggleLi(!toggleLiMob)}
                />
              )}
            </p>
            <div
              className={styles.dropdown_services} style={style3}>
              <ul>
              <Link href='/services/air-freight'> 
                <li onClick={() => setToggleLi(!toggleLi)}>Air Freight</li>
              </Link>
                <Link href='/services/sea-freight'> 
                <li onClick={() => setToggleLi(!toggleLi)}>Ocean freight</li>
              </Link>
                <Link href='/services/warehousing'> 
                <li onClick={() => setToggleLi(!toggleLi)}>Warehousing</li>
              </Link>
                <Link href='/services/custom-brokerage'> 
                <li onClick={() => setToggleLi(!toggleLi)}>Customs Brokerage</li>
              </Link>
                <Link href='/services/door-to-door'> 
                <li onClick={() => setToggleLi(!toggleLi)}>Door to Door Services</li>
              </Link>
                <Link href='/services/road-transport'> 
                <li onClick={() => setToggleLi(!toggleLi)}>Road Transport</li>
              </Link>
                <Link href='/services/project-forwarding'> 
                <li onClick={() => setToggleLi(!toggleLi)}>Project Forwarding</li>
              </Link>
              </ul>
            </div>
            <div className={styles.dropdown_services_mob} style={style2}>
              <ul>
              <Link href='/services/air-freight'> 
                <li onClick={() => setToggleLi(!toggleLiMob)}>Air Freight</li>
              </Link>
                <Link href='/services/sea-freight'> 
                <li onClick={() => setToggleLi(!toggleLiMob)}>Ocean freight</li>
              </Link>
                <Link href='/services/warehousing'> 
                <li onClick={() => setToggleLi(!toggleLiMob)}>Warehousing</li>
              </Link>
                <Link href='/services/custom-brokerage'> 
                <li onClick={() => setToggleLi(!toggleLiMob)}>Customs Brokerage</li>
              </Link>
                <Link href='/services/door-to-door'> 
                <li onClick={() => setToggleLi(!toggleLiMob)}>Door to Door Services</li>
              </Link>
                <Link href='/services/road-transport'> 
                <li onClick={() => setToggleLi(!toggleLiMob)}>Road Transport</li>
              </Link>
                <Link href='/services/project-forwarding'> 
                <li onClick={() => setToggleLi(!toggleLiMob)}>Project Forwarding</li>
              </Link>
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
