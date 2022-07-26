import React from 'react'
import styles from './card.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const index = () => {

  // const [height,setHeight] = useState(null)

  // const ref1 = useRef(null)
  // const ref2 = useRef(null)
  // const ref3 = useRef(null)

  // useEffect(() => {
  //   setHeight(Math.max(ref1.current.offsetHeight, ref2.current.offsetHeight, ref3.current.offsetHeight));
  // },[])


  return (
    <>
    <div className={styles.container}> 
    <div className={styles.card1}>
        <div className={styles.bullet}><p>1</p></div>
        <div className={styles.title}><p>Approach</p></div>
        <div className={styles.description}><p>Interdum ultrices ante egestas gravida. Penatibus ornare tellus enim, non nulla. Commodo scelerisque nec vitae eget nulla nisi, magna et. Fusce.</p></div>
    </div>
    <div className={styles.card2}>
        <div className={styles.bullet}><p>2</p></div>
        <div className={styles.title}><p>Vision</p></div>
        <div className={styles.description}><p>Turpis lobortis platea sed suspendisse nunc volutpat gravida velit. In ipsum malesuada morbi venenatis vel risus feugiat. Massa ipsum tincidunt iaculis ultricies quis massa facilisis proin.</p></div>
    </div>
    <div className={styles.card3} >
        <div className={styles.bullet}><p>3</p></div>
        <div className={styles.title}><p>Core Strength</p></div>
        <div className={styles.description}><p>Turpis lobortis platea sed suspendisse nunc volutpat gravida velit. In ipsum malesuada morbi venenatis vel risus feugiat. Massa ipsum tincidunt iaculis ultricies quis massa facilisis proin.
        Turpis lobortis platea sed suspendisse nunc volutpat gravida velit. In ipsum malesuada morbi venenatis vel risus feugiat. Massa ipsum tincidunt iaculis ultricies quis massa facilisis proin.</p></div>
    </div>
    </div>
    </>
  )
}

export default index
