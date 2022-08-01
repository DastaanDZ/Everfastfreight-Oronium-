import React from 'react'
import styles from './button1.module.css'
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const Button1 = ({text,route}) => {
  return (
    <div className={styles.learnmore}> 
            <p className={styles.mntext}>{text}</p>
            <Link href={route}> 
            <div className={styles.more_news_circle}>
            <BsArrowRight/>
            </div>
            </Link>
            </div>
  )
}

export default Button1
