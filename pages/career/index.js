import React from 'react'
import styles from '../aboutus/aboutus.module.css'
import AboutImg from '../../assets/images/aboutus.jpg'
import Button1 from '../../component/button1/Button1'

const index = () => {
    return (
    <div className={styles.container}>
        <div className={styles.info}>
        <div className={styles.left}>
            <p className={styles.heading}>Career</p>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error repellendus nihil eveniet ut sit? Qui repellat, maxime atque alias dolores iste esse quam labore reprehenderit, officiis culpa dicta eos ullam!</p>
            <Button1 text='Explore' route='/'/>
        </div>
        <div className={styles.right}>
            <img src={AboutImg.src} className={styles.img} alt="" />
        </div>
      </div>
      </div>)}

export default index
