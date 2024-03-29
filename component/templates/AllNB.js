import React from 'react'
import styles from './allnb.module.css'
import NewsCard from '../newscard/NewsCard'

const AllNB = ({news,title,type}) => {

    console.log('ALLNB', news.data[0].attributes.title)

  return (
    <div className={styles.news_page}>
        <h2>{title}</h2>
        <div className={styles.news_container}> 
        {news.data.map((items, index) => {
            console.log('item',items)
            return(
                <div key={index} className={styles.news}>
            <NewsCard img={items.attributes.image.data.attributes.url}
            desc={items.attributes.title}
            id = {items.id}
            type = {type}
            />
            </div>
            )
        })}
        </div>
        </div>
        )}

export default AllNB
