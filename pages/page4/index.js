import React from 'react'
import styles from './page4.module.css'
import n1 from '../../assets/images/n1.jpg'
import { BsArrowRight } from 'react-icons/bs';

const index = () => {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.title}> 
        <p>News</p>
        <div className={styles.learnmore}> 
            <p className={styles.mntext}>More news</p>
            <div className={styles.more_news_circle}>
            <BsArrowRight/>
            </div>
            </div>
    </div>
        <div className={styles.news_container}>
        <div className={styles.news}> 
            <img src={n1.src} className={styles.img} alt="" />
            <p>ANNOUCEMENT</p>
            <p>Etiam senectus sed gravida enim nunc donec magnis. Quisque massa proin leo id eget. </p>
            <div className={styles.learnmore}> 
            <p className={styles.lmtext}>Learn More</p>
            <div className={styles.learn_more_circle}>
            <BsArrowRight/>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default index
