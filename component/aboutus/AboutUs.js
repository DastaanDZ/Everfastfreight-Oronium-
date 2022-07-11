import React from 'react'
import hero from '../../assets/images/hero.png'
import styles from './aboutus.module.css'

const index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.aboutus}><p>ABOUT US</p></div>
            <p className={styles.heading}>Ultricies amet risus in sit id risus nulla aliquet. </p>
            <p className={styles.desc}>Amet magna pharetra lectus vivamus mattis. Sed id amet ipsum natoque sem diam. Enim sed eget enim ut imperdiet urna sit in enim. Ullamcorper tincidunt vulputate et in. Pharetra vel, massa porttitor vitae viverra ultrices velit. Nulla faucibus nunc egestas id. Id pellentesque odio fermentum sit massa sit amet vulputate risus.</p>
        </div>
        <div className={styles.right}>
            <img src={hero.src} className={styles.hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default index
