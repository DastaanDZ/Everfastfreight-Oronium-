import logo from '../../assets/images/logo.png'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={styles.navbar_container}>
        <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
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
