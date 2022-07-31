import React from 'react'
import hero from '../../assets/images/hero.png'
import styles from './aboutus.module.css'

const index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.aboutus}><p>ABOUT US</p></div>
            <p className={styles.heading}>Company Overview</p>
            <p className={styles.desc}>Ever fast Freight Forwarders Pvt. Ltd., was founded in 1997 with motive to OFFER PEACE OF MIND, is an IATA recognized freight forwarder and are ISO 9001:2008 certified company by URS. We specialize in air, sea, export, and imports. We strongly believe that we are into communication business and transportation is part of it. Equipped with the array of services we are well prepared to accept any challenges evolved from current market trends and Endeavour to encourage your aspirations. We value time. The rules and regulations of international trade become more complex every day. It is vital that every exporter and importer sophisticated or novice, outsource these functions to experts who are experienced, informed and dedicated to the ultimate success of their business partnership.</p>
        </div>
        <div className={styles.right}>
            <img src={hero.src} className={styles.hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default index
