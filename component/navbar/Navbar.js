import logo from '../../assets/images/logo.png'
import styles from './navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>
    <div className={styles.navbar_container}>
        <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
        </div>
        <div className={styles.close} onClick={() => {setToggle(!toggle)}}> 
        <GiHamburgerMenu/>
        </div>
        <ul className={styles.ul} style={{left: toggle? '0' : '-100%', opacity: toggle? '1': '0'}} onClick={() => {setToggle(!toggle)}}>
        <div className={styles.header}>
          <img src={logo.src} className={styles.logo} alt="" />
          <AiOutlineClose/>
        </div>
            <li className={styles.li}>About</li>
            <li className={styles.li}>News</li>
            <li className={styles.li}>Services</li>
            <li className={styles.li}>Testimonials</li>
            <li className={styles.li}>FAQs</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar
