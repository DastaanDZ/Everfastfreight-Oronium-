import React from 'react'
import styles from './newscard.module.css'

import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const NewsCard = ({img,desc,id,type}) => {
  console.log('id',id)
  var i = 0
  var text = desc;
  var words = text.split(" ");
  var para = ''
  for (i = 0; i < 10; i++) {
    para += words[i] + " ";
  }
  para += "...";

  console.log(para)

  return (
    <div className={styles.news}>
    
      <img src={img} className={styles.img} alt="" />
            <p className={styles.news_title}>ANNOUCEMENT</p>
            <p className={styles.news_desc}>{para}</p>
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
