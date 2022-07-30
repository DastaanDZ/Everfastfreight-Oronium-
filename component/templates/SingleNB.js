import React from 'react'
import styles from './allnb.module.css'

const SingleNB = ({news}) => {
    console.log('singlebn',news)
  return (
    <div className="single">
        <img src={news.data.attributes.image.data.attributes.url} alt="" />
        <div className={styles.title}>
            <p className={styles.heading}>{news.data.attributes.title}</p>
            <p className={styles.sub_heading}>Sub Heading</p>
        </div>
        <p className={styles.desc}>{news.data.attributes.description}</p>
    </div>
  )
}

export default SingleNB
