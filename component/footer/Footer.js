import React from 'react'
import { BsFacebook,BsTwitter,BsLinkedin,BsYoutube } from 'react-icons/bs';
import logo from '../../assets/images/logo.png'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.left}>
            <img src={logo.src} className={styles.logo} alt="" />
            <p>© 2022 - Everfast Forwarders Pvt. Ltd.</p>
        </div>
        <div className={styles.right}>
            <div className={styles.part1}>
                <p>Jump to</p>
                <ul className={styles.ul}>
                    <li>About</li>
                    <li>News</li>
                    <li>Testimonials</li>
                    <li>Services</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className={styles.part2}>
                <p>Legal</p>
                <ul className={styles.ul}>
                    <li>Privacy Policy</li>
                    <li>Terms of Services</li>
                    <li>Licenses</li>
                    <li>Permits</li>
                </ul>
            </div>
            <div className={styles.part3}>
                <p>Social</p>
                <ul className={styles.ul}>
                    <li><BsFacebook/> <p>Facebook</p></li>
                    <li><BsTwitter/> <p>Twitter</p></li>
                    <li><BsLinkedin/> <p>Linkedin</p></li>
                    <li><BsYoutube/> <p>Youtube</p></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
