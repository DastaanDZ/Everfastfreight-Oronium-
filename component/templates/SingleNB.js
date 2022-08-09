import React from 'react'
import styles from './singlenb.module.css'
import ReactMarkdown from 'react-markdown'
import styles2 from './markdown-style.module.css';
// import remarkGfm from 'remark-gfm'

const SingleNB = ({news}) => {
    console.log('singlebn',news)
  return (
    <div className={styles.single}>
        <img src={news.data.attributes.image.data.attributes.url} className={styles.img} alt="" />
        <div className={styles.title}>
            <p className={styles.heading}>{news.data.attributes.title}</p>
        </div>
        <ReactMarkdown 
        className={styles2.reactMarkDown}
        children={news.data.attributes.description} />
        {/* <p className={styles.desc}>{news.data.attributes.description}</p> */}
    </div>
  )
}

export default SingleNB
