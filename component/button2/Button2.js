import React from 'react'
import styles from './button2.module.css'
import { BsArrowRight } from 'react-icons/bs';


const Button2 = () => {
  return (
    <div className={styles.learnmore}> 
            <p className={styles.lmtext}>Learn More</p>
            <div className={styles.learn_more_circle}>
            <BsArrowRight/>
            </div>
            </div>
  )
}

export default Button2
