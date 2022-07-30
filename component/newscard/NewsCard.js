import React from 'react'
import styles from './newscard.module.css'

import { BsArrowRight } from 'react-icons/bs';

const NewsCard = ({img,desc}) => {
  return (
    <div className={styles.news}>
      <img src={img} className={styles.img} alt="" />
            <p className={styles.news_title}>ANNOUCEMENT</p>
            <p className={styles.news_desc}>{desc}</p>
            <div className={styles.learnmore}> 
            <p className={styles.lmtext}>Learn More</p>
            <div className={styles.learn_more_circle}>
            <BsArrowRight/>
            </div>
            </div>
    </div>
  )
}

export default NewsCard
