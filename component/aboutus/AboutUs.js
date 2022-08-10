import React from 'react'
import hero from '../../assets/images/hero.png'
import styles from './aboutus.module.css'

const index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.aboutus}><p>ABOUT US</p></div>
            <h2>Company Overview</h2>
            <p className={styles.desc}>The genesis of Everfast in 1997 was the outcome of the need for a holistic, customer friendly and cost-effective service solution to the supply chain requirements which is one of the pillars of global economy.<br></br> This organization aimed to bring in the genuinity and experience of its founders, with measured approach to meet customer expectations and help ease out problems to ensure peace of mind. Everfast started its operations from Delhi the capital city of India.<br></br> The corner stone policy adhered is transparency as well as prompt responses and actions to customer requirements. These fundamental policies, focused approach with courage to face any challenges paid rich dividend as ‘Everfast ‘grew over the years and now stands tall after completing 25 year with 15 offices across prominent airports, sea ports and strategic commercial locations in India with over 150+ human resources working. </p>
        </div>
        <div className={styles.right}>
            <img src={hero.src} className={styles.hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default index
