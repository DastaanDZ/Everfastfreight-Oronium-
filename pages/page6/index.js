import React from 'react'
import styles from './page6.module.css'
import logo from '../../assets/images/logo.png'
const index = () => {
  return (
    <>
    <div className={styles.container}> 
    <div className={styles.title}>
      <p>Testimonial</p>
    </div>
    <div className={styles.card_container}>
    <div className={styles.card1}>
        <div className={styles.bullet}><p>"</p></div>
        <div className={styles.description}><p>Et dolor enim, imperdiet purus. Praesent enim est mollis convallis donec nec. Fringilla proin diam platea quis cras sed nunc, enim. Pellentesque cras leo in ut. Etiam odio vitae tortor enim sit consectetur posuere. Quam elit lectus ultricies id.</p></div>
        <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
        </div>
    </div>
    <div className={styles.card2}>
        <div className={styles.bullet}><p>"</p></div>
        <div className={styles.description}><p>Turpis lobortis platea sed suspendisse nunc volutpat gravida velit. In ipsum malesuada morbi venenatis vel risus feugiat. Massa ipsum tincidunt iaculis ultricies quis massa facilisis proin.</p></div>
        <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
        </div>
    </div>
    <div className={styles.card3}>
        <div className={styles.bullet}><p>"</p></div>
        <div className={styles.description}><p>Turpis lobortis platea sed suspendisse nunc volutpat gravida velit. In ipsum malesuada morbi venenatis vel risus feugiat. Massa ipsum tincidunt iaculis ultricies quis massa facilisis proin.</p></div>
        <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default index
