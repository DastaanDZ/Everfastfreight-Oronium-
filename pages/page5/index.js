import React from 'react'
import data from '../../assets/data/Services'
import styles from './page5.module.css'
import { BsArrowRight } from 'react-icons/bs';

const index = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.title}>
            <p className={styles.heading}>Services</p>
            <p className={styles.desc}>Nibh massa ut sodales amet ac eleifend non tempor.</p>
            <div className={styles.btn}>
            <p>GET IN TOUCH</p>
            <BsArrowRight/>
            </div>
        </div>
        <div className={styles.info}>
        {data.map((items, index) => {
            return(
                <div key={index} className={styles.content}>
                <div className={styles.left}>
                    <img src={items.pic.src} className={styles.pic} alt="" />
                    <p className={styles.services_types}>{items.title}</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.services_info}>{items.info}</p>
                </div>
            </div>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default index
