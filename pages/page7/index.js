import React from 'react'
import styles from './page7.module.css'
import award from '../../assets/images/award.png'

const index = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.left}>
            <p className={styles.heading}>Award</p>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fuga!</p>
        </div>
        <div className={styles.right}>
            <img className={styles.award} src={award.src} alt="" />
            <img className={styles.award} src={award.src} alt="" />
            <img className={styles.award} src={award.src} alt="" />
            <img className={styles.award} src={award.src} alt="" />
            <img className={styles.award} src={award.src} alt="" />
        </div>
    </div>
    </>
  )
}

export default index
