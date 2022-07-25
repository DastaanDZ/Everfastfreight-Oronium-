import React from 'react'
import styles from './subheading.module.css'

const SubHeading = ({ title, icon }) => {
    return (
		<div className={styles.sub_heading_wrapper}>
			<img src={icon} alt='' className={styles.sub_heading_icon} />
			<h3 className={styles.sub_heading}>{title}</h3>
		</div>
	)
}

export default SubHeading
