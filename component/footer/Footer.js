import React from 'react'
import { BsFacebook,BsTwitter,BsLinkedin,BsYoutube } from 'react-icons/bs';
import logo from '../../assets/images/logo.png'
import styles from './footer.module.css'

import a from 'next/link';
const Footer = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.left}>
            <img src={logo.src} className={styles.logo} alt="" />
            <p className={styles.logo_desc}>© 2022 - Everfast Forwarders Pvt. Ltd.</p>
        </div>
        <div className={styles.right}>
            <div className={styles.part1}>
                <p className={styles.heading}>Jump to</p>
                <ul className={styles.ul}>
                    <li className={styles.li}>About</li>
                    <li className={styles.li}>News</li>
                    <li className={styles.li}>Testimonials</li>
                    <li className={styles.li}>Services</li>
                    <li className={styles.li}>FAQs</li>
                </ul>
            </div>
            <div className={styles.part2}>
                <p className={styles.heading}>Legal</p>
                <ul className={styles.ul}>
                    <li className={styles.li}>Privacy Policy</li>
                    <li className={styles.li}>Terms of Services</li>
                    <li className={styles.li}>Licenses</li>
                    <li className={styles.li}>Permits</li>
                </ul>
            </div>
            <div className={styles.part3}>
                <p className={styles.heading}>Social</p>
                <ul className={styles.ul}>
                <a href='https://www.facebook.com/EVERFASTINDIA/'> 
                    <li className={styles.li}><BsFacebook/> <p>Facebook</p></li>
                </a>
                <a href='https://twitter.com/EverfastF'> 
                    <li className={styles.li}><BsTwitter/> <p>Twitter</p></li>
                </a>
                <a href='https://www.linkedin.com/in/everfast-freight-aa4752119/?originalSubdomain=in'> 
                    <li className={styles.li}><BsLinkedin/> <p>Linkedin</p></li>
                </a>
                <a> 
                    <li className={styles.li}><BsYoutube/> <p>Youtube</p></li>
                </a>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
