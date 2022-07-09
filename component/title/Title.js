import React from 'react'

const Title = ({title,}) => {
  return (
    <>
       <div className={styles.title}> 
        <p>News</p>
        <div className={styles.learnmore}> 
            <p className={styles.mntext}>More news</p>
            <div className={styles.more_news_circle}>
            <BsArrowRight/>
            </div>
            </div>
    </div>
    </>
  )
}

export default Title
