import React from 'react'
import styles from './sponsor.module.css'

import Coca from '../../assets/images/Coca'
import Bosch from '../../assets/images/Bosch'
import Dell from '../../assets/images/Dell'
import Apollo from '../../assets/images/Apollo'
import Ebay from '../../assets/images/Ebay'
import Texas from '../../assets/images/Texas'

const Sponsor = () => {
  return (
    <>
    <div className={styles.sponsor_container}>
        <Coca/>
        <Bosch/>
        <Dell/>
        <Apollo/>
        <Ebay/>
        <Texas/>
    </div>
    </>
  )
}

export default Sponsor
