import logo from '../../assets/images/logo.png'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={styles.navbar_container}>
        <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
            <div className={styles.logo_text}>
                <p className={styles.para}>Everfast</p>
                <p className={styles.para}>Freight Forwarders (P) Ltd.</p>
            </div>
        </div>
        <ul className={styles.ul}>
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
