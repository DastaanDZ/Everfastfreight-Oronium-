import React from 'react'
import hero from '../../assets/images/hero.png'
import styles from './page2.module.css'

const index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.aboutus}>ABOUT US</div>
            <p>Ultricies amet risus in sit id risus nulla aliquet. </p>
            <p>Amet magna pharetra lectus vivamus mattis. Sed id amet ipsum natoque sem diam. Enim sed eget enim ut imperdiet urna sit in enim. Ullamcorper tincidunt vulputate et in. Pharetra vel, massa porttitor vitae viverra ultrices velit. Nulla faucibus nunc egestas id. Id pellentesque odio fermentum sit massa sit amet vulputate risus.</p>
        </div>
        <div className={styles.right}>
            <img src={hero.src} className={styles.hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default index
