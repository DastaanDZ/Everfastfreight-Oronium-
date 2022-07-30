import React from 'react'
import styles from './allnb.module.css'
import NewsCard from '../newscard/NewsCard'

const AllNB = ({news}) => {
    console.log('ALLNB', news)
  return (
    <div className={styles.news_page}>
        <p className={styles.title}>News</p>
        <div className={styles.news_container}> 
        {news.data.map((items, index) => {
            console.log('item',items)
            return(
                <div key={index} className={styles.news}>
            <NewsCard img={items.attributes.image.data.attributes.url}
            desc={items.attributes.title}
            id = {items.id}
            />
            </div>
            )
        })}
        </div>
        </div>
        )}

export default AllNB
