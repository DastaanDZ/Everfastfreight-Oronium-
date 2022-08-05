import React from 'react'
import styles from './newscard.module.css'

import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const NewsCard = ({img,desc,id,type}) => {
  console.log('id',id)
  return (
    <div className={styles.news}>
    
      <img src={img} className={styles.img} alt="" />
            <p className={styles.news_title}>ANNOUCEMENT</p>
            <p className={styles.news_desc}>{desc}</p>
            <div className={styles.learnmore}>
            <Link href={`/${type}/${id}`}>
            <a> 
            <p className={styles.lmtext}>Learn More</p>
            <div className={styles.learn_more_circle}>
            <BsArrowRight/>
            </div>
            </a> 
            </Link> 
            </div>
    </div>
  )
}

export default NewsCard
