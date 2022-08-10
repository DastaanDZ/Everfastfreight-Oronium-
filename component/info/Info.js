import React from 'react'
import styles from './info.module.css'

const Info = ({title,desc}) => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
        <p className={styles.desc}>{desc}</p>
    </div>
  )
}

export default Info
